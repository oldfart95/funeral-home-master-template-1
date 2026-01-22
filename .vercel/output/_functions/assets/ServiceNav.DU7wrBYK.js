import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate } from './astro/server.CJ8kye3e.js';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$ServiceNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceNav;
  const pathname = Astro2.url.pathname;
  const isSpanish = pathname.includes("-es") || pathname === "/es";
  const isCatholic = pathname.includes("catholic");
  const isVeteran = pathname.includes("veteran");
  const isCremation = pathname.includes("cremation");
  const isBurial = pathname.includes("burial");
  const currentService = isCremation ? "cremation" : isBurial ? "burial" : null;
  let cremationPath = isSpanish ? "/cremation-es" : "/cremation";
  let burialPath = isSpanish ? "/burial-es" : "/burial";
  if (isCatholic) {
    cremationPath = isSpanish ? "/catholic-cremation-es" : "/catholic-cremation";
    burialPath = isSpanish ? "/catholic-burial-es" : "/catholic-burial";
  } else if (isVeteran) {
    cremationPath = isSpanish ? "/veteran-cremation-es" : "/veteran-cremation";
    burialPath = isSpanish ? "/veteran-burial-es" : "/veteran-burial";
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-4 md:py-6 bg-secondary border-b-2 border-gray-200"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-6xl mx-auto"> <div class="flex items-center justify-center gap-1 md:gap-2" role="tablist"${addAttribute(isSpanish ? "Navegaci\xF3n de servicios" : "Service navigation", "aria-label")}> <a${addAttribute(cremationPath, "href")}${addAttribute(isSpanish ? "Cremaci\xF3n" : "Cremation", "aria-label")}${addAttribute(currentService === "cremation" ? "page" : void 0, "aria-current")} role="tab"${addAttribute(currentService === "cremation" ? "true" : "false", "aria-selected")}${addAttribute(`px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg transition-all duration-200 rounded-t-lg ${currentService === "cremation" ? "bg-primary text-white border-b-4 border-accent shadow-md" : "bg-white text-primary hover:bg-gray-50 border-b-2 border-transparent hover:border-accent"}`, "class")}> <span lang="en"${addAttribute(isSpanish ? "true" : "false", "aria-hidden")}${addAttribute(isSpanish ? "hidden" : "", "class")}>Cremation</span> <span lang="es"${addAttribute(isSpanish ? "false" : "true", "aria-hidden")}${addAttribute(isSpanish ? "" : "hidden", "class")}>Cremación</span> </a> <a${addAttribute(burialPath, "href")}${addAttribute(isSpanish ? "Entierro" : "Burial", "aria-label")}${addAttribute(currentService === "burial" ? "page" : void 0, "aria-current")} role="tab"${addAttribute(currentService === "burial" ? "true" : "false", "aria-selected")}${addAttribute(`px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg transition-all duration-200 rounded-t-lg ${currentService === "burial" ? "bg-primary text-white border-b-4 border-accent shadow-md" : "bg-white text-primary hover:bg-gray-50 border-b-2 border-transparent hover:border-accent"}`, "class")}> <span lang="en"${addAttribute(isSpanish ? "true" : "false", "aria-hidden")}${addAttribute(isSpanish ? "hidden" : "", "class")}>Burial</span> <span lang="es"${addAttribute(isSpanish ? "false" : "true", "aria-hidden")}${addAttribute(isSpanish ? "" : "hidden", "class")}>Entierro</span> </a> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/ServiceNav.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/ServiceNav.astro", void 0);

export { $$ServiceNav as $ };
