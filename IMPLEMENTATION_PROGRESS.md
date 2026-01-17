# Cremation and Burial Pages Implementation Progress

## Overview
**MAJOR RESTRUCTURE IN PROGRESS**: Converting from tabbed pages to individual standalone pages with navigation bars. Removing MarketingModal popup and replacing with top navigation (Veteran/Catholic/General) and service navigation (Cremation/Burial) below hero.

### Restructuring Details:
- **Removed**: MarketingModal popup (disabled in `siteDetails.ts`)
- **Added**: Top navigation bar in Navbar with Veteran/Catholic/General options
- **Added**: ServiceNav component for Cremation/Burial navigation below hero section
- **Changed**: All service pages now standalone (no tabs) - each page shows only its own content
- **Pattern**: For each page, remove ServiceTabs, add ServiceNav after hero, remove opposite service content section

## Latest Session Summary (Quick Reference)

### ✅ Just Completed (This Session):
- **MarketingModal Disabled** - ✅ Disabled in `siteDetails.ts`
- **Navbar Updated** - ✅ Added page type navigation (Veteran/Catholic/General) in top bar
- **ServiceNav Component Created** - ✅ New component for Cremation/Burial navigation below hero
- **Pages Updated** (5 of 12):
  - ✅ `cremation.astro` - Removed tabs, added ServiceNav, removed burial content
  - ✅ `burial.astro` - Removed tabs, added ServiceNav, removed cremation content
  - ✅ `cremation-es.astro` - Removed tabs, added ServiceNav, removed burial content
  - ✅ `burial-es.astro` - Removed tabs, added ServiceNav, removed cremation content
  - ✅ `catholic-cremation.astro` - Removed tabs, added ServiceNav, removed burial content

### 🔄 Remaining Tasks:
1. **Complete Page Updates** (7 pages remaining):
   - `catholic-burial.astro` - ⚠️ Partially done (ServiceNav added, need to remove entire cremation-content section and burial-content wrapper div)
   - `catholic-cremation-es.astro` - Need full update (same pattern as cremation pages)
   - `catholic-burial-es.astro` - Need full update (same pattern as burial pages)
   - `veteran-cremation.astro` - Need full update (same pattern as cremation pages)
   - `veteran-burial.astro` - Need full update (same pattern as burial pages)
   - `veteran-cremation-es.astro` - Need full update (same pattern as cremation pages)
   - `veteran-burial-es.astro` - Need full update (same pattern as burial pages)

### Update Pattern for Next Agent:

**For CREMATION pages:**
1. Replace `import ServiceTabs` with `import ServiceNav`
2. Add `<ServiceNav />` after hero section (before introductory block)
3. Remove entire "Tab Navigation" section with ServiceTabs
4. Remove `<div id="cremation-content">` wrapper (keep content)
5. Remove entire `<div id="burial-content">` section (all content inside it)

**For BURIAL pages:**
1. Replace `import ServiceTabs` with `import ServiceNav`
2. Add `<ServiceNav />` after hero section (before introductory block)
3. Remove entire "Tab Navigation" section with ServiceTabs
4. Remove entire `<div id="cremation-content">` section (all content inside it)
5. Remove `<div id="burial-content">` wrapper (keep content inside)

**Files to update:**
- `src/pages/catholic-burial.astro` (remove cremation section lines ~193-369, remove burial wrapper)
- `src/pages/catholic-cremation-es.astro`
- `src/pages/catholic-burial-es.astro`
- `src/pages/veteran-cremation.astro`
- `src/pages/veteran-burial.astro`
- `src/pages/veteran-cremation-es.astro`
- `src/pages/veteran-burial-es.astro`

## Previous Session Summary

### ✅ Just Completed (This Session):
- **Veteran Pages English** (2 pages) - ✅ FULLY COMPLETED
  - Fixed `veteran-cremation.astro` tab structure issue
  - Created `veteran-burial.astro` with correct structure
- **Veteran Pages Spanish** (2 pages) - ✅ FULLY COMPLETED
  - Created `veteran-cremation-es.astro` with full Spanish translations
  - Created `veteran-burial-es.astro` with full Spanish translations

### 🔄 Remaining Tasks:
1. **Landing Page Conversions** (6 pages) - Convert to landing pages with CTA buttons
2. **Layout.astro Updates** - Add alternate URL generation for new routes
3. **Font Spacing Fixes** - Apply to any remaining pages

**Status**: All service pages (cremation/burial for general, catholic, veteran in both languages) are complete. Only landing page conversions and layout updates remain.

## Completed Tasks ✅

### 1. Navbar Updates
- ✅ Updated `src/components/Navbar.astro` to include translation data attributes for "Call Now" button
- ✅ Added `data-lang-en="Call Now"` and `data-lang-es="Llame Ahora"` attributes

### 2. Tab Component
- ✅ Created `src/components/ServiceTabs.astro` component
- ✅ Supports active tab switching (cremation/burial)
- ✅ Supports English and Spanish languages
- ✅ JavaScript functionality for tab switching

### 3. General Pages (English)
- ✅ Created `src/pages/cremation.astro` - General cremation page with tabs
- ✅ Created `src/pages/burial.astro` - General burial page with tabs
- ✅ Both pages include:
  - Hero section with fixed font spacing (line-height: 1.2; letter-spacing: -0.02em)
  - Introductory block mentioning 50/50 ratio
  - Tab navigation
  - Tab content sections (cremation and burial)
  - Shared content sections (Why Plan Ahead, Common Questions, Cemetery Help, Contact Form, CTA)

### 4. General Pages (Spanish) - 2 pages
- ✅ Created `src/pages/cremation-es.astro` - Spanish general cremation page
- ✅ Created `src/pages/burial-es.astro` - Spanish general burial page
- **Status**: COMPLETED - Both pages created with Spanish translations from `es.astro`
- **Notes**: 
  - Font spacing fix applied to hero headers
  - ServiceTabs component integrated with `language="es"`
  - All content translated from English versions

### 5. Catholic Pages (English) - 2 pages
- ✅ Created `src/pages/catholic-cremation.astro` - Catholic cremation page
- ✅ Created `src/pages/catholic-burial.astro` - Catholic burial page
- **Status**: COMPLETED - Both pages created with all required Catholic content
- **Special Requirements** (ALL IMPLEMENTED):
  - ✅ Cardinal Laws 1-5 (numbered) prominently displayed on BOTH pages
  - ✅ "Catholic requirement: MUST be buried (ashes or no)" - prominent red-bordered note
  - ✅ Diocese notes included:
    - "Many dioceses prohibit practice of visitation in church prior to mass"
    - "Permission may be required for Burial of non-catholics in their cemetery"
  - ✅ 50/50 ratio note included
  - ✅ Catholic funeral options (Traditional, Memorial, Direct) included
  - ✅ "Why Do We Follow These Rules?" section included
  - ✅ Font spacing fix applied to hero headers

### 6. Catholic Pages (Spanish) - 2 pages
- ✅ Created `src/pages/catholic-cremation-es.astro` - Spanish Catholic cremation
- ✅ Created `src/pages/catholic-burial-es.astro` - Spanish Catholic burial
- **Status**: ✅ COMPLETED - Full Spanish translations applied
- **Notes**: 
  - All content sections fully translated to Spanish
  - Hero text, introductory blocks, all sections, form labels, and script messages translated
  - Translations sourced from `catholic-es.astro`
  - Font spacing fix applied to hero headers
  - ServiceTabs component integrated with `language="es"`

## Remaining Tasks 🔄

### 7. Veteran Pages (English) - 2 pages
- ✅ `src/pages/veteran-cremation.astro` - Veteran cremation page
- ✅ `src/pages/veteran-burial.astro` - Veteran burial page
- **Status**: ✅ COMPLETED
- **Notes**:
  - ✅ `veteran-cremation.astro` created with correct tab structure (cremation content visible when activeTab="cremation")
  - ✅ Tab content divs fixed - cremation content shows when cremation tab is active
  - ✅ `veteran-burial.astro` created with activeTab="burial" and correct visibility
  - ✅ Both pages include veteran-specific content section and "Common Questions About Veteran Services"
  - ✅ Set `pageType="veteran"` in Layout
  - ✅ Font spacing fix applied to hero headers

### 8. Veteran Pages (Spanish) - 2 pages
- ✅ `src/pages/veteran-cremation-es.astro` - Spanish veteran cremation
- ✅ `src/pages/veteran-burial-es.astro` - Spanish veteran burial
- **Status**: ✅ COMPLETED - Full Spanish translations applied
- **Notes**:
  - ✅ All content sections fully translated to Spanish
  - ✅ Hero text, introductory blocks, all sections, form labels, and script messages translated
  - ✅ Translations sourced from `veteran-es.astro` and Spanish cremation/burial pages
  - ✅ Font spacing fix applied to hero headers
  - ✅ ServiceTabs component integrated with `language="es"`
  - ✅ Veteran-specific content sections included in both tabs

### 9. Landing Page Conversions - 6 pages
- ⏳ `src/pages/index.astro` - Convert to landing page with links to cremation/burial
- ⏳ `src/pages/catholic.astro` - Convert to landing page
- ⏳ `src/pages/veteran.astro` - Convert to landing page
- ⏳ `src/pages/es.astro` - Convert to Spanish landing page
- ⏳ `src/pages/catholic-es.astro` - Convert to Spanish Catholic landing page
- ⏳ `src/pages/veteran-es.astro` - Convert to Spanish veteran landing page
- **Requirements**: 
  - Feature both cremation and burial equally
  - Prominent CTA buttons linking to respective pages
  - Introductory block: "We offer both cremation and burial services - choose the option that best fits your needs and beliefs"
  - Maintain existing hero and some general content

### 10. Layout Updates
- ⏳ Update `src/layouts/Layout.astro` alternate URL generation
- **Requirements**: 
  - Add support for new routes (cremation, burial, catholic-cremation, catholic-burial, etc.)
  - Update hreflang tag generation for all new pages

### 11. Font Spacing Fix
- ✅ Already applied to `cremation.astro` and `burial.astro` hero headers
- ⏳ Need to apply to all remaining pages: `style="line-height: 1.2; letter-spacing: -0.02em;"`

## Content Distribution Strategy

### Cremation-Specific Content:
- Cremation options (Direct, Memorial, Full Service)
- Questions about cremation (viewing before cremation, urns, etc.)
- Catholic cremation rules (Cardinal Laws 1-5) - **ON BOTH CATHOLIC PAGES**
- Catholic cremation options (Traditional, Memorial, Direct)
- Information about scattering restrictions (Catholic)
- Urn selection information

### Burial-Specific Content:
- Burial options (Traditional Farewell, Simple Farewell, Graveside, Immediate Burial)
- Cemetery plot selection help
- Headstone/marker information
- Catholic burial requirements
- Green/natural burial information
- Non-Catholic burial in Catholic cemetery permissions

### Shared Content (Appears on Both Pages):
- "Why Plan Ahead" section
- Payment/pre-planning information
- Travel/death away from home information
- Paperwork assistance information
- Cemetery/headstone help (relevant to both)
- Contact form
- CTA section
- 50/50 ratio note: "Many families choose equally between burial and cremation - we offer comprehensive services for both options"

### Catholic-Specific Additions (Both Pages):
- **Burial Requirement:** "Catholic requirement: MUST be buried (ashes or no)" - prominent note
- **Cardinal Laws by Number:** List all 5 Cardinal Laws with numbers on both pages
- **Sitewide Burial Clauses:** Information about burial requirements
- **Diocese Notes:**
  - "Many dioceses prohibit practice of visitation in church prior to mass"
  - "Permission may be required for Burial of non-catholics in their cemetery"
- **50/50 Ratio Note:** "Note: Burial/cremation 50/50 ratio in presentation - both options are equally respected and available"

## File Structure

```
src/
├── components/
│   ├── ServiceTabs.astro ✅
│   ├── Navbar.astro ✅ (updated)
│   └── Footer.astro
├── pages/
│   ├── cremation.astro ✅
│   ├── burial.astro ✅
│   ├── cremation-es.astro ✅
│   ├── burial-es.astro ✅
│   ├── catholic-cremation.astro ✅
│   ├── catholic-burial.astro ✅
│   ├── catholic-cremation-es.astro ✅ (fully translated)
│   ├── catholic-burial-es.astro ✅ (fully translated)
│   ├── veteran-cremation.astro ✅
│   ├── veteran-burial.astro ✅
│   ├── veteran-cremation-es.astro ✅ (fully translated)
│   ├── veteran-burial-es.astro ✅ (fully translated)
│   ├── index.astro ⏳ (needs conversion)
│   ├── catholic.astro ⏳ (needs conversion)
│   ├── veteran.astro ⏳ (needs conversion)
│   ├── es.astro ⏳ (needs conversion)
│   ├── catholic-es.astro ⏳ (needs conversion)
│   └── veteran-es.astro ⏳ (needs conversion)
└── layouts/
    └── Layout.astro ⏳ (needs URL generation update)
```

## Next Steps (In Order)

### Priority 1: Spanish General Pages ✅ COMPLETED
1. ✅ Created `src/pages/cremation-es.astro`
2. ✅ Created `src/pages/burial-es.astro`

### Priority 2: Catholic Pages (English) ✅ COMPLETED
3. ✅ Created `src/pages/catholic-cremation.astro`
   - All requirements implemented including Cardinal Laws 1-5
   - Catholic requirement note prominently displayed
   - Diocese notes included
   - Font spacing fix applied
   
4. ✅ Created `src/pages/catholic-burial.astro`
   - All requirements implemented including Cardinal Laws 1-5
   - Catholic requirement note prominently displayed
   - Diocese notes included
   - Font spacing fix applied

### Priority 3: Catholic Pages (Spanish) ✅ COMPLETED
5. ✅ Created `src/pages/catholic-cremation-es.astro`
   - **Status**: Fully translated to Spanish
   - All content sections, form labels, and messages translated
   - Font spacing fix applied
   
6. ✅ Created `src/pages/catholic-burial-es.astro`
   - **Status**: Fully translated to Spanish
   - All content sections, form labels, and messages translated
   - Font spacing fix applied

### Priority 4: Veteran Pages (English) ✅ COMPLETED
7. ✅ Created `src/pages/veteran-cremation.astro`
   - **Status**: Fully completed with correct tab structure
   - ✅ Tab content divs fixed - cremation content visible when activeTab="cremation"
   - ✅ Veteran-specific content section included in cremation tab
   - ✅ "Common Questions About Cremation" section included
   - ✅ Font spacing fix applied
   - ✅ Set `pageType="veteran"` correctly
   
8. ✅ Created `src/pages/veteran-burial.astro`
   - **Status**: Fully completed
   - ✅ Created from fixed `veteran-cremation.astro`
   - ✅ Changed `activeTab="burial"` in ServiceTabs
   - ✅ Tab content visibility correct (burial visible, cremation hidden)
   - ✅ Title set to "Veteran Burial Services"
   - ✅ Veteran-specific content section included in burial tab
   - ✅ "Common Questions About Veteran Services" section included
   - ✅ Set `pageType="veteran"` in Layout
   - ✅ Font spacing fix applied

### Priority 5: Veteran Pages (Spanish) ✅ COMPLETED
9. ✅ Created `src/pages/veteran-cremation-es.astro`
   - **Status**: Fully translated to Spanish
   - ✅ All content sections fully translated
   - ✅ Hero text, introductory blocks, all sections, form labels, script messages translated
   - ✅ Translations sourced from `veteran-es.astro` and Spanish cremation pages
   - ✅ Veteran-specific content section included
   - ✅ Font spacing fix applied
   - ✅ ServiceTabs component with `language="es"`
   
10. ✅ Created `src/pages/veteran-burial-es.astro`
    - **Status**: Fully translated to Spanish
    - ✅ All content sections fully translated
    - ✅ Hero text, introductory blocks, all sections, form labels, script messages translated
    - ✅ Translations sourced from `veteran-es.astro` and Spanish burial pages
    - ✅ Veteran-specific content section included
    - ✅ "Common Questions About Veteran Services" section included
    - ✅ Font spacing fix applied
    - ✅ ServiceTabs component with `language="es"` and `activeTab="burial"`

### Priority 6: Landing Page Conversions
11. Convert `src/pages/index.astro` to landing page
    - Keep hero section
    - Add introductory block about both services
    - Add two prominent CTA buttons: "Learn About Cremation" → `/cremation` and "Learn About Burial" → `/burial`
    - Keep some general content
    
12. Convert `src/pages/catholic.astro` to landing page
    - Similar structure, link to `/catholic-cremation` and `/catholic-burial`
    
13. Convert `src/pages/veteran.astro` to landing page
    - Similar structure, link to `/veteran-cremation` and `/veteran-burial`
    
14. Convert `src/pages/es.astro` to Spanish landing page
    - Spanish translations, link to `/cremation-es` and `/burial-es`
    
15. Convert `src/pages/catholic-es.astro` to Spanish landing page
    - Link to `/catholic-cremation-es` and `/catholic-burial-es`
    
16. Convert `src/pages/veteran-es.astro` to Spanish landing page
    - Link to `/veteran-cremation-es` and `/veteran-burial-es`

### Priority 7: Layout Updates
17. Update `src/layouts/Layout.astro`
    - Update `getAlternateUrls()` function to handle new routes:
      - `/cremation` ↔ `/cremation-es`
      - `/burial` ↔ `/burial-es`
      - `/catholic-cremation` ↔ `/catholic-cremation-es`
      - `/catholic-burial` ↔ `/catholic-burial-es`
      - `/veteran-cremation` ↔ `/veteran-cremation-es`
      - `/veteran-burial` ↔ `/veteran-burial-es`

### Priority 8: Font Spacing
18. Apply font spacing fix to all remaining pages
    - Add `style="line-height: 1.2; letter-spacing: -0.02em;"` to hero h1 elements

## Current Session Progress Summary

### ✅ Completed in This Session:
1. **Spanish General Pages** (2 pages) - ✅ Fully completed with translations
2. **Catholic Pages English** (2 pages) - ✅ Fully completed with all requirements:
   - Cardinal Laws 1-5 on both pages
   - Catholic requirement note
   - Diocese notes
   - 50/50 ratio messaging
   - Font spacing fixes
3. **Catholic Pages Spanish** (2 pages) - ✅ FULLY COMPLETED
   - All content sections fully translated to Spanish
   - Hero text, introductory blocks, all sections, form labels, script messages translated
   - Font spacing fix applied
4. **Veteran Pages English** (2 pages) - ✅ FULLY COMPLETED
   - ✅ `veteran-cremation.astro` - Fixed tab structure, cremation content shows correctly
   - ✅ `veteran-burial.astro` - Created with activeTab="burial" and correct structure
   - ✅ Both pages include veteran-specific content sections
5. **Veteran Pages Spanish** (2 pages) - ✅ FULLY COMPLETED
   - ✅ `veteran-cremation-es.astro` - Fully translated to Spanish
   - ✅ `veteran-burial-es.astro` - Fully translated to Spanish
   - ✅ All content sections, form labels, and messages translated
   - ✅ Font spacing fixes applied

### 🔄 Remaining Work:
1. **Landing Page Conversions** (6 pages) - Convert existing pages to landing pages with CTAs:
   - index.astro → links to /cremation and /burial
   - catholic.astro → links to /catholic-cremation and /catholic-burial
   - veteran.astro → links to /veteran-cremation and /veteran-burial
   - es.astro → links to /cremation-es and /burial-es
   - catholic-es.astro → links to /catholic-cremation-es and /catholic-burial-es
   - veteran-es.astro → links to /veteran-cremation-es and /veteran-burial-es
5. **Layout.astro Updates** - Add alternate URL generation for all new routes in `getAlternateUrls()` function
6. **Font Spacing Fixes** - Apply `style="line-height: 1.2; letter-spacing: -0.02em;"` to hero h1 elements on any remaining pages

## Notes

- All pages should use the ServiceTabs component
- Font spacing fix: `style="line-height: 1.2; letter-spacing: -0.02em;"` on hero h1
- Catholic pages require special attention for Cardinal Laws and burial requirements
- All pages should include the 50/50 ratio messaging
- Language selection is handled by MarketingModal (already exists)
- **Spanish Catholic pages**: ✅ Fully translated - all content sections, form labels, and messages are in Spanish
- **Veteran pages**: ✅ All veteran pages (English and Spanish) completed - tab structures fixed, all content sections included

## Latest Session Summary (Current Status)

### ✅ Completed in Latest Session:
1. **Veteran Pages English** - ✅ FULLY COMPLETED
   - `veteran-cremation.astro` - Fixed tab structure, cremation content shows correctly when activeTab="cremation"
   - `veteran-burial.astro` - Created with activeTab="burial" and correct structure
   - Both pages include veteran-specific content sections and "Common Questions About Veteran Services"
   - Font spacing fix applied to hero headers
   - Correct `pageType="veteran"` set in Layout

2. **Veteran Pages Spanish** - ✅ FULLY COMPLETED
   - `veteran-cremation-es.astro` - All content fully translated to Spanish
   - `veteran-burial-es.astro` - All content fully translated to Spanish
   - Includes: hero text, all sections, form labels, placeholders, button text, script messages
   - Font spacing fix applied to hero headers
   - Veteran-specific content sections included in both tabs
   - ServiceTabs component with `language="es"` correctly configured

### ✅ All Known Issues Resolved:
- ✅ **veteran-cremation.astro**: Tab structure fixed - cremation content now shows when activeTab="cremation"
- ✅ All veteran pages (English and Spanish) created and properly structured

### 🔄 Immediate Next Steps for New Agent:
1. **Convert 6 Landing Pages** to include CTA buttons:
   - `index.astro` → links to `/cremation` and `/burial`
   - `catholic.astro` → links to `/catholic-cremation` and `/catholic-burial`
   - `veteran.astro` → links to `/veteran-cremation` and `/veteran-burial`
   - `es.astro` → links to `/cremation-es` and `/burial-es`
   - `catholic-es.astro` → links to `/catholic-cremation-es` and `/catholic-burial-es`
   - `veteran-es.astro` → links to `/veteran-cremation-es` and `/veteran-burial-es`
2. **Update Layout.astro** - Add alternate URL generation for all new routes in `getAlternateUrls()` function
3. **Apply Font Spacing Fixes** - Check all remaining pages and apply `style="line-height: 1.2; letter-spacing: -0.02em;"` to hero h1 elements if missing

## Technical Implementation Details

### Files Created/Modified in This Session:

#### Completed Files:
1. `src/pages/cremation-es.astro` - Complete Spanish translation
2. `src/pages/burial-es.astro` - Complete Spanish translation
3. `src/pages/catholic-cremation.astro` - Complete with all Catholic requirements
4. `src/pages/catholic-burial.astro` - Complete with all Catholic requirements

#### Completed Files (This Session):
5. `src/pages/catholic-cremation-es.astro` - ✅ Fully translated to Spanish
6. `src/pages/catholic-burial-es.astro` - ✅ Fully translated to Spanish
7. `src/pages/veteran-cremation.astro` - ✅ Fixed tab structure, fully completed
8. `src/pages/veteran-burial.astro` - ✅ Fully completed
9. `src/pages/veteran-cremation-es.astro` - ✅ Fully translated to Spanish
10. `src/pages/veteran-burial-es.astro` - ✅ Fully translated to Spanish

### Key Implementation Notes:

**Catholic Pages Structure:**
- Both Catholic pages include Cardinal Laws 1-5 in a dedicated section
- Catholic requirement note uses red-bordered box: `bg-red-50 border-l-4 border-red-500`
- Diocese notes section included before burial/cremation options
- "Why Do We Follow These Rules?" section included
- Font spacing fix applied: `style="line-height: 1.2; letter-spacing: -0.02em;"` on hero h1

**Spanish Pages:**
- All Spanish pages use `language="es"` in Layout component
- ServiceTabs component uses `language="es"` prop
- Spanish translations sourced from existing `es.astro` and `catholic-es.astro` files

**Next Agent Tasks (In Priority Order):**

1. **Convert Landing Pages** (6 files)
   - Add introductory block: "We offer both cremation and burial services - choose the option that best fits your needs and beliefs"
   - Add two prominent CTA buttons linking to respective cremation/burial pages
   - Keep existing hero sections and general content
   - Maintain page structure but add navigation to service pages

5. **Update Layout.astro**
   - Update `getAlternateUrls()` function to handle new routes:
     - `/cremation` ↔ `/cremation-es`
     - `/burial` ↔ `/burial-es`
     - `/catholic-cremation` ↔ `/catholic-cremation-es`
     - `/catholic-burial` ↔ `/catholic-burial-es`
     - `/veteran-cremation` ↔ `/veteran-cremation-es`
     - `/veteran-burial` ↔ `/veteran-burial-es`

6. **Apply Font Spacing Fix**
   - Add `style="line-height: 1.2; letter-spacing: -0.02em;"` to hero h1 elements
   - Check all pages and apply to any missing it
