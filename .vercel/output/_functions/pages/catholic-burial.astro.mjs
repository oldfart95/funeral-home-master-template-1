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
const $$CatholicBurial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CatholicBurial;
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
      name: "Catholic Burial Services",
      description: "Full Catholic burial services with visitation, Funeral Mass, and burial. We work closely with your parish to ensure every detail follows Catholic tradition.",
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
        description: "Full Catholic burial services honoring Church traditions"
      }
    };
    return JSON.stringify(schema);
  }
  const serviceSchema = generateServiceSchema();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Catholic Burial Services - Planning Ahead", "description": "Full Catholic burial services with visitation, Funeral Mass, and burial. We work closely with your parish to ensure every detail follows Catholic tradition.", "pageType": "catholic", "language": "en" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-8 md:py-32 overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0"> <img src="/images/hero.webp" srcset="/images/hero-640.webp 640w,\n                /images/hero.webp 970w" sizes="(max-width: 640px) 640px,\n               970px" loading="eager" fetchpriority="high" alt="Catholic burial services" class="w-full h-full object-cover blur-sm"> <!-- Dark overlay for text readability --> <div class="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary-dark/40 to-primary-light/40"></div> </div> <!-- Content --> <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 min-h-[300px] md:min-h-[500px] py-4 md:py-0"> <!-- Company Name - Left/Top --> <div class="flex-1 w-full md:w-auto"> <img', "", ' class="mb-4 md:mb-6 w-auto h-12 sm:h-14 md:h-20 lg:h-28 xl:h-36 drop-shadow-lg bg-white/90 rounded-lg p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 shadow-xl" loading="eager"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold drop-shadow-lg leading-hero tracking-hero"> ', ` </h1> </div> <!-- Hero Text - Center Right --> <div class="flex-1 w-full md:flex-none md:w-1/2 lg:w-2/5 text-left md:text-right mt-4 md:mt-0"> <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-6 drop-shadow-lg leading-hero tracking-hero">
Planning Ahead for Peace of Mind and Faith
</h2> <p class="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-md text-left md:text-right">
Thinking about the end of life can be hard. However, making plans now is one of the best gifts you can give to your family. For Catholics, planning ahead is also a way to show our faith. We believe that death is not the end. It is a change. We believe that we will be with God.
</p> </div> </div> </div> <!-- Attribution Footnote --> <div class="absolute bottom-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pb-3 md:pb-4"> <p class="text-xs sm:text-sm text-white/80 drop-shadow-md text-right">
Provided by Arbaugh-Pearce-Greenisen & Sons
</p> </div> </section>  <section class="py-8 md:py-12 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <div class="bg-secondary p-6 md:p-8 rounded-lg shadow-sm border-t-4 border-accent"> <p class="text-base md:text-lg text-text leading-relaxed text-center">
We offer comprehensive cremation and burial services for Catholic families. Both options are available and fully respected within the teachings of the Catholic Church. <strong>Important:</strong> The Catholic Church requires that all remains, whether cremated or not, must be interred in consecrated ground, such as a Catholic cemetery. This sacred requirement honors the dignity of the human body and reflects our faith in the resurrection. We offer comprehensive services for both cremation and burial, ensuring all arrangements align with Catholic teachings and your family's wishes.
</p> </div> </div> </div> </section>  `, `   <section class="py-10 md:py-24 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
Important Rules for Catholic Burial: Cardinal Laws 1-5
</h2> <div class="bg-secondary p-5 md:p-8 rounded-lg shadow-sm"> <p class="text-sm md:text-base text-text leading-relaxed mb-6">
The Catholic Church has important rules that apply to both burial and cremation. The Dioceses of Youngstown, Cleveland, and Pittsburgh all agree on these important rules:
</p> <ol class="space-y-4 text-sm md:text-base text-text"> <li class="flex items-start"> <span class="font-bold text-primary mr-3">1.</span> <span><strong>The Ashes Must Be Buried:</strong> You cannot keep the ashes on a shelf at home. You cannot keep them in a closet. The ashes must be buried in a grave or placed in a special wall called a columbarium. This should happen soon after the funeral.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">2.</span> <span><strong>Sacred Ground:</strong> The Church wants us to be buried in a sacred place. A Catholic cemetery is the best place. This is holy ground. It ensures that you are not forgotten. It gives your family a place to visit and pray for you.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">3.</span> <span><strong>No Scattering:</strong> You are not allowed to scatter ashes. You cannot scatter them in the wind, on the ground, or in the water.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">4.</span> <span><strong>Do Not Divide the Ashes:</strong> All the ashes must stay together. You cannot split them up among different family members. You cannot put them into jewelry, like necklaces or rings. You cannot put them into art or other objects.</span> </li> <li class="flex items-start"> <span class="font-bold text-primary mr-3">5.</span> <span><strong>Burial at Sea:</strong> Scattering ashes on top of the water is not allowed. However, you can bury the ashes at sea if they are in a heavy container that sinks. This acts like a burial in the ground.</span> </li> </ol> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
Why Do We Follow These Rules?
</h2> <div class="bg-white p-5 md:p-8 rounded-lg shadow-sm"> <p class="text-sm md:text-base text-text leading-relaxed">
These rules might seem strict, but they are there for a reason. They remind us that we belong to God. When we are buried in a cemetery, we are resting with other members of our Church family. We are waiting together for the day when Jesus returns. Keeping the ashes together shows that we are one whole person. We do not want to be scattered or separated. We want to rest in peace in a holy place.
</p> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <div class="bg-secondary p-5 md:p-8 rounded-lg shadow-sm space-y-4"> <h2 class="text-xl md:text-2xl font-heading font-bold text-primary mb-4 md:mb-6">
Important Diocese Notes
</h2> <div class="space-y-3"> <p class="text-sm md:text-base text-text leading-relaxed"> <strong>Visitation in Church:</strong> Visitation in church is prohibited in the Youngstown Diocese. Many other dioceses also prohibit practice of visitation in church prior to mass. Please check with your local diocese for specific guidelines.
</p> <p class="text-sm md:text-base text-text leading-relaxed"> <strong>Non-Catholic Burial:</strong> Permission may be required for Burial of non-catholics in their cemetery. Please consult with your local Catholic cemetery for requirements.
</p> </div> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4 text-center">
General Burial Options
</h2> <p class="text-base md:text-lg text-text text-center mb-6 md:mb-8 max-w-3xl mx-auto italic">
Honoring the timeless dignity of a final resting place with grace and reverence.
</p> <p class="text-base md:text-xl text-text text-center mb-6 md:mb-12">
The Catholic Church prefers burial of the body, as it follows the example of Jesus who was buried in a tomb. There are affordable choices for Catholic burial.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
Traditional Farewell
</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">
The Classic Tribute
</p> <p class="text-sm md:text-base text-text leading-relaxed">
This is a full service for families who want to follow time-honored traditions. It includes a visitation for friends to gather, a formal funeral service, and a procession to the cemetery. We handle every detail to ensure a respectful and complete goodbye.
</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
Simple Farewell
</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">
A Focused Remembrance
</p> <p class="text-sm md:text-base text-text leading-relaxed">
This option offers a beautiful service in a shorter timeframe. It includes a time for family and friends to share memories followed by a meaningful ceremony. It is designed for those who want a professional and dignified day focused on the essentials of saying goodbye.
</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 11a3 3 0 11-6 0m6 0a3 3 0 10-6 0m6 0H9m3 0v1m0-1v-1m0 1H9m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
Graveside Service
</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">
A Quiet Outdoor Tribute
</p> <p class="text-sm md:text-base text-text leading-relaxed">
This service takes place entirely at the cemetery. It is a calm and elegant way to honor your loved one under the open sky. We coordinate everything at the resting place, allowing you to focus on a quiet moment of reflection with those closest to you.
</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <div class="flex items-center gap-2 mb-3"> <svg class="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary">
Immediate Burial
</h3> </div> <p class="text-xs md:text-sm font-semibold text-primary mb-2">
A Simple, Private Path
</p> <p class="text-sm md:text-base text-text leading-relaxed">
This is our most straightforward burial choice. It is a modest option for families who do not wish to have a public ceremony. We provide professional care and transportation to ensure a private and dignified burial takes place promptly.
</p> </div> </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-secondary"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <h2 class="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">
Planning & FAQ
</h2> <div class="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12"> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">
It Helps Your Family
</h3> <p class="text-sm md:text-base text-text leading-relaxed">
It provides clarity and peace of mind for your family by documenting your preferences in advance. Your family won't have to guess what you wanted.
</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">
It Saves Money
</h3> <p class="text-sm md:text-base text-text leading-relaxed">
Pre-funding options to lock in today's rates. This protects your family from rising costs in the future. The money is kept safe in a special account until it is needed.
</p> </div> <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-accent"> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary mb-3 md:mb-4">
It is Your Choice
</h3> <p class="text-sm md:text-base text-text leading-relaxed">
You get to decide exactly how you want to be remembered. You can make sure your funeral follows the rules of the Catholic Church.
</p> </div> </div> <div class="bg-white p-4 md:p-8 rounded-lg shadow-sm"> <h3 class="text-xl md:text-2xl font-heading font-bold text-primary mb-6 text-center">
Common Questions About Planning Ahead
</h3> `, ' </div> </div> </div> </section>  <section class="py-10 md:py-24 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <div class="bg-white p-5 md:p-12 rounded-lg shadow-sm border-t-4 border-accent"> <h2 class="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">\nIf we do not have a cemetery plot or a headstone, can you help us choose one?\n</h2> <p class="text-sm md:text-lg text-text leading-relaxed">\nYes, absolutely. We are here to guide you through these decisions. We maintain a complete directory of local Catholic cemeteries and their prices to help you find a peaceful resting place that is right for your family. We can also connect you with trusted local experts to help you design a beautiful headstone or marker. You do not have to make these choices alone; we will ensure you have all the options you need.\n</p> </div> </div> </div> </section> ', " ", " "])), unescapeHTML(serviceSchema), maybeRenderHead(), addAttribute(logoPath, "src"), addAttribute(displayCompanyName, "alt"), displayCompanyName, renderComponent($$result2, "ServiceNav", $$ServiceNav, {}), renderComponent($$result2, "Accordion", $$Accordion, { "language": "en", "items": getFAQs("en", "catholic", "burial") }), renderComponent($$result2, "OngoingCare", $$OngoingCare, { "language": isSpanish ? "es" : "en" }), renderComponent($$result2, "ContactForm", $$ContactForm, { "language": isSpanish ? "es" : "en" })) })}`;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/catholic-burial.astro", void 0);

const $$file = "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/pages/catholic-burial.astro";
const $$url = "/catholic-burial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CatholicBurial,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
