import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable server-side rendering and API routes
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: true, // Enable Tailwind base styles
    }),
  ],
});

