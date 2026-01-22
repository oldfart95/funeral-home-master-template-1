/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Semantic color layer for "Comforting Minimalist" aesthetic
        primary: {
          DEFAULT: '#1a3b34',      // Forest Green / Deep Charcoal - Stability
          dark: '#0f2520',
          light: '#2d5a4f',
        },
        secondary: {
          DEFAULT: '#f9f7f2',      // Soft Cream/Off-White - Backgrounds
          dark: '#e8e6e0',
        },
        accent: {
          DEFAULT: '#8b6f3f',       // Muted Gold - Highlights (darkened for WCAG AA contrast)
          dark: '#6d5632',
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
      lineHeight: {
        'hero': '1.2',
      },
      letterSpacing: {
        'hero': '-0.02em',
      },
    },
  },
  plugins: [],
};

