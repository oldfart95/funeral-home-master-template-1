/* empty css                                        */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../assets/astro/server.CJ8kye3e.js';
import 'piccolore';
import { $ as $$Layout } from '../assets/Layout.CGO4HiXi.js';
import siteDetails from '../assets/siteDetails.B9KLVKNZ.js';
import { $ as $$ServiceNav } from '../assets/ServiceNav.DU7wrBYK.js';
import { $ as $$Accordion, g as getFAQs } from '../assets/faqs.D1YdrLNw.js';
import { $ as $$ContactForm, a as $$OngoingCare } from '../assets/ContactForm.DvREuagq.js';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$BurialEs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BurialEs;
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
  function generateServiceSchema() {
    const baseUrl = Astro2.site?.href || Astro2.url.origin;
    const phone = siteDetails.phone && siteDetails.phone !== "(111) 111-1111" ? siteDetails.phone : "(111) 111-1111";
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Servicios de Entierro",
      description: "Servicios tradicionales de entierro con visita, servicios funerarios y ceremonias en el cementerio. Planifique con anticipaci\xF3n para la tranquilidad con dignidad y respeto.",
      provider: {
        "@type": "FuneralHome",
        name: siteDetails.companyName,
        telephone: phone,
        url: baseUrl
      },
      serviceType: "Funeral Service",
      areaServed: {
        "@type": "Country",
        name: "United States"
      },
      offers: {
        "@type": "Offer",
        priceRange: "$$",
        description: "Opciones tradicionales de entierro para honrar a su ser querido con dignidad"
      }
    };
    return JSON.stringify(schema);
  }
  const serviceSchema = generateServiceSchema();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios de Entierro - Planificar con Anticipaci\xF3n", "description": "Servicios tradicionales de entierro con visita, servicios funerarios y ceremonias en el cementerio. Planifique con anticipaci\xF3n para la tranquilidad con dignidad y respeto.", "pageType": "general", "language": "es" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-8 md:py-32 overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0"> <img src="/images/hero.webp" srcset="/images/hero-640.webp 640w,\n                /images/hero.webp 970w" sizes="(max-width: 640px) 640px,\n               970px" loading="eager" fetchpriority="high" alt="Servicios tradicionales de entierro" class="w-full h-full object-cover blur-sm"> <!-- Dark overlay for text readability --> <div class="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary-dark/40 to-primary-light/40"></div> </div> <!-- Content --> <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 min-h-[300px] md:min-h-[500px] py-4 md:py-0"> <!-- Company Name - Left/Top --> <div class="flex-1 w-full md:w-auto"> <img', "", ' class="mb-4 md:mb-6 w-auto h-12 sm:h-14 md:h-20 lg:h-28 xl:h-36 drop-shadow-lg bg-white/90 rounded-lg p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 shadow-xl" loading="eager"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold drop-shadow-lg leading-hero tracking-hero"> ', ' </h1> </div> <!-- Hero Text - Center Right --> <div class="flex-1 w-full md:flex-none md:w-1/2 lg:w-2/5 text-left md:text-right mt-4 md:mt-0"> <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-6 drop-shadow-lg leading-hero tracking-hero">\nPlanificar con Anticipaci\xF3n para la Tranquilidad\n</h2> <p class="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-md text-left md:text-right">\nPensar en el final de la vida puede ser dif\xEDcil. Sin embargo, hacer planes ahora es uno de los mejores regalos que puede darle a su familia.\n</p> </div> </div> </div> <!-- Attribution Footnote --> <div class="absolute bottom-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pb-3 md:pb-4"> <p class="text-xs sm:text-sm text-white/80 drop-shadow-md text-right">\nProporcionado por Arbaugh-Pearce-Greenisen & Sons\n</p> </div> </section>  ', '  <section class="py-8 md:py-12 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <div class="bg-secondary p-6 md:p-8 rounded-lg shadow-sm border-t-4 border-accent"> <p class="text-base md:text-lg text-text leading-relaxed text-center">\nOfrecemos servicios completos de cremaci\xF3n y entierro. Ambas opciones est\xE1n disponibles y son igualmente respetadas. Elija el servicio que se alinee con sus deseos, creencias y presupuesto. <strong>Muchas familias eligen igualmente entre entierro y cremaci\xF3n - ofrecemos servicios completos para ambas opciones.</strong> </p> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">\nOpciones de Entierro\n</h2> <p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">\nHonrando la dignidad atemporal de un lugar de descanso final con gracia y reverencia.\n</p> <p class="text-base md:text-xl text-text text-center mb-6 md:mb-12">\nSi prefiere el entierro en lugar de la cremaci\xF3n, tambi\xE9n hay opciones asequibles para eso.\n</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"> <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">\nDespedida Tradicional\n</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">\nEl Tributo Cl\xE1sico\n</p> <p class="text-sm md:text-base text-text leading-relaxed">\nEste es un servicio completo para familias que desean seguir tradiciones consagradas por el tiempo. Incluye una visita para que los amigos se re\xFAnan, un servicio funerario formal y una procesi\xF3n al cementerio. Nos encargamos de cada detalle para asegurar una despedida respetuosa y completa.\n</p> </div> <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">\nDespedida Simple\n</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">\nUn Recuerdo Enfocado\n</p> <p class="text-sm md:text-base text-text leading-relaxed">\nEsta opci\xF3n ofrece un hermoso servicio en un per\xEDodo de tiempo m\xE1s corto. Incluye un tiempo para que la familia y los amigos compartan recuerdos seguido de una ceremonia significativa. Est\xE1 dise\xF1ado para aquellos que desean un d\xEDa profesional y digno enfocado en lo esencial de despedirse.\n</p> </div> <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 11a3 3 0 11-6 0m6 0a3 3 0 10-6 0m6 0H9m3 0v1m0-1v-1m0 1H9m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">\nServicio en el Cementerio\n</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">\nUn Tributo Silencioso al Aire Libre\n</p> <p class="text-sm md:text-base text-text leading-relaxed">\nEste servicio tiene lugar completamente en el cementerio. Es una forma tranquila y elegante de honrar a su ser querido bajo el cielo abierto. Coordinamos todo en el lugar de descanso, permiti\xE9ndole enfocarse en un momento tranquilo de reflexi\xF3n con aquellos m\xE1s cercanos a usted.\n</p> </div> <div class="bg-secondary p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">\nEntierro Inmediato\n</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">\nUn Camino Simple y Privado\n</p> <p class="text-sm md:text-base text-text leading-relaxed">\nEsta es nuestra opci\xF3n de entierro m\xE1s directa. Es una opci\xF3n modesta para familias que no desean tener una ceremonia p\xFAblica. Proporcionamos cuidado profesional y transporte para asegurar que un entierro privado y digno tenga lugar de inmediato.\n</p> </div> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">\nPlanificaci\xF3n y Preguntas Frecuentes\n</h2> <div class="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12"> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">\nAyuda a Su Familia\n</h3> <p class="text-sm md:text-base text-text leading-relaxed">\nProporciona claridad y tranquilidad para su familia al documentar sus preferencias con anticipaci\xF3n. Su familia no tendr\xE1 que adivinar lo que usted quer\xEDa.\n</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">\nAhorra Dinero\n</h3> <p class="text-sm md:text-base text-text leading-relaxed">\nOpciones de prefinanciaci\xF3n para fijar las tarifas de hoy. Esto protege a su familia de los costos crecientes en el futuro. El dinero se mantiene seguro en una cuenta de fideicomiso especial o de seguro hasta que se necesite.\n</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">\nEs Su Elecci\xF3n\n</h3> <p class="text-sm md:text-base text-text leading-relaxed">\nUsted decide exactamente c\xF3mo quiere ser recordado.\n</p> </div> </div> <div class="bg-white p-4 md:p-8 rounded-lg shadow-sm"> <h3 class="text-xl md:text-2xl font-heading font-bold text-primary mb-6 text-center">\nPreguntas Comunes Sobre Planificar con Anticipaci\xF3n\n</h3> ', ' </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <div class="bg-white p-5 md:p-12 rounded-lg shadow-sm border-t-4 border-accent"> <h2 class="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">\nSi no tenemos una parcela de cementerio o una l\xE1pida, \xBFpuede ayudarnos a elegir una?\n</h2> <p class="text-sm md:text-lg text-text leading-relaxed">\nS\xED, absolutamente. Estamos aqu\xED para guiarlo a trav\xE9s de estas decisiones. Mantenemos un directorio completo de cementerios locales y sus precios para ayudarlo a encontrar un lugar de descanso pac\xEDfico que sea adecuado para su familia. Tambi\xE9n podemos conectarlo con expertos locales de confianza para ayudarlo a dise\xF1ar una hermosa l\xE1pida o marcador. No tiene que tomar estas decisiones solo; nos aseguraremos de que tenga todas las opciones que necesita.\n</p> </div> </div> </div> </section> ', " ", " "])), unescapeHTML(serviceSchema), maybeRenderHead(), addAttribute(logoPath, "src"), addAttribute(displayCompanyName, "alt"), displayCompanyName, renderComponent($$result2, "ServiceNav", $$ServiceNav, {}), renderComponent($$result2, "Accordion", $$Accordion, { "language": "es", "items": getFAQs("es", "general", "burial") }), renderComponent($$result2, "OngoingCare", $$OngoingCare, { "language": isSpanish ? "es" : "en" }), renderComponent($$result2, "ContactForm", $$ContactForm, { "language": isSpanish ? "es" : "en" })) })}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/burial-es.astro", void 0);

const $$file = "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/burial-es.astro";
const $$url = "/burial-es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BurialEs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
