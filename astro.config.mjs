import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Use 'static' for GitHub Pages, 'server' for SSR deployments
  output: process.env.ASTRO_OUTPUT === 'static' ? 'static' : 'server',
  integrations: [
    tailwind({
      applyBaseStyles: true, // Enable Tailwind base styles
    }),
  ],
});

