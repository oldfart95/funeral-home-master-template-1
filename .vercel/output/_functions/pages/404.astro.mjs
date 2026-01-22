/* empty css                                        */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../assets/astro/server.CJ8kye3e.js';
import 'piccolore';
import { $ as $$Layout } from '../assets/Layout.CGO4HiXi.js';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found", "pageType": "general", "language": "en" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 md:py-32 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-2xl mx-auto text-center"> <h1 class="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
Page Not Found
</h1> <p class="text-lg md:text-xl text-text mb-8">
We apologize for the inconvenience.
</p> <a href="/" class="inline-block bg-accent text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-accent-dark transition shadow-sm">
Return to Home
</a> </div> </div> </section> ` })}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/404.astro", void 0);

const $$file = "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
