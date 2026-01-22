#!/usr/bin/env node

/**
 * Accessibility Testing Script
 * 
 * Tests the site for accessibility issues using axe-core with Playwright.
 * Generates reports in the test-results directory.
 * 
 * Usage: npm run test:a11y
 * 
 * Prerequisites:
 * - Run "npm run build" first
 * - Run "npm run preview" in another terminal (or set BASE_URL env var)
 */

import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Base URL for testing (defaults to preview server)
const BASE_URL = process.env.BASE_URL || 'http://localhost:4321';
const RESULTS_DIR = path.join(projectRoot, 'test-results', 'accessibility');

// Core pages to test
const PAGES_TO_TEST = [
  '/',
  '/cremation',
  '/burial',
  '/catholic',
  '/catholic-cremation',
  '/catholic-burial',
  '/veteran',
  '/veteran-cremation',
  '/veteran-burial',
  '/immediate-need',
  '/pre-planning',
  '/accessibility',
  '/privacy-policy',
  '/es',
  '/cremation-es',
  '/burial-es',
];

// Ensure results directory exists
if (!fs.existsSync(RESULTS_DIR)) {
  fs.mkdirSync(RESULTS_DIR, { recursive: true });
}

/**
 * Format violations for display
 */
function formatViolations(violations) {
  if (violations.length === 0) return '✅ No violations found';

  return violations.map((violation, index) => {
    const nodes = violation.nodes.map(node => {
      const target = node.target.join(' > ');
      return `    - ${target}${node.failureSummary ? `\n      ${node.failureSummary}` : ''}`;
    }).join('\n');

    return `${index + 1}. ${violation.id}: ${violation.description}
   Impact: ${violation.impact}
   Help: ${violation.helpUrl}
   Elements:
${nodes}`;
  }).join('\n\n');
}

/**
 * Test a single page for accessibility
 */
async function testPage(context, url) {
  const page = await context.newPage();
  const results = {
    url,
    timestamp: new Date().toISOString(),
    violations: [],
    incomplete: [],
    passes: 0,
    inapplicable: 0,
  };

  try {
    console.log(`\n🔍 Testing: ${url}`);
    
    // Navigate to page
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait for any dynamic content to load
    await page.waitForTimeout(1000);
    
    // Run axe-core analysis
    const axeBuilder = new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'])
      .exclude('#skip-to-content'); // Exclude skip links from testing
    
    const results_axe = await axeBuilder.analyze();
    
    results.violations = results_axe.violations;
    results.incomplete = results_axe.incomplete;
    results.passes = results_axe.passes.length;
    results.inapplicable = results_axe.inapplicable.length;
    
    // Display results
    if (results.violations.length === 0) {
      console.log(`  ✅ Passed (${results.passes} checks passed)`);
    } else {
      console.log(`  ❌ ${results.violations.length} violation(s) found`);
      results.violations.forEach(v => {
        console.log(`     - ${v.id}: ${v.description} (${v.impact})`);
      });
    }
    
    if (results.incomplete.length > 0) {
      console.log(`  ⚠️  ${results.incomplete.length} incomplete check(s) (manual review needed)`);
    }
    
    // Save detailed results to file
    const filename = url.replace(/[^a-z0-9]/gi, '_').replace(/^_/, '') || 'index';
    const reportPath = path.join(RESULTS_DIR, `${filename}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    
  } catch (error) {
    console.error(`  ❌ Error testing ${url}:`, error.message);
    results.error = error.message;
  } finally {
    await page.close();
  }
  
  return results;
}

/**
 * Generate summary report
 */
function generateSummaryReport(allResults) {
  const totalPages = allResults.length;
  const pagesWithViolations = allResults.filter(r => r.violations && r.violations.length > 0).length;
  const totalViolations = allResults.reduce((sum, r) => sum + (r.violations?.length || 0), 0);
  const totalIncomplete = allResults.reduce((sum, r) => sum + (r.incomplete?.length || 0), 0);
  const totalPasses = allResults.reduce((sum, r) => sum + (r.passes || 0), 0);
  
  // Group violations by type
  const violationTypes = {};
  allResults.forEach(result => {
    if (result.violations) {
      result.violations.forEach(v => {
        if (!violationTypes[v.id]) {
          violationTypes[v.id] = {
            id: v.id,
            description: v.description,
            impact: v.impact,
            count: 0,
            pages: [],
          };
        }
        violationTypes[v.id].count++;
        if (!violationTypes[v.id].pages.includes(result.url)) {
          violationTypes[v.id].pages.push(result.url);
        }
      });
    }
  });
  
  const summary = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    summary: {
      totalPages,
      pagesWithViolations,
      pagesPassed: totalPages - pagesWithViolations,
      totalViolations,
      totalIncomplete,
      totalPasses,
    },
    violationTypes: Object.values(violationTypes).sort((a, b) => b.count - a.count),
    pages: allResults.map(r => ({
      url: r.url,
      violations: r.violations?.length || 0,
      incomplete: r.incomplete?.length || 0,
      passes: r.passes || 0,
      error: r.error || null,
    })),
  };
  
  // Save summary
  const summaryPath = path.join(RESULTS_DIR, 'summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  
  // Generate human-readable report
  const reportPath = path.join(RESULTS_DIR, 'report.txt');
  let report = 'Accessibility Test Report\n';
  report += '='.repeat(60) + '\n\n';
  report += `Test Date: ${new Date().toLocaleString()}\n`;
  report += `Base URL: ${BASE_URL}\n\n`;
  report += 'Summary:\n';
  report += `  Total Pages Tested: ${totalPages}\n`;
  report += `  Pages Passed: ${totalPages - pagesWithViolations}\n`;
  report += `  Pages with Violations: ${pagesWithViolations}\n`;
  report += `  Total Violations: ${totalViolations}\n`;
  report += `  Total Incomplete Checks: ${totalIncomplete}\n`;
  report += `  Total Passed Checks: ${totalPasses}\n\n`;
  
  if (Object.keys(violationTypes).length > 0) {
    report += 'Violation Types:\n';
    report += '-'.repeat(60) + '\n';
    Object.values(violationTypes).forEach(vt => {
      report += `\n${vt.id}: ${vt.description}\n`;
      report += `  Impact: ${vt.impact}\n`;
      report += `  Occurrences: ${vt.count}\n`;
      report += `  Affected Pages: ${vt.pages.length}\n`;
    });
    report += '\n';
  }
  
  report += 'Page-by-Page Results:\n';
  report += '-'.repeat(60) + '\n';
  allResults.forEach(result => {
    report += `\n${result.url}\n`;
    if (result.error) {
      report += `  ❌ Error: ${result.error}\n`;
    } else if (result.violations && result.violations.length > 0) {
      report += `  ❌ ${result.violations.length} violation(s)\n`;
      report += formatViolations(result.violations).split('\n').map(l => `  ${l}`).join('\n');
    } else {
      report += `  ✅ Passed (${result.passes} checks passed)\n`;
    }
    if (result.incomplete && result.incomplete.length > 0) {
      report += `  ⚠️  ${result.incomplete.length} incomplete check(s)\n`;
    }
  });
  
  fs.writeFileSync(reportPath, report);
  
  return summary;
}

/**
 * Main test function
 */
async function runAccessibilityTests() {
  console.log('\n🧪 Accessibility Testing\n');
  console.log('='.repeat(60));
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Pages to test: ${PAGES_TO_TEST.length}`);
  console.log('='.repeat(60));
  
  // Check if server is running
  try {
    const response = await fetch(`${BASE_URL}/`);
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }
  } catch (error) {
    console.error('\n❌ Error: Could not connect to server.');
    console.error(`   Make sure the preview server is running: npm run preview`);
    console.error(`   Or set BASE_URL environment variable to your server URL.`);
    process.exit(1);
  }
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const allResults = [];
  
  try {
    for (const pagePath of PAGES_TO_TEST) {
      const url = `${BASE_URL}${pagePath}`;
      const result = await testPage(context, url);
      allResults.push(result);
    }
  } finally {
    await context.close();
    await browser.close();
  }
  
  // Generate summary
  console.log('\n\n📊 Generating Summary Report...\n');
  const summary = generateSummaryReport(allResults);
  
  // Display summary
  console.log('='.repeat(60));
  console.log('Test Summary');
  console.log('='.repeat(60));
  console.log(`Total Pages: ${summary.summary.totalPages}`);
  console.log(`Pages Passed: ${summary.summary.pagesPassed}`);
  console.log(`Pages with Violations: ${summary.summary.pagesWithViolations}`);
  console.log(`Total Violations: ${summary.summary.totalViolations}`);
  console.log(`Total Incomplete: ${summary.summary.totalIncomplete}`);
  console.log(`Total Passed Checks: ${summary.summary.totalPasses}`);
  
  if (summary.violationTypes.length > 0) {
    console.log('\nTop Violation Types:');
    summary.violationTypes.slice(0, 5).forEach(vt => {
      console.log(`  - ${vt.id}: ${vt.description} (${vt.count} occurrences)`);
    });
  }
  
  console.log(`\n📄 Detailed reports saved to: ${RESULTS_DIR}`);
  console.log(`   - summary.json: Machine-readable summary`);
  console.log(`   - report.txt: Human-readable report`);
  console.log(`   - [page].json: Individual page results`);
  
  // Exit with error code if violations found
  if (summary.summary.totalViolations > 0) {
    console.log('\n⚠️  Accessibility violations found. Please review the reports.');
    process.exit(1);
  } else {
    console.log('\n✅ All accessibility tests passed!');
    process.exit(0);
  }
}

// Run tests
runAccessibilityTests().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
