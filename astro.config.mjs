import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com', // Update with your actual site URL
  output: 'server', // Enable server-side rendering and API routes
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: true, // Enable Tailwind base styles
    }),
    sitemap({
      // Customize sitemap generation
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Exclude API routes and 404 page
      filter: (page) => {
        return !page.includes('/api/') && !page.includes('/404');
      },
    }),
  ],
});

