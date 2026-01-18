# Migration Progress Checklist

Use this checklist to track progress as changes are applied across all pages.

## Landing Pages (6 pages) ✅ COMPLETE

### General Landing Pages
- [x] `src/pages/index.astro` ✅ (COMPLETE - Reference file)
- [x] `src/pages/es.astro` ✅ (Spanish general landing page) - COMPLETE

### Catholic Landing Pages
- [x] `src/pages/catholic.astro` ✅ (English Catholic landing page) - COMPLETE
- [x] `src/pages/catholic-es.astro` ✅ (Spanish Catholic landing page) - COMPLETE

### Veteran Landing Pages
- [x] `src/pages/veteran.astro` ✅ (English Veteran landing page) - COMPLETE
- [x] `src/pages/veteran-es.astro` ✅ (Spanish Veteran landing page) - COMPLETE

---

## Service Pages with Burial Sections (6 pages) ✅ COMPLETE

**Note**: These are nested service pages that require iteration. Each page needs hero section updates, burial section updates, and Ongoing Care section addition.

### General Burial Pages
- [x] `src/pages/burial.astro` ✅ - COMPLETE
- [x] `src/pages/burial-es.astro` ✅ - COMPLETE

### Catholic Burial Pages
- [x] `src/pages/catholic-burial.astro` ✅ - COMPLETE
- [x] `src/pages/catholic-burial-es.astro` ✅ - COMPLETE

### Veteran Burial Pages
- [x] `src/pages/veteran-burial.astro` ✅ - COMPLETE
- [x] `src/pages/veteran-burial-es.astro` ✅ - COMPLETE

---

## Service Pages with Cremation Sections (6 pages) ✅ COMPLETE

**Note**: These are nested service pages that require iteration. Each page needs hero section updates, cremation section intro text, and Ongoing Care section addition.

### General Cremation Pages
- [x] `src/pages/cremation.astro` ✅ - COMPLETE
- [x] `src/pages/cremation-es.astro` ✅ - COMPLETE

### Catholic Cremation Pages
- [x] `src/pages/catholic-cremation.astro` ✅ - COMPLETE
- [x] `src/pages/catholic-cremation-es.astro` ✅ - COMPLETE

### Veteran Cremation Pages
- [x] `src/pages/veteran-cremation.astro` ✅ - COMPLETE
- [x] `src/pages/veteran-cremation-es.astro` ✅ - COMPLETE

---

## Per-Page Checklist

For each page, verify:

### Hero Section
- [ ] Responsive classes updated (py-8, min-h-[300px], w-full md:w-auto)
- [ ] Text alignment updated (text-left md:text-right)
- [ ] Attribution footnote added at bottom-right
- [ ] Responsive text sizes applied

### Our Story Section (Landing pages only)
- [ ] Section added after hero
- [ ] Both paragraphs included
- [ ] Decorative line added
- [ ] Correct language (English/Spanish)

### Cremation Section (if present)
- [ ] Introductory italic text added
- [ ] Correct language (English/Spanish)

### Burial Section (if present)
- [ ] Container width updated to max-w-7xl
- [ ] Grid classes updated (grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6)
- [ ] Introductory italic text added
- [ ] All four burial option cards updated
- [ ] Text sizes updated (text-xs md:text-sm, text-[10px] md:text-xs)
- [ ] Correct language (English/Spanish)

### Ongoing Care Section
- [ ] Section added before contact form
- [ ] Correct language (English/Spanish)

### Testing
- [ ] Mobile responsive check
- [ ] Tablet responsive check
- [ ] Desktop responsive check
- [ ] All text displays correctly
- [ ] Translations verified
- [ ] No console errors

---

## Notes Section

Use this area to track any issues or special considerations:

### Page: ________________
**Date**: ________________
**Completed by**: ________________
**Notes**: 
- 
- 
- 

---

## Overall Progress

**Total Pages**: 18
**Completed**: 18 / 18
**In Progress**: 0 / 18
**Not Started**: 0 / 18

**Completion Percentage**: 100%

### Breakdown:
- ✅ **Landing Pages**: 6/6 complete (100%)
- ✅ **Burial Service Pages**: 6/6 complete (100%)
- ✅ **Cremation Service Pages**: 6/6 complete (100%)

---

## Priority Order

1. ✅ **High Priority** - Landing pages (6/6 COMPLETE)
2. ✅ **Medium Priority** - Burial service pages (6/6 COMPLETE)
3. ✅ **Low Priority** - Cremation service pages (6/6 COMPLETE)

---

## Important Notes

### Nested Service Pages
The burial and cremation service pages are **nested pages** that require individual iteration. Each page needs:
1. Hero section responsive updates + attribution footnote
2. Burial/Cremation section updates (container width, grid classes, intro text, card content)
3. Ongoing Care section before contact form

These pages have different structures than landing pages (they use ServiceNav component and may have different section ordering), so each needs careful review and application of changes.

---

**Last Updated**: 2024-12-19
**Status**: All pages complete (18/18). Migration complete! ✅
