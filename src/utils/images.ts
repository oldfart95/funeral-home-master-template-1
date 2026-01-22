// Centralized image imports for build-time optimization
// All images are imported here and re-exported for use throughout the app

// Hero images
import heroImage from '@/assets/images/hero.webp';
import heroImage640 from '@/assets/images/hero-640.webp';

// Logo images
import affCareLogo from '@/assets/images/AffCareLogo.webp';
import catholicLogo from '@/assets/images/CatholicLogo.webp';
import spanishAffLogo from '@/assets/images/SpanishAffLogo.webp';
import spanishCathLogo from '@/assets/images/SpanishCathLogo.webp';
import veteranLogo from '@/assets/images/VeteranLogo.webp';

import type { ImageMetadata } from 'astro';

export const images = {
  hero: heroImage,
  hero640: heroImage640,
  logos: {
    affCare: affCareLogo,
    catholic: catholicLogo,
    spanishAff: spanishAffLogo,
    spanishCath: spanishCathLogo,
    veteran: veteranLogo,
  },
} as const;

/**
 * Get the appropriate logo image based on page type and language
 */
export function getLogoImage(isVeteran: boolean, isCatholic: boolean, isSpanish: boolean): ImageMetadata {
  if (isVeteran) {
    return images.logos.veteran;
  } else if (isCatholic) {
    return isSpanish ? images.logos.spanishCath : images.logos.catholic;
  } else {
    return isSpanish ? images.logos.spanishAff : images.logos.affCare;
  }
}
