# SVG Optimization Guide

## Overview

Large SVG files (especially favicons) can significantly impact page load times. This guide provides a step-by-step process to optimize SVG files by converting them to WebP format.

## Current Large SVG Files

Based on bundle analysis, the following SVG files need optimization:

- `public/favicon.svg` - **13.56 MB** ⚠️
- `public/favicon-veteran.svg` - **7.1 MB** ⚠️

**Target:** Reduce to ~50-100 KB each (99%+ reduction)

---

## Optimization Workflow

### Step 1: Open in Inkscape

1. **Download Inkscape** (if not installed)
   - Free, open-source vector graphics editor
   - Download from: https://inkscape.org/
   - Available for Windows, macOS, and Linux

2. **Open the SVG file**
   - Launch Inkscape
   - File → Open → Select `favicon.svg` or `favicon-veteran.svg`
   - Verify the design displays correctly

### Step 2: Export as PNG

1. **Set export dimensions**
   - For favicons, common sizes are:
     - **32x32** - Standard favicon
     - **64x64** - High-DPI favicon
     - **180x180** - Apple touch icon
     - **512x512** - Large icon (can be scaled down)

2. **Export PNG**
   - File → Export PNG Image
   - Set width/height (e.g., 512x512 for high quality)
   - Click "Export" button
   - Save as `favicon.png` (or `favicon-veteran.png`)

### Step 3: Convert to WebP

#### Option A: Online Tool (Easiest)

1. **Use Squoosh.app**
   - Visit: https://squoosh.app/
   - Drag and drop the PNG file
   - Select "WebP" format
   - Adjust quality slider (80-85% is usually optimal)
   - Download the optimized WebP file

2. **Alternative: CloudConvert**
   - Visit: https://cloudconvert.com/png-to-webp
   - Upload PNG, convert to WebP
   - Download result

#### Option B: Command Line (Advanced)

```bash
# Using cwebp (WebP encoder)
# Install: https://developers.google.com/speed/webp/download

cwebp -q 85 favicon.png -o favicon.webp

# Or using ImageMagick
convert favicon.png -quality 85 favicon.webp
```

### Step 4: Size Appropriately

Create multiple sizes for different use cases:

**Favicon Sizes:**
- `favicon-32x32.webp` - 32x32 pixels
- `favicon-64x64.webp` - 64x64 pixels  
- `favicon-180x180.webp` - 180x180 pixels (Apple touch icon)
- `favicon-512x512.webp` - 512x512 pixels (large icon)

**Process:**
1. Export from Inkscape at each size, OR
2. Use image resizing tool to create multiple sizes from one large PNG

---

## Implementation

### Update HTML References

After creating WebP versions, update references in `src/layouts/Layout.astro`:

```astro
<!-- Replace SVG references with WebP -->
<link rel="icon" type="image/webp" href="/favicon-32x32.webp" sizes="32x32" />
<link rel="icon" type="image/webp" href="/favicon-64x64.webp" sizes="64x64" />
<link rel="apple-touch-icon" href="/favicon-180x180.webp" />
```

### File Structure

```
public/
  ├── favicon-32x32.webp      (new - optimized)
  ├── favicon-64x64.webp      (new - optimized)
  ├── favicon-180x180.webp    (new - optimized)
  ├── favicon-512x512.webp    (new - optimized)
  ├── favicon.svg              (can be removed after conversion)
  ├── favicon-veteran-32x32.webp    (new - optimized)
  ├── favicon-veteran-64x64.webp    (new - optimized)
  ├── favicon-veteran-180x180.webp  (new - optimized)
  └── favicon-veteran.svg     (can be removed after conversion)
```

---

## Expected Results

### Before Optimization
- `favicon.svg`: **13.56 MB**
- `favicon-veteran.svg`: **7.1 MB**
- **Total:** ~20.66 MB

### After Optimization
- `favicon-32x32.webp`: ~2-5 KB
- `favicon-64x64.webp`: ~5-10 KB
- `favicon-180x180.webp`: ~15-30 KB
- `favicon-512x512.webp`: ~50-100 KB
- **Total:** ~72-145 KB (all sizes combined)

### Savings
- **File size reduction:** ~99.3% (from 20.66 MB to ~145 KB)
- **Page load improvement:** Significantly faster initial page load
- **Bandwidth savings:** Massive reduction for users

---

## Quality Settings

### WebP Quality Guidelines

- **Favicons (32x32, 64x64):** Quality 80-85%
  - Small size, quality less critical
  - Focus on file size

- **Icons (180x180, 512x512):** Quality 85-90%
  - Larger display size
  - Balance quality and file size

- **Logos:** Quality 90-95%
  - Brand assets need higher quality
  - Still much smaller than SVG

### Testing Quality

1. Export at different quality levels (75%, 80%, 85%, 90%)
2. Compare file sizes
3. Visually inspect at intended display size
4. Choose the lowest quality that looks acceptable

---

## Tools & Resources

### Vector Graphics Editors
- **Inkscape** (Free, Open Source) - https://inkscape.org/
- **Adobe Illustrator** (Paid)
- **Figma** (Free tier available)

### Image Optimization Tools
- **Squoosh** (Online) - https://squoosh.app/
- **CloudConvert** (Online) - https://cloudconvert.com/
- **ImageOptim** (Mac) - https://imageoptim.com/
- **TinyPNG** (Online) - https://tinypng.com/

### Command Line Tools
- **cwebp** (WebP encoder) - https://developers.google.com/speed/webp/download
- **ImageMagick** - https://imagemagick.org/
- **Sharp** (Node.js) - https://sharp.pixelplumbing.com/

---

## Verification

After optimization, run bundle analysis:

```bash
npm run analyze
```

**Expected output:**
- SVG files no longer appear in large files list
- Total bundle size significantly reduced
- No optimization recommendations for SVG files

---

## Best Practices

1. **Always start with vector source** (SVG, AI, etc.)
   - Better quality than raster-to-raster conversion

2. **Export at 2x intended size**
   - Better quality on high-DPI displays
   - Can be scaled down by browser

3. **Use multiple sizes**
   - Serve appropriate size for each use case
   - Reduces unnecessary data transfer

4. **Test on real devices**
   - Verify quality looks good on actual screens
   - Check different browsers

5. **Keep originals**
   - Don't delete SVG files until WebP versions are verified
   - Useful for future updates

---

## Troubleshooting

### Issue: WebP looks blurry
- **Solution:** Increase quality setting (try 90-95%)
- **Alternative:** Export PNG at higher resolution first

### Issue: File size still large
- **Solution:** Reduce quality setting (try 75-80%)
- **Check:** Ensure you're using WebP, not PNG
- **Verify:** Image dimensions match intended display size

### Issue: Colors look different
- **Solution:** Check color profile in Inkscape
- **Alternative:** Use sRGB color space for web

---

**Last Updated:** Based on bundle analysis recommendations
**Status:** Ready for implementation
