import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server.CJ8kye3e.js';
import 'piccolore';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://example.com");
const $$ServiceChoicePortal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceChoicePortal;
  const {
    cremationHeadline,
    cremationBody,
    cremationLink,
    burialHeadline,
    burialBody,
    burialLink,
    sectionTitle,
    sectionIntro
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-10 md:py-24 bg-white" data-astro-cid-4soltqcm> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-4soltqcm> <div class="max-w-6xl mx-auto" data-astro-cid-4soltqcm> ${sectionTitle && renderTemplate`<h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center" data-astro-cid-4soltqcm> ${sectionTitle} </h2>`} ${sectionIntro && renderTemplate`<p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto" data-astro-cid-4soltqcm> ${sectionIntro} </p>`} <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-astro-cid-4soltqcm> <!-- Cremation Card --> <div class="service-card bg-white p-6 md:p-8 rounded-lg shadow-sm border-t-4 border-accent" data-astro-cid-4soltqcm> <h3 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6" data-astro-cid-4soltqcm> ${cremationHeadline} </h3> <p class="text-base md:text-lg text-text leading-relaxed mb-6 md:mb-8" data-astro-cid-4soltqcm> ${cremationBody} </p> <a${addAttribute(cremationLink, "href")} class="page-link block w-full bg-accent text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-accent-dark transition shadow-sm text-center min-h-[44px] flex items-center justify-center" data-astro-cid-4soltqcm>
Get Started
</a> </div> <!-- Burial Card --> <div class="service-card bg-white p-6 md:p-8 rounded-lg shadow-sm border-t-4 border-primary" data-astro-cid-4soltqcm> <h3 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6" data-astro-cid-4soltqcm> ${burialHeadline} </h3> <p class="text-base md:text-lg text-text leading-relaxed mb-6 md:mb-8" data-astro-cid-4soltqcm> ${burialBody} </p> <a${addAttribute(burialLink, "href")} class="page-link block w-full bg-primary text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-primary-dark transition shadow-sm text-center min-h-[44px] flex items-center justify-center" data-astro-cid-4soltqcm>
Schedule Consultation
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/ServiceChoicePortal.astro", void 0);

export { $$ServiceChoicePortal as $ };
