import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate } from './astro/server.CJ8kye3e.js';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$ServiceButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceButtons;
  const pathname = Astro2.url.pathname;
  const isSpanish = pathname.includes("-es") || pathname === "/es";
  const isCatholic = pathname.includes("catholic");
  const isVeteran = pathname.includes("veteran");
  const currentPageType = isVeteran ? "veteran" : isCatholic ? "catholic" : "general";
  const language = isSpanish ? "es" : "en";
  function getCremationUrl() {
    if (isCatholic) {
      return isSpanish ? "/catholic-cremation-es" : "/catholic-cremation";
    } else if (isVeteran) {
      return isSpanish ? "/veteran-cremation-es" : "/veteran-cremation";
    } else {
      return isSpanish ? "/cremation-es" : "/cremation";
    }
  }
  function getBurialUrl() {
    if (isCatholic) {
      return isSpanish ? "/catholic-burial-es" : "/catholic-burial";
    } else if (isVeteran) {
      return isSpanish ? "/veteran-burial-es" : "/veteran-burial";
    } else {
      return isSpanish ? "/burial-es" : "/burial";
    }
  }
  const cremationUrl = getCremationUrl();
  const burialUrl = getBurialUrl();
  const introText = {
    en: "We offer both cremation and burial services - choose the option that best fits your needs and beliefs.",
    es: "Ofrecemos servicios de cremaci\xF3n y entierro - elija la opci\xF3n que mejor se adapte a sus necesidades y creencias."
  };
  const cremationButtonText = {
    general: { en: "Learn About Cremation", es: "Conozca Sobre la Cremaci\xF3n" },
    catholic: { en: "Learn About Catholic Cremation", es: "Conozca Sobre la Cremaci\xF3n Cat\xF3lica" },
    veteran: { en: "Learn About Veteran Cremation", es: "Conozca Sobre la Cremaci\xF3n para Veteranos" }
  };
  const burialButtonText = {
    general: { en: "Learn About Burial", es: "Conozca Sobre el Entierro" },
    catholic: { en: "Learn About Catholic Burial", es: "Conozca Sobre el Entierro Cat\xF3lico" },
    veteran: { en: "Learn About Veteran Burial", es: "Conozca Sobre el Entierro para Veteranos" }
  };
  return renderTemplate`<!-- Services Introduction Section -->${maybeRenderHead()}<section class="py-10 md:py-24 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto text-center"> <p class="text-lg md:text-xl text-text leading-relaxed mb-8 md:mb-12"${addAttribute(introText.en, "data-lang-en")}${addAttribute(introText.es, "data-lang-es")}> ${introText[language]} </p> <div class="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"> <a${addAttribute(cremationUrl, "href")} class="btn btn-accent btn-lg w-full sm:w-auto group"${addAttribute(cremationButtonText[currentPageType].en, "data-lang-en")}${addAttribute(cremationButtonText[currentPageType].es, "data-lang-es")}> <span class="flex items-center justify-center gap-2"> <span>${cremationButtonText[currentPageType][language]}</span> <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> <a${addAttribute(burialUrl, "href")} class="btn btn-primary btn-lg w-full sm:w-auto group"${addAttribute(burialButtonText[currentPageType].en, "data-lang-en")}${addAttribute(burialButtonText[currentPageType].es, "data-lang-es")}> <span class="flex items-center justify-center gap-2"> <span>${burialButtonText[currentPageType][language]}</span> <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/ServiceButtons.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/ServiceButtons.astro", void 0);

export { $$ServiceButtons as $ };
