#!/usr/bin/env node

/**
 * Bundle Size Analysis Script
 * 
 * Analyzes the build output to provide insights into bundle sizes,
 * asset sizes, and optimization opportunities.
 * 
 * Usage: npm run analyze
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Build output directories
const distDirs = [
  path.join(projectRoot, '.vercel', 'output', 'static'),
  path.join(projectRoot, 'dist'),
];

/**
 * Format bytes to human-readable string
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Get file size
 */
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  try {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      } else {
        arrayOfFiles.push(filePath);
      }
    });
  } catch (error) {
    // Directory doesn't exist or can't be read
  }

  return arrayOfFiles;
}

/**
 * Analyze bundle sizes
 */
function analyzeBundles() {
  console.log('\n📦 Bundle Size Analysis\n');
  console.log('=' .repeat(60));

  let totalSize = 0;
  const fileTypes = {
    js: { files: [], total: 0 },
    css: { files: [], total: 0 },
    images: { files: [], total: 0 },
    fonts: { files: [], total: 0 },
    html: { files: [], total: 0 },
    other: { files: [], total: 0 },
  };

  // Find dist directory
  let distDir = null;
  for (const dir of distDirs) {
    if (fs.existsSync(dir)) {
      distDir = dir;
      break;
    }
  }

  if (!distDir) {
    console.log('❌ Build output directory not found. Run "npm run build" first.');
    return;
  }

  console.log(`\n📁 Analyzing: ${distDir}\n`);

  // Get all files
  const allFiles = getAllFiles(distDir);

  // Categorize files
  allFiles.forEach((filePath) => {
    const size = getFileSize(filePath);
    if (size === 0) return;

    totalSize += size;
    const ext = path.extname(filePath).toLowerCase();
    const relativePath = path.relative(distDir, filePath);

    if (ext === '.js') {
      fileTypes.js.files.push({ path: relativePath, size });
      fileTypes.js.total += size;
    } else if (ext === '.css') {
      fileTypes.css.files.push({ path: relativePath, size });
      fileTypes.css.total += size;
    } else if (['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg'].includes(ext)) {
      fileTypes.images.files.push({ path: relativePath, size });
      fileTypes.images.total += size;
    } else if (['.woff', '.woff2', '.ttf', '.otf', '.eot'].includes(ext)) {
      fileTypes.fonts.files.push({ path: relativePath, size });
      fileTypes.fonts.total += size;
    } else if (ext === '.html') {
      fileTypes.html.files.push({ path: relativePath, size });
      fileTypes.html.total += size;
    } else {
      fileTypes.other.files.push({ path: relativePath, size });
      fileTypes.other.total += size;
    }
  });

  // Sort files by size (largest first)
  Object.keys(fileTypes).forEach((type) => {
    fileTypes[type].files.sort((a, b) => b.size - a.size);
  });

  // Print results
  console.log('📊 File Type Summary:\n');
  console.log(`JavaScript:  ${formatBytes(fileTypes.js.total).padEnd(12)} (${fileTypes.js.files.length} files)`);
  console.log(`CSS:         ${formatBytes(fileTypes.css.total).padEnd(12)} (${fileTypes.css.files.length} files)`);
  console.log(`Images:      ${formatBytes(fileTypes.images.total).padEnd(12)} (${fileTypes.images.files.length} files)`);
  console.log(`Fonts:       ${formatBytes(fileTypes.fonts.total).padEnd(12)} (${fileTypes.fonts.files.length} files)`);
  console.log(`HTML:        ${formatBytes(fileTypes.html.total).padEnd(12)} (${fileTypes.html.files.length} files)`);
  console.log(`Other:       ${formatBytes(fileTypes.other.total).padEnd(12)} (${fileTypes.other.files.length} files)`);
  console.log(`\n${'─'.repeat(60)}`);
  console.log(`Total:       ${formatBytes(totalSize).padEnd(12)} (${allFiles.length} files)`);

  // Largest files
  console.log('\n\n🔍 Largest Files by Type:\n');

  // JavaScript
  if (fileTypes.js.files.length > 0) {
    console.log('JavaScript:');
    fileTypes.js.files.slice(0, 5).forEach((file) => {
      console.log(`  ${formatBytes(file.size).padEnd(12)} ${file.path}`);
    });
    console.log();
  }

  // CSS
  if (fileTypes.css.files.length > 0) {
    console.log('CSS:');
    fileTypes.css.files.slice(0, 5).forEach((file) => {
      console.log(`  ${formatBytes(file.size).padEnd(12)} ${file.path}`);
    });
    console.log();
  }

  // Images
  if (fileTypes.images.files.length > 0) {
    console.log('Images:');
    fileTypes.images.files.slice(0, 5).forEach((file) => {
      console.log(`  ${formatBytes(file.size).padEnd(12)} ${file.path}`);
    });
    console.log();
  }

  // Recommendations
  console.log('\n💡 Optimization Recommendations:\n');

  const recommendations = [];

  // JavaScript bundle size
  if (fileTypes.js.total > 200 * 1024) { // > 200KB
    recommendations.push('Consider code splitting for JavaScript bundles');
  }
  if (fileTypes.js.files.some(f => f.size > 100 * 1024)) {
    recommendations.push('Large JavaScript files detected - consider lazy loading');
  }

  // CSS bundle size
  if (fileTypes.css.total > 100 * 1024) { // > 100KB
    recommendations.push('Consider CSS purging or splitting');
  }

  // Images
  if (fileTypes.images.files.some(f => f.size > 500 * 1024)) {
    recommendations.push('Large images detected - ensure WebP/AVIF format and proper compression');
  }

  // SVG files - check for large SVGs that should be converted
  const largeSvgs = fileTypes.images.files.filter(f => 
    f.path.toLowerCase().endsWith('.svg') && f.size > 100 * 1024
  );
  if (largeSvgs.length > 0) {
    recommendations.push(`Large SVG files detected (${largeSvgs.length} files > 100KB) - consider converting to WebP: Open in Inkscape, export as PNG, then convert to WebP format`);
    console.log('\n📋 Large SVG Files to Optimize:');
    largeSvgs.forEach((file) => {
      console.log(`  - ${file.path} (${formatBytes(file.size)})`);
    });
  }

  // Total size
  if (totalSize > 5 * 1024 * 1024) { // > 5MB
    recommendations.push('Total bundle size is large - review all assets for optimization opportunities');
  }

  if (recommendations.length === 0) {
    console.log('✅ Bundle sizes look good! No major optimizations needed.');
  } else {
    recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });
  }

  console.log('\n' + '='.repeat(60) + '\n');
}

// Run analysis
try {
  analyzeBundles();
} catch (error) {
  console.error('❌ Error analyzing bundles:', error.message);
  process.exit(1);
}
