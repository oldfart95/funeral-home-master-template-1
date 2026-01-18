# Sitemap Configuration

## Overview
The sitemap has been configured using `@astrojs/sitemap` integration. The sitemap will be automatically generated at build time and will be available at `/sitemap.xml` (or `/sitemap-index.xml` if there are many pages).

## Configuration

### Current Setup
- **Package**: `@astrojs/sitemap` (installed)
- **Location**: `astro.config.mjs`
- **Settings**:
  - `changefreq`: 'weekly'
  - `priority`: 0.7
  - Excludes: `/api/*` routes and `/404` page

### Site URL Configuration
**Important**: Update the site URL in `astro.config.mjs` (line 8):

```javascript
site: process.env.SITE_URL || 'https://example.com', // Update with your actual site URL
```

You can either:
1. Set the `SITE_URL` environment variable in your deployment platform (Vercel, etc.)
2. Replace `'https://example.com'` with your actual domain

### Pages Included in Sitemap
The sitemap will automatically include all pages in `src/pages/` except:
- API routes (`/api/*`)
- 404 page (`/404`)

**Included pages** (19 pages):
- `/` (index)
- `/es`
- `/catholic`
- `/catholic-es`
- `/veteran`
- `/veteran-es`
- `/cremation`
- `/cremation-es`
- `/burial`
- `/burial-es`
- `/catholic-cremation`
- `/catholic-cremation-es`
- `/catholic-burial`
- `/catholic-burial-es`
- `/veteran-cremation`
- `/veteran-cremation-es`
- `/veteran-burial`
- `/veteran-burial-es`

## Testing

After building the site, the sitemap will be available at:
- `https://yourdomain.com/sitemap.xml`

To test locally:
1. Run `npm run build`
2. Check the `.vercel/output/static/` directory for `sitemap.xml`
3. Or run `npm run preview` and visit `http://localhost:4321/sitemap.xml`

## Customization

To customize the sitemap further, edit `astro.config.mjs`:

```javascript
sitemap({
  changefreq: 'weekly',      // How often the page changes
  priority: 0.7,              // Priority (0.0 to 1.0)
  lastmod: new Date(),       // Last modification date
  filter: (page) => {        // Custom filter function
    return !page.includes('/api/') && !page.includes('/404');
  },
})
```

## Next Steps

1. **Update Site URL**: Replace `'https://example.com'` with your actual domain
2. **Build and Test**: Run `npm run build` and verify `sitemap.xml` is generated
3. **Submit to Search Engines**: 
   - Google Search Console: Submit `https://yourdomain.com/sitemap.xml`
   - Bing Webmaster Tools: Submit the sitemap URL
