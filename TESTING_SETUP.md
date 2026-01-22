# Testing Setup Guide

This document explains how to use the accessibility and performance testing tools that have been set up for this project.

## Prerequisites

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the site:
   ```bash
   npm run build
   ```

3. Start the preview server (in a separate terminal):
   ```bash
   npm run preview
   ```

   The preview server runs on `http://localhost:4321` by default.

## Running Tests

### Accessibility Testing

Tests the site for accessibility issues using axe-core with Playwright.

```bash
npm run test:a11y
```

**What it does:**
- Tests all core pages for WCAG 2.1 AA compliance
- Checks for common accessibility violations
- Generates detailed reports in `test-results/accessibility/`

**Output:**
- `summary.json` - Machine-readable summary
- `report.txt` - Human-readable report
- `[page].json` - Individual page results

**Example output:**
```
🧪 Accessibility Testing
============================================================
Base URL: http://localhost:4321
Pages to test: 16
============================================================

🔍 Testing: http://localhost:4321/
  ✅ Passed (45 checks passed)

📊 Generating Summary Report...
```

### Performance Testing

Tests site performance using Lighthouse.

```bash
npm run test:performance
```

**What it does:**
- Runs Lighthouse audits on core pages
- Measures Performance, Accessibility, Best Practices, and SEO scores
- Identifies performance optimization opportunities
- Generates detailed reports in `test-results/performance/`

**Output:**
- `summary.json` - Machine-readable summary
- `report.txt` - Human-readable report
- `[page].json` - Individual page Lighthouse data
- `[page].html` - Interactive HTML reports (open in browser)

**Performance Thresholds:**
- Performance: 80
- Accessibility: 90
- Best Practices: 80
- SEO: 90

**Example output:**
```
⚡ Performance Testing (Lighthouse)
============================================================
Base URL: http://localhost:4321
Pages to test: 7
Thresholds: Performance 80, Accessibility 90, Best Practices 80, SEO 90
============================================================

🔍 Testing: http://localhost:4321/
  Performance: ✅ 92 (92)
  Accessibility: ✅ 95 (95)
  Best Practices: ✅ 88 (88)
  SEO: ✅ 100 (100)
```

### Running All Tests

Run both accessibility and performance tests:

```bash
npm run test:all
```

## Customizing Tests

### Testing Different Pages

Edit the `PAGES_TO_TEST` array in:
- `scripts/test-accessibility.js` - For accessibility tests
- `scripts/test-performance.js` - For performance tests

### Using a Different Server

Set the `BASE_URL` environment variable:

```bash
BASE_URL=https://your-site.com npm run test:a11y
```

### Adjusting Performance Thresholds

Edit the `THRESHOLDS` object in `scripts/test-performance.js`:

```javascript
const THRESHOLDS = {
  performance: 80,
  accessibility: 90,
  bestPractices: 80,
  seo: 90,
};
```

## Understanding Results

### Accessibility Test Results

- **Violations**: Issues that need to be fixed
- **Incomplete**: Checks that require manual review
- **Passes**: Checks that passed successfully

Common violations to look for:
- Missing alt text on images
- Insufficient color contrast
- Missing form labels
- Keyboard navigation issues
- Missing ARIA attributes

### Performance Test Results

**Core Web Vitals:**
- **FCP (First Contentful Paint)**: Time to first content (target: < 1.8s)
- **LCP (Largest Contentful Paint)**: Time to largest content (target: < 2.5s)
- **TBT (Total Blocking Time)**: Time page is blocked (target: < 200ms)
- **CLS (Cumulative Layout Shift)**: Visual stability (target: < 0.1)

**Opportunities:**
The report lists optimization opportunities sorted by potential time savings. Common ones include:
- Image optimization
- Unused CSS/JavaScript
- Render-blocking resources
- Large JavaScript bundles

## CI/CD Integration

These tests can be integrated into CI/CD pipelines. The scripts exit with:
- Exit code 0: All tests passed
- Exit code 1: Tests failed or thresholds not met

Example GitHub Actions workflow:

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run preview &
      - run: sleep 5
      - run: npm run test:all
```

## Troubleshooting

### "Could not connect to server"

Make sure the preview server is running:
```bash
npm run preview
```

Or set the `BASE_URL` environment variable to point to your server.

### Chrome/Chromium not found

Lighthouse requires Chrome/Chromium. On Linux, you may need to install it:
```bash
# Ubuntu/Debian
sudo apt-get install chromium-browser

# Or use the Chrome launcher's bundled Chromium
```

### Tests are slow

Performance tests can take 30-60 seconds per page. Consider:
- Testing fewer pages during development
- Running tests only on critical pages
- Running tests in parallel (requires script modification)

## Additional Resources

- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance Guide](https://web.dev/performance/)
