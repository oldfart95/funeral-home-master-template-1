# Site Uniformity Migration Guide

## Overview
This document provides comprehensive instructions for applying all changes made to `src/pages/index.astro` across all pages in the site to ensure uniformity. This includes both English and Spanish versions, as well as all page types (general, Catholic, and Veteran).

## Current Status

### ✅ Landing Pages - COMPLETE (6/6)
All landing pages have been updated with:
- Hero section responsive improvements + attribution footnote
- Our Story section
- Updated burial sections with new cards and intro text
- Cremation section intro text
- Ongoing Care section

**Completed Pages:**
1. ✅ `src/pages/index.astro` (Reference file)
2. ✅ `src/pages/es.astro`
3. ✅ `src/pages/catholic.astro`
4. ✅ `src/pages/catholic-es.astro`
5. ✅ `src/pages/veteran.astro`
6. ✅ `src/pages/veteran-es.astro`

### ✅ Service Pages - IN PROGRESS (6/12 complete)

**Note**: These are nested service pages that require individual iteration. Each page has a different structure (uses ServiceNav component) and needs careful review.

#### Burial Service Pages (6/6 complete) ✅
- ✅ `src/pages/burial.astro` - COMPLETE
- ✅ `src/pages/burial-es.astro` - COMPLETE
- ✅ `src/pages/catholic-burial.astro` - COMPLETE
- ✅ `src/pages/catholic-burial-es.astro` - COMPLETE
- ✅ `src/pages/veteran-burial.astro` - COMPLETE
- ✅ `src/pages/veteran-burial-es.astro` - COMPLETE

#### Cremation Service Pages (0/6 complete)
- ⏳ `src/pages/cremation.astro` - PENDING
- ⏳ `src/pages/cremation-es.astro` - PENDING
- ⏳ `src/pages/catholic-cremation.astro` - PENDING
- ⏳ `src/pages/catholic-cremation-es.astro` - PENDING
- ⏳ `src/pages/veteran-cremation.astro` - PENDING
- ⏳ `src/pages/veteran-cremation-es.astro` - PENDING

## Target Pages

### Landing Pages (6 pages) ✅ COMPLETE
1. `src/pages/index.astro` ✅ (Reference file)
2. `src/pages/es.astro` ✅
3. `src/pages/catholic.astro` ✅
4. `src/pages/catholic-es.astro` ✅
5. `src/pages/veteran.astro` ✅
6. `src/pages/veteran-es.astro` ✅

### Service Pages (12 pages - require iteration)
- General: `cremation.astro`, `cremation-es.astro`, `burial.astro` ✅, `burial-es.astro` ✅
- Catholic: `catholic-cremation.astro`, `catholic-cremation-es.astro`, `catholic-burial.astro`, `catholic-burial-es.astro`
- Veteran: `veteran-cremation.astro`, `veteran-cremation-es.astro`, `veteran-burial.astro`, `veteran-burial-es.astro`

---

## Changes Summary

### 1. Hero Section Responsive Improvements
**Location**: Hero section (lines 27-68 in index.astro)

**Changes Made**:
- Reduced mobile padding: `py-12` → `py-8`
- Reduced mobile min-height: `min-h-[400px]` → `min-h-[300px]`
- Added explicit width classes for mobile: `w-full md:w-auto`
- Changed text alignment: `text-left md:text-right` (was `text-justify md:text-right`)
- Added responsive text sizes
- Added margin-top on mobile: `mt-4 md:mt-0`

**Code to Apply**:
```astro
<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-8 md:py-32 overflow-hidden">
  <!-- Background Image with Overlay -->
  <div class="absolute inset-0 z-0">
    <img 
      src="/images/hero.webp" 
      alt="Peaceful memorial setting" 
      class="w-full h-full object-cover"
    />
    <!-- Dark overlay for text readability -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary-dark/40 to-primary-light/40"></div>
  </div>
  
  <!-- Content -->
  <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 min-h-[300px] md:min-h-[500px] py-4 md:py-0">
      <!-- Company Name - Left/Top -->
      <div class="flex-1 w-full md:w-auto">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold drop-shadow-lg" style="line-height: 1.2; letter-spacing: -0.02em;">
          {displayCompanyName}
        </h1>
      </div>
      
      <!-- Hero Text - Center Right -->
      <div class="flex-1 w-full md:flex-none md:w-1/2 lg:w-2/5 text-left md:text-right mt-4 md:mt-0">
        <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-6 drop-shadow-lg" style="line-height: 1.2; letter-spacing: -0.02em;">
          Planning Ahead for Peace of Mind
        </h2>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-md text-left md:text-right">
          Thinking about the end of life can be hard. However, making plans now is one of the best gifts you can give to your family.
        </p>
      </div>
    </div>
  </div>
  
  <!-- Attribution Footnote -->
  <div class="absolute bottom-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pb-3 md:pb-4">
    <p class="text-xs sm:text-sm text-white/80 drop-shadow-md text-right">
      Provided by Arbaugh-Pearce-Greenisen & Sons
    </p>
  </div>
</section>
```

**Translation Notes**:
- Hero heading "Planning Ahead for Peace of Mind" → Spanish: "Planificar con Anticipación para la Tranquilidad"
- Hero paragraph → Spanish: "Pensar en el final de la vida puede ser difícil. Sin embargo, hacer planes ahora es uno de los mejores regalos que puede darle a su familia."
- Attribution text stays the same (company name doesn't change)

---

### 2. Attribution Footnote in Hero Section
**Location**: Bottom-right of hero section (lines 62-67)

**Code to Add** (if not already present):
```astro
<!-- Attribution Footnote -->
<div class="absolute bottom-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pb-3 md:pb-4">
  <p class="text-xs sm:text-sm text-white/80 drop-shadow-md text-right">
    Provided by Arbaugh-Pearce-Greenisen & Sons
  </p>
</div>
```

**Translation**: No translation needed - company name stays the same in all languages.

---

### 3. "Our Story" Section
**Location**: After hero section, before ServiceButtons component (lines 70-86)

**Code to Add**:
```astro
<!-- Our Story Section -->
<section class="py-10 md:py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center">
        Our family has been a steady hand for our community for over 120 years. We believe that every life tells a unique story, and our role is to ensure that story is told with dignity, respect, and a meticulous attention to detail.
      </p>
      <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center mt-4 md:mt-6">
        We understand the traditions and values that define our community. From the first call to the final farewell, we serve as more than just directors—we are neighbors caring for neighbors.
      </p>
      <!-- Decorative Line -->
      <div class="flex justify-center mt-6 md:mt-8 mb-6 md:mb-8">
        <div class="w-1/2 max-w-md h-1 bg-text/40"></div>
      </div>
    </div>
  </div>
</section>
```

**Spanish Translation**:
```astro
<!-- Our Story Section -->
<section class="py-10 md:py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center">
        Nuestra familia ha sido una mano firme para nuestra comunidad durante más de 120 años. Creemos que cada vida cuenta una historia única, y nuestro papel es asegurar que esa historia se cuente con dignidad, respeto y una atención meticulosa a los detalles.
      </p>
      <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center mt-4 md:mt-6">
        Entendemos las tradiciones y valores que definen nuestra comunidad. Desde la primera llamada hasta la despedida final, servimos como algo más que directores: somos vecinos que cuidan a vecinos.
      </p>
      <!-- Decorative Line -->
      <div class="flex justify-center mt-6 md:mt-8 mb-6 md:mb-8">
        <div class="w-1/2 max-w-md h-1 bg-text/40"></div>
      </div>
    </div>
  </div>
</section>
```

**Placement**: Insert this section immediately after the hero section closes (`</section>`) and before `<ServiceButtons />`.

---

### 4. Cremation Section Introductory Text
**Location**: Inside Cremation Options section, after the heading (lines 97-99)

**Code to Add** (after the h2 heading):
```astro
<h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">
  Cremation Options
</h2>
<p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
  A modern approach to tradition, offering flexibility and personalized remembrance.
</p>
```

**Spanish Translation**:
```astro
<h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">
  Opciones de Cremación
</h2>
<p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
  Un enfoque moderno a la tradición, ofreciendo flexibilidad y remembranza personalizada.
</p>
```

**Note**: This should be added BEFORE the existing paragraph that starts with "There are different ways to handle cremation..."

---

### 5. Burial Section Introductory Text
**Location**: Inside Burial Options section, after the heading (lines 209-211)

**Code to Add** (after the h2 heading):
```astro
<h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">
  Burial Options
</h2>
<p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
  Honoring the timeless dignity of a final resting place with grace and reverence.
</p>
```

**Spanish Translation**:
```astro
<h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">
  Opciones de Entierro
</h2>
<p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
  Honrando la dignidad atemporal de un lugar de descanso final con gracia y reverencia.
</p>
```

**Note**: This should be added BEFORE the existing paragraph that starts with "If you prefer burial instead of cremation..."

---

### 6. Updated Burial Options Content
**Location**: Burial Options section, the four option cards (lines 216-279)

**Changes Made**:
- Reduced text size: `text-sm md:text-base` → `text-xs md:text-sm`
- Subtitle text size: `text-xs md:text-sm` → `text-[10px] md:text-xs`
- Updated container width: `max-w-4xl` → `max-w-7xl`
- Updated grid: `grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6` → `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6`
- Added subtitle paragraphs for each option
- Updated description text for all four options

**Full Code for Burial Options Section**:
```astro
<!-- Burial Options Section -->
<section class="py-10 md:py-24 bg-white mt-8 md:mt-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">
        Burial Options
      </h2>
      <p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
        Honoring the timeless dignity of a final resting place with grace and reverence.
      </p>
      <p class="text-base md:text-xl text-text text-center mb-6 md:mb-12">
        If you prefer burial instead of cremation, there are affordable choices for that, too.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <!-- Traditional Farewell -->
        <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent">
          <div class="flex items-center gap-2 mb-3">
            <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
              Traditional Farewell
            </h3>
          </div>
          <p class="text-[10px] md:text-xs font-semibold text-primary mb-2">
            The Classic Tribute
          </p>
          <p class="text-xs md:text-sm text-text leading-relaxed">
            This is a full service for families who want to follow time-honored traditions. It includes a visitation for friends to gather, a formal funeral service, and a procession to the cemetery. We handle every detail to ensure a respectful and complete goodbye.
          </p>
        </div>
        
        <!-- Simple Farewell -->
        <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent">
          <div class="flex items-center gap-2 mb-3">
            <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
              Simple Farewell
            </h3>
          </div>
          <p class="text-[10px] md:text-xs font-semibold text-primary mb-2">
            A Focused Remembrance
          </p>
          <p class="text-xs md:text-sm text-text leading-relaxed">
            This option offers a beautiful service in a shorter timeframe. It includes a time for family and friends to share memories followed by a meaningful ceremony. It is designed for those who want a professional and dignified day focused on the essentials of saying goodbye.
          </p>
        </div>
        
        <!-- Graveside Service -->
        <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent">
          <div class="flex items-center gap-2 mb-3">
            <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 11a3 3 0 11-6 0m6 0a3 3 0 10-6 0m6 0H9m3 0v1m0-1v-1m0 1H9m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
              Graveside Service
            </h3>
          </div>
          <p class="text-[10px] md:text-xs font-semibold text-primary mb-2">
            A Quiet Outdoor Tribute
          </p>
          <p class="text-xs md:text-sm text-text leading-relaxed">
            This service takes place entirely at the cemetery. It is a calm and elegant way to honor your loved one under the open sky. We coordinate everything at the resting place, allowing you to focus on a quiet moment of reflection with those closest to you.
          </p>
        </div>
        
        <!-- Immediate Burial -->
        <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent">
          <div class="flex items-center gap-2 mb-3">
            <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
              Immediate Burial
            </h3>
          </div>
          <p class="text-[10px] md:text-xs font-semibold text-primary mb-2">
            A Simple, Private Path
          </p>
          <p class="text-xs md:text-sm text-text leading-relaxed">
            This is our most straightforward burial choice. It is a modest option for families who do not wish to have a public ceremony. We provide professional care and transportation to ensure a private and dignified burial takes place promptly.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Spanish Translations for Burial Options**:

**Titles**:
- "Traditional Farewell" → "Despedida Tradicional"
- "Simple Farewell" → "Despedida Simple"
- "Graveside Service" → "Servicio en el Cementerio"
- "Immediate Burial" → "Entierro Inmediato"

**Subtitles**:
- "The Classic Tribute" → "El Tributo Clásico"
- "A Focused Remembrance" → "Un Recuerdo Enfocado"
- "A Quiet Outdoor Tribute" → "Un Tributo Silencioso al Aire Libre"
- "A Simple, Private Path" → "Un Camino Simple y Privado"

**Descriptions** (Spanish):
1. **Traditional Farewell**: "Este es un servicio completo para familias que desean seguir tradiciones consagradas por el tiempo. Incluye una visita para que los amigos se reúnan, un servicio funerario formal y una procesión al cementerio. Nos encargamos de cada detalle para asegurar una despedida respetuosa y completa."

2. **Simple Farewell**: "Esta opción ofrece un hermoso servicio en un período de tiempo más corto. Incluye un tiempo para que la familia y los amigos compartan recuerdos seguido de una ceremonia significativa. Está diseñado para aquellos que desean un día profesional y digno enfocado en lo esencial de despedirse."

3. **Graveside Service**: "Este servicio tiene lugar completamente en el cementerio. Es una forma tranquila y elegante de honrar a su ser querido bajo el cielo abierto. Coordinamos todo en el lugar de descanso, permitiéndole enfocarse en un momento tranquilo de reflexión con aquellos más cercanos a usted."

4. **Immediate Burial**: "Esta es nuestra opción de entierro más directa. Es una opción modesta para familias que no desean tener una ceremonia pública. Proporcionamos cuidado profesional y transporte para asegurar que un entierro privado y digno tenga lugar de inmediato."

---

### 7. "Ongoing Care" Section Before Contact Form
**Location**: Before Contact & Support section (lines 368-377)

**Code to Add**:
```astro
<!-- Ongoing Care Section -->
<section class="py-10 md:py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center">
        Our care does not end when the service concludes. We are here to assist with the practicalities of loss—from grief resources to assistance with documentation—ensuring you never have to navigate the path forward alone.
      </p>
    </div>
  </div>
</section>
```

**Spanish Translation**:
```astro
<!-- Ongoing Care Section -->
<section class="py-10 md:py-16 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center">
        Nuestro cuidado no termina cuando concluye el servicio. Estamos aquí para ayudar con las practicidades de la pérdida—desde recursos de duelo hasta asistencia con documentación—asegurando que nunca tenga que navegar el camino hacia adelante solo.
      </p>
    </div>
  </div>
</section>
```

**Placement**: Insert this section immediately before the "Contact & Support Section" (`<!-- Contact & Support Section -->`).

---

## Implementation Checklist

### For Each Landing Page:

- [ ] **Hero Section**
  - [ ] Update responsive classes (py-8, min-h-[300px], w-full md:w-auto, etc.)
  - [ ] Update text alignment (text-left md:text-right)
  - [ ] Add attribution footnote at bottom-right
  - [ ] Verify responsive text sizes

- [ ] **Our Story Section**
  - [ ] Add complete "Our Story" section after hero
  - [ ] Add decorative line
  - [ ] Apply correct translations (English/Spanish)

- [ ] **Cremation Section** (if present)
  - [ ] Add introductory italic text before existing paragraph
  - [ ] Apply correct translations

- [ ] **Burial Section** (if present)
  - [ ] Update container width to max-w-7xl
  - [ ] Update grid classes (grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6)
  - [ ] Add introductory italic text
  - [ ] Update all four burial option cards with new content
  - [ ] Update text sizes (text-xs md:text-sm for descriptions, text-[10px] md:text-xs for subtitles)
  - [ ] Apply correct translations

- [ ] **Ongoing Care Section**
  - [ ] Add section before contact form
  - [ ] Apply correct translations

---

## Page-Specific Notes

### Landing Pages Only
These pages should have ALL sections:
- Hero (with attribution)
- Our Story
- ServiceButtons component
- Cremation Options (with intro text)
- Burial Options (with intro text and updated cards)
- Planning & FAQ
- Cemetery/Headstone Help
- Ongoing Care
- Contact Form

### Service Pages (Cremation/Burial)
These pages may only need:
- Hero section updates (responsive improvements + attribution)
- Cremation/Burial section intro text (if they have those sections)
- Ongoing Care section (before contact form)

**Note**: Service pages may have different structures (tabs, etc.), so apply changes carefully.

---

## Translation Reference

### Key Phrases to Translate

| English | Spanish |
|---------|---------|
| Planning Ahead for Peace of Mind | Planificar con Anticipación para la Tranquilidad |
| Thinking about the end of life can be hard. However, making plans now is one of the best gifts you can give to your family. | Pensar en el final de la vida puede ser difícil. Sin embargo, hacer planes ahora es uno de los mejores regalos que puede darle a su familia. |
| Our family has been a steady hand for our community for over 120 years... | Nuestra familia ha sido una mano firme para nuestra comunidad durante más de 120 años... |
| A modern approach to tradition, offering flexibility and personalized remembrance. | Un enfoque moderno a la tradición, ofreciendo flexibilidad y remembranza personalizada. |
| Honoring the timeless dignity of a final resting place with grace and reverence. | Honrando la dignidad atemporal de un lugar de descanso final con gracia y reverencia. |
| Our care does not end when the service concludes... | Nuestro cuidado no termina cuando concluye el servicio... |
| Provided by Arbaugh-Pearce-Greenisen & Sons | Provided by Arbaugh-Pearce-Greenisen & Sons (No translation) |

---

## Testing Checklist

After applying changes to each page:

- [ ] Verify hero section is responsive on mobile
- [ ] Check attribution appears at bottom-right of hero
- [ ] Verify "Our Story" section appears with decorative line
- [ ] Check cremation section has intro text
- [ ] Check burial section has intro text and updated cards
- [ ] Verify "Ongoing Care" section appears before contact form
- [ ] Test all text sizes are correct (especially burial cards)
- [ ] Verify Spanish translations are correct
- [ ] Test responsive behavior on mobile, tablet, and desktop
- [ ] Check that all sections flow properly

---

## Files Reference

**Reference File**: `src/pages/index.astro` (fully updated - use as template)

**Original Content Backup**: `burial-options-original-content.txt` (contains original burial option text if needed)

---

## Priority Order

1. ✅ **High Priority**: Landing pages (6/6 COMPLETE)
   - ✅ index.astro (reference)
   - ✅ es.astro
   - ✅ catholic.astro
   - ✅ catholic-es.astro
   - ✅ veteran.astro
   - ✅ veteran-es.astro

2. ✅ **Medium Priority**: Service pages with burial sections (6/6 COMPLETE)
   - ✅ burial.astro - COMPLETE
   - ✅ burial-es.astro - COMPLETE
   - ✅ catholic-burial.astro - COMPLETE
   - ✅ catholic-burial-es.astro - COMPLETE
   - ✅ veteran-burial.astro - COMPLETE
   - ✅ veteran-burial-es.astro - COMPLETE

3. ⏳ **Low Priority**: Service pages with cremation sections (0/6 complete)
   - ⏳ cremation.astro - PENDING (needs iteration)
   - ⏳ cremation-es.astro - PENDING (needs iteration)
   - ⏳ catholic-cremation.astro - PENDING (needs iteration)
   - ⏳ catholic-cremation-es.astro - PENDING (needs iteration)
   - ⏳ veteran-cremation.astro - PENDING (needs iteration)
   - ⏳ veteran-cremation-es.astro - PENDING (needs iteration)

## Important: Nested Service Pages Require Individual Iteration

**Note**: The burial and cremation service pages are nested pages with different structures than landing pages. They:
- Use the `ServiceNav` component
- May have different section ordering
- Require careful review of each page's unique structure
- Need the same updates but applied contextually:
  1. Hero section responsive updates + attribution
  2. Burial/Cremation section updates (container, grid, intro text, cards)
  3. Ongoing Care section before contact form

Each service page should be reviewed individually to ensure changes are applied correctly within its specific structure.

---

## Additional Notes

- All changes maintain the existing design system and color scheme
- Text sizes have been optimized for readability across devices
- The decorative line uses `bg-text/40` for subtle appearance
- Attribution text uses `text-white/80` for subtle appearance over hero image
- All Spanish translations should be reviewed by a native speaker for accuracy
- The burial options grid now uses `max-w-7xl` to fill more space on desktop
- Mobile spacing is tighter (`gap-3`) while desktop maintains `gap-6`

---

## Questions or Issues?

If you encounter any issues during implementation:
1. Refer to `src/pages/index.astro` as the reference implementation
2. Check that all class names match exactly
3. Verify translation placement is correct
4. Ensure proper section ordering matches the reference

---

**Document Version**: 1.2  
**Last Updated**: 2024-12-19  
**Status**: Landing pages complete (6/6). Burial service pages complete (6/6). Cremation service pages pending (0/6).  
**Reference File**: `src/pages/index.astro`  
**Progress**: 12/18 pages complete (66.7%)
