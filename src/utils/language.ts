/**
 * Language detection and management utilities
 * Detects browser language preference and manages language switching
 */

export type Language = 'en' | 'es';

/**
 * Detect browser language preference
 * Returns 'es' if browser language is Spanish, otherwise 'en'
 */
export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en'; // Server-side default
  }

  try {
    // Check localStorage for manual override first
    const manualOverride = localStorage.getItem('languageOverride');
    if (manualOverride === 'en' || manualOverride === 'es') {
      return manualOverride;
    }

    // Check if user has previously set a preference
    const savedPreference = localStorage.getItem('preferredLanguage');
    if (savedPreference === 'en' || savedPreference === 'es') {
      return savedPreference;
    }

    // Detect from browser settings
    const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    // Check if any of the browser's preferred languages is Spanish
    if (langCode === 'es') {
      return 'es';
    }
    
    // Check navigator.languages array (more accurate)
    if (navigator.languages) {
      for (const lang of navigator.languages) {
        if (lang.toLowerCase().startsWith('es')) {
          return 'es';
        }
      }
    }

    return 'en';
  } catch (error) {
    // Fallback to English on any error
    return 'en';
  }
}

/**
 * Get the alternate language URL for the current page
 * 
 * Maps the current page path to its equivalent in the target language.
 * Uses a predefined route map for known routes, with fallback logic for
 * unknown routes by adding/removing the '-es' suffix.
 * 
 * @param currentPath - The current page path (e.g., '/catholic-cremation')
 * @param targetLang - The target language ('en' or 'es')
 * @returns The URL path for the target language version of the page
 * 
 * @example
 * ```typescript
 * getAlternateLanguageUrl('/catholic-cremation', 'es')
 * // Returns: '/catholic-cremation-es'
 * 
 * getAlternateLanguageUrl('/catholic-cremation-es', 'en')
 * // Returns: '/catholic-cremation'
 * ```
 */
export function getAlternateLanguageUrl(currentPath: string, targetLang: Language): string {
  const routeMap: Record<string, { en: string; es: string }> = {
    '/': { en: '/', es: '/es' },
    '/es': { en: '/', es: '/es' },
    '/catholic': { en: '/catholic', es: '/catholic-es' },
    '/catholic-es': { en: '/catholic', es: '/catholic-es' },
    '/veteran': { en: '/veteran', es: '/veteran-es' },
    '/veteran-es': { en: '/veteran', es: '/veteran-es' },
    '/cremation': { en: '/cremation', es: '/cremation-es' },
    '/cremation-es': { en: '/cremation', es: '/cremation-es' },
    '/burial': { en: '/burial', es: '/burial-es' },
    '/burial-es': { en: '/burial', es: '/burial-es' },
    '/catholic-cremation': { en: '/catholic-cremation', es: '/catholic-cremation-es' },
    '/catholic-cremation-es': { en: '/catholic-cremation', es: '/catholic-cremation-es' },
    '/catholic-burial': { en: '/catholic-burial', es: '/catholic-burial-es' },
    '/catholic-burial-es': { en: '/catholic-burial', es: '/catholic-burial-es' },
    '/veteran-cremation': { en: '/veteran-cremation', es: '/veteran-cremation-es' },
    '/veteran-cremation-es': { en: '/veteran-cremation', es: '/veteran-cremation-es' },
    '/veteran-burial': { en: '/veteran-burial', es: '/veteran-burial-es' },
    '/veteran-burial-es': { en: '/veteran-burial', es: '/veteran-burial-es' },
    '/pre-planning': { en: '/pre-planning', es: '/pre-planning' },
    '/immediate-need': { en: '/immediate-need', es: '/immediate-need' },
    '/traditional-services': { en: '/traditional-services', es: '/traditional-services' },
    '/accessibility': { en: '/accessibility', es: '/accessibility' },
    '/privacy-policy': { en: '/privacy-policy', es: '/privacy-policy' },
  };

  if (routeMap[currentPath]) {
    return routeMap[currentPath][targetLang];
  }

  // Fallback: try to convert by adding/removing -es suffix
  if (targetLang === 'es') {
    return currentPath.endsWith('-es') ? currentPath : `${currentPath}-es`;
  } else {
    return currentPath.endsWith('-es') ? currentPath.replace(/-es$/, '') : currentPath;
  }
}

/**
 * Save language preference to localStorage
 */
export function saveLanguagePreference(lang: Language): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('preferredLanguage', lang);
      // Remove override flag when user manually selects
      localStorage.removeItem('languageOverride');
    } catch (error) {
      // Silently fail if localStorage is not available
    }
  }
}

/**
 * Set language override (prevents auto-detection)
 */
export function setLanguageOverride(lang: Language): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('languageOverride', lang);
      localStorage.setItem('preferredLanguage', lang);
    } catch (error) {
      // Silently fail if localStorage is not available
    }
  }
}
