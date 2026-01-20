# Phase 1 Refactoring Plan - Component Migration

## Overview

This document outlines the Phase 1 refactoring completed and the remaining work to migrate all pages to use the new modular components.

## ✅ Completed Work

### Components Created

1. **`src/components/OurStory.astro`**
   - Replaces the "Our Story Section" that appears on all landing pages
   - Supports English (`en`) and Spanish (`es`) languages
   - Props: `language?: 'en' | 'es'` (defaults to 'en')
   - Usage: `<OurStory language={isSpanish ? 'es' : 'en'} />`

2. **`src/components/OngoingCare.astro`**
   - Replaces the "Ongoing Care Section" that appears on all pages
   - Supports English (`en`) and Spanish (`es`) languages
   - Props: `language?: 'en' | 'es'` (defaults to 'en')
   - Usage: `<OngoingCare language={isSpanish ? 'es' : 'en'} />`

3. **`src/components/ContactForm.astro`**
   - Replaces the entire "Contact & Support Section" including:
     - Section wrapper with heading and description
     - Phone number badge
     - Contact form with all fields
     - Complete validation script (client-side and API error handling)
   - Supports English (`en`) and Spanish (`es`) languages
   - Props: `language?: 'en' | 'es'` (defaults to 'en')
   - Usage: `<ContactForm language={isSpanish ? 'es' : 'en'} />`
   - Includes all form validation, error messages, and success messages in both languages

### Test Implementation

✅ **`src/pages/index.astro`** - Successfully migrated as test page
- Removed ~270 lines of duplicated code
- All three components integrated and working
- No linter errors
- Functionality preserved

## 📋 Remaining Work

### Pages to Migrate

The following 17 pages need to be migrated to use the new components:

1. `src/pages/es.astro` (Spanish index)
2. `src/pages/catholic.astro`
3. `src/pages/catholic-es.astro`
4. `src/pages/veteran.astro`
5. `src/pages/veteran-es.astro`
6. `src/pages/burial.astro`
7. `src/pages/burial-es.astro`
8. `src/pages/cremation.astro`
9. `src/pages/cremation-es.astro`
10. `src/pages/catholic-burial.astro`
11. `src/pages/catholic-burial-es.astro`
12. `src/pages/catholic-cremation.astro`
13. `src/pages/catholic-cremation-es.astro`
14. `src/pages/veteran-burial.astro`
15. `src/pages/veteran-burial-es.astro`
16. `src/pages/veteran-cremation.astro`
17. `src/pages/veteran-cremation-es.astro`

## 🔧 Migration Steps for Each Page

For each page, perform the following steps:

### Step 1: Add Component Imports

Add these imports at the top of the file (after existing imports):

```astro
import OurStory from '../components/OurStory.astro';
import OngoingCare from '../components/OngoingCare.astro';
import ContactForm from '../components/ContactForm.astro';
```

### Step 2: Replace "Our Story Section"

**Find and remove:**
```astro
<!-- Our Story Section -->
<section class="py-10 md:py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center">
        [English or Spanish text]
      </p>
      <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center mt-4 md:mt-6">
        [English or Spanish text]
      </p>
      <!-- Decorative Line -->
      <div class="flex justify-center mt-6 md:mt-8 mb-6 md:mb-8">
        <div class="w-1/2 max-w-md h-1 bg-text/40"></div>
      </div>
    </div>
  </div>
</section>
```

**Replace with:**
```astro
<OurStory language={isSpanish ? 'es' : 'en'} />
```

### Step 3: Replace "Ongoing Care Section"

**Find and remove:**
```astro
<!-- Ongoing Care Section -->
<section class="py-10 md:py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center">
        [English or Spanish text]
      </p>
    </div>
  </div>
</section>
```

**Replace with:**
```astro
<OngoingCare language={isSpanish ? 'es' : 'en'} />
```

### Step 4: Replace "Contact & Support Section"

**Find and remove:**
- The entire `<!-- Contact & Support Section -->` section (including the `<section>` tag)
- The entire `<script>` block that follows it (the form validation script)

**Replace with:**
```astro
<ContactForm language={isSpanish ? 'es' : 'en'} />
```

**Note:** The ContactForm component includes:
- The section wrapper
- Heading and description
- Phone badge
- Complete form
- All validation scripts

### Step 5: Remove Unused Imports

After migration, check if these imports are still used:
- `formatPhoneDisplay` and `formatPhoneTel` from `../utils/phone` - Remove if not used elsewhere
- `siteDetails` - Keep if used elsewhere in the page

### Step 6: Verify

- Check that the page still renders correctly
- Test the contact form submission
- Verify language switching works (if applicable)
- Check for linter errors

## 👥 Agent Assignments

### Agent 1: General Pages (5 pages)

**Pages to migrate:**
1. `src/pages/es.astro`
2. `src/pages/burial.astro`
3. `src/pages/burial-es.astro`
4. `src/pages/cremation.astro`
5. `src/pages/cremation-es.astro`

**Notes:**
- These are the general (non-Catholic, non-Veteran) pages
- Follow the migration steps above
- Test both English and Spanish versions

---

### Agent 2: Catholic Pages - Part 1 (5 pages)

**Pages to migrate:**
1. `src/pages/catholic.astro`
2. `src/pages/catholic-es.astro`
3. `src/pages/catholic-burial.astro`
4. `src/pages/catholic-burial-es.astro`
5. `src/pages/catholic-cremation.astro`

**Notes:**
- These are Catholic-specific pages
- Follow the migration steps above
- Test both English and Spanish versions
- Catholic pages may have additional unique content sections - only replace the three specified sections

---

### Agent 3: Catholic & Veteran Pages - Part 1 (5 pages)

**Pages to migrate:**
1. `src/pages/catholic-cremation-es.astro`
2. `src/pages/veteran.astro`
3. `src/pages/veteran-es.astro`
4. `src/pages/veteran-burial.astro`
5. `src/pages/veteran-burial-es.astro`

**Notes:**
- Mix of Catholic and Veteran pages
- Follow the migration steps above
- Test both English and Spanish versions
- Veteran pages may have additional unique content sections - only replace the three specified sections

---

### Agent 4: Veteran Pages - Part 2 (2 pages)

**Pages to migrate:**
1. `src/pages/veteran-cremation.astro`
2. `src/pages/veteran-cremation-es.astro`

**Notes:**
- These are the remaining Veteran cremation pages
- Follow the migration steps above
- Test both English and Spanish versions
- Veteran pages may have additional unique content sections - only replace the three specified sections

---

## ⚠️ Important Notes

1. **Only Replace Specified Sections**: Only replace the three sections mentioned (Our Story, Ongoing Care, Contact Form). Do NOT modify other page-specific content.

2. **Language Detection**: Most pages already have `isSpanish` variable defined. Use it for the `language` prop. If not present, check the pathname:
   ```astro
   const isSpanish = pathname.includes('-es') || pathname === '/es';
   ```

3. **Preserve Page-Specific Content**: Each page has unique content sections (Catholic rules, Veteran benefits, service-specific information, etc.). These should remain untouched.

4. **Test After Migration**: After migrating each page:
   - Verify it renders correctly
   - Test the contact form
   - Check browser console for errors
   - Verify responsive design

5. **No Breaking Changes**: The old code should work until all pages are migrated. This is a safe, incremental refactoring.

## 📊 Progress Tracking

- ✅ **Completed**: `index.astro` (test page)
- ⏳ **Agent 1**: 0/5 pages
- ⏳ **Agent 2**: 0/5 pages
- ⏳ **Agent 3**: 0/5 pages
- ✅ **Agent 4**: 2/2 pages
  - ✅ `veteran-cremation.astro`
  - ✅ `veteran-cremation-es.astro`

**Total Progress**: 3/18 pages (16.7%)

## 🎯 Success Criteria

Each page migration is complete when:
- ✅ All three components are imported
- ✅ All three sections are replaced with components
- ✅ Page renders without errors
- ✅ Contact form works correctly
- ✅ Language switching works (if applicable)
- ✅ No linter errors
- ✅ No unused imports remain

## 📝 Example: Before and After

### Before (index.astro - old code):
```astro
<!-- Our Story Section -->
<section class="py-10 md:py-16 bg-white">
  <!-- ... 15 lines of code ... -->
</section>

<!-- ... other content ... -->

<!-- Ongoing Care Section -->
<section class="py-10 md:py-16 bg-white">
  <!-- ... 8 lines of code ... -->
</section>

<!-- Contact & Support Section -->
<section id="contact" class="py-10 md:py-24 bg-white">
  <!-- ... 100+ lines of form code ... -->
</section>

<script>
  <!-- ... 150+ lines of validation script ... -->
</script>
```

### After (index.astro - new code):
```astro
<OurStory language={isSpanish ? 'es' : 'en'} />

<!-- ... other content ... -->

<OngoingCare language={isSpanish ? 'es' : 'en'} />

<ContactForm language={isSpanish ? 'es' : 'en'} />
```

**Result**: ~270 lines reduced to 3 component calls!

---

## Questions or Issues?

If you encounter any issues during migration:
1. Check that the component imports are correct
2. Verify the `isSpanish` variable is defined
3. Ensure you're only replacing the exact sections specified
4. Test the page in a browser to verify functionality
5. Check for linter errors

Good luck with the migration! 🚀
