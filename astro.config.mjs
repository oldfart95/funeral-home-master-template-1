import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com', // Update with your actual site URL
  output: 'server', // Enable server-side rendering and API routes
  adapter: vercel(),
  
  // Build optimizations
  build: {
    // Minify HTML, CSS, and JavaScript in production
    inlineStylesheets: 'auto', // Inline small CSS for better performance
    assets: '_assets', // Custom assets directory
  },
  
  // Image optimization settings
  image: {
    // Enable image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {},
    },
    // Supported image formats
    domains: [],
    remotePatterns: [],
  },
  
  // Vite configuration for additional optimizations
  vite: {
    build: {
      // Minify JavaScript and CSS
      minify: 'esbuild', // Fast minification using esbuild
      cssMinify: true, // Minify CSS
      // Note: rollupOptions.output is not set to avoid conflicts with Vercel adapter
      // The Vercel adapter handles output file naming automatically
    },
    // Optimize dependencies
    optimizeDeps: {
      include: [],
    },
  },
  
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

