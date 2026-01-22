/**
 * Standardized Typography System
 * 
 * This file defines the typography scale used throughout the site
 * to ensure consistency across all pages.
 * 
 * Usage:
 * - Import the classes you need
 * - Apply them consistently across similar content types
 */

export const typography = {
  // Hero Section Typography
  hero: {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold',
    h2: 'text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold',
    body: 'text-sm sm:text-base md:text-lg lg:text-xl',
    attribution: 'text-xs sm:text-sm',
  },

  // Section Headings
  section: {
    h2: 'text-2xl md:text-4xl font-heading font-bold',
    h3: 'text-xl md:text-2xl font-heading font-bold',
    h3Sub: 'text-lg md:text-xl font-heading font-semibold',
  },

  // Card Typography
  card: {
    title: 'text-lg md:text-xl font-heading font-semibold',
    titleLarge: 'text-lg md:text-2xl font-heading font-bold',
    label: 'text-xs md:text-sm font-semibold',
    body: 'text-sm md:text-base',
    bodyLarge: 'text-base md:text-lg',
  },

  // Body Text
  body: {
    base: 'text-sm md:text-base',
    large: 'text-base md:text-lg',
    xl: 'text-base md:text-xl',
  },

  // Small Text
  small: {
    base: 'text-xs md:text-sm',
    tiny: 'text-xs',
  },

  // Form Typography
  form: {
    label: 'text-sm font-semibold',
    input: 'text-base',
    help: 'text-xs md:text-sm',
  },
} as const;

/**
 * Helper function to get typography classes
 */
export function getTypography(
  category: keyof typeof typography,
  variant: string
): string {
  const cat = typography[category];
  if (cat && variant in cat) {
    return (cat as any)[variant];
  }
  return '';
}
