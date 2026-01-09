/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Semantic color layer for "Comforting Minimalist" aesthetic
        primary: {
          DEFAULT: '#1a1a1a',      // Deep Charcoal - Stability
          dark: '#0f0f0f',
          light: '#2d2d2d',
        },
        secondary: {
          DEFAULT: '#f9f7f2',      // Soft Cream/Off-White - Backgrounds
          dark: '#e8e6e0',
        },
        accent: {
          DEFAULT: '#b08d57',       // Muted Gold - Highlights
          dark: '#8f6f44',
          sage: '#5a7d7c',          // Alternative Sage option
        },
        background: '#f9f7f2',
        text: {
          DEFAULT: '#2d2d2d',       // Charcoal - Primary text
          light: '#666666',
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'Lora', 'serif'],  // Serif for headings - dignity
        body: ['Inter', 'system-ui', 'sans-serif'],   // Sans-serif for body - readability
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Inter, system-ui, sans-serif',
            h1: {
              fontFamily: 'Merriweather, Lora, serif',
            },
            h2: {
              fontFamily: 'Merriweather, Lora, serif',
            },
            h3: {
              fontFamily: 'Merriweather, Lora, serif',
            },
            h4: {
              fontFamily: 'Merriweather, Lora, serif',
            },
          },
        },
      },
    },
  },
  plugins: [],
};

