/* empty css                                        */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../assets/astro/server.CJ8kye3e.js';
import 'piccolore';
import { $ as $$Layout, f as formatPhoneTel } from '../assets/Layout.BZOMPhEu.js';
import siteDetails from '../assets/siteDetails.B9KLVKNZ.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$500 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$500;
  const pathname = Astro2.url.pathname;
  const isSpanish = pathname.includes("-es") || pathname === "/es";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": isSpanish ? "Error del Servidor" : "Server Error", "pageType": "general", "language": isSpanish ? "es" : "en" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 md:py-32 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-2xl mx-auto text-center"> <!-- Error Icon --> <div class="mb-8 flex justify-center"> <svg class="w-24 h-24 md:w-32 md:h-32 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> </div> <h1 class="text-4xl md:text-6xl font-heading font-bold text-primary mb-6"> ${isSpanish ? "Error del Servidor" : "Server Error"} </h1> <p class="text-lg md:text-xl text-text mb-4"> ${isSpanish ? "Lo sentimos, algo sali\xF3 mal en nuestro servidor." : "We're sorry, something went wrong on our server."} </p> <p class="text-base md:text-lg text-text/80 mb-8"> ${isSpanish ? "Nuestro equipo ha sido notificado y est\xE1 trabajando para resolver el problema. Por favor, intente nuevamente en unos momentos." : "Our team has been notified and is working to resolve the issue. Please try again in a few moments."} </p> <!-- Action Buttons --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="/" class="page-link inline-block bg-accent text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-accent-dark transition shadow-sm min-h-[44px] flex items-center justify-center"> ${isSpanish ? "Volver al Inicio" : "Return to Home"} </a> <a${addAttribute(`tel:${formatPhoneTel(siteDetails.phone)}`, "href")} class="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-primary-dark transition shadow-sm min-h-[44px] flex items-center justify-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${isSpanish ? "Llamar Ahora" : "Call Now"} </a> </div> <!-- Helpful Links --> <div class="mt-12 pt-8 border-t border-gray-200"> <p class="text-sm text-text/60 mb-4"> ${isSpanish ? "Tambi\xE9n puede:" : "You can also:"} </p> <div class="flex flex-wrap justify-center gap-4 text-sm"> <a href="/cremation" class="page-link text-accent hover:text-accent-dark hover:underline"> ${isSpanish ? "Servicios de Cremaci\xF3n" : "Cremation Services"} </a> <span class="text-text/40">|</span> <a href="/burial" class="page-link text-accent hover:text-accent-dark hover:underline"> ${isSpanish ? "Servicios de Entierro" : "Burial Services"} </a> <span class="text-text/40">|</span> <a href="/immediate-need" class="page-link text-accent hover:text-accent-dark hover:underline"> ${isSpanish ? "Necesidad Inmediata" : "Immediate Need"} </a> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/500.astro", void 0);

const $$file = "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
