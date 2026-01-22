import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate, k as renderComponent, o as renderSlot, p as renderHead, u as unescapeHTML } from './astro/server.CJ8kye3e.js';
import 'piccolore';
import siteDetails from './siteDetails.B9KLVKNZ.js';
import 'clsx';
/* empty css                                */

function formatPhoneDisplay(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 10) {
    return phone;
  }
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
function formatPhoneTel(phone) {
  return phone.replace(/\D/g, "");
}

const $$Astro$3 = createAstro("https://example.com");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const pathname = Astro2.url.pathname;
  const isSpanish = pathname.includes("-es") || pathname === "/es";
  const isCatholic = pathname.includes("catholic");
  const isVeteran = pathname.includes("veteran");
  const currentPageType = isVeteran ? "veteran" : isCatholic ? "catholic" : "general";
  const generalPath = isSpanish ? "/" : "/";
  const catholicPath = isSpanish ? "/catholic-es" : "/catholic";
  const veteranPath = isSpanish ? "/veteran-es" : "/veteran";
  function getAlternateLanguageUrl() {
    const routeMap = {
      "/": { en: "/", es: "/es" },
      "/es": { en: "/", es: "/es" },
      "/catholic": { en: "/catholic", es: "/catholic-es" },
      "/catholic-es": { en: "/catholic", es: "/catholic-es" },
      "/veteran": { en: "/veteran", es: "/veteran-es" },
      "/veteran-es": { en: "/veteran", es: "/veteran-es" },
      "/cremation": { en: "/cremation", es: "/cremation-es" },
      "/cremation-es": { en: "/cremation", es: "/cremation-es" },
      "/burial": { en: "/burial", es: "/burial-es" },
      "/burial-es": { en: "/burial", es: "/burial-es" },
      "/catholic-cremation": { en: "/catholic-cremation", es: "/catholic-cremation-es" },
      "/catholic-cremation-es": { en: "/catholic-cremation", es: "/catholic-cremation-es" },
      "/catholic-burial": { en: "/catholic-burial", es: "/catholic-burial-es" },
      "/catholic-burial-es": { en: "/catholic-burial", es: "/catholic-burial-es" },
      "/veteran-cremation": { en: "/veteran-cremation", es: "/veteran-cremation-es" },
      "/veteran-cremation-es": { en: "/veteran-cremation", es: "/veteran-cremation-es" },
      "/veteran-burial": { en: "/veteran-burial", es: "/veteran-burial-es" },
      "/veteran-burial-es": { en: "/veteran-burial", es: "/veteran-burial-es" }
    };
    if (routeMap[pathname]) {
      return isSpanish ? routeMap[pathname].en : routeMap[pathname].es;
    }
    if (isSpanish) {
      return pathname.replace(/-es$/, "");
    } else {
      return `${pathname}-es`;
    }
  }
  const alternateLanguageUrl = getAlternateLanguageUrl();
  const alternateLanguageLabel = isSpanish ? "EN" : "ES";
  const callNowButtonText = isSpanish ? "Llame Ahora" : "Call Now";
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 bg-primary text-white shadow-lg overflow-x-hidden"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full"> <!-- Unified Navigation Bar --> <div class="flex items-center justify-between gap-2 md:gap-4 h-14 md:h-16 min-w-0"> <!-- Left Side: Hamburger Menu (Mobile) + Page Type Navigation (Desktop) --> <div class="flex items-center gap-1 md:gap-2 min-w-0"> <!-- Hamburger Menu Button (Mobile Only) --> <button id="mobile-menu-toggle"${addAttribute(isSpanish ? "Abrir men\xFA de navegaci\xF3n" : "Open navigation menu", "aria-label")} aria-expanded="false" aria-controls="mobile-menu" class="md:hidden bg-white/10 hover:bg-white/20 text-white p-3 rounded-md transition-all duration-200 border border-white/30 hover:border-white/50 flex items-center justify-center min-w-[44px] min-h-[44px]"${addAttribute(isSpanish ? "Men\xFA" : "Menu", "title")}> <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Desktop Navigation Links --> <div class="hidden md:flex items-center gap-1 md:gap-2 min-w-0" role="navigation"${addAttribute(isSpanish ? "Navegaci\xF3n principal" : "Main navigation", "aria-label")}> <a${addAttribute(generalPath, "href")}${addAttribute(isSpanish ? "Inicio" : "Home", "aria-label")}${addAttribute(currentPageType === "general" ? "page" : void 0, "aria-current")}${addAttribute(`page-link nav-link px-2 sm:px-3 md:px-4 lg:px-6 py-2 md:py-3 font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 whitespace-nowrap relative min-h-[44px] flex items-center ${currentPageType === "general" ? "bg-accent text-white border-b-2 border-white" : "text-white/80 hover:text-white hover:bg-primary-light/20"}`, "class")}> ${isSpanish ? "Inicio" : "Home"} </a> <a${addAttribute(catholicPath, "href")}${addAttribute(isSpanish ? "Cat\xF3lico" : "Catholic", "aria-label")}${addAttribute(currentPageType === "catholic" ? "page" : void 0, "aria-current")}${addAttribute(`page-link nav-link px-2 sm:px-3 md:px-4 lg:px-6 py-2 md:py-3 font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 whitespace-nowrap relative min-h-[44px] flex items-center ${currentPageType === "catholic" ? "bg-accent text-white border-b-2 border-white" : "text-white/80 hover:text-white hover:bg-primary-light/20"}`, "class")}> ${isSpanish ? "Cat\xF3lico" : "Catholic"} </a> <a${addAttribute(veteranPath, "href")}${addAttribute(isSpanish ? "Veterano" : "Veteran", "aria-label")}${addAttribute(currentPageType === "veteran" ? "page" : void 0, "aria-current")}${addAttribute(`page-link nav-link px-2 sm:px-3 md:px-4 lg:px-6 py-2 md:py-3 font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 whitespace-nowrap relative min-h-[44px] flex items-center ${currentPageType === "veteran" ? "bg-accent text-white border-b-2 border-white" : "text-white/80 hover:text-white hover:bg-primary-light/20"}`, "class")}> ${isSpanish ? "Veterano" : "Veteran"} </a> </div> </div> <!-- Right Side: Dark Mode Toggle, Language Toggle and Call Now Button --> <div class="flex items-center gap-2 md:gap-3 flex-shrink-0"> <!-- Dark Mode Toggle --> <button id="dark-mode-toggle"${addAttribute(isSpanish ? "Alternar modo oscuro" : "Toggle dark mode", "aria-label")} class="dark-mode-toggle bg-white/10 hover:bg-white/20 text-white p-2 sm:p-2.5 rounded-md transition-all duration-200 border border-white/30 hover:border-white/50 flex items-center justify-center flex-shrink-0 min-w-[44px] min-h-[44px]"${addAttribute(isSpanish ? "Alternar modo oscuro" : "Toggle dark mode", "title")}> <svg id="dark-mode-icon" class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> <svg id="light-mode-icon" class="w-4 h-4 sm:w-5 sm:h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </button> <!-- Language Toggle --> <a${addAttribute(alternateLanguageUrl, "href")}${addAttribute(isSpanish ? "Switch to English" : "Cambiar a Espa\xF1ol", "aria-label")} class="language-toggle bg-white/10 hover:bg-white/20 text-white px-2 sm:px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-md font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-200 border border-white/30 hover:border-white/50 flex items-center gap-1 sm:gap-2 flex-shrink-0 hover:scale-105 active:scale-95 min-h-[44px]"${addAttribute(isSpanish ? "Switch to English" : "Cambiar a Espa\xF1ol", "title")}${addAttribute(isSpanish ? "en" : "es", "data-target-lang")}> <svg class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 transition-transform duration-200 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 11a3 3 0 11-6 0m6 0a3 3 0 10-6 0m6 0H9m3 0v1m0-1v-1m0 1H9m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${alternateLanguageLabel} </a> <!-- Call Now Button --> <a${addAttribute(`tel:${formatPhoneTel(siteDetails.phone)}`, "href")}${addAttribute(isSpanish ? "Llame ahora" : "Call now", "aria-label")} class="bg-accent hover:bg-accent-dark text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-2.5 rounded-md font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-200 shadow-md hover:shadow-lg flex-shrink-0 hover:scale-105 active:scale-95 flex items-center gap-2 group min-h-[44px]" data-lang-en="Call Now" data-lang-es="Llame Ahora"> <svg class="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="hidden sm:inline">${callNowButtonText}</span> <span class="sm:hidden">${isSpanish ? "Llamar" : "Call"}</span> </a> </div> </div> <!-- Mobile Menu Overlay --> <div id="mobile-menu" class="md:hidden fixed inset-0 top-14 bg-primary/98 backdrop-blur-sm z-40 transform translate-x-full transition-transform duration-300 ease-in-out"${addAttribute(isSpanish ? "Men\xFA de navegaci\xF3n m\xF3vil" : "Mobile navigation menu", "aria-label")} role="navigation"> <div class="container mx-auto px-4 py-6"> <nav class="flex flex-col gap-2"${addAttribute(isSpanish ? "Navegaci\xF3n principal" : "Main navigation", "aria-label")}> <a${addAttribute(generalPath, "href")}${addAttribute(isSpanish ? "Inicio" : "Home", "aria-label")}${addAttribute(currentPageType === "general" ? "page" : void 0, "aria-current")}${addAttribute(`page-link mobile-nav-link px-4 py-4 font-semibold text-lg transition-all duration-200 rounded-md min-h-[44px] flex items-center ${currentPageType === "general" ? "bg-accent text-white" : "text-white/90 hover:text-white hover:bg-primary-light/30"}`, "class")} onclick="document.getElementById('mobile-menu-toggle')?.click();"> ${isSpanish ? "Inicio" : "Home"} </a> <a${addAttribute(catholicPath, "href")}${addAttribute(isSpanish ? "Cat\xF3lico" : "Catholic", "aria-label")}${addAttribute(currentPageType === "catholic" ? "page" : void 0, "aria-current")}${addAttribute(`page-link mobile-nav-link px-4 py-4 font-semibold text-lg transition-all duration-200 rounded-md min-h-[44px] flex items-center ${currentPageType === "catholic" ? "bg-accent text-white" : "text-white/90 hover:text-white hover:bg-primary-light/30"}`, "class")} onclick="document.getElementById('mobile-menu-toggle')?.click();"> ${isSpanish ? "Cat\xF3lico" : "Catholic"} </a> <a${addAttribute(veteranPath, "href")}${addAttribute(isSpanish ? "Veterano" : "Veteran", "aria-label")}${addAttribute(currentPageType === "veteran" ? "page" : void 0, "aria-current")}${addAttribute(`page-link mobile-nav-link px-4 py-4 font-semibold text-lg transition-all duration-200 rounded-md min-h-[44px] flex items-center ${currentPageType === "veteran" ? "bg-accent text-white" : "text-white/90 hover:text-white hover:bg-primary-light/30"}`, "class")} onclick="document.getElementById('mobile-menu-toggle')?.click();"> ${isSpanish ? "Veterano" : "Veteran"} </a> </nav> </div> </div> <!-- Mobile Menu Backdrop --> <div id="mobile-menu-backdrop" class="md:hidden fixed inset-0 bg-black/50 z-30 opacity-0 pointer-events-none transition-opacity duration-300" onclick="document.getElementById('mobile-menu-toggle')?.click();" aria-hidden="true"></div> </div> </nav> ${renderScript($$result, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { pageType = "general", language = "en" } = Astro2.props;
  function getCremationLink() {
    const base = pageType === "catholic" ? "/catholic-cremation" : pageType === "veteran" ? "/veteran-cremation" : "/cremation";
    return language === "es" ? `${base}-es` : base;
  }
  function getBurialLink() {
    const base = pageType === "catholic" ? "/catholic-burial" : pageType === "veteran" ? "/veteran-burial" : "/burial";
    return language === "es" ? `${base}-es` : base;
  }
  const cremationLink = getCremationLink();
  const burialLink = getBurialLink();
  const phone = siteDetails.phone && siteDetails.phone !== "(111) 111-1111" ? siteDetails.phone : "(111) 111-1111";
  const hasAddress = siteDetails.address.street && siteDetails.address.city;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary text-white py-12 md:py-16 mt-auto"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 mb-8"> <!-- Quick Links --> <div> <h3 class="text-xl font-heading font-bold mb-4 text-white"> ${language === "es" ? "Enlaces R\xE1pidos" : "Quick Links"} </h3> <ul class="space-y-2"> <li> <a${addAttribute(cremationLink, "href")} class="footer-link text-white/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"> <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span>${language === "es" ? "Cremaci\xF3n" : "Cremation"}</span> </a> </li> <li> <a${addAttribute(burialLink, "href")} class="footer-link text-white/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"> <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span>${language === "es" ? "Entierro" : "Burial"}</span> </a> </li> <li> <a href="#contact" class="footer-link text-white/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"> <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span>${language === "es" ? "Cont\xE1ctenos" : "Contact Us"}</span> </a> </li> </ul> </div> <!-- Services --> <div> <h3 class="text-xl font-heading font-bold mb-4 text-white"> ${language === "es" ? "Servicios" : "Services"} </h3> <ul class="space-y-2"> <li> <a href="/pre-planning" class="footer-link text-white/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"> <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span>${language === "es" ? "Planificaci\xF3n Previa" : "Pre-Planning"}</span> </a> </li> <li> <a href="/immediate-need" class="footer-link text-white/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"> <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span>${language === "es" ? "Necesidad Inmediata" : "Immediate Need"}</span> </a> </li> <li> <a href="/traditional-services" class="footer-link text-white/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"> <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span>${language === "es" ? "Servicios Tradicionales" : "Traditional Services"}</span> </a> </li> </ul> </div> <!-- Company --> <div> <h3 class="text-xl font-heading font-bold mb-4 text-white"> ${language === "es" ? "Empresa" : "Company"} </h3> <ul class="space-y-2"> <li> <a href="/privacy-policy" class="footer-link text-white/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"> <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span>${language === "es" ? "Pol\xEDtica de Privacidad" : "Privacy Policy"}</span> </a> </li> <li> <a href="/accessibility" class="footer-link text-white/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"> <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span>${language === "es" ? "Declaraci\xF3n de Accesibilidad" : "Accessibility Statement"}</span> </a> </li> </ul> </div> <!-- Contact --> <div> <h3 class="text-xl font-heading font-bold mb-4 text-white"> ${language === "es" ? "Contacto" : "Contact"} </h3> <ul class="space-y-2"> ${hasAddress && renderTemplate`<li class="text-white/80"> <address class="not-italic"> ${siteDetails.address.street}<br> ${siteDetails.address.city}, ${siteDetails.address.state} ${siteDetails.address.zip} </address> </li>`} <li> <a${addAttribute(`tel:${formatPhoneTel(phone)}`, "href")} class="footer-link text-white/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"> <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>${formatPhoneDisplay(phone)}</span> </a> </li> </ul> </div> </div> <div class="border-t border-white/20 pt-8 text-center text-white/70 text-sm"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteDetails.companyName}. All rights reserved.</p> </div> </div> </footer>`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/Footer.astro", void 0);

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="back-to-top" class="btn btn-accent fixed bottom-8 right-8 z-50 p-3 rounded-full opacity-0 pointer-events-none focus-visible:opacity-100 focus-visible:pointer-events-auto group" aria-label="Back to top" title="Back to top" data-astro-cid-wlspcwf4> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-200 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-wlspcwf4> <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" data-astro-cid-wlspcwf4></path> </svg> </button> ${renderScript($$result, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/BackToTop.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/BackToTop.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { items } = Astro2.props;
  if (items.length <= 1) {
    return null;
  }
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="breadcrumb-container" data-astro-cid-qaanghzh> <ol class="breadcrumb-list" itemscope itemtype="https://schema.org/BreadcrumbList" data-astro-cid-qaanghzh> ${items.map((item, index) => {
    const isLast = index === items.length - 1;
    return renderTemplate`<li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" data-astro-cid-qaanghzh> ${isLast ? renderTemplate`<span class="breadcrumb-current" itemprop="name" data-astro-cid-qaanghzh>${item.label}</span>` : renderTemplate`<a${addAttribute(item.href, "href")} class="breadcrumb-link" itemprop="item" data-astro-cid-qaanghzh> <span itemprop="name" data-astro-cid-qaanghzh>${item.label}</span> </a>`} <meta itemprop="position"${addAttribute(String(index + 1), "content")}> ${!isLast && renderTemplate`<span class="breadcrumb-separator" aria-hidden="true" data-astro-cid-qaanghzh> <svg class="breadcrumb-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-qaanghzh> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-qaanghzh></path> </svg> </span>`} </li>`;
  })} </ol> </nav> `;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/Breadcrumb.astro", void 0);

const $$PageLoadingOverlay = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="page-loading-overlay" class="page-loading-overlay" aria-hidden="true" aria-live="polite" data-astro-cid-w2ogazv3> <div class="loading-content" data-astro-cid-w2ogazv3> <div class="loading-spinner" data-astro-cid-w2ogazv3> <div class="spinner-circle" data-astro-cid-w2ogazv3></div> </div> <p class="loading-text" data-astro-cid-w2ogazv3>Loading...</p> </div> </div>  ${renderScript($$result, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/PageLoadingOverlay.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/PageLoadingOverlay.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, pageType, language } = Astro2.props;
  const pathname = Astro2.url.pathname;
  const detectedLanguage = language || (pathname.includes("-es") || pathname === "/es" ? "es" : "en");
  const detectedPageType = pageType || (pathname.includes("catholic") ? "catholic" : pathname.includes("veteran") ? "veteran" : "general");
  const pageTitle = title ? `${title} | ${siteDetails.companyName}` : siteDetails.companyName;
  const pageDescription = description || `Professional funeral and cremation services with dignity, respect, and understanding.`;
  function getAlternateUrls() {
    const baseUrl = Astro2.site?.href || Astro2.url.origin;
    const alternates = [];
    alternates.push({ lang: detectedLanguage, url: `${baseUrl}${pathname}` });
    const routeMap = {
      "/": { en: "/", es: "/es" },
      "/es": { en: "/", es: "/es" },
      "/catholic": { en: "/catholic", es: "/catholic-es" },
      "/catholic-es": { en: "/catholic", es: "/catholic-es" },
      "/veteran": { en: "/veteran", es: "/veteran-es" },
      "/veteran-es": { en: "/veteran", es: "/veteran-es" },
      "/cremation": { en: "/cremation", es: "/cremation-es" },
      "/cremation-es": { en: "/cremation", es: "/cremation-es" },
      "/burial": { en: "/burial", es: "/burial-es" },
      "/burial-es": { en: "/burial", es: "/burial-es" },
      "/catholic-cremation": { en: "/catholic-cremation", es: "/catholic-cremation-es" },
      "/catholic-cremation-es": { en: "/catholic-cremation", es: "/catholic-cremation-es" },
      "/catholic-burial": { en: "/catholic-burial", es: "/catholic-burial-es" },
      "/catholic-burial-es": { en: "/catholic-burial", es: "/catholic-burial-es" },
      "/veteran-cremation": { en: "/veteran-cremation", es: "/veteran-cremation-es" },
      "/veteran-cremation-es": { en: "/veteran-cremation", es: "/veteran-cremation-es" },
      "/veteran-burial": { en: "/veteran-burial", es: "/veteran-burial-es" },
      "/veteran-burial-es": { en: "/veteran-burial", es: "/veteran-burial-es" }
    };
    if (routeMap[pathname]) {
      const alternatePath = detectedLanguage === "en" ? routeMap[pathname].es : routeMap[pathname].en;
      alternates.push({
        lang: detectedLanguage === "en" ? "es" : "en",
        url: `${baseUrl}${alternatePath}`
      });
    } else {
      if (detectedLanguage === "en") {
        const esPath = pathname.endsWith("-es") ? pathname : `${pathname}-es`;
        alternates.push({ lang: "es", url: `${baseUrl}${esPath}` });
      } else {
        const enPath = pathname.endsWith("-es") ? pathname.replace(/-es$/, "") : pathname;
        alternates.push({ lang: "en", url: `${baseUrl}${enPath}` });
      }
    }
    return alternates;
  }
  const alternateUrls = getAlternateUrls();
  function generateBreadcrumbs() {
    const items = [];
    items.push({
      label: detectedLanguage === "es" ? "Inicio" : "Home",
      href: detectedLanguage === "es" ? "/es" : "/"
    });
    if (pathname === "/" || pathname === "/es") {
      return items;
    }
    const labels = {
      "catholic": { en: "Catholic", es: "Cat\xF3lico" },
      "veteran": { en: "Veteran", es: "Veterano" },
      "cremation": { en: "Cremation", es: "Cremaci\xF3n" },
      "burial": { en: "Burial", es: "Entierro" },
      "accessibility": { en: "Accessibility", es: "Accesibilidad" },
      "privacy-policy": { en: "Privacy Policy", es: "Pol\xEDtica de Privacidad" },
      "traditional-services": { en: "Traditional Services", es: "Servicios Tradicionales" },
      "pre-planning": { en: "Pre-Planning", es: "Planificaci\xF3n Previa" },
      "immediate-need": { en: "Immediate Need", es: "Necesidad Inmediata" }
    };
    if (pathname === "/catholic" || pathname === "/catholic-es") {
      items.push({
        label: labels["catholic"][detectedLanguage],
        href: pathname
      });
      return items;
    }
    if (pathname === "/veteran" || pathname === "/veteran-es") {
      items.push({
        label: labels["veteran"][detectedLanguage],
        href: pathname
      });
      return items;
    }
    if (pathname.includes("catholic-")) {
      const catholicPath = detectedLanguage === "es" ? "/catholic-es" : "/catholic";
      items.push({
        label: labels["catholic"][detectedLanguage],
        href: catholicPath
      });
      if (pathname.includes("cremation")) {
        const servicePath = detectedLanguage === "es" ? "/catholic-cremation-es" : "/catholic-cremation";
        items.push({
          label: labels["cremation"][detectedLanguage],
          href: servicePath
        });
      } else if (pathname.includes("burial")) {
        const servicePath = detectedLanguage === "es" ? "/catholic-burial-es" : "/catholic-burial";
        items.push({
          label: labels["burial"][detectedLanguage],
          href: servicePath
        });
      }
    } else if (pathname.includes("veteran-")) {
      const veteranPath = detectedLanguage === "es" ? "/veteran-es" : "/veteran";
      items.push({
        label: labels["veteran"][detectedLanguage],
        href: veteranPath
      });
      if (pathname.includes("cremation")) {
        const servicePath = detectedLanguage === "es" ? "/veteran-cremation-es" : "/veteran-cremation";
        items.push({
          label: labels["cremation"][detectedLanguage],
          href: servicePath
        });
      } else if (pathname.includes("burial")) {
        const servicePath = detectedLanguage === "es" ? "/veteran-burial-es" : "/veteran-burial";
        items.push({
          label: labels["burial"][detectedLanguage],
          href: servicePath
        });
      }
    } else if (pathname.includes("cremation") || pathname.includes("burial")) {
      if (pathname.includes("cremation")) {
        const servicePath = detectedLanguage === "es" ? "/cremation-es" : "/cremation";
        items.push({
          label: labels["cremation"][detectedLanguage],
          href: servicePath
        });
      } else if (pathname.includes("burial")) {
        const servicePath = detectedLanguage === "es" ? "/burial-es" : "/burial";
        items.push({
          label: labels["burial"][detectedLanguage],
          href: servicePath
        });
      }
    } else {
      const pageName = pathname.replace(/^\/|\/$/g, "").replace(/-es$/, "");
      if (labels[pageName]) {
        items.push({
          label: labels[pageName][detectedLanguage],
          href: pathname
        });
      }
    }
    return items;
  }
  const breadcrumbItems = generateBreadcrumbs();
  const faviconConfig = detectedPageType === "veteran" ? {
    standard: "/favicon-veteran.webp",
    highDpi: "/favicon-veteran-high-dpi.webp",
    appleTouch: "/favicon-veteran-apple-touch.webp"
  } : {
    standard: "/favicon.webp",
    highDpi: "/favicon-high-dpi.webp",
    appleTouch: "/favicon-apple-touch.webp"
  };
  function generateBaseSchema() {
    const baseUrl = Astro2.site?.href || Astro2.url.origin;
    const imageUrl = new URL("/images/hero.webp", baseUrl).href;
    const address = {};
    if (siteDetails.address.street || siteDetails.address.city) {
      address["@type"] = "PostalAddress";
      if (siteDetails.address.street) address.streetAddress = siteDetails.address.street;
      if (siteDetails.address.city) address.addressLocality = siteDetails.address.city;
      if (siteDetails.address.state) address.addressRegion = siteDetails.address.state;
      if (siteDetails.address.zip) address.postalCode = siteDetails.address.zip;
    }
    const phone = siteDetails.phone && siteDetails.phone !== "(111) 111-1111" ? siteDetails.phone : "(111) 111-1111";
    const schema = {
      "@context": "https://schema.org",
      "@type": "FuneralHome",
      name: siteDetails.companyName,
      image: imageUrl,
      telephone: phone,
      priceRange: "$$",
      openingHours: "Mo-Su 00:00-23:59",
      // 24/7 availability
      url: baseUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Funeral Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cremation Services",
              description: "Comprehensive cremation services including direct cremation, memorial services, and full-service options."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Burial Services",
              description: "Traditional burial services with dignity and respect."
            }
          }
        ]
      }
    };
    if (Object.keys(address).length > 0) {
      schema.address = address;
    }
    return JSON.stringify(schema);
  }
  const baseSchema = generateBaseSchema();
  return renderTemplate(_a || (_a = __template(["<html", ' data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicons - WebP format for optimal performance --><link rel="icon" type="image/webp"', '><link rel="icon" type="image/webp"', ' sizes="32x32"><link rel="apple-touch-icon"', '><meta name="generator"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Canonical URL --><link rel="canonical"', "><!-- SEO: hreflang tags for language alternates -->", '<link rel="alternate" hreflang="x-default"', '><!-- Structured Data (Schema.org JSON-LD) --><script type="application/ld+json">', '<\/script><!-- Preload hero image for faster LCP --><link rel="preload" as="image" href="/images/hero.webp" imagesrcset="/images/hero-640.webp 640w, /images/hero.webp 970w" imagesizes="(max-width: 640px) 640px, 970px"><!-- Google Fonts: Merriweather (headings) + Inter (body) --><!-- Resource hints for faster font loading --><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="dns-prefetch" href="https://fonts.gstatic.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><title>', "</title><!-- Early dark mode detection to prevent flash -->", "", '</head> <body class="font-body text-text bg-background min-h-screen flex flex-col antialiased relative" data-astro-cid-sckkx6r4> <!-- Skip to main content link for keyboard navigation --> <a href="#main-content" class="skip-to-content" data-astro-cid-sckkx6r4> ', " </a> ", " ", " ", ' <main id="main-content" class="flex-grow" data-astro-cid-sckkx6r4> ', " </main> ", " ", " <!-- Language Detection Script --> ", "  </body> </html>"])), addAttribute(detectedLanguage, "lang"), addAttribute(pageDescription, "content"), addAttribute(faviconConfig.standard, "href"), addAttribute(faviconConfig.highDpi, "href"), addAttribute(faviconConfig.appleTouch, "href"), addAttribute(Astro2.generator, "content"), addAttribute(Astro2.url.href, "content"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(new URL("/images/hero.webp", Astro2.site || Astro2.url.origin).href, "content"), addAttribute(Astro2.url.href, "content"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(new URL("/images/hero.webp", Astro2.site || Astro2.url.origin).href, "content"), addAttribute(Astro2.url.href, "href"), alternateUrls.map((alt) => renderTemplate`<link rel="alternate"${addAttribute(alt.lang, "hreflang")}${addAttribute(alt.url, "href")}>`), addAttribute(alternateUrls.find((a) => a.lang === "en")?.url || alternateUrls[0].url, "href"), unescapeHTML(baseSchema), pageTitle, renderScript($$result, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), detectedLanguage === "es" ? "Saltar al contenido principal" : "Skip to main content", renderComponent($$result, "PageLoadingOverlay", $$PageLoadingOverlay, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "items": breadcrumbItems, "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "pageType": detectedPageType, "language": detectedLanguage, "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "BackToTop", $$BackToTop, { "data-astro-cid-sckkx6r4": true }), renderScript($$result, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"));
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/layouts/Layout.astro", void 0);

export { $$Layout as $, formatPhoneDisplay as a, formatPhoneTel as f };
