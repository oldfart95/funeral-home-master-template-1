/* empty css                                        */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../assets/astro/server.CJ8kye3e.js';
import 'piccolore';
import { $ as $$Layout } from '../assets/Layout.CGO4HiXi.js';
import { $ as $$ServiceChoicePortal } from '../assets/ServiceChoicePortal.BV8Zetwi.js';
import { $ as $$OurStory, a as $$ImmediateNeedBanner } from '../assets/ImmediateNeedBanner.DkojMIEF.js';
import { a as $$OngoingCare, $ as $$ContactForm } from '../assets/ContactForm.DvREuagq.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Catholic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Catholic;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Catholic Services - Planning Ahead", "description": "Catholic funeral and cremation services following Church teachings. Plan ahead for peace of mind and faith with proper Catholic burial rites.", "pageType": "catholic", "language": "en" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-8 md:py-32 overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0"> <img src="/images/hero.webp" srcset="/images/hero-640.webp 640w,
                /images/hero.webp 970w" sizes="(max-width: 640px) 640px,
               970px" loading="eager" fetchpriority="high" alt="Catholic funeral and cremation services" class="w-full h-full object-cover blur-sm"> <!-- Dark overlay for text readability --> <div class="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary-dark/40 to-primary-light/40"></div> </div> <!-- Content --> <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 min-h-[300px] md:min-h-[500px] py-4 md:py-0"> <!-- Company Name - Left/Top --> <div class="flex-1 w-full md:w-auto"> <img${addAttribute(logoPath, "src")}${addAttribute(displayCompanyName, "alt")} class="mb-4 md:mb-6 w-auto h-12 sm:h-14 md:h-20 lg:h-28 xl:h-36 drop-shadow-lg bg-white/90 rounded-lg p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 shadow-xl" loading="eager"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold drop-shadow-lg leading-hero tracking-hero"> ${displayCompanyName} </h1> </div> <!-- Hero Text - Center Right --> <div class="flex-1 w-full md:flex-none md:w-1/2 lg:w-2/5 text-left md:text-right mt-4 md:mt-0"> <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-6 drop-shadow-lg leading-hero tracking-hero">
Planning Ahead for Peace of Mind and Faith
</h2> <p class="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-md text-left md:text-right">
For Catholics, planning ahead is a way to show our faith. We believe that death is not the end—it is a change. We believe that we will be with God.
</p> </div> </div> </div> <!-- Attribution Footnote --> <div class="absolute bottom-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pb-3 md:pb-4"> <p class="text-xs sm:text-sm text-white/80 drop-shadow-md text-right">
Provided by Arbaugh-Pearce-Greenisen & Sons
</p> </div> </section> ${renderComponent($$result2, "OurStory", $$OurStory, { "language": isSpanish ? "es" : "en" })} ${renderComponent($$result2, "ImmediateNeedBanner", $$ImmediateNeedBanner, { "language": isSpanish ? "es" : "en" })} ${renderComponent($$result2, "ServiceChoicePortal", $$ServiceChoicePortal, { "cremationHeadline": "Sacred Cremation", "cremationBody": "Cremation services that honor Catholic traditions and Church teachings. We guide you through the proper Catholic cremation process, ensuring ashes are treated with the respect they deserve and buried in sacred ground.", "cremationLink": isSpanish ? "/catholic-cremation-es" : "/catholic-cremation", "burialHeadline": "Traditional Rites", "burialBody": "Full Catholic funeral services with visitation, Funeral Mass, and burial. We work closely with your parish to ensure every detail follows Catholic tradition and provides comfort to your family.", "burialLink": isSpanish ? "/catholic-burial-es" : "/catholic-burial" })}  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
The Catholic Church and Cremation
</h2> <div class="bg-white p-5 md:p-8 rounded-lg shadow-sm space-y-4"> <p class="text-sm md:text-base text-text leading-relaxed">
For a long time, the Catholic Church did not allow cremation. In 1963, the Church changed this rule. Now, Catholics are allowed to be cremated. However, the Church still prefers that the body be buried. This is because Jesus was buried in a tomb. We want to follow His example.
</p> <p class="text-sm md:text-base text-text leading-relaxed">
Even though cremation is allowed, there are special rules we must follow. These rules show respect for the human body. Our bodies are holy. They are "temples of the Holy Spirit." We believe that one day, God will raise our bodies up again. Because of this, we must treat ashes with the same respect as a full body.
</p> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
Important Rules for Catholic Cremation
</h2> <div class="bg-secondary p-5 md:p-8 rounded-lg shadow-sm"> <p class="text-sm md:text-base text-text leading-relaxed mb-6">
If you choose cremation, the Dioceses of Youngstown, Cleveland, and Pittsburgh all agree on these important rules:
</p> <ol class="space-y-4 text-sm md:text-base text-text"> <li class="flex items-start"> <span class="font-bold text-primary mr-3">1.</span> <span><strong>The Ashes Must Be Buried:</strong> You cannot keep the ashes on a shelf at home. You cannot keep them in a closet. The ashes must be buried in a grave or placed in a special wall called a columbarium. This should happen soon after the funeral.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">2.</span> <span><strong>Sacred Ground:</strong> The Church wants us to be buried in a sacred place. A Catholic cemetery is the best place. This is holy ground. It ensures that you are not forgotten. It gives your family a place to visit and pray for you.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">3.</span> <span><strong>No Scattering:</strong> You are not allowed to scatter ashes. You cannot scatter them in the wind, on the ground, or in the water.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">4.</span> <span><strong>Do Not Divide the Ashes:</strong> All the ashes must stay together. You cannot split them up among different family members. You cannot put them into jewelry, like necklaces or rings. You cannot put them into art or other objects.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">5.</span> <span><strong>Burial at Sea:</strong> Scattering ashes on top of the water is not allowed. However, you can bury the ashes at sea if they are in a heavy container that sinks. This acts like a burial in the ground.</span> </li> </ol> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
Why Do We Follow These Rules?
</h2> <div class="bg-white p-5 md:p-8 rounded-lg shadow-sm"> <p class="text-sm md:text-base text-text leading-relaxed">
These rules might seem strict, but they are there for a reason. They remind us that we belong to God. When we are buried in a cemetery, we are resting with other members of our Church family. We are waiting together for the day when Jesus returns. Keeping the ashes together shows that we are one whole person. We do not want to be scattered or separated. We want to rest in peace in a holy place.
</p> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <div class="bg-white p-5 md:p-8 rounded-lg shadow-sm"> <h2 class="text-xl md:text-2xl font-heading font-bold text-primary mb-4 md:mb-6">
A Note for Families in Youngstown, Akron, Canton, and Cleveland
</h2> <p class="text-sm md:text-base text-text leading-relaxed">
The rules for cremation are very similar across all our local areas. Whether you are in the Diocese of Youngstown (which includes Canton) or the Diocese of Cleveland (which includes Akron), the goal is the same. We want to treat your loved one with great respect. We want to make sure they are buried in a holy place.
</p> </div> </div> </div> </section>   ${renderComponent($$result2, "OngoingCare", $$OngoingCare, { "language": isSpanish ? "es" : "en" })} ${renderComponent($$result2, "ContactForm", $$ContactForm, { "language": isSpanish ? "es" : "en" })} ` })}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/catholic.astro", void 0);

const $$file = "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/catholic.astro";
const $$url = "/catholic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catholic,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
