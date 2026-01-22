import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute } from './astro/server.CJ8kye3e.js';
import 'piccolore';
import 'clsx';
import siteDetails from './siteDetails.B9KLVKNZ.js';
import { a as formatPhoneDisplay, f as formatPhoneTel } from './Layout.CGO4HiXi.js';

const $$Astro$1 = createAstro("https://example.com");
const $$OurStory = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OurStory;
  const { language = "en" } = Astro2.props;
  const content = {
    en: {
      paragraph1: "Our funeral home has been a steady hand for our community for over 120 years. We believe that every life tells a unique story, and our role is to ensure that story is told with dignity, respect, and a meticulous attention to detail.",
      paragraph2: "We understand the traditions and values that define our community. From the first call to the final farewell, we serve as more than just directors\u2014we are neighbors caring for neighbors."
    },
    es: {
      paragraph1: "Nuestra funeraria ha sido una mano firme para nuestra comunidad durante m\xE1s de 120 a\xF1os. Creemos que cada vida cuenta una historia \xFAnica, y nuestro papel es asegurar que esa historia se cuente con dignidad, respeto y una atenci\xF3n meticulosa a los detalles.",
      paragraph2: "Entendemos las tradiciones y valores que definen nuestra comunidad. Desde la primera llamada hasta la despedida final, servimos como algo m\xE1s que directores: somos vecinos que cuidan a vecinos."
    }
  };
  const text = content[language];
  return renderTemplate`<!-- Our Story Section -->${maybeRenderHead()}<section class="py-10 md:py-16 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center"> ${text.paragraph1} </p> <p class="text-base md:text-lg lg:text-xl text-text leading-relaxed text-center mt-4 md:mt-6"> ${text.paragraph2} </p> <!-- Decorative Line --> <div class="flex justify-center mt-6 md:mt-8 mb-6 md:mb-8"> <div class="w-1/2 max-w-md h-1 bg-text/40"></div> </div> </div> </div> </section>`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/OurStory.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ImmediateNeedBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImmediateNeedBanner;
  const { language = "en" } = Astro2.props;
  const phone = siteDetails.phone && siteDetails.phone !== "(111) 111-1111" ? siteDetails.phone : "(111) 111-1111";
  const content = {
    en: {
      heading: "Need Immediate Assistance?",
      subheading: "We're here for you 24/7",
      description: "If a death has occurred, our compassionate team is standing by to guide you through every step.",
      cta: "Get Immediate Help",
      linkText: "Visit Immediate Need Page"
    },
    es: {
      heading: "\xBFNecesita Asistencia Inmediata?",
      subheading: "Estamos aqu\xED para usted las 24 horas",
      description: "Si ha ocurrido una muerte, nuestro equipo compasivo est\xE1 disponible para guiarlo a trav\xE9s de cada paso.",
      cta: "Obtener Ayuda Inmediata",
      linkText: "Visitar P\xE1gina de Necesidad Inmediata"
    }
  };
  const text = content[language];
  return renderTemplate`<!-- Immediate Need Banner Section -->${maybeRenderHead()}<section class="bg-accent text-white py-8 md:py-12 relative overflow-hidden"> <!-- Background Pattern --> <div class="absolute inset-0 opacity-10"> <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);"></div> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-4xl mx-auto"> <div class="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg p-6 md:p-8 shadow-xl"> <div class="text-center mb-6"> <h2 class="text-2xl md:text-4xl font-heading font-bold mb-2 md:mb-3"> ${text.heading} </h2> <p class="text-lg md:text-xl font-semibold mb-4 text-white/95"> ${text.subheading} </p> <p class="text-base md:text-lg text-white/90 mb-6"> ${text.description} </p> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a${addAttribute(`tel:${formatPhoneTel(phone)}`, "href")} class="bg-white text-accent px-6 md:px-8 py-3 md:py-4 rounded-md font-bold text-lg md:text-xl hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 group whitespace-nowrap"> <svg class="w-6 h-6 transition-transform duration-200 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>${formatPhoneDisplay(phone)}</span> </a> <a href="/immediate-need" class="bg-white/20 text-white border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-md font-semibold text-base md:text-lg hover:bg-white/30 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 group"> <span>${text.linkText}</span> <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> </div> </div> </section>`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/ImmediateNeedBanner.astro", void 0);

export { $$OurStory as $, $$ImmediateNeedBanner as a };
