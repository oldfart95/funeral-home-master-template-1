# Decision Tree Landing Page & Robots.txt Implementation Plan

## Overview
This plan implements two critical improvements:
1. **Robots.txt File** - Prevents search engines from indexing API routes and 404 pages
2. **Decision Tree Landing Pages** - Transforms landing pages into clear "choice portals" with specialized copy for each audience

---

## Part 1: Robots.txt Implementation

### Objective
Create a robots.txt file to prevent search engines from indexing:
- API routes (`/api/*`)
- 404 error pages
- Any other "junk" pages

### Implementation Steps

#### Step 1.1: Create robots.txt File
**Location:** `public/robots.txt`

**Content:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /404
Disallow: /404.html

Sitemap: https://example.com/sitemap.xml
```

**Note:** Update the Sitemap URL with the actual site URL from `astro.config.mjs` or environment variable.

#### Step 1.2: Verify robots.txt is Accessible
- Robots.txt should be accessible at `https://yoursite.com/robots.txt`
- Astro automatically serves files from the `public/` directory at the root

---

## Part 2: Decision Tree Landing Page Implementation

### Objective
Transform the landing pages (Catholic, Veteran, General) into clear "choice portals" that immediately present users with two choices:
1. **Cremation** - Using specialized copy ("Sacred Cremation", "Veteran Honors", etc.)
2. **Burial** - Using "Traditional Rites" copy

### Architecture: Component-Based Approach

Following the "Architect's" workflow to minimize code duplication:

1. **Create `ServiceChoicePortal.astro` component** - Single reusable component
2. **Pass copy as props** - Headline, body text, and links for each card
3. **Drop component into landing pages** - Use in `catholic.astro`, `veteran.astro`, and `index.astro`

---

## Part 3: Component Design - ServiceChoicePortal.astro

### Component Location
`src/components/ServiceChoicePortal.astro`

### Component Props Interface
```typescript
interface ServiceChoicePortalProps {
  // Cremation Card Props
  cremationHeadline: string;
  cremationBody: string;
  cremationLink: string;
  
  // Burial Card Props
  burialHeadline: string;
  burialBody: string;
  burialLink: string;
  
  // Optional: Section title/intro
  sectionTitle?: string;
  sectionIntro?: string;
}
```

### Component Structure
- **Container**: Responsive grid (side-by-side on desktop, stacked on mobile)
- **Cremation Card**: 
  - Headline (from props)
  - Body text (from props)
  - Call-to-action button linking to cremation page
  - Styling: Accent color theme
- **Burial Card**:
  - Headline (from props)
  - Body text (from props)
  - Call-to-action button linking to burial page
  - Styling: Primary color theme

### Design Specifications
- **Layout**: Two-column grid on desktop (`md:grid-cols-2`), single column on mobile
- **Card Styling**: 
  - White background with shadow
  - Border-top accent (4px) in accent color for cremation, primary color for burial
  - Padding: `p-6 md:p-8`
  - Rounded corners: `rounded-lg`
- **Typography**: 
  - Headlines: `text-2xl md:text-3xl font-heading font-bold text-primary`
  - Body: `text-base md:text-lg text-text leading-relaxed`
- **Buttons**: 
  - Full width within card
  - Hover states with transition
  - Match existing button styling from ServiceButtons component

---

## Part 4: Specialized Copy for Each Audience

### General Audience (index.astro)
**Cremation Card:**
- **Headline**: "Cremation Services"
- **Body**: "A modern approach to tradition, offering flexibility and personalized remembrance. Choose from direct cremation, memorial services, or full-service options that honor your loved one's memory."

**Burial Card:**
- **Headline**: "Traditional Burial"
- **Body**: "Honoring the timeless dignity of a final resting place with grace and reverence. We offer traditional farewells, simple services, graveside ceremonies, and immediate burial options."

### Catholic Audience (catholic.astro)
**Cremation Card:**
- **Headline**: "Sacred Cremation"
- **Body**: "Cremation services that honor Catholic traditions and Church teachings. We guide you through the proper Catholic cremation process, ensuring ashes are treated with the respect they deserve and buried in sacred ground."

**Burial Card:**
- **Headline**: "Traditional Rites"
- **Body**: "Full Catholic funeral services with visitation, Funeral Mass, and burial. We work closely with your parish to ensure every detail follows Catholic tradition and provides comfort to your family."

### Veteran Audience (veteran.astro)
**Cremation Card:**
- **Headline**: "Veteran Honors"
- **Body**: "Cremation services that recognize and honor military service. We help you access veteran benefits and ensure your service is remembered with the dignity and respect you've earned."

**Burial Card:**
- **Headline**: "Traditional Rites"
- **Body**: "Burial services with full military honors. We coordinate with the VA to ensure you receive all eligible benefits, including burial allowances, headstones, and cemetery services."

---

## Part 5: Landing Page Updates

### Step 5.1: Simplify Hero Sections

#### Current State
- Hero sections are lengthy with multiple paragraphs
- Company name and hero text take up significant space

#### New State
- **Simplified Hero**: 
  - Keep company name (left/top)
  - Shortened hero text (right/bottom)
  - Remove or condense the long paragraph
  - Maintain visual design (background image, overlay, attribution)

#### Hero Copy Updates

**General (index.astro):**
- **Headline**: "Planning Ahead for Peace of Mind"
- **Subtext**: "Thinking about the end of life can be hard. However, making plans now is one of the best gifts you can give to your family."

**Catholic (catholic.astro):**
- **Headline**: "Planning Ahead for Peace of Mind and Faith"
- **Subtext**: "For Catholics, planning ahead is a way to show our faith. We believe that death is not the end—it is a change. We believe that we will be with God."

**Veteran (veteran.astro):**
- **Headline**: "Planning Ahead for Peace of Mind"
- **Subtext**: "We honor our veterans and their families with specialized services and benefits assistance. Making plans now is one of the best gifts you can give to your family."

### Step 5.2: Replace ServiceButtons with ServiceChoicePortal

#### In `index.astro`:
1. Import `ServiceChoicePortal` component
2. Remove or comment out `<ServiceButtons />` (line 88)
3. Add `<ServiceChoicePortal />` with General audience props
4. Place immediately after "Our Story" section (after line 86)

#### In `catholic.astro`:
1. Import `ServiceChoicePortal` component
2. Remove or comment out `<ServiceButtons />` (line 88)
3. Add `<ServiceChoicePortal />` with Catholic audience props
4. Place immediately after "Our Story" section (after line 86)

#### In `veteran.astro`:
1. Import `ServiceChoicePortal` component
2. Remove or comment out `<ServiceButtons />` (line 88)
3. Add `<ServiceChoicePortal />` with Veteran audience props
4. Place immediately after "Our Story" section (after line 86)

### Step 5.3: Determine Links Dynamically

The component should use the same logic as `ServiceButtons.astro` to determine URLs:
- Detect page type from URL (`catholic`, `veteran`, or general)
- Detect language from URL (`-es` suffix or `/es` path)
- Generate appropriate links:
  - General: `/cremation` or `/cremation-es`, `/burial` or `/burial-es`
  - Catholic: `/catholic-cremation` or `/catholic-cremation-es`, `/catholic-burial` or `/catholic-burial-es`
  - Veteran: `/veteran-cremation` or `/veteran-cremation-es`, `/veteran-burial` or `/veteran-burial-es`

---

## Part 6: Implementation Checklist

### Phase 1: Robots.txt (Quick Win)
- [ ] Create `public/robots.txt` file
- [ ] Add disallow rules for `/api/` and `/404`
- [ ] Add sitemap reference (update with actual URL)
- [ ] Test robots.txt is accessible at root URL

### Phase 2: ServiceChoicePortal Component
- [ ] Create `src/components/ServiceChoicePortal.astro`
- [ ] Define TypeScript interface for props
- [ ] Implement responsive grid layout (2 columns desktop, 1 mobile)
- [ ] Style cremation card (accent color theme)
- [ ] Style burial card (primary color theme)
- [ ] Add hover states and transitions
- [ ] Test component in isolation

### Phase 3: Landing Page Updates
- [ ] **index.astro**:
  - [ ] Simplify hero section copy
  - [ ] Import ServiceChoicePortal
  - [ ] Replace ServiceButtons with ServiceChoicePortal
  - [ ] Pass General audience props
- [ ] **catholic.astro**:
  - [ ] Simplify hero section copy
  - [ ] Import ServiceChoicePortal
  - [ ] Replace ServiceButtons with ServiceChoicePortal
  - [ ] Pass Catholic audience props
- [ ] **veteran.astro**:
  - [ ] Simplify hero section copy
  - [ ] Import ServiceChoicePortal
  - [ ] Replace ServiceButtons with ServiceChoicePortal
  - [ ] Pass Veteran audience props

### Phase 4: Testing & Verification
- [ ] Test all three landing pages render correctly
- [ ] Verify links navigate to correct pages
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify Spanish versions work correctly (`-es` pages)
- [ ] Check that footer links still work correctly (context-aware)
- [ ] Verify robots.txt is accessible
- [ ] Test that API routes are blocked in robots.txt

---

## Part 7: Spanish Translation Considerations

### ServiceChoicePortal Component
The component should support Spanish text. Options:
1. **Pass Spanish text as separate props** (e.g., `cremationHeadlineEs`, `burialHeadlineEs`)
2. **Detect language in component** and use appropriate text
3. **Use language detection from URL** (same pattern as ServiceButtons)

**Recommended Approach**: Detect language in component (same as ServiceButtons) and use conditional rendering or a text object.

### Spanish Copy (to be provided/translated)

**General (index-es.astro):**
- Cremation: "Servicios de Cremación"
- Burial: "Entierro Tradicional"

**Catholic (catholic-es.astro):**
- Cremation: "Cremación Sagrada"
- Burial: "Ritos Tradicionales"

**Veteran (veteran-es.astro):**
- Cremation: "Honores para Veteranos"
- Burial: "Ritos Tradicionales"

---

## Part 8: Context-Aware Footer Integration

### Current State
The Footer component already implements context-aware links based on `pageType` and `language` props.

### Integration Point
The ServiceChoicePortal component will naturally lead users into the correct "bucket":
- Clicking "Cremation" on Catholic page → `/catholic-cremation`
- Footer on `/catholic-cremation` page → Shows Catholic cremation links
- This creates a seamless user journey

**No changes needed to Footer** - it already handles context correctly.

---

## Part 9: Migration Strategy

### Option A: Complete Replacement
- Remove `ServiceButtons.astro` entirely
- Replace all instances with `ServiceChoicePortal`

### Option B: Gradual Migration (Recommended)
- Keep `ServiceButtons.astro` for now
- Implement `ServiceChoicePortal` on landing pages
- Test thoroughly
- Remove `ServiceButtons` later if not needed elsewhere

**Recommendation**: Option B for safety, but Option A is cleaner if ServiceButtons is only used on landing pages.

---

## Part 10: Design Consistency

### Maintain Existing Design Language
- Use same color scheme (primary, secondary, accent)
- Match typography (font-heading, font sizes)
- Keep spacing consistent (py-10 md:py-24 for sections)
- Use existing button styles
- Maintain responsive breakpoints (sm, md, lg)

### Visual Hierarchy
1. **Hero Section** (simplified)
2. **Our Story Section** (keep as is)
3. **ServiceChoicePortal** (NEW - decision tree)
4. **Rest of content** (cremation options, burial options, etc.)

---

## Part 11: Technical Notes

### Astro Component Best Practices
- Use TypeScript interfaces for props
- Keep component logic in frontmatter (`---`)
- Use Astro's built-in URL detection
- Leverage Tailwind classes for styling

### Performance Considerations
- Component is server-rendered (Astro)
- No client-side JavaScript needed for basic functionality
- Links are standard anchor tags (no SPA routing)

### Accessibility
- Ensure proper heading hierarchy
- Use semantic HTML (`<section>`, `<article>`)
- Maintain proper link text (not just "Click here")
- Ensure sufficient color contrast
- Test keyboard navigation

---

## Part 12: Success Criteria

### Robots.txt
✅ File is accessible at `/robots.txt`
✅ API routes are disallowed
✅ 404 page is disallowed
✅ Sitemap reference is correct

### Decision Tree Landing Pages
✅ Hero sections are simplified and focused
✅ ServiceChoicePortal appears immediately after "Our Story"
✅ Two clear cards (Cremation and Burial) are visible
✅ Cards use specialized copy for each audience
✅ Links navigate to correct pages
✅ Responsive design works on all screen sizes
✅ Spanish versions work correctly
✅ Footer links remain context-aware

---

## Part 13: Future Enhancements (Out of Scope)

These are nice-to-haves but not part of this implementation:
- Animation on card hover (subtle lift/shadow)
- Icons for cremation/burial cards
- A/B testing different copy variations
- Analytics tracking on card clicks
- Progressive enhancement with JavaScript

---

## Implementation Order

1. **Start with robots.txt** (5 minutes) - Quick win
2. **Build ServiceChoicePortal component** (30-45 minutes) - Core functionality
3. **Update one landing page** (index.astro) - Test pattern
4. **Update remaining landing pages** (catholic.astro, veteran.astro) - Apply pattern
5. **Test thoroughly** - All pages, all languages, all screen sizes
6. **Clean up** - Remove ServiceButtons if no longer needed

---

## Estimated Time

- **Robots.txt**: 5 minutes
- **ServiceChoicePortal Component**: 45 minutes
- **Landing Page Updates**: 30 minutes (10 minutes per page)
- **Testing & Polish**: 30 minutes
- **Total**: ~2 hours

---

## Notes

- The ServiceButtons component can be kept for now and removed later if not needed
- Spanish translations should be verified/updated
- The sitemap URL in robots.txt needs to be updated with the actual site URL
- Consider adding a visual separator or spacing between "Our Story" and ServiceChoicePortal for better visual flow
