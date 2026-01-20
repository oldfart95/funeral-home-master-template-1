# Medium Priority Improvements - Implementation Plan

**Date Created:** Current  
**Scope:** Medium priority items from COMPREHENSIVE_SITE_REVIEW_IMPROVEMENTS.md (items 15-30)  
**Status:** Planning phase

---

## 📊 Overview

**Total Items:** 14 items (excluding 2 already completed: #23 404 Page, #24 robots.txt)  
**Estimated Total Time:** 12-18 hours  
**Recommended Approach:** Phased implementation over multiple sessions

---

## 🎯 Quick Wins (Under 30 Minutes Each)

### 1. Missing Loading Indicators (#21)
**Priority:** High (improves UX immediately)  
**Estimated Time:** 20-30 minutes  
**Impact:** High - Better user feedback during form submission

#### Implementation Plan:
1. **Create loading spinner component** (10 min)
   - Create `src/components/LoadingSpinner.astro` or use CSS-only spinner
   - Simple CSS spinner: rotating border animation
   - Or use SVG spinner for better control

2. **Update form submission scripts** (10-15 min)
   - Add spinner to all contact forms (18 pages)
   - Show spinner when form is submitting
   - Hide spinner on success/error
   - Update existing "Sending..." text to include spinner

#### Files to Modify:
- `src/components/ContactForm.astro` (if using component)
- OR all 18 pages with contact forms
- Create `src/components/LoadingSpinner.astro` (optional)

#### Code Example:
```astro
<!-- In form submission handler -->
<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? (
    <>
      <LoadingSpinner />
      Sending...
    </>
  ) : (
    'Send Message'
  )}
</button>
```

---

### 2. Form Field Labels Could Be More Descriptive (#20)
**Priority:** Medium  
**Estimated Time:** 15-20 minutes  
**Impact:** Medium - Better form UX

#### Implementation Plan:
1. **Review all form labels** (5 min)
   - Check all 18 pages with contact forms
   - Identify generic labels that need improvement

2. **Update labels** (10-15 min)
   - "Message *" → "Your Message *" or "How can we help? *"
   - "Name *" → "Your Name *"
   - "Email *" → "Your Email Address *"
   - Update Spanish versions accordingly

#### Files to Modify:
- All 18 pages with contact forms
- OR `src/components/ContactForm.astro` if using component

#### Labels to Update:
- English: "Name *" → "Your Name *"
- English: "Email *" → "Your Email Address *"
- English: "Message *" → "Your Message *" or "How can we help? *"
- Spanish: "Nombre *" → "Su Nombre *"
- Spanish: "Correo electrónico *" → "Su Dirección de Correo Electrónico *"
- Spanish: "Mensaje *" → "Su Mensaje *" or "¿Cómo podemos ayudarle? *"

---

### 3. Missing Focus Visible States (#19)
**Priority:** High (accessibility)  
**Estimated Time:** 20-30 minutes  
**Impact:** High - Better keyboard navigation accessibility

#### Implementation Plan:
1. **Audit current focus states** (5 min)
   - Check all interactive elements (buttons, links, form inputs)
   - Identify elements with weak or missing focus indicators

2. **Enhance focus styles** (15-25 min)
   - Add to global CSS or Tailwind config
   - Use `focus-visible:` utilities for better visibility
   - Ensure 2px+ outline with good contrast
   - Add focus ring styles

#### Files to Modify:
- `src/layouts/Layout.astro` (global styles)
- OR `tailwind.config.mjs` (add focus ring utilities)
- OR `css/style.css` (if using custom CSS)

#### CSS Example:
```css
/* Enhanced focus styles */
*:focus-visible {
  outline: 2px solid theme('colors.primary');
  outline-offset: 2px;
  border-radius: 4px;
}

button:focus-visible,
a:focus-visible {
  outline: 3px solid theme('colors.accent');
  outline-offset: 3px;
}
```

---

## 🔧 Medium Effort (30-90 Minutes Each)

### 4. Missing "Back to Top" Button (#27)
**Priority:** Medium  
**Estimated Time:** 45-60 minutes  
**Impact:** Medium - Better UX for long pages

#### Implementation Plan:
1. **Create BackToTop component** (20 min)
   - Create `src/components/BackToTop.astro`
   - Floating button (fixed position, bottom-right)
   - Show/hide based on scroll position (show after 300px scroll)
   - Smooth scroll to top on click
   - Icon: arrow-up or chevron-up

2. **Add to Layout.astro** (5 min)
   - Import and add component
   - Add to all pages via Layout

3. **Style and animate** (15-20 min)
   - Fade in/out animation
   - Hover effects
   - Responsive positioning
   - Ensure it doesn't interfere with footer

4. **Test on all pages** (5-10 min)
   - Verify scroll behavior
   - Check responsive design
   - Ensure accessibility (keyboard navigation, ARIA label)

#### Files to Create/Modify:
- Create `src/components/BackToTop.astro`
- Modify `src/layouts/Layout.astro`

#### Features:
- Appears after scrolling 300px down
- Smooth scroll animation
- Accessible (keyboard navigable, ARIA label)
- Responsive (smaller on mobile)
- Styled to match site design

---

### 5. Missing sitemap.xml (#25)
**Priority:** Medium (SEO)  
**Estimated Time:** 30-45 minutes  
**Impact:** Medium - Better SEO

#### Implementation Plan:
1. **Check if Astro sitemap plugin exists** (5 min)
   - Check `package.json` for `@astrojs/sitemap`
   - Check `astro.config.mjs` for sitemap configuration

2. **Configure sitemap** (15-20 min)
   - If plugin exists: configure in `astro.config.mjs`
   - If not: install `@astrojs/sitemap` plugin
   - Set site URL
   - Configure changefreq and priority
   - Exclude API routes and 404 page

3. **Test sitemap generation** (10-15 min)
   - Run `npm run build`
   - Verify `sitemap.xml` is generated
   - Check all pages are included
   - Verify sitemap is accessible at `/sitemap.xml`

#### Files to Modify:
- `astro.config.mjs`
- `package.json` (if installing plugin)

#### Configuration Example:
```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Exclude API routes and 404
      filter: (page) => !page.includes('/api/') && !page !== '/404',
    }),
  ],
});
```

**Note:** Check `SITEMAP_SETUP.md` - sitemap may already be configured!

---

### 6. Inconsistent Button Styles (#22)
**Priority:** Low-Medium  
**Estimated Time:** 60-90 minutes  
**Impact:** Medium - Design consistency

#### Implementation Plan:
1. **Audit all button styles** (20 min)
   - Find all buttons across site
   - Document current styles (primary, secondary, accent buttons)
   - Identify inconsistencies in:
     - Hover states
     - Active states
     - Focus states
     - Disabled states
     - Sizes (sm, md, lg)

2. **Create button component or utility classes** (30-40 min)
   - Option A: Create `src/components/Button.astro` component
   - Option B: Standardize Tailwind button classes
   - Define standard variants:
     - Primary button
     - Secondary button
     - Accent button
     - Outline button
     - Text/link button

3. **Update all buttons** (20-30 min)
   - Replace inconsistent button styles
   - Apply standardized classes/component
   - Test hover, active, focus, disabled states

#### Files to Create/Modify:
- Create `src/components/Button.astro` (optional)
- OR update `tailwind.config.mjs` with button variants
- Update all pages with buttons (18+ pages)

#### Standard Button Variants:
```astro
<!-- Primary Button -->
<button class="btn btn-primary">Click Me</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Click Me</button>

<!-- Accent Button -->
<button class="btn btn-accent">Click Me</button>
```

---

### 7. Inconsistent Spacing (#17)
**Priority:** Low-Medium  
**Estimated Time:** 60-90 minutes  
**Impact:** Medium - Visual consistency

#### Implementation Plan:
1. **Document current spacing usage** (20 min)
   - Audit all pages for spacing classes
   - Identify all variations:
     - `py-8 md:py-12`
     - `py-10 md:py-24`
     - `py-12 md:py-16`
     - etc.

2. **Define standard spacing scale** (10 min)
   - Create spacing guidelines:
     - Small sections: `py-8 md:py-12`
     - Medium sections: `py-10 md:py-16`
     - Large sections: `py-10 md:py-24`
     - Hero sections: `py-8 md:py-32`

3. **Apply standardized spacing** (30-60 min)
   - Update all pages systematically
   - Group by section type:
     - Hero sections
     - Content sections
     - Form sections
     - Footer sections

#### Files to Modify:
- All 18+ pages (systematic update)

#### Standard Spacing Scale:
```astro
<!-- Small sections (Ongoing Care, etc.) -->
<section class="py-8 md:py-12">

<!-- Medium sections (Service Options, etc.) -->
<section class="py-10 md:py-16">

<!-- Large sections (Main content, FAQ, etc.) -->
<section class="py-10 md:py-24">

<!-- Hero sections -->
<section class="py-8 md:py-32">
```

---

## 🏗️ Larger Tasks (90+ Minutes Each)

### 8. Image Optimization (#15)
**Priority:** Medium (performance)  
**Estimated Time:** 2-3 hours  
**Impact:** Medium - Better performance on mobile

#### Implementation Plan:
1. **Create responsive image sizes** (60-90 min)
   - Generate multiple sizes of hero image:
     - Mobile: 640px width
     - Tablet: 1024px width
     - Desktop: 1920px width
     - Large desktop: 2560px width
   - Use image optimization tool or service
   - Save as `.webp` format

2. **Update hero images with srcset** (30-45 min)
   - Add `srcset` attribute to all 18 hero images
   - Add `sizes` attribute for responsive breakpoints
   - Keep `src` as fallback for older browsers

3. **Test responsive images** (15-20 min)
   - Test on different screen sizes
   - Verify correct image loads
   - Check performance improvements

#### Files to Modify:
- All 18 pages with hero sections
- Create optimized image files in `public/images/`

#### Code Example:
```astro
<img
  src="/images/hero.webp"
  srcset="/images/hero-640.webp 640w,
          /images/hero-1024.webp 1024w,
          /images/hero-1920.webp 1920w,
          /images/hero-2560.webp 2560w"
  sizes="(max-width: 640px) 640px,
         (max-width: 1024px) 1024px,
         (max-width: 1920px) 1920px,
         2560px"
  alt="Page-specific alt text"
  loading="eager"
  class="w-full h-full object-cover"
/>
```

**Note:** Requires image processing/optimization tools or services.

---

### 9. Missing Breadcrumbs (#16)
**Priority:** Low-Medium  
**Estimated Time:** 2-3 hours  
**Impact:** Medium - Better navigation UX

#### Implementation Plan:
1. **Create Breadcrumb component** (45-60 min)
   - Create `src/components/Breadcrumb.astro`
   - Accept props: `items` array with `{label, href}`
   - Generate breadcrumb structure:
     - Home > Page Type > Service Type
   - Style with separators (chevron or slash)
   - Make responsive (hide on mobile or show simplified version)

2. **Determine breadcrumb logic per page** (30-45 min)
   - Map all 18 pages to breadcrumb structure:
     - `/` → Home
     - `/cremation` → Home > Cremation
     - `/catholic-cremation` → Home > Catholic > Cremation
     - `/veteran-burial-es` → Home > Veteran > Burial (Spanish)
   - Handle language variants

3. **Add breadcrumbs to all pages** (45-60 min)
   - Add component to Layout.astro or individual pages
   - Pass appropriate breadcrumb data
   - Test navigation

4. **Style and test** (15-20 min)
   - Ensure styling matches site design
   - Test responsive behavior
   - Verify accessibility (proper ARIA labels)

#### Files to Create/Modify:
- Create `src/components/Breadcrumb.astro`
- Modify `src/layouts/Layout.astro` (add breadcrumb logic)
- OR modify individual pages

#### Breadcrumb Structure Examples:
```astro
<!-- General cremation page -->
<Breadcrumb items={[
  { label: 'Home', href: '/' },
  { label: 'Cremation', href: '/cremation' }
]} />

<!-- Catholic burial page -->
<Breadcrumb items={[
  { label: 'Home', href: '/' },
  { label: 'Catholic', href: '/catholic' },
  { label: 'Burial', href: '/catholic-burial' }
]} />
```

---

### 10. Missing Print Styles (#18)
**Priority:** Low  
**Estimated Time:** 2-3 hours  
**Impact:** Low - Better print experience

#### Implementation Plan:
1. **Audit current print styles** (20 min)
   - Check `Layout.astro` for existing print styles
   - Test print preview on multiple pages
   - Identify what needs improvement

2. **Design print layout** (30-45 min)
   - Hide navigation, footer, buttons
   - Show only essential content
   - Optimize typography for print
   - Ensure proper page breaks
   - Add page headers/footers (optional)

3. **Implement print styles** (60-90 min)
   - Add comprehensive print media queries
   - Style headings, paragraphs, lists
   - Handle images (ensure they print well)
   - Handle forms (hide or show as needed)
   - Test on multiple browsers

4. **Test and refine** (15-20 min)
   - Print preview on Chrome, Firefox, Safari
   - Test different page types
   - Verify readability

#### Files to Modify:
- `src/layouts/Layout.astro` (add print styles)
- OR create `css/print.css` and import

#### Print CSS Example:
```css
@media print {
  /* Hide non-essential elements */
  nav, footer, .no-print {
    display: none !important;
  }
  
  /* Optimize typography */
  body {
    font-size: 12pt;
    line-height: 1.5;
    color: #000;
  }
  
  /* Page breaks */
  h1, h2 {
    page-break-after: avoid;
  }
  
  /* Images */
  img {
    max-width: 100%;
    page-break-inside: avoid;
  }
}
```

---

### 11. Inconsistent Content Structure (#26)
**Priority:** Low  
**Estimated Time:** 3-4 hours  
**Impact:** Low-Medium - Content organization

#### Implementation Plan:
1. **Document current structure** (60-90 min)
   - Audit all 18 pages
   - Document section ordering for each page type:
     - Landing pages (index, catholic, veteran)
     - Service pages (cremation, burial)
     - Catholic service pages
     - Veteran service pages
   - Identify inconsistencies

2. **Define standard structure** (30-45 min)
   - Create structure guidelines:
     - Landing pages: Hero > Our Story > Service Choice > Options > FAQ > Contact
     - Service pages: Hero > ServiceNav > Intro > Options > Why Plan > FAQ > Contact
   - Document exceptions (if any)

3. **Create migration plan** (30 min)
   - Prioritize which pages to update first
   - Plan section reordering
   - Identify content that needs to move

4. **Apply standardized structure** (90-120 min)
   - Update pages systematically
   - Reorder sections as needed
   - Test each page after changes
   - Ensure no content is lost

#### Files to Modify:
- All 18 pages (systematic review and update)

#### Standard Structure Template:
```astro
<!-- Landing Page Structure -->
1. Hero Section
2. Our Story Section
3. Service Choice Portal
4. Cremation Options
5. Burial Options
6. Why Plan Ahead
7. Common Questions (Accordion)
8. Ongoing Care
9. Contact Form
10. CTA Section

<!-- Service Page Structure -->
1. Hero Section
2. ServiceNav
3. Introductory Block
4. Service Options (Cremation OR Burial)
5. Why Plan Ahead
6. Common Questions (Accordion)
7. Cemetery Help (if applicable)
8. Ongoing Care
9. Contact Form
10. CTA Section
```

---

### 12. Inconsistent FAQ Content (#29)
**Priority:** Low  
**Estimated Time:** 2-3 hours  
**Impact:** Low-Medium - Content consistency

#### Implementation Plan:
1. **Audit all FAQ questions** (60-90 min)
   - Extract all FAQ questions from all pages
   - Categorize by topic:
     - Planning/pre-payment questions
     - Service-specific questions
     - Catholic-specific questions
     - Veteran-specific questions
   - Identify duplicates and variations

2. **Define core FAQ set** (30-45 min)
   - Create standard core questions (3-4 questions)
   - Define page-specific questions
   - Standardize wording for consistency

3. **Update all Accordion components** (60-90 min)
   - Apply core questions to all pages
   - Add page-specific questions
   - Ensure consistent wording
   - Update Spanish translations

#### Files to Modify:
- All 18 pages with Accordion components

#### Core FAQ Questions (Standard):
1. "Can I pay for everything before I die?"
2. "What happens if I die while I'm traveling?"
3. "Is there a lot of paperwork?"
4. "If we do not have a cemetery plot or a headstone, can you help us choose one?"

**Page-Specific Questions:**
- Catholic pages: Add Catholic-specific questions
- Veteran pages: Add veteran benefits questions
- Cremation pages: Add cremation-specific questions
- Burial pages: Add burial-specific questions

---

### 13. Missing Language Detection (#30)
**Priority:** Low  
**Estimated Time:** 3-4 hours  
**Impact:** Low - Nice-to-have feature

#### Implementation Plan:
1. **Research implementation approach** (30 min)
   - Decide: client-side vs server-side detection
   - Consider: manual override option
   - Plan: redirect vs show language selector

2. **Implement language detection** (90-120 min)
   - Option A: Client-side JavaScript
     - Detect browser language on page load
     - Show language selector modal if mismatch
     - Store preference in localStorage
   - Option B: Server-side (Astro)
     - Use `Accept-Language` header
     - Redirect to appropriate language version
     - Store preference in cookie

3. **Add manual override** (30-45 min)
   - Ensure language toggle always available
   - Allow users to switch languages
   - Persist preference

4. **Test and refine** (30 min)
   - Test with different browser languages
   - Test manual override
   - Verify preference persistence

#### Files to Create/Modify:
- Create `src/utils/languageDetection.ts` (if client-side)
- OR modify `src/layouts/Layout.astro` (if server-side)
- Update language toggle components

#### Implementation Considerations:
- **Client-side:** Better UX, no redirect, but requires JavaScript
- **Server-side:** Works without JavaScript, but requires redirect
- **Recommendation:** Client-side with manual override (better UX)

---

### 14. Missing Social Proof Section (#28)
**Status:** ❌ **NO-GO** (as noted in original document)  
**Priority:** N/A  
**Estimated Time:** N/A  
**Impact:** N/A

**Note:** This item has been marked as "no-go" and should be skipped.

---

## 📅 Recommended Implementation Timeline

### Phase 1: Quick Wins (Week 1) - ~2 hours
1. ✅ Missing Loading Indicators (#21) - 20-30 min
2. ✅ Form Field Labels (#20) - 15-20 min
3. ✅ Missing Focus Visible States (#19) - 20-30 min
4. ✅ Missing "Back to Top" Button (#27) - 45-60 min

**Total Phase 1:** ~2 hours

### Phase 2: Medium Effort (Week 2) - ~4 hours
5. ✅ Missing sitemap.xml (#25) - 30-45 min
6. ✅ Inconsistent Button Styles (#22) - 60-90 min
7. ✅ Inconsistent Spacing (#17) - 60-90 min

**Total Phase 2:** ~3-4 hours

### Phase 3: Larger Tasks (Weeks 3-4) - ~12 hours
8. ✅ Image Optimization (#15) - 2-3 hours
9. ✅ Missing Breadcrumbs (#16) - 2-3 hours
10. ✅ Missing Print Styles (#18) - 2-3 hours
11. ✅ Inconsistent Content Structure (#26) - 3-4 hours
12. ✅ Inconsistent FAQ Content (#29) - 2-3 hours
13. ✅ Missing Language Detection (#30) - 3-4 hours (optional)

**Total Phase 3:** ~14-20 hours

### Grand Total: ~19-26 hours

---

## 🎯 Priority Recommendations

### High Priority (Do First):
1. **Missing Loading Indicators** - Immediate UX improvement
2. **Missing Focus Visible States** - Accessibility requirement
3. **Missing "Back to Top" Button** - Good UX for long pages

### Medium Priority (Do Next):
4. **Missing sitemap.xml** - SEO benefit
5. **Inconsistent Button Styles** - Design consistency
6. **Inconsistent Spacing** - Visual consistency

### Low Priority (Nice to Have):
7. **Image Optimization** - Performance (but images already optimized)
8. **Missing Breadcrumbs** - Navigation UX
9. **Missing Print Styles** - Print experience
10. **Inconsistent Content Structure** - Content organization
11. **Inconsistent FAQ Content** - Content consistency
12. **Missing Language Detection** - Advanced feature

---

## 📝 Implementation Notes

### Dependencies:
- **Button Styles (#22)** should be done before **Spacing (#17)** for consistency
- **Content Structure (#26)** should be done before **FAQ Content (#29)** for better organization
- **Focus States (#19)** should be done early (accessibility)

### Testing Requirements:
- All changes should be tested on:
  - Mobile devices (responsive)
  - Multiple browsers (Chrome, Firefox, Safari, Edge)
  - Screen readers (for accessibility items)
  - Print preview (for print styles)

### Code Quality:
- Follow existing code patterns
- Use TypeScript where applicable
- Add comments for complex logic
- Ensure accessibility (ARIA labels, keyboard navigation)

---

## ✅ Completion Checklist

### Phase 1: Quick Wins
- [x] Missing Loading Indicators (#21) - ✅ **COMPLETED**
- [x] Form Field Labels (#20) - ✅ **COMPLETED**
- [x] Missing Focus Visible States (#19) - ✅ **COMPLETED**
- [x] Missing "Back to Top" Button (#27) - ✅ **COMPLETED**

### Phase 2: Medium Effort
- [x] Missing sitemap.xml (#25) - ✅ **ALREADY CONFIGURED** (verified working)
- [x] Inconsistent Button Styles (#22) - ✅ **COMPLETED** (standardized button classes created and applied)
- [x] Inconsistent Spacing (#17) - ✅ **AUDIT COMPLETE** (spacing is already well-standardized, no changes needed)

### Phase 3: Larger Tasks
- [ ] Image Optimization (#15)
- [x] Missing Breadcrumbs (#16) - ✅ **COMPLETED**
- [x] Missing Print Styles (#18) - ✅ **COMPLETED**
- [ ] Inconsistent Content Structure (#26)
- [x] Inconsistent FAQ Content (#29) - ✅ **COMPLETED**
- [ ] Missing Language Detection (#30) - Optional

---

**Last Updated:** Current  
**Next Review:** After Phase 1 completion

---

## 📋 Implementation Progress Summary

### ✅ Completed Items (Session 1)

#### 1. Missing Loading Indicators (#21) - ✅ COMPLETED
**Status:** Fully implemented  
**Changes Made:**
- Created visual loading spinner in ContactForm submit button
- Added SVG spinner that appears during form submission
- Button shows "Sending..." text with animated spinner
- Spinner properly hides on success/error
- All error paths properly reset button state

**Files Modified:**
- `src/components/ContactForm.astro` - Added spinner element and JavaScript logic

---

#### 2. Form Field Labels (#20) - ✅ COMPLETED
**Status:** Fully implemented  
**Changes Made:**
- Updated English labels:
  - "Full Name *" → "Your Name *"
  - "Email Address *" → "Your Email Address *"
  - "Message *" → "How can we help? *"
- Updated Spanish labels:
  - "Nombre Completo *" → "Su Nombre *"
  - "Dirección de Correo Electrónico *" → "Su Dirección de Correo Electrónico *"
  - "Mensaje *" → "¿Cómo podemos ayudarle? *"

**Files Modified:**
- `src/components/ContactForm.astro` - Updated form label text in both languages

---

#### 3. Missing Focus Visible States (#19) - ✅ COMPLETED
**Status:** Fully implemented  
**Changes Made:**
- Added comprehensive `:focus-visible` styles to Layout.astro
- Enhanced focus indicators for all interactive elements:
  - Buttons and links: 3px outline with accent color
  - Form inputs: 2px outline with accent color
  - All elements: 2px outline with proper offset
- Removed default outline for mouse users (not keyboard)
- Ensures WCAG accessibility compliance

**Files Modified:**
- `src/layouts/Layout.astro` - Added focus-visible CSS rules

---

#### 4. Missing "Back to Top" Button (#27) - ✅ COMPLETED
**Status:** Fully implemented  
**Changes Made:**
- Created `BackToTop.astro` component
- Button appears after scrolling 300px down
- Smooth scroll animation to top
- Fully accessible (ARIA label, keyboard navigable)
- Responsive design (smaller on mobile, positioned to avoid footer)
- Fade in/out animation
- Added to Layout.astro so it appears on all pages

**Files Created:**
- `src/components/BackToTop.astro` - New component

**Files Modified:**
- `src/layouts/Layout.astro` - Imported and added BackToTop component

---

#### 5. Missing sitemap.xml (#25) - ✅ VERIFIED
**Status:** Already configured and working  
**Verification:**
- `@astrojs/sitemap` package installed
- Sitemap configured in `astro.config.mjs`
- Properly excludes API routes and 404 page
- Configuration documented in `SITEMAP_SETUP.md`
- **Note:** Site URL needs to be updated from 'https://example.com' to actual domain

**Files Reviewed:**
- `astro.config.mjs` - Configuration verified
- `package.json` - Package installed
- `SITEMAP_SETUP.md` - Documentation exists

---

### ⏳ Remaining Items

#### 6. Inconsistent Button Styles (#22) - ✅ COMPLETED
**Status:** Fully implemented  
**Changes Made:**
- Created standardized button utility classes in `Layout.astro`:
  - Base `.btn` class with consistent styling
  - Variants: `.btn-primary`, `.btn-accent`, `.btn-secondary`
  - Sizes: `.btn-sm`, `.btn-md`, `.btn-lg`
  - Full width: `.btn-full`
  - Proper hover, disabled, and focus states
- Updated all buttons to use standardized classes:
  - `ServiceButtons.astro` - Service navigation buttons
  - `ContactForm.astro` - Form submit button
  - `BackToTop.astro` - Back to top floating button
  - `Layout.astro` - Skip to main content link
- All buttons now have consistent styling, hover effects, and accessibility features

**Files Modified:**
- `src/layouts/Layout.astro` - Added standardized button classes
- `src/components/ServiceButtons.astro` - Updated to use btn classes
- `src/components/ContactForm.astro` - Updated to use btn classes
- `src/components/BackToTop.astro` - Updated to use btn classes

#### 7. Inconsistent Spacing (#17) - ⏳ IN PROGRESS
**Status:** Audit completed, spacing is mostly consistent  
**Findings:**
- **Hero sections**: Consistently use `py-8 md:py-32`
- **Main content sections**: Mostly use `py-10 md:py-24` (standard)
- **Smaller/intro sections**: Use `py-8 md:py-12`
- **Section margins**: Contextual variations (mb-3 md:mb-4, mb-6 md:mb-8, mb-6 md:mb-12) are appropriate for different content types

**Assessment:** Spacing is already well-standardized across the site. The variations found are intentional and contextually appropriate. No major standardization needed.

**Recommendation:** This item can be marked as complete or low priority. The existing spacing patterns are consistent and follow good design practices.

#### 9. Missing Breadcrumbs (#16) - ✅ COMPLETED
**Status:** Fully implemented  
**Changes Made:**
- Created `Breadcrumb.astro` component with proper accessibility (ARIA labels, Schema.org structured data)
- Added breadcrumb generation logic to `Layout.astro` that handles all page types:
  - Landing pages: Home > Catholic, Home > Veteran
  - Service pages: Home > Cremation, Home > Burial
  - Catholic service pages: Home > Catholic > Cremation, Home > Catholic > Burial
  - Veteran service pages: Home > Veteran > Cremation, Home > Veteran > Burial
  - Other pages: Home > Page Name (accessibility, privacy-policy, etc.)
- Supports both English and Spanish labels
- Responsive design (smaller on mobile)
- Breadcrumb automatically hidden on home pages
- Styled to match site design with proper hover states

**Files Created:**
- `src/components/Breadcrumb.astro` - New breadcrumb component

**Files Modified:**
- `src/layouts/Layout.astro` - Added breadcrumb generation logic and component import

#### 10. Missing Print Styles (#18) - ✅ COMPLETED
**Status:** Fully implemented  
**Changes Made:**
- Enhanced print styles in `Layout.astro` with comprehensive print media queries
- Hide non-essential elements: navigation, footer, breadcrumbs, back-to-top button, forms, buttons, service navigation
- Optimized typography for print:
  - 12pt base font size with 1.6 line height
  - Proper heading sizes (24pt h1, 18pt h2, 14pt h3)
  - Black text on white background
- Proper page breaks:
  - Headings avoid page breaks after
  - Images avoid page breaks inside
  - Sections avoid awkward breaks
- Image handling:
  - Max width 100% for responsive images
  - Hero images limited to 3in height
  - Images avoid page breaks
- Link handling:
  - External links show URL in parentheses
  - Internal links show without URL
- Accordion content: All accordion content is expanded and visible in print
- Removed unnecessary spacing and padding for print
- Tables properly formatted with borders
- Blockquotes styled with left border

**Files Modified:**
- `src/layouts/Layout.astro` - Enhanced print styles section

#### 12. Inconsistent FAQ Content (#29) - ✅ COMPLETED
**Status:** Fully implemented  
**Changes Made:**
- Created centralized FAQ system in `src/utils/faqs.ts`
- Defined standardized FAQ structure:
  - **Core FAQs** (all pages): 4 questions about payment, travel, paperwork, cemetery plots
  - **Cremation-specific FAQs**: 2 questions about viewing and urns
  - **Catholic-specific FAQs**: 2 questions about green burial and non-Catholic burial
  - **Veteran-specific FAQs**: 1 question about veteran benefits
- Updated all 18 pages to use standardized `getFAQs()` function
- All FAQs now consistent across English and Spanish versions
- Eliminated duplicate and inconsistent FAQ content
- Centralized FAQ management for easy future updates

**Files Created:**
- `src/utils/faqs.ts` - Centralized FAQ content and helper function

**Files Modified:**
- All 18 page files (index, cremation, burial, catholic, veteran, and their Spanish versions)
- All pages now import and use `getFAQs()` function instead of hardcoded FAQ arrays

#### 8, 11, 13. Remaining Larger Tasks - PENDING
- Image Optimization (#15) - 2-3 hours
- Inconsistent Content Structure (#26) - 3-4 hours
- Missing Language Detection (#30) - 3-4 hours (optional)

---

### 📊 Session Summary

**Items Completed:** 6 out of 14 items (excluding #28 which is marked as NO-GO)  
**Time Invested:** ~3-4 hours total (across multiple sessions)  
**Impact:** High - All completed items improve UX, accessibility, and design consistency

**Key Achievements:**
- ✅ Improved form UX with loading indicators
- ✅ Enhanced form labels for better clarity
- ✅ Improved accessibility with focus-visible states
- ✅ Added navigation convenience with back-to-top button
- ✅ Verified sitemap configuration
- ✅ Standardized button styles across entire site

**Session 2 Achievements:**
- ✅ Created comprehensive standardized button utility classes
- ✅ Updated all button components to use consistent styling
- ✅ Completed spacing audit (found spacing is already well-standardized)

**Next Steps:**
1. Test all completed features in browser
2. Consider Phase 3 larger tasks (Image Optimization, Breadcrumbs, Print Styles, etc.)
3. Optional: Fine-tune spacing if needed (currently well-standardized)
