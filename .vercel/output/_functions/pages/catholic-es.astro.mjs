/* empty css                                        */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../assets/astro/server.CJ8kye3e.js';
import 'piccolore';
import { $ as $$Layout } from '../assets/Layout.BZOMPhEu.js';
import { $ as $$ServiceButtons } from '../assets/ServiceButtons.DGqKUKIB.js';
import { $ as $$Accordion, g as getFAQs } from '../assets/faqs.D1YdrLNw.js';
import { $ as $$OurStory, a as $$ImmediateNeedBanner } from '../assets/ImmediateNeedBanner.DRYf1BLe.js';
import { a as $$OngoingCare, $ as $$ContactForm } from '../assets/ContactForm.CTmkMrOa.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$CatholicEs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CatholicEs;
  const pathname = Astro2.url.pathname;
  const isSpanish = pathname.includes("-es") || pathname === "/es";
  const isCatholic = pathname.includes("catholic");
  const isVeteran = pathname.includes("veteran");
  function getCompanyName() {
    if (isVeteran) {
      return isSpanish ? "Cuidado de Veteranos" : "Veteran Care";
    } else if (isCatholic) {
      return isSpanish ? "Cuidado Cat\xF3lico" : "Catholic Care";
    } else {
      return isSpanish ? "Cuidado Asequible" : "Affordable Care";
    }
  }
  function getLogoPath() {
    if (isVeteran) {
      return "/images/VeteranLogo.webp";
    } else if (isCatholic) {
      return isSpanish ? "/images/SpanishCathLogo.webp" : "/images/CatholicLogo.webp";
    } else {
      return isSpanish ? "/images/SpanishAffLogo.webp" : "/images/AffCareLogo.webp";
    }
  }
  const displayCompanyName = getCompanyName();
  const logoPath = getLogoPath();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios Cat\xF3licos - Planificar con Anticipaci\xF3n", "description": "Servicios funerarios y de cremaci\xF3n cat\xF3licos siguiendo las ense\xF1anzas de la Iglesia. Planifique con anticipaci\xF3n para la tranquilidad y la fe con ritos de entierro cat\xF3licos apropiados.", "pageType": "catholic", "language": "es" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-8 md:py-32 overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0"> <img src="/images/hero.webp" srcset="/images/hero-640.webp 640w,
                /images/hero.webp 970w" sizes="(max-width: 640px) 640px,
               970px" loading="eager" fetchpriority="high" alt="Servicios funerarios y de cremación católicos" class="w-full h-full object-cover blur-sm"> <!-- Dark overlay for text readability --> <div class="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary-dark/40 to-primary-light/40"></div> </div> <!-- Content --> <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 min-h-[300px] md:min-h-[500px] py-4 md:py-0"> <!-- Company Name - Left/Top --> <div class="flex-1 w-full md:w-auto"> <img${addAttribute(logoPath, "src")}${addAttribute(displayCompanyName, "alt")} class="mb-4 md:mb-6 w-auto h-12 sm:h-14 md:h-20 lg:h-28 xl:h-36 drop-shadow-lg bg-white/90 rounded-lg p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 shadow-xl" loading="eager"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold drop-shadow-lg leading-hero tracking-hero"> ${displayCompanyName} </h1> </div> <!-- Hero Text - Center Right --> <div class="flex-1 w-full md:flex-none md:w-1/2 lg:w-2/5 text-left md:text-right mt-4 md:mt-0"> <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-6 drop-shadow-lg leading-hero tracking-hero">
Planificar con Anticipación para la Tranquilidad y la Fe
</h2> <p class="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-md text-left md:text-right">
Para los católicos, planificar con anticipación es una forma de mostrar nuestra fe. Creemos que la muerte no es el final—es un cambio. Creemos que estaremos con Dios.
</p> </div> </div> </div> <!-- Attribution Footnote --> <div class="absolute bottom-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pb-3 md:pb-4"> <p class="text-xs sm:text-sm text-white/80 drop-shadow-md text-right">
Proporcionado por Arbaugh-Pearce-Greenisen & Sons
</p> </div> </section> ${renderComponent($$result2, "OurStory", $$OurStory, { "language": isSpanish ? "es" : "en" })} ${renderComponent($$result2, "ImmediateNeedBanner", $$ImmediateNeedBanner, { "language": isSpanish ? "es" : "en" })} ${renderComponent($$result2, "ServiceButtons", $$ServiceButtons, {})}  <section class="py-10 md:py-24 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-6xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">
Opciones de Funeral Católico
</h2> <p class="text-base md:text-xl text-text text-center mb-6 md:mb-12">
Hay tres formas principales de tener un funeral católico con cremación. Puede elegir la que se ajuste a sus necesidades, pero la Iglesia tiene una opción favorita.
</p> <div class="grid md:grid-cols-3 gap-4 md:gap-8"> <!-- Option 1: Traditional --> <div class="bg-secondary p-4 md:p-8 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-3 mb-3 md:mb-4"> <svg class="w-8 h-8 md:w-10 md:h-10 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> <h3 class="text-lg md:text-2xl font-heading font-bold text-primary">
Opción 1: La Elección Tradicional<br> <span class="text-base md:text-lg font-normal text-accent">(Preferida)</span> </h3> </div> <p class="text-sm md:text-base text-text mb-4 md:mb-6 leading-relaxed">
Esto es lo que la Iglesia recomienda más.
</p> <ol class="space-y-2 md:space-y-3 text-sm md:text-base text-text list-decimal list-inside"> <li><strong>La Visita:</strong> Familiares y amigos se reúnen en la funeraria para despedirse. El cuerpo está presente en un ataúd. Esto ayuda a las personas a aceptar que la muerte es real. Les da la oportunidad de consolarse mutuamente.</li> <li><strong>La Misa Funeraria:</strong> El cuerpo es llevado a la Iglesia. El sacerdote ora por la persona y bendice el cuerpo. Esta es una Misa muy especial.</li> <li><strong>Cremación:</strong> Después de que termine la Misa, el cuerpo es llevado para ser cremado.</li> <li><strong>Entierro:</strong> Más tarde, la familia se reúne en el cementerio para enterrar las cenizas.</li> </ol> </div> <!-- Option 2: Memorial --> <div class="bg-secondary p-4 md:p-8 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-3 mb-3 md:mb-4"> <svg class="w-8 h-8 md:w-10 md:h-10 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <h3 class="text-lg md:text-2xl font-heading font-bold text-primary">
Opción 2: La Elección Conmemorativa
</h3> </div> <p class="text-sm md:text-base text-text mb-4 md:mb-6 leading-relaxed">
A veces, el cuerpo no puede estar en la Misa.
</p> <ol class="space-y-2 md:space-y-3 text-sm md:text-base text-text list-decimal list-inside"> <li><strong>Cremación Primero:</strong> El cuerpo es cremado antes del funeral.</li> <li><strong>La Misa Funeraria:</strong> La familia trae la urna con las cenizas a la Iglesia. El sacerdote aún puede celebrar la Misa Funeraria con las cenizas presentes. Las cenizas se colocan en una pequeña mesa cerca del altar.</li> <li><strong>Entierro:</strong> Después de la Misa, las cenizas son llevadas al cementerio para el entierro.</li> </ol> </div> <!-- Option 3: Direct --> <div class="bg-secondary p-4 md:p-8 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-3 mb-3 md:mb-4"> <svg class="w-8 h-8 md:w-10 md:h-10 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-2xl font-heading font-bold text-primary">
Opción 3: La Elección Directa
</h3> </div> <p class="text-sm md:text-base text-text mb-4 md:mb-6 leading-relaxed">
Esta es la opción más simple, pero podría perder algunas oraciones importantes.
</p> <ol class="space-y-2 md:space-y-3 text-sm md:text-base text-text list-decimal list-inside"> <li><strong>Cremación Inmediata:</strong> El cuerpo es cremado de inmediato sin una vista.</li> <li><strong>Servicio de Oración:</strong> La familia podría tener un pequeño servicio de oración en la funeraria o en el cementerio.</li> <li><strong>Sin Misa Funeraria:</strong> Si no hay Misa, la familia se pierde las bendiciones especiales de la Iglesia. Siempre es mejor tratar de tener una Misa si puede.</li> </ol> </div> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">
Opciones Generales de Entierro
</h2> <p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
Honrando la dignidad atemporal de un lugar de descanso final con gracia y reverencia.
</p> <p class="text-base md:text-xl text-text text-center mb-6 md:mb-12">
Si decide que no quiere cremación, también hay opciones asequibles para el entierro regular.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"> <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
Despedida Tradicional
</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">
El Tributo Clásico
</p> <p class="text-xs md:text-sm text-text leading-relaxed">
Este es un servicio completo para familias que desean seguir tradiciones consagradas por el tiempo. Incluye una visita para que los amigos se reúnan, un servicio funerario formal y una procesión al cementerio. Nos encargamos de cada detalle para asegurar una despedida respetuosa y completa.
</p> </div> <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
Despedida Simple
</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">
Un Recuerdo Enfocado
</p> <p class="text-xs md:text-sm text-text leading-relaxed">
Esta opción ofrece un hermoso servicio en un período de tiempo más corto. Incluye un tiempo para que la familia y los amigos compartan recuerdos seguido de una ceremonia significativa. Está diseñado para aquellos que desean un día profesional y digno enfocado en lo esencial de despedirse.
</p> </div> <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 11a3 3 0 11-6 0m6 0a3 3 0 10-6 0m6 0H9m3 0v1m0-1v-1m0 1H9m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
Servicio en el Cementerio
</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">
Un Tributo Silencioso al Aire Libre
</p> <p class="text-xs md:text-sm text-text leading-relaxed">
Este servicio tiene lugar completamente en el cementerio. Es una forma tranquila y elegante de honrar a su ser querido bajo el cielo abierto. Coordinamos todo en el lugar de descanso, permitiéndole enfocarse en un momento tranquilo de reflexión con aquellos más cercanos a usted.
</p> </div> <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
Entierro Inmediato
</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">
Un Camino Simple y Privado
</p> <p class="text-xs md:text-sm text-text leading-relaxed">
Esta es nuestra opción de entierro más directa. Es una opción modesta para familias que no desean tener una ceremonia pública. Proporcionamos cuidado profesional y transporte para asegurar que un entierro privado y digno tenga lugar de inmediato.
</p> </div> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
Planificación y Preguntas Frecuentes
</h2> <div class="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12"> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">
Ayuda a Su Familia
</h3> <p class="text-sm md:text-base text-text leading-relaxed">
Proporciona claridad y tranquilidad para su familia al documentar sus preferencias con anticipación. Su familia no tendrá que adivinar lo que usted quería.
</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">
Ahorra Dinero
</h3> <p class="text-sm md:text-base text-text leading-relaxed">
Opciones de prefinanciación para fijar las tarifas de hoy. Esto protege a su familia de los costos crecientes en el futuro. El dinero se mantiene seguro en una cuenta de fideicomiso especial o de seguro hasta que se necesite.
</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">
Es Su Elección
</h3> <p class="text-sm md:text-base text-text leading-relaxed">
Usted decide exactamente cómo quiere ser recordado. Puede asegurarse de que su funeral siga las reglas de la Iglesia Católica.
</p> </div> </div> <div class="bg-white p-4 md:p-8 rounded-lg shadow-sm"> <h3 class="text-xl md:text-2xl font-heading font-bold text-primary mb-6 text-center">
Preguntas Comunes Sobre Planificar con Anticipación
</h3> ${renderComponent($$result2, "Accordion", $$Accordion, { "language": "es", "items": getFAQs("es", "catholic") })} </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
La Iglesia Católica y la Cremación
</h2> <div class="bg-white p-5 md:p-8 rounded-lg shadow-sm space-y-4"> <p class="text-sm md:text-base text-text leading-relaxed">
Durante mucho tiempo, la Iglesia Católica no permitía la cremación. En 1963, la Iglesia cambió esta regla. Ahora, los católicos pueden ser cremados. Sin embargo, la Iglesia todavía prefiere que el cuerpo sea enterrado. Esto es porque Jesús fue enterrado en una tumba. Queremos seguir Su ejemplo.
</p> <p class="text-sm md:text-base text-text leading-relaxed">
Aunque la cremación está permitida, hay reglas especiales que debemos seguir. Estas reglas muestran respeto por el cuerpo humano. Nuestros cuerpos son sagrados. Son "templos del Espíritu Santo". Creemos que un día, Dios resucitará nuestros cuerpos de nuevo. Por esto, debemos tratar las cenizas con el mismo respeto que un cuerpo completo.
</p> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
Reglas Importantes para la Cremación Católica
</h2> <div class="bg-secondary p-5 md:p-8 rounded-lg shadow-sm"> <p class="text-sm md:text-base text-text leading-relaxed mb-6">
Si elige la cremación, las Diócesis de Youngstown, Cleveland y Pittsburgh están de acuerdo en estas reglas importantes:
</p> <ol class="space-y-4 text-sm md:text-base text-text"> <li class="flex items-start"> <span class="font-bold text-primary mr-3">1.</span> <span><strong>Las Cenizas Deben Ser Enterradas:</strong> No puede guardar las cenizas en un estante en casa. No puede guardarlas en un armario. Las cenizas deben ser enterradas en una tumba o colocadas en una pared especial llamada columbario. Esto debe suceder poco después del funeral.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">2.</span> <span><strong>Tierra Sagrada:</strong> La Iglesia quiere que seamos enterrados en un lugar sagrado. Un cementerio católico es el mejor lugar. Esta es tierra santa. Asegura que no serás olvidado. Le da a su familia un lugar para visitar y orar por usted.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">3.</span> <span><strong>No Esparcir:</strong> No se permite esparcir cenizas. No puede esparcirlas en el viento, en el suelo o en el agua.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">4.</span> <span><strong>No Dividir las Cenizas:</strong> Todas las cenizas deben permanecer juntas. No puede dividirlas entre diferentes miembros de la familia. No puede ponerlas en joyas, como collares o anillos. No puede ponerlas en arte u otros objetos.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">5.</span> <span><strong>Entierro en el Mar:</strong> No se permite esparcir cenizas sobre el agua. Sin embargo, puede enterrar las cenizas en el mar si están en un contenedor pesado que se hunde. Esto actúa como un entierro en el suelo.</span> </li> </ol> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
¿Por Qué Seguimos Estas Reglas?
</h2> <div class="bg-white p-5 md:p-8 rounded-lg shadow-sm"> <p class="text-sm md:text-base text-text leading-relaxed">
Estas reglas pueden parecer estrictas, pero están ahí por una razón. Nos recuerdan que pertenecemos a Dios. Cuando somos enterrados en un cementerio, estamos descansando con otros miembros de nuestra familia de la Iglesia. Estamos esperando juntos el día en que Jesús regrese. Mantener las cenizas juntas muestra que somos una persona completa. No queremos ser esparcidos o separados. Queremos descansar en paz en un lugar santo.
</p> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <div class="bg-white p-5 md:p-8 rounded-lg shadow-sm"> <h2 class="text-xl md:text-2xl font-heading font-bold text-primary mb-4 md:mb-6">
Una Nota para Familias en Youngstown, Akron, Canton y Cleveland
</h2> <p class="text-sm md:text-base text-text leading-relaxed">
Las reglas para la cremación son muy similares en todas nuestras áreas locales. Ya sea que esté en la Diócesis de Youngstown (que incluye Canton) o la Diócesis de Cleveland (que incluye Akron), el objetivo es el mismo. Queremos tratar a su ser querido con gran respeto. Queremos asegurarnos de que sean enterrados en un lugar santo.
</p> </div> </div> </div> </section>   ${renderComponent($$result2, "OngoingCare", $$OngoingCare, { "language": isSpanish ? "es" : "en" })} ${renderComponent($$result2, "ContactForm", $$ContactForm, { "language": isSpanish ? "es" : "en" })} ` })}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/catholic-es.astro", void 0);

const $$file = "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/catholic-es.astro";
const $$url = "/catholic-es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CatholicEs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
