# Footer Context-Aware Links Implementation Plan

## Overview
Make Footer links context-aware so they route to the correct page type (general/catholic/veteran) based on the current page.

## Current State Analysis

### Current Footer Component (`src/components/Footer.astro`)
- **Lines**: 60 lines total
- **Props**: Already receives `pageType` and `language`
- **Current Links** (lines 37-44):
  - Cremation: Only checks `language` → `/cremation` or `/cremation-es`
  - Burial: Only checks `language` → `/burial` or `/burial-es`
  - **Problem**: Ignores `pageType`, so Catholic pages link to general pages

### Route Structure
```
General Pages:
  /cremation          /cremation-es
  /burial             /burial-es
  /                   /es

Catholic Pages:
  /catholic-cremation    /catholic-cremation-es
  /catholic-burial       /catholic-burial-es
  /catholic              /catholic-es

Veteran Pages:
  /veteran-cremation     /veteran-cremation-es
  /veteran-burial        /veteran-burial-es
  /veteran               /veteran-es
```

## Implementation Strategy

### Step 1: Create Helper Functions (Frontmatter Section)
Add two helper functions in the frontmatter (after line 27, before the closing `---`):

```typescript
// Generate cremation link based on pageType and language
function getCremationLink(): string {
  const base = pageType === 'catholic' 
    ? '/catholic-cremation'
    : pageType === 'veteran'
    ? '/veteran-cremation'
    : '/cremation';
  
  return language === 'es' ? `${base}-es` : base;
}

// Generate burial link based on pageType and language
function getBurialLink(): string {
  const base = pageType === 'catholic'
    ? '/catholic-burial'
    : pageType === 'veteran'
    ? '/veteran-burial'
    : '/burial';
  
  return language === 'es' ? `${base}-es` : base;
}

const cremationLink = getCremationLink();
const burialLink = getBurialLink();
```

### Step 2: Update Link References (Template Section)
Replace the hardcoded links in the template:

**Line 37** - Change from:
```astro
<a href={language === 'es' ? '/cremation-es' : '/cremation'} ...>
```

To:
```astro
<a href={cremationLink} ...>
```

**Line 42** - Change from:
```astro
<a href={language === 'es' ? '/burial-es' : '/burial'} ...>
```

To:
```astro
<a href={burialLink} ...>
```

## Context Window Estimation

### Current File Size
- **Footer.astro**: ~60 lines
- **Frontmatter section**: ~28 lines (lines 1-28)
- **Template section**: ~32 lines (lines 30-59)

### Changes Required
1. **Add helper functions**: ~20 lines (in frontmatter)
2. **Update 2 link references**: 2 lines changed (in template)

### Estimated New File Size
- **Total**: ~80 lines (60 + 20 new lines)
- **Context needed**: ~100 lines (to see full file + some buffer)

### Complexity Assessment
- **Low complexity**: Simple conditional logic
- **No external dependencies**: Uses existing props
- **No breaking changes**: Backward compatible
- **Test coverage needed**: 9 scenarios (3 pageTypes × 3 languages)

## Test Matrix

| Current Page | Language | Expected Cremation Link | Expected Burial Link |
|-------------|----------|------------------------|---------------------|
| `/` (general) | en | `/cremation` | `/burial` |
| `/es` (general) | es | `/cremation-es` | `/burial-es` |
| `/catholic` | en | `/catholic-cremation` | `/catholic-burial` |
| `/catholic-es` | es | `/catholic-cremation-es` | `/catholic-burial-es` |
| `/veteran` | en | `/veteran-cremation` | `/veteran-burial` |
| `/veteran-es` | es | `/veteran-cremation-es` | `/veteran-burial-es` |
| `/catholic-cremation` | en | `/catholic-cremation` (same) | `/catholic-burial` |
| `/veteran-burial` | en | `/veteran-cremation` | `/veteran-burial` (same) |
| `/cremation-es` | es | `/cremation-es` (same) | `/burial-es` |

## Implementation Checklist

- [ ] Add `getCremationLink()` function to frontmatter
- [ ] Add `getBurialLink()` function to frontmatter
- [ ] Create `cremationLink` constant
- [ ] Create `burialLink` constant
- [ ] Update Cremation link href (line 37)
- [ ] Update Burial link href (line 42)
- [ ] Test on general pages (English & Spanish)
- [ ] Test on Catholic pages (English & Spanish)
- [ ] Test on Veteran pages (English & Spanish)
- [ ] Verify links work from service pages (cremation/burial pages themselves)

## Edge Cases to Consider

1. **Homepage links**: Footer on `/` should link to `/cremation` and `/burial` (general)
2. **Service page links**: Footer on `/catholic-cremation` should link to `/catholic-burial` (same type)
3. **Language consistency**: Links should match the current page's language
4. **Contact link**: No change needed (already uses anchor `#contact`)

## Alternative Approach (Simpler, Less DRY)

If we want to avoid helper functions, we could inline the logic:

```astro
<a href={
  language === 'es' 
    ? (pageType === 'catholic' ? '/catholic-cremation-es' : pageType === 'veteran' ? '/veteran-cremation-es' : '/cremation-es')
    : (pageType === 'catholic' ? '/catholic-cremation' : pageType === 'veteran' ? '/veteran-cremation' : '/cremation')
} ...>
```

**Pros**: Fewer lines, no helper functions
**Cons**: Less readable, duplicated logic, harder to maintain

**Recommendation**: Use helper functions for better maintainability.

## Estimated Implementation Time
- **Code changes**: 5-10 minutes
- **Testing**: 10-15 minutes
- **Total**: ~20 minutes

## Risk Assessment
- **Risk Level**: Low
- **Breaking Changes**: None (backward compatible)
- **Rollback**: Easy (simple file revert)
- **Impact**: High value (fixes navigation UX issue)
