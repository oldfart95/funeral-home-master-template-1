# Hero Image Optimization Guide

## Overview
All hero images have been updated with responsive `srcset` attributes to serve appropriately sized images based on device viewport. This reduces bandwidth usage and improves page load times, especially on mobile devices.

## Required Image Files

The hero image optimization uses a simple two-image setup:

1. **hero-640.webp** - 640px width (for mobile devices)
   - ✅ Already created and optimized
   - Used for viewports ≤ 640px

2. **hero.webp** - 970px width (for tablets and desktop)
   - Existing file (970px width)
   - Used for all viewports > 640px (tablets, desktop, large screens)

## Image Setup Status

✅ **Complete!** Both required images are in place:
- `hero-640.webp` - Mobile optimized version (already created)
- `hero.webp` - Desktop version (970px width, existing file)

No additional image generation needed.

## Implementation Details

### Responsive Image Attributes

All hero images now include:
- `srcset`: Lists all available image sizes
- `sizes`: Tells browser which size to use at different viewport widths
- `fetchpriority="high"`: Prioritizes hero image loading for better LCP
- `loading="eager"`: Loads immediately (above the fold)

### Browser Behavior

- **Mobile (≤ 640px)**: Downloads `hero-640.webp` (optimized mobile version)
- **Tablet & Desktop (> 640px)**: Downloads `hero.webp` (970px width)

### Performance Impact

**Before optimization:**
- All devices download the full 970px hero image
- Mobile users waste bandwidth on unnecessarily large image

**After optimization:**
- Mobile users download the optimized 640px version (smaller file size)
- Tablet and desktop users get the full 970px version
- Faster page loads on mobile devices, especially on slower connections

## Testing

To verify the responsive images are working:

1. Test on different devices/viewport sizes
2. Use browser DevTools Network tab to verify:
   - Mobile (≤640px): Should load `hero-640.webp`
   - Desktop (>640px): Should load `hero.webp`
3. Check that images look good at all sizes
4. Verify the correct image is being downloaded for each viewport size

## Notes

- The `src` attribute remains as fallback for older browsers
- Images maintain aspect ratio (height auto-calculated)
- All images use WebP format for best compression
- Preload hint in Layout.astro prioritizes hero image loading
