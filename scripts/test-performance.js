#!/usr/bin/env node

/**
 * Performance Testing Script
 * 
 * Tests the site performance using Lighthouse.
 * Generates reports in the test-results directory.
 * 
 * Usage: npm run test:performance
 * 
 * Prerequisites:
 * - Run "npm run build" first
 * - Run "npm run preview" in another terminal (or set BASE_URL env var)
 */

import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Base URL for testing (defaults to preview server)
const BASE_URL = process.env.BASE_URL || 'http://localhost:4321';
const RESULTS_DIR = path.join(projectRoot, 'test-results', 'performance');

// Core pages to test (fewer pages for performance testing as it's slower)
const PAGES_TO_TEST = [
  '/',
  '/cremation',
  '/burial',
  '/catholic',
  '/veteran',
  '/immediate-need',
  '/pre-planning',
];

// Performance thresholds (0-100)
const THRESHOLDS = {
  performance: 80,
  accessibility: 90,
  bestPractices: 80,
  seo: 90,
};

// Ensure results directory exists
if (!fs.existsSync(RESULTS_DIR)) {
  fs.mkdirSync(RESULTS_DIR, { recursive: true });
}

/**
 * Format score with color
 */
function formatScore(score) {
  const percentage = Math.round(score * 100);
  if (percentage >= 90) return `✅ ${percentage}`;
  if (percentage >= 50) return `⚠️  ${percentage}`;
  return `❌ ${percentage}`;
}

/**
 * Test a single page with Lighthouse
 */
async function testPage(url, chrome) {
  console.log(`\n🔍 Testing: ${url}`);
  
  try {
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
    };
    
    const runnerResult = await lighthouse(url, options);
    
    const lhr = runnerResult.lhr;
    const scores = {
      performance: lhr.categories.performance.score * 100,
      accessibility: lhr.categories.accessibility.score * 100,
      bestPractices: lhr.categories['best-practices'].score * 100,
      seo: lhr.categories.seo.score * 100,
    };
    
    // Display scores
    console.log(`  Performance: ${formatScore(lhr.categories.performance.score)}`);
    console.log(`  Accessibility: ${formatScore(lhr.categories.accessibility.score)}`);
    console.log(`  Best Practices: ${formatScore(lhr.categories['best-practices'].score)}`);
    console.log(`  SEO: ${formatScore(lhr.categories.seo.score)}`);
    
    // Save full report
    const filename = url.replace(/[^a-z0-9]/gi, '_').replace(/^_/, '') || 'index';
    const reportPath = path.join(RESULTS_DIR, `${filename}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(lhr, null, 2));
    
    // Save HTML report
    const htmlReportPath = path.join(RESULTS_DIR, `${filename}.html`);
    fs.writeFileSync(htmlReportPath, runnerResult.report);
    
    return {
      url,
      timestamp: new Date().toISOString(),
      scores,
      metrics: {
        firstContentfulPaint: lhr.audits['first-contentful-paint'].numericValue,
        largestContentfulPaint: lhr.audits['largest-contentful-paint'].numericValue,
        totalBlockingTime: lhr.audits['total-blocking-time'].numericValue,
        cumulativeLayoutShift: lhr.audits['cumulative-layout-shift'].numericValue,
        speedIndex: lhr.audits['speed-index'].numericValue,
      },
      opportunities: lhr.audits
        ? Object.values(lhr.audits)
            .filter(audit => audit.details?.type === 'opportunity' && audit.numericValue)
            .map(audit => ({
              id: audit.id,
              title: audit.title,
              description: audit.description,
              savings: audit.numericValue,
              score: audit.score,
            }))
            .sort((a, b) => b.savings - a.savings)
            .slice(0, 10)
        : [],
    };
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    return {
      url,
      timestamp: new Date().toISOString(),
      error: error.message,
    };
  }
}

/**
 * Generate summary report
 */
function generateSummaryReport(allResults) {
  const totalPages = allResults.length;
  const successfulPages = allResults.filter(r => !r.error).length;
  
  // Calculate averages
  const avgScores = {
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
  };
  
  const successfulResults = allResults.filter(r => !r.error);
  if (successfulResults.length > 0) {
    avgScores.performance = successfulResults.reduce((sum, r) => sum + (r.scores?.performance || 0), 0) / successfulResults.length;
    avgScores.accessibility = successfulResults.reduce((sum, r) => sum + (r.scores?.accessibility || 0), 0) / successfulResults.length;
    avgScores.bestPractices = successfulResults.reduce((sum, r) => sum + (r.scores?.bestPractices || 0), 0) / successfulResults.length;
    avgScores.seo = successfulResults.reduce((sum, r) => sum + (r.scores?.seo || 0), 0) / successfulResults.length;
  }
  
  // Check thresholds
  const thresholdFailures = {
    performance: allResults.filter(r => r.scores && r.scores.performance < THRESHOLDS.performance),
    accessibility: allResults.filter(r => r.scores && r.scores.accessibility < THRESHOLDS.accessibility),
    bestPractices: allResults.filter(r => r.scores && r.scores.bestPractices < THRESHOLDS.bestPractices),
    seo: allResults.filter(r => r.scores && r.scores.seo < THRESHOLDS.seo),
  };
  
  // Collect all opportunities
  const allOpportunities = {};
  successfulResults.forEach(result => {
    if (result.opportunities) {
      result.opportunities.forEach(opp => {
        if (!allOpportunities[opp.id]) {
          allOpportunities[opp.id] = {
            id: opp.id,
            title: opp.title,
            description: opp.description,
            totalSavings: 0,
            occurrences: 0,
            pages: [],
          };
        }
        allOpportunities[opp.id].totalSavings += opp.savings;
        allOpportunities[opp.id].occurrences++;
        if (!allOpportunities[opp.id].pages.includes(result.url)) {
          allOpportunities[opp.id].pages.push(result.url);
        }
      });
    }
  });
  
  const topOpportunities = Object.values(allOpportunities)
    .sort((a, b) => b.totalSavings - a.totalSavings)
    .slice(0, 10);
  
  const summary = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    thresholds: THRESHOLDS,
    summary: {
      totalPages,
      successfulPages,
      failedPages: totalPages - successfulPages,
      averageScores: avgScores,
      thresholdFailures: {
        performance: thresholdFailures.performance.length,
        accessibility: thresholdFailures.accessibility.length,
        bestPractices: thresholdFailures.bestPractices.length,
        seo: thresholdFailures.seo.length,
      },
    },
    topOpportunities,
    pages: allResults.map(r => ({
      url: r.url,
      scores: r.scores || null,
      metrics: r.metrics || null,
      error: r.error || null,
      passedThresholds: r.scores ? {
        performance: r.scores.performance >= THRESHOLDS.performance,
        accessibility: r.scores.accessibility >= THRESHOLDS.accessibility,
        bestPractices: r.scores.bestPractices >= THRESHOLDS.bestPractices,
        seo: r.scores.seo >= THRESHOLDS.seo,
      } : null,
    })),
  };
  
  // Save summary
  const summaryPath = path.join(RESULTS_DIR, 'summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  
  // Generate human-readable report
  const reportPath = path.join(RESULTS_DIR, 'report.txt');
  let report = 'Performance Test Report (Lighthouse)\n';
  report += '='.repeat(60) + '\n\n';
  report += `Test Date: ${new Date().toLocaleString()}\n`;
  report += `Base URL: ${BASE_URL}\n\n`;
  report += 'Summary:\n';
  report += `  Total Pages Tested: ${totalPages}\n`;
  report += `  Successful Tests: ${successfulPages}\n`;
  report += `  Failed Tests: ${totalPages - successfulPages}\n\n`;
  report += 'Average Scores:\n';
  report += `  Performance: ${Math.round(avgScores.performance)} (threshold: ${THRESHOLDS.performance})\n`;
  report += `  Accessibility: ${Math.round(avgScores.accessibility)} (threshold: ${THRESHOLDS.accessibility})\n`;
  report += `  Best Practices: ${Math.round(avgScores.bestPractices)} (threshold: ${THRESHOLDS.bestPractices})\n`;
  report += `  SEO: ${Math.round(avgScores.seo)} (threshold: ${THRESHOLDS.seo})\n\n`;
  
  if (Object.values(summary.summary.thresholdFailures).some(v => v > 0)) {
    report += 'Threshold Failures:\n';
    if (thresholdFailures.performance.length > 0) {
      report += `  Performance: ${thresholdFailures.performance.length} page(s) below threshold\n`;
    }
    if (thresholdFailures.accessibility.length > 0) {
      report += `  Accessibility: ${thresholdFailures.accessibility.length} page(s) below threshold\n`;
    }
    if (thresholdFailures.bestPractices.length > 0) {
      report += `  Best Practices: ${thresholdFailures.bestPractices.length} page(s) below threshold\n`;
    }
    if (thresholdFailures.seo.length > 0) {
      report += `  SEO: ${thresholdFailures.seo.length} page(s) below threshold\n`;
    }
    report += '\n';
  }
  
  if (topOpportunities.length > 0) {
    report += 'Top Performance Opportunities:\n';
    report += '-'.repeat(60) + '\n';
    topOpportunities.forEach((opp, index) => {
      report += `\n${index + 1}. ${opp.title}\n`;
      report += `   Potential Savings: ${Math.round(opp.totalSavings)}ms\n`;
      report += `   Affected Pages: ${opp.pages.length}\n`;
      report += `   Description: ${opp.description}\n`;
    });
    report += '\n';
  }
  
  report += 'Page-by-Page Results:\n';
  report += '-'.repeat(60) + '\n';
  allResults.forEach(result => {
    report += `\n${result.url}\n`;
    if (result.error) {
      report += `  ❌ Error: ${result.error}\n`;
    } else {
      report += `  Performance: ${formatScore(result.scores.performance / 100)} (${Math.round(result.scores.performance)})\n`;
      report += `  Accessibility: ${formatScore(result.scores.accessibility / 100)} (${Math.round(result.scores.accessibility)})\n`;
      report += `  Best Practices: ${formatScore(result.scores.bestPractices / 100)} (${Math.round(result.scores.bestPractices)})\n`;
      report += `  SEO: ${formatScore(result.scores.seo / 100)} (${Math.round(result.scores.seo)})\n`;
      if (result.metrics) {
        report += `  FCP: ${Math.round(result.metrics.firstContentfulPaint)}ms\n`;
        report += `  LCP: ${Math.round(result.metrics.largestContentfulPaint)}ms\n`;
        report += `  TBT: ${Math.round(result.metrics.totalBlockingTime)}ms\n`;
        report += `  CLS: ${result.metrics.cumulativeLayoutShift.toFixed(3)}\n`;
      }
    }
  });
  
  fs.writeFileSync(reportPath, report);
  
  return summary;
}

/**
 * Main test function
 */
async function runPerformanceTests() {
  console.log('\n⚡ Performance Testing (Lighthouse)\n');
  console.log('='.repeat(60));
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Pages to test: ${PAGES_TO_TEST.length}`);
  console.log(`Thresholds: Performance ${THRESHOLDS.performance}, Accessibility ${THRESHOLDS.accessibility}, Best Practices ${THRESHOLDS.bestPractices}, SEO ${THRESHOLDS.seo}`);
  console.log('='.repeat(60));
  
  // Launch Chrome
  console.log('\n🚀 Launching Chrome...');
  const chrome = await launch({ chromeFlags: ['--headless'] });
  
  const allResults = [];
  
  try {
    for (const pagePath of PAGES_TO_TEST) {
      const url = `${BASE_URL}${pagePath}`;
      const result = await testPage(url, chrome);
      allResults.push(result);
    }
  } finally {
    try {
      await chrome.kill();
    } catch (error) {
      // Ignore cleanup errors (common on Windows with temp file permissions)
      if (error.code !== 'EPERM') {
        console.warn('Warning: Error cleaning up Chrome:', error.message);
      }
    }
  }
  
  // Generate summary
  console.log('\n\n📊 Generating Summary Report...\n');
  const summary = generateSummaryReport(allResults);
  
  // Display summary
  console.log('='.repeat(60));
  console.log('Test Summary');
  console.log('='.repeat(60));
  console.log(`Total Pages: ${summary.summary.totalPages}`);
  console.log(`Successful Tests: ${summary.summary.successfulPages}`);
  console.log(`\nAverage Scores:`);
  console.log(`  Performance: ${Math.round(summary.summary.averageScores.performance)} (threshold: ${THRESHOLDS.performance})`);
  console.log(`  Accessibility: ${Math.round(summary.summary.averageScores.accessibility)} (threshold: ${THRESHOLDS.accessibility})`);
  console.log(`  Best Practices: ${Math.round(summary.summary.averageScores.bestPractices)} (threshold: ${THRESHOLDS.bestPractices})`);
  console.log(`  SEO: ${Math.round(summary.summary.averageScores.seo)} (threshold: ${THRESHOLDS.seo})`);
  
  if (Object.values(summary.summary.thresholdFailures).some(v => v > 0)) {
    console.log(`\n⚠️  Threshold Failures:`);
    if (summary.summary.thresholdFailures.performance > 0) {
      console.log(`  Performance: ${summary.summary.thresholdFailures.performance} page(s)`);
    }
    if (summary.summary.thresholdFailures.accessibility > 0) {
      console.log(`  Accessibility: ${summary.summary.thresholdFailures.accessibility} page(s)`);
    }
    if (summary.summary.thresholdFailures.bestPractices > 0) {
      console.log(`  Best Practices: ${summary.summary.thresholdFailures.bestPractices} page(s)`);
    }
    if (summary.summary.thresholdFailures.seo > 0) {
      console.log(`  SEO: ${summary.summary.thresholdFailures.seo} page(s)`);
    }
  }
  
  if (summary.topOpportunities.length > 0) {
    console.log(`\n💡 Top Performance Opportunities:`);
    summary.topOpportunities.slice(0, 5).forEach(opp => {
      console.log(`  - ${opp.title}: ${Math.round(opp.totalSavings)}ms potential savings`);
    });
  }
  
  console.log(`\n📄 Detailed reports saved to: ${RESULTS_DIR}`);
  console.log(`   - summary.json: Machine-readable summary`);
  console.log(`   - report.txt: Human-readable report`);
  console.log(`   - [page].json: Individual page Lighthouse data`);
  console.log(`   - [page].html: Individual page HTML reports (open in browser)`);
  
  // Exit with error code if thresholds not met
  const hasFailures = Object.values(summary.summary.thresholdFailures).some(v => v > 0);
  if (hasFailures) {
    console.log('\n⚠️  Some pages did not meet performance thresholds. Please review the reports.');
    process.exit(1);
  } else {
    console.log('\n✅ All performance tests passed thresholds!');
    process.exit(0);
  }
}

// Run tests
runPerformanceTests().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
