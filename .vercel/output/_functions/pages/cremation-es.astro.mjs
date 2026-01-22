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
const $$CremationEs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CremationEs;
  const pathname = Astro2.url.pathname;
  const isSpanish = pathname.includes("-es") || pathname === "/es";
  const isCatholic = pathname.includes("catholic");
  const isVeteran = pathname.includes("veteran");
  function getCompanyName() {
    if (isVeteran) {
      return isSpanish ? "Cuidado de Veteranos" : "Veteran Care";
    } else if (isCatholic) {
      return isSpanish ? "Cuidado Cat?lico" : "Catholic Care";
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
      name: "Servicios de Cremaci?n",
      description: "Servicios completos de cremaci?n incluyendo cremaci?n directa, servicios conmemorativos y opciones de servicio completo. Planifique con anticipaci?n con dignidad y respeto.",
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
        description: "Opciones flexibles de cremaci?n para adaptarse a sus necesidades y presupuesto"
      }
    };
    return JSON.stringify(schema);
  }
  const serviceSchema = generateServiceSchema();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios de Cremaci?n - Planificar con Anticipaci?n", "description": "Servicios completos de cremaci?n incluyendo cremaci?n directa, servicios conmemorativos y opciones de servicio completo. Planifique con anticipaci?n con dignidad y respeto.", "pageType": "general", "language": "es" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-8 md:py-32 overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0"> <img src="/images/hero.webp" srcset="/images/hero-640.webp 640w,\n                /images/hero.webp 970w" sizes="(max-width: 640px) 640px,\n               970px" loading="eager" fetchpriority="high" alt="Servicios completos de cremaci\xF3n" class="w-full h-full object-cover blur-sm"> <!-- Dark overlay for text readability --> <div class="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary-dark/40 to-primary-light/40"></div> </div> <!-- Content --> <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 min-h-[300px] md:min-h-[500px] py-4 md:py-0"> <!-- Company Name - Left/Top --> <div class="flex-1 w-full md:w-auto"> <img', "", ' class="mb-4 md:mb-6 w-auto h-12 sm:h-14 md:h-20 lg:h-28 xl:h-36 drop-shadow-lg bg-white/90 rounded-lg p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 shadow-xl" loading="eager"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold drop-shadow-lg leading-hero tracking-hero"> ', ' </h1> </div> <!-- Hero Text - Center Right --> <div class="flex-1 w-full md:flex-none md:w-1/2 lg:w-2/5 text-left md:text-right mt-4 md:mt-0"> <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-6 drop-shadow-lg leading-hero tracking-hero">\nPlanificar con Anticipaci?n para la Tranquilidad\n</h2> <p class="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-md text-left md:text-right">\nPensar en el final de la vida puede ser dif?cil. Sin embargo, hacer planes ahora es uno de los mejores regalos que puede darle a su familia.\n</p> </div> </div> </div> <!-- Attribution Footnote --> <div class="absolute bottom-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pb-3 md:pb-4"> <p class="text-xs sm:text-sm text-white/80 drop-shadow-md text-right">\nProporcionado por Arbaugh-Pearce-Greenisen & Sons\n</p> </div> </section>  ', '  <section class="py-8 md:py-12 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <div class="bg-secondary p-6 md:p-8 rounded-lg shadow-sm border-t-4 border-accent"> <p class="text-base md:text-lg text-text leading-relaxed text-center">\nOfrecemos servicios completos de cremaci?n y entierro. Ambas opciones est?n disponibles y son igualmente respetadas. Elija el servicio que se alinee con sus deseos, creencias y presupuesto. Todos los arreglos se alinean con los deseos de su familia.\n</p> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-6xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">\nOpciones de Cremaci?n\n</h2> <p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">\nUn enfoque moderno a la tradici?n, ofreciendo flexibilidad y remembranza personalizada.\n</p> <p class="text-base md:text-xl text-text text-center mb-6 md:mb-12 max-w-3xl mx-auto">\nHay diferentes formas de manejar la cremaci?n. Puede elegir la que se ajuste a su vida y su presupuesto.\n</p> <div class="grid md:grid-cols-3 gap-4 md:gap-8"> <!-- Option 1: Direct Cremation --> <div class="bg-secondary p-4 md:p-8 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-3 mb-3 md:mb-4"> <svg class="w-8 h-8 md:w-10 md:h-10 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-2xl font-heading font-bold text-primary">\nLa Opci?n Simple<br> <span class="text-base md:text-lg font-normal">(Cremaci?n Directa)</span> </h3> </div> <p class="text-sm md:text-base text-text mb-4 md:mb-6 leading-relaxed">\nEsta es la opci?n m?s b?sica. Es para personas que quieren algo simple y privado.\n</p> <ul class="space-y-2 md:space-y-3 text-sm md:text-base text-text"> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>Transporte profesional y cuidado del fallecido.</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>Tiene lugar la cremaci?n.</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>No hay funeral p?blico ni visita.</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>La familia recibe las cenizas para enterrar, esparcir o guardar en casa.</span> </li> </ul> </div> <!-- Option 2: Memorial Option --> <div class="bg-secondary p-4 md:p-8 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-3 mb-3 md:mb-4"> <svg class="w-8 h-8 md:w-10 md:h-10 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <h3 class="text-lg md:text-2xl font-heading font-bold text-primary">\nLa Opci?n Conmemorativa<br> <span class="text-base md:text-lg font-normal">(Viaje del Recuerdo)</span> </h3> </div> <p class="text-sm md:text-base text-text mb-4 md:mb-6 leading-relaxed">\nEsta opci?n permite que amigos y familiares se despidan juntos.\n</p> <ul class="space-y-2 md:space-y-3 text-sm md:text-base text-text"> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>Incluye un tiempo para que familiares y amigos visiten.</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>Incluye un servicio conmemorativo para compartir recuerdos.</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>Ocurre la cremaci?n y las cenizas se devuelven a la familia.</span> </li> </ul> </div> <!-- Option 3: Full Service Option --> <div class="bg-secondary p-4 md:p-8 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-3 mb-3 md:mb-4"> <svg class="w-8 h-8 md:w-10 md:h-10 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> <h3 class="text-lg md:text-2xl font-heading font-bold text-primary">\nLa Opci?n de Servicio Completo<br> <span class="text-base md:text-lg font-normal">(Viaje de la Vida)</span> </h3> </div> <p class="text-sm md:text-base text-text mb-4 md:mb-6 leading-relaxed">\nEsto es como un funeral tradicional, pero termina con cremaci?n en lugar de entierro.\n</p> <ul class="space-y-2 md:space-y-3 text-sm md:text-base text-text"> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>Su cuerpo est? preparado para que familiares y amigos puedan visitar y despedirse.</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>Se usa un "ata?d de alquiler" especial para el servicio.</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">?</span> <span>Despu?s de que termine el servicio funerario, tiene lugar la cremaci?n.</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">\nPreguntas Sobre la Planificaci?n\n</h2> <div class="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12"> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">\nAyuda a Su Familia\n</h3> <p class="text-sm md:text-base text-text leading-relaxed">\nProporciona claridad y tranquilidad para su familia al documentar sus preferencias con anticipaci?n. Su familia no tendr? que adivinar lo que usted quer?a.\n</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">\nAhorra Dinero\n</h3> <p class="text-sm md:text-base text-text leading-relaxed">\nOpciones de prefinanciaci?n para fijar las tarifas de hoy. Esto protege a su familia de los costos crecientes en el futuro. El dinero se mantiene seguro en una cuenta de fideicomiso especial o de seguro hasta que se necesite.\n</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">\nEs Su Elecci?n\n</h3> <p class="text-sm md:text-base text-text leading-relaxed">\nUsted decide exactamente c?mo quiere ser recordado.\n</p> </div> </div> <div class="bg-white p-4 md:p-8 rounded-lg shadow-sm"> <h3 class="text-xl md:text-2xl font-heading font-bold text-primary mb-6 text-center">\nPreguntas Comunes Sobre Planificar con Anticipaci?n\n</h3> ', " </div> </div> </div> </section> ", " ", " "])), unescapeHTML(serviceSchema), maybeRenderHead(), addAttribute(logoPath, "src"), addAttribute(displayCompanyName, "alt"), displayCompanyName, renderComponent($$result2, "ServiceNav", $$ServiceNav, {}), renderComponent($$result2, "Accordion", $$Accordion, { "language": "es", "items": getFAQs("es", "general", "cremation") }), renderComponent($$result2, "OngoingCare", $$OngoingCare, { "language": isSpanish ? "es" : "en" }), renderComponent($$result2, "ContactForm", $$ContactForm, { "language": isSpanish ? "es" : "en" })) })}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/cremation-es.astro", void 0);

const $$file = "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/cremation-es.astro";
const $$url = "/cremation-es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CremationEs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
