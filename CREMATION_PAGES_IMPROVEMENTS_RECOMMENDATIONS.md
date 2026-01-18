# Recommendations for Other Cremation Pages

Based on the improvements made to the Catholic cremation pages, here are similar changes that should be applied to the other cremation pages for consistency and better user experience.

---

## Pages to Update

1. **General Cremation (English):** `src/pages/cremation.astro`
2. **General Cremation (Spanish):** `src/pages/cremation-es.astro`
3. **Veteran Cremation (English):** `src/pages/veteran-cremation.astro`
4. **Veteran Cremation (Spanish):** `src/pages/veteran-cremation-es.astro`

---

## Recommended Changes (Apply to All 4 Pages)

### Change 1: Streamline Introductory Block
**Issue:** Repetition of "comprehensive/completo" in the introductory paragraph

**English Pages:**
- **Current:** "We offer comprehensive cremation and burial services... we offer comprehensive services for both options."
- **After:** "We offer comprehensive cremation and burial services. Both options are available and equally respected. Choose the service that aligns with your wishes, beliefs, and budget. All arrangements align with your family's wishes."

**Spanish Pages:**
- **Current:** "Ofrecemos servicios completos de cremación y entierro... ofrecemos servicios completos para ambas opciones."
- **After:** "Ofrecemos servicios completos de cremación y entierro. Ambas opciones están disponibles y son igualmente respetadas. Elija el servicio que se alinee con sus deseos, creencias y presupuesto. Todos los arreglos se alinean con los deseos de su familia."

---

### Change 2: Update Section Header
**Issue:** Section header says "Planning & FAQ" / "Planificación y Preguntas Frecuentes" - should be more focused

**English Pages:**
- **Current:** "Planning & FAQ"
- **After:** "Questions About Planning"
- **Comment:** Change `<!-- Planning & FAQ Section -->` to `<!-- Questions About Planning Section -->`

**Spanish Pages:**
- **Current:** "Planificación y Preguntas Frecuentes"
- **After:** "Preguntas Sobre la Planificación"
- **Comment:** Change `<!-- Planning & FAQ Section -->` to `<!-- Questions About Planning Section -->`

**Location:** Around line 198-203 (varies by page)

---

### Change 3: Remove Standalone Cemetery/Headstone Section
**Issue:** Standalone section duplicates information that should be in the Accordion

**Action:** Remove the entire standalone "Cemetery/Headstone Help Section" and merge its content into the Accordion (see Change 4).

**Location:** Around lines 265-279 (varies by page)

**English Section to Remove:**
```astro
  <!-- Cemetery/Headstone Help Section -->
  <section class="py-10 md:py-24 bg-secondary">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white p-5 md:p-12 rounded-lg shadow-sm border-t-4 border-accent">
          <h2 class="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">
            If we do not have a cemetery plot or a headstone, can you help us choose one?
          </h2>
          <p class="text-sm md:text-lg text-text leading-relaxed">
            Yes, absolutely. We are here to guide you through these decisions. We maintain a complete directory of local cemeteries and their prices to help you find a peaceful resting place that is right for your family. We can also connect you with trusted local experts to help you design a beautiful headstone or marker. You do not have to make these choices alone; we will ensure you have all the options you need.
          </p>
        </div>
      </div>
    </div>
  </section>
```

**Spanish Section to Remove:**
```astro
  <!-- Cemetery/Headstone Help Section -->
  <section class="py-10 md:py-24 bg-secondary">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white p-5 md:p-12 rounded-lg shadow-sm border-t-4 border-accent">
          <h2 class="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">
            Si no tenemos una parcela de cementerio o una lápida, ¿puede ayudarnos a elegir una?
          </h2>
          <p class="text-sm md:text-lg text-text leading-relaxed">
            Sí, absolutamente. Estamos aquí para guiarlo a través de estas decisiones. Mantenemos un directorio completo de cementerios locales y sus precios para ayudarlo a encontrar un lugar de descanso pacífico que sea adecuado para su familia. También podemos conectarlo con expertos locales de confianza para ayudarlo a diseñar una hermosa lápida o marcador. No tiene que tomar estas decisiones solo; nos aseguraremos de que tenga todas las opciones que necesita.
          </p>
        </div>
      </div>
    </div>
  </section>
```

---

### Change 4: Add Cemetery/Headstone Question to Accordion
**Issue:** The cemetery/headstone information is in a standalone section instead of the Accordion

**Action:** Add a new question to the Accordion items array (or enhance existing one if it exists).

**English Accordion Addition:**
```javascript
{
  question: "If we do not have a cemetery plot or a headstone, can you help us choose one?",
  answer: "Yes, absolutely. We are here to guide you through these decisions. We maintain a complete directory of local cemeteries and their prices to help you find a peaceful resting place that is right for your family. We can also connect you with trusted local experts to help you design a beautiful headstone or marker. You do not have to make these choices alone; we will ensure you have all the options you need."
}
```

**Spanish Accordion Addition:**
```javascript
{
  question: "Si no tenemos una parcela de cementerio o una lápida, ¿puede ayudarnos a elegir una?",
  answer: "Sí, absolutamente. Estamos aquí para guiarlo a través de estas decisiones. Mantenemos un directorio completo de cementerios locales y sus precios para ayudarlo a encontrar un lugar de descanso pacífico que sea adecuado para su familia. También podemos conectarlo con expertos locales de confianza para ayudarlo a diseñar una hermosa lápida o marcador. No tiene que tomar estas decisiones solo; nos aseguraremos de que tenga todas las opciones que necesita."
}
```

**Note:** 
- For **General Cremation pages**, add this as a new item (will have 6 items total)
- For **Veteran Cremation pages**, add this as a new item (will have 7 items total, since they already have a veteran benefits question)

---

## Summary of Changes by Page

### 1. `cremation.astro` (General English)
- ✅ Streamline introductory block (remove second "comprehensive")
- ✅ Change "Planning & FAQ" → "Questions About Planning"
- ✅ Remove standalone Cemetery/Headstone section
- ✅ Add cemetery/headstone question to Accordion (6 items total)

### 2. `cremation-es.astro` (General Spanish)
- ✅ Streamline introductory block (remove second "completos")
- ✅ Change "Planificación y Preguntas Frecuentes" → "Preguntas Sobre la Planificación"
- ✅ Remove standalone Cemetery/Headstone section
- ✅ Add cemetery/headstone question to Accordion (6 items total)

### 3. `veteran-cremation.astro` (Veteran English)
- ✅ Streamline introductory block (remove second "comprehensive")
- ✅ Change "Planning & FAQ" → "Questions About Planning"
- ✅ Remove standalone Cemetery/Headstone section
- ✅ Add cemetery/headstone question to Accordion (7 items total - includes veteran benefits question)

### 4. `veteran-cremation-es.astro` (Veteran Spanish)
- ✅ Streamline introductory block (remove second "completos")
- ✅ Change "Planificación y Preguntas Frecuentes" → "Preguntas Sobre la Planificación"
- ✅ Remove standalone Cemetery/Headstone section
- ✅ Add cemetery/headstone question to Accordion (7 items total - includes veteran benefits question)

---

## Benefits of These Changes

1. **Consistency:** All cremation pages will have the same structure and naming conventions
2. **Better UX:** Information is consolidated in the Accordion instead of scattered across sections
3. **Cleaner Code:** Removes redundant standalone sections
4. **Easier Maintenance:** Single source of truth for each piece of information
5. **Improved Navigation:** More focused section headers help users find information faster

---

## Verification Checklist

After applying changes to each page, verify:

- [ ] Introductory block doesn't repeat "comprehensive/completo"
- [ ] Section header says "Questions About Planning" / "Preguntas Sobre la Planificación"
- [ ] No standalone Cemetery/Headstone section exists
- [ ] Accordion includes cemetery/headstone question with full details
- [ ] Accordion has correct number of items:
  - General cremation: 6 items
  - Veteran cremation: 7 items (includes veteran benefits)
- [ ] All content flows logically without repetition
- [ ] Page renders correctly in browser
- [ ] No linter errors

---

## Notes

- These pages don't have the same level of redundancy as the Catholic cremation page (no duplicate FAQ sections), so the changes are simpler
- The main focus is on consolidating the cemetery/headstone information and updating section headers for consistency
- The introductory block repetition is minor but should be fixed for consistency with the Catholic pages
