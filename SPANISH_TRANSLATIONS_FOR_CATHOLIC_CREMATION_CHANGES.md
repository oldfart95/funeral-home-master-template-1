# Spanish Translations for Catholic Cremation Changes

This document contains all Spanish translations needed to apply the 8 changes from `CATHOLIC_CREMATION_CHANGES_APPLIED.md` to the Spanish version of the Catholic cremation page.

---

## Change 1: Remove Duplicate Comment

**Action:** Remove the duplicate comment `<!-- La Iglesia Católica y la Cremación -->`

**Location:** After `<ServiceNav />` (around line 85)

**Current (has duplicate):**
```astro
  <!-- Service Navigation -->
  <ServiceNav />
    <!-- The Catholic Church and Cremation -->
    <section class="py-10 md:py-24 bg-secondary">
```

**After (removed duplicate):**
```astro
  <!-- Service Navigation -->
  <ServiceNav />
  <!-- La Iglesia Católica y la Cremación -->
    <section class="py-10 md:py-24 bg-secondary">
```

---

## Change 2: Streamlined Introductory Block

**Location:** Line 76 (introductory paragraph)

**Current (has repetition):**
```
Ofrecemos servicios completos de cremación y entierro para familias católicas. Ambas opciones están disponibles y son plenamente respetadas dentro de las enseñanzas de la Iglesia Católica. <strong>Importante:</strong> La Iglesia Católica requiere que todos los restos, ya sean cremados o no, deben ser enterrados en tierra consagrada, como un cementerio católico. Este requisito sagrado honra la dignidad del cuerpo humano y refleja nuestra fe en la resurrección. Ofrecemos servicios completos tanto para cremación como para entierro, asegurando que todos los arreglos se alineen con las enseñanzas católicas y los deseos de su familia.
```

**After (removed repetition):**
```
Ofrecemos servicios completos de cremación y entierro para familias católicas. Ambas opciones están disponibles y son plenamente respetadas dentro de las enseñanzas de la Iglesia Católica. <strong>Importante:</strong> La Iglesia Católica requiere que todos los restos, ya sean cremados o no, deben ser enterrados en tierra consagrada, como un cementerio católico. Este requisito sagrado honra la dignidad del cuerpo humano y refleja nuestra fe en la resurrección. Todos los arreglos se alinean con las enseñanzas católicas y los deseos de su familia.
```

**Key Change:** 
- Remove: "Ofrecemos servicios completos tanto para cremación como para entierro, asegurando que"
- Replace with: "Todos los arreglos se alinean con"

---

## Change 3: Remove Redundant FAQ Questions

**Location:** Lines 158-201 (first FAQ section)

**Action:** Remove these 4 redundant questions (they're already covered in the Rules section):

1. **Question to Remove:**
   - "¿Por qué no puedo guardar las cenizas en casa?"
   - (Covered in Rule #1)

2. **Question to Remove:**
   - "¿Por qué no se permite esparcir las cenizas?"
   - (Covered in Rule #3)

3. **Question to Remove:**
   - "¿Puedo usar una pequeña parte de mi ser querido en un collar?"
   - (Covered in Rule #4)

4. **Question to Remove:**
   - "¿La Iglesia todavía prefiere un entierro tradicional?"
   - (Covered in "The Catholic Church and Cremation" section)

**Result:** Delete the entire first "Preguntas Frecuentes Sobre la Cremación" section (lines 158-201).

---

## Change 4: Consolidate FAQ Sections

**Location:** After removing the first FAQ section, rename the second one

**Action:** 
- Remove the first "Preguntas Frecuentes Sobre la Cremación" section (with redundant questions)
- Keep the second "Preguntas Comunes Sobre la Cremación" section (lines 304-331)
- Rename it from "Preguntas Comunes Sobre la Cremación" to "Preguntas Frecuentes Sobre la Cremación"

**Current Section Header (line 309):**
```astro
<h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-12 text-center">
  Preguntas Comunes Sobre la Cremación
</h2>
```

**After (renamed):**
```astro
<h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-12 text-center">
  Preguntas Frecuentes Sobre la Cremación
</h2>
```

**Keep Only These 2 Questions:**
1. "¿Mi familia puede verme antes de que sea cremado?"
2. "¿Necesito comprar una urna?"

---

## Change 5: Remove Duplicate Questions from Accordion

**Location:** Accordion items array (lines 369-405)

**Action:** Remove these 2 questions from the Accordion (they're now in the FAQ section):

1. **Remove:**
   ```javascript
   {
     question: "¿Mi familia puede verme antes de que sea cremado?",
     answer: "Sí, en la mayoría de los casos. Si su familia quiere verlo una última vez, la funeraria puede prepararlo para una vista privada. Esto generalmente necesita suceder dentro de unos días. La Iglesia fomenta esto porque ayuda a su familia a despedirse."
   },
   ```

2. **Remove:**
   ```javascript
   {
     question: "¿Necesito comprar una urna?",
     answer: "Sí. Necesitará un contenedor para las cenizas. Esto se llama urna. Puede elegir entre muchos tipos diferentes. Algunas están hechas de madera, metal o piedra. La urna debe ser respetuosa y digna. No debe ser un juguete o un artículo de broma. Debe ser digna de contener a una persona santa."
   },
   ```

**Result:** Accordion should have 6 items instead of 8.

---

## Change 6: Remove Standalone Cemetery/Headstone Section

**Location:** Lines 411-425 (entire section)

**Action:** Delete the entire standalone section:

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
            Sí, absolutamente. Estamos aquí para guiarlo a través de estas decisiones. Mantenemos un directorio completo de cementerios católicos locales y sus precios para ayudarlo a encontrar un lugar de descanso pacífico que sea adecuado para su familia. También podemos conectarlo con expertos locales de confianza para ayudarlo a diseñar una hermosa lápida o marcador. No tiene que tomar estas decisiones solo; nos aseguraremos de que tenga todas las opciones que necesita.
          </p>
        </div>
      </div>
    </div>
  </section>
```

**Note:** This information will be merged into the Accordion FAQ answer (see Change 7).

---

## Change 7: Enhance Accordion FAQ Answer

**Location:** Accordion items array - cemetery plot question

**Action:** Update the cemetery plot question to include headstone information

**Current Question and Answer:**
```javascript
{
  question: "Si no tenemos una parcela de cementerio, ¿puede ayudarnos a elegir una?",
  answer: "Sí, absolutamente. Estamos aquí para guiarlo. Tenemos una lista de cementerios católicos locales en Youngstown, Akron, Canton y Cleveland. Podemos ayudarlo a encontrar un lugar de descanso pacífico. También podemos ayudarlo a encontrar una lápida o marcador."
}
```

**After (enhanced with headstone info):**
```javascript
{
  question: "Si no tenemos una parcela de cementerio o una lápida, ¿puede ayudarnos a elegir una?",
  answer: "Sí, absolutamente. Estamos aquí para guiarlo a través de estas decisiones. Mantenemos un directorio completo de cementerios católicos locales y sus precios para ayudarlo a encontrar un lugar de descanso pacífico que sea adecuado para su familia. También podemos conectarlo con expertos locales de confianza para ayudarlo a diseñar una hermosa lápida o marcador. No tiene que tomar estas decisiones solo; nos aseguraremos de que tenga todas las opciones que necesita."
}
```

**Key Changes:**
- Question updated: Added "o una lápida" to the question
- Answer enhanced: More detailed, includes "directorio completo", "precios", "expertos locales de confianza", "diseñar una hermosa lápida o marcador"

---

## Change 8: Change Section Header

**Location:** "Planning & FAQ Section" header (line 337)

**Current:**
```astro
<h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
  Planificación y Preguntas Frecuentes
</h2>
```

**After:**
```astro
<h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
  Preguntas Sobre la Planificación
</h2>
```

**Also Update Comment:**
```astro
<!-- Questions About Planning Section -->
```

**Current comment (line 332):**
```astro
  <!-- Planning & FAQ Section -->
```

**After:**
```astro
  <!-- Questions About Planning Section -->
```

---

## Summary of All Changes

1. ✅ Remove duplicate comment `<!-- La Iglesia Católica y la Cremación -->`
2. ✅ Streamline introductory block - remove second "completo/completa"
3. ✅ Remove 4 redundant FAQ questions from first FAQ section
4. ✅ Rename "Preguntas Comunes Sobre la Cremación" to "Preguntas Frecuentes Sobre la Cremación"
5. ✅ Remove 2 duplicate questions from Accordion
6. ✅ Remove standalone Cemetery/Headstone section
7. ✅ Enhance Accordion cemetery question with headstone information
8. ✅ Change "Planificación y Preguntas Frecuentes" to "Preguntas Sobre la Planificación"

---

## Final Accordion Items (6 items after changes)

After applying all changes, the Accordion should contain these 6 items:

1. "¿Puedo pagar todo antes de morir?"
2. "¿Qué pasa si muero mientras estoy viajando?"
3. "¿Hay mucho papeleo?"
4. "Si no tenemos una parcela de cementerio o una lápida, ¿puede ayudarnos a elegir una?" (enhanced)
5. "¿La Iglesia permite el Entierro \"Verde\" o Natural?"
6. "¿Pueden los no católicos ser enterrados en un cementerio católico?"

---

## Verification Checklist

After applying changes, verify:

- [ ] No duplicate comments
- [ ] Introductory block doesn't repeat "completo/completa"
- [ ] Only one "Preguntas Frecuentes Sobre la Cremación" section exists
- [ ] FAQ section only contains 2 practical questions (viewing, urn)
- [ ] Accordion has 6 items (not 8)
- [ ] Accordion doesn't have duplicate questions from FAQ section
- [ ] No standalone Cemetery/Headstone section
- [ ] Accordion cemetery question includes headstone information
- [ ] Section header says "Preguntas Sobre la Planificación"
- [ ] All content flows logically without repetition
- [ ] Page renders correctly in browser
- [ ] No linter errors
