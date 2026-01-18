# Quick Reference: Code Snippets & Translations

This file contains ready-to-use code snippets for quick copy-paste during implementation.

## Current Status (Updated 2024-12-19)

- ✅ **Landing Pages**: 6/6 complete - All snippets below have been applied
- ✅ **Burial Service Pages**: 6/6 complete - All snippets below have been applied
- ⏳ **Cremation Service Pages**: 0/6 complete - All pages need iteration

**Note**: Service pages (burial and cremation) are nested pages with different structures. Each requires individual review and careful application of changes within their specific context (ServiceNav component, section ordering, etc.).

---

## 1. Hero Section (Complete)

### English
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

### Spanish Hero Text Only
```astro
<h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-6 drop-shadow-lg" style="line-height: 1.2; letter-spacing: -0.02em;">
  Planificar con Anticipación para la Tranquilidad
</h2>
<p class="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-md text-left md:text-right">
  Pensar en el final de la vida puede ser difícil. Sin embargo, hacer planes ahora es uno de los mejores regalos que puede darle a su familia.
</p>
```

---

## 2. Our Story Section

### English
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

### Spanish
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

---

## 3. Cremation Section Intro Text

### English
```astro
<p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
  A modern approach to tradition, offering flexibility and personalized remembrance.
</p>
```

### Spanish
```astro
<p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
  Un enfoque moderno a la tradición, ofreciendo flexibilidad y remembranza personalizada.
</p>
```

---

## 4. Burial Section Intro Text

### English
```astro
<p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
  Honoring the timeless dignity of a final resting place with grace and reverence.
</p>
```

### Spanish
```astro
<p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
  Honrando la dignidad atemporal de un lugar de descanso final con gracia y reverencia.
</p>
```

---

## 5. Burial Option Card Template

### Traditional Farewell (English)
```astro
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
```

### Traditional Farewell (Spanish)
```astro
<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent">
  <div class="flex items-center gap-2 mb-3">
    <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
    </svg>
    <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
      Despedida Tradicional
    </h3>
  </div>
  <p class="text-[10px] md:text-xs font-semibold text-primary mb-2">
    El Tributo Clásico
  </p>
  <p class="text-xs md:text-sm text-text leading-relaxed">
    Este es un servicio completo para familias que desean seguir tradiciones consagradas por el tiempo. Incluye una visita para que los amigos se reúnan, un servicio funerario formal y una procesión al cementerio. Nos encargamos de cada detalle para asegurar una despedida respetuosa y completa.
  </p>
</div>
```

### Simple Farewell (English)
```astro
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
```

### Simple Farewell (Spanish)
```astro
<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent">
  <div class="flex items-center gap-2 mb-3">
    <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
      Despedida Simple
    </h3>
  </div>
  <p class="text-[10px] md:text-xs font-semibold text-primary mb-2">
    Un Recuerdo Enfocado
  </p>
  <p class="text-xs md:text-sm text-text leading-relaxed">
    Esta opción ofrece un hermoso servicio en un período de tiempo más corto. Incluye un tiempo para que la familia y los amigos compartan recuerdos seguido de una ceremonia significativa. Está diseñado para aquellos que desean un día profesional y digno enfocado en lo esencial de despedirse.
  </p>
</div>
```

### Graveside Service (English)
```astro
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
```

### Graveside Service (Spanish)
```astro
<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent">
  <div class="flex items-center gap-2 mb-3">
    <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 11a3 3 0 11-6 0m6 0a3 3 0 10-6 0m6 0H9m3 0v1m0-1v-1m0 1H9m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
      Servicio en el Cementerio
    </h3>
  </div>
  <p class="text-[10px] md:text-xs font-semibold text-primary mb-2">
    Un Tributo Silencioso al Aire Libre
  </p>
  <p class="text-xs md:text-sm text-text leading-relaxed">
    Este servicio tiene lugar completamente en el cementerio. Es una forma tranquila y elegante de honrar a su ser querido bajo el cielo abierto. Coordinamos todo en el lugar de descanso, permitiéndole enfocarse en un momento tranquilo de reflexión con aquellos más cercanos a usted.
  </p>
</div>
```

### Immediate Burial (English)
```astro
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
```

### Immediate Burial (Spanish)
```astro
<div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent">
  <div class="flex items-center gap-2 mb-3">
    <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
      Entierro Inmediato
    </h3>
  </div>
  <p class="text-[10px] md:text-xs font-semibold text-primary mb-2">
    Un Camino Simple y Privado
  </p>
  <p class="text-xs md:text-sm text-text leading-relaxed">
    Esta es nuestra opción de entierro más directa. Es una opción modesta para familias que no desean tener una ceremonia pública. Proporcionamos cuidado profesional y transporte para asegurar que un entierro privado y digno tenga lugar de inmediato.
  </p>
</div>
```

---

## 6. Burial Section Container Update

### Updated Container & Grid
```astro
<div class="max-w-7xl mx-auto">
  <!-- ... heading and intro text ... -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
    <!-- burial option cards here -->
  </div>
</div>
```

---

## 7. Ongoing Care Section

### English
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

### Spanish
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

---

## Quick Translation Table

| English | Spanish |
|---------|---------|
| Traditional Farewell | Despedida Tradicional |
| Simple Farewell | Despedida Simple |
| Graveside Service | Servicio en el Cementerio |
| Immediate Burial | Entierro Inmediato |
| The Classic Tribute | El Tributo Clásico |
| A Focused Remembrance | Un Recuerdo Enfocado |
| A Quiet Outdoor Tribute | Un Tributo Silencioso al Aire Libre |
| A Simple, Private Path | Un Camino Simple y Privado |

---

**Note**: All code snippets are ready to copy-paste. Make sure to:
1. Replace `{displayCompanyName}` with the appropriate variable for each page
2. Check that section ordering matches the reference file
3. Verify all class names are exactly as shown
4. Test responsive behavior after implementation
