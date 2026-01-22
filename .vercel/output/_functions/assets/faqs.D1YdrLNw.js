import { e as createAstro, f as createComponent, m as maybeRenderHead, l as renderScript, h as addAttribute, r as renderTemplate } from './astro/server.CJ8kye3e.js';
import 'piccolore';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro("https://example.com");
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { items, language = "en" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="accordion-container space-y-4 md:space-y-6" data-astro-cid-oqjbs5yv> ${items.map((item, index) => renderTemplate`<div class="accordion-item bg-secondary rounded-lg overflow-hidden" data-astro-cid-oqjbs5yv> <button class="accordion-button w-full text-left bg-secondary p-4 md:p-6 rounded-lg hover:bg-secondary/80 transition-colors"${addAttribute(index, "data-accordion-index")} aria-expanded="false"${addAttribute(`accordion-content-${index}`, "aria-controls")} data-astro-cid-oqjbs5yv> <div class="flex items-center justify-between" data-astro-cid-oqjbs5yv> <h3 class="text-lg md:text-xl font-heading font-semibold text-primary pr-4" data-astro-cid-oqjbs5yv> ${item.question} </h3> <svg class="accordion-icon w-6 h-6 text-accent flex-shrink-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-oqjbs5yv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-oqjbs5yv></path> </svg> </div> </button> <div${addAttribute(`accordion-content-${index}`, "id")} class="accordion-content hidden px-4 md:px-6 pb-4 md:pb-6" style="max-height: 0;" data-astro-cid-oqjbs5yv> <p class="text-sm md:text-base text-text leading-relaxed" data-astro-cid-oqjbs5yv> ${item.answer} </p> </div> </div>`)} </div> ${renderScript($$result, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/Accordion.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/User A/Documents/GitHub/funeral-home-landing-site/src/components/Accordion.astro", void 0);

const coreFAQs = {
  en: [
    {
      question: "Can I pay for everything ahead of time?",
      answer: "Yes. You can put money into a safe account (a Life Insurance policy, which we help with). This is a very caring thing to do because it takes the stress off your family later."
    },
    {
      question: "What happens if I pass away while traveling?",
      answer: "If you are away from home when you pass away, your family just needs to call the funeral home. They will talk to the local authorities and bring you back home."
    },
    {
      question: "How much paperwork is involved?",
      answer: "There can be, but the funeral home will help. They will guide your family through every step. They help notify Social Security and check for any Veteran benefits or insurance money."
    },
    {
      question: "Can you help us find a cemetery plot or headstone?",
      answer: "Yes, absolutely. We are here to guide you through these decisions. We maintain a complete directory of local cemeteries and their prices to help you find a peaceful resting place that is right for your family. We can also connect you with trusted local experts to help you design a beautiful headstone or marker. You do not have to make these choices alone; we will ensure you have all the options you need."
    }
  ],
  es: [
    {
      question: "¿Puedo pagar todo con anticipación?",
      answer: "Sí. Puede poner dinero en una cuenta segura (una póliza de seguro de vida, con la cual le ayudamos). Esto es algo muy cariñoso de hacer porque quita el estrés de su familia más tarde."
    },
    {
      question: "¿Qué pasa si fallezco mientras estoy viajando?",
      answer: "Si está lejos de casa cuando fallece, su familia solo necesita llamar a la funeraria. Ellos hablarán con las autoridades locales y lo traerán de vuelta a casa."
    },
    {
      question: "¿Cuánto papeleo hay que hacer?",
      answer: "Puede haberlo, pero la funeraria ayudará. Guiarán a su familia a través de cada paso. Ayudan a notificar al Seguro Social y verificar cualquier beneficio de Veterano o dinero del seguro."
    },
    {
      question: "¿Pueden ayudarnos a encontrar una parcela de cementerio o lápida?",
      answer: "Sí, absolutamente. Estamos aquí para guiarlo a través de estas decisiones. Mantenemos un directorio completo de cementerios locales y sus precios para ayudarlo a encontrar un lugar de descanso pacífico que sea adecuado para su familia. También podemos conectarlo con expertos locales de confianza para ayudarlo a diseñar una hermosa lápida o marcador. No tiene que tomar estas decisiones solo; nos aseguraremos de que tenga todas las opciones que necesita."
    }
  ]
};
const cremationFAQs = {
  en: [
    {
      question: "Can my family have a viewing before cremation?",
      answer: "Yes, in most cases. If your family wants to see you one last time, the funeral home can prepare you for a private viewing. This usually needs to happen within a few days."
    },
    {
      question: "What about choosing an urn?",
      answer: "You can choose from many different types of urns. Some are made of wood, metal, or other materials. You can pick one that fits your style."
    }
  ],
  es: [
    {
      question: "¿Mi familia puede tener una vista antes de la cremación?",
      answer: "Sí, en la mayoría de los casos. Si su familia quiere verlo una última vez, la funeraria puede prepararlo para una vista privada. Esto generalmente necesita suceder dentro de unos días."
    },
    {
      question: "¿Qué pasa con la elección de una urna?",
      answer: "Puede elegir entre muchos tipos diferentes de urnas. Algunas están hechas de madera, metal u otros materiales. Puede elegir una que se ajuste a su estilo."
    }
  ]
};
const catholicCremationFAQs = {
  en: [
    {
      question: "Can my family have a viewing before cremation?",
      answer: "Yes, in most cases. If your family wants to see you one last time, the funeral home can prepare you for a private viewing. This usually needs to happen within a few days. The Church encourages this because it helps your family say goodbye."
    },
    {
      question: "What should I know about choosing an urn?",
      answer: "Yes. You will need a container for the ashes. This is called an urn. You can choose from many different types. Some are made of wood, metal, or stone. The urn should be respectful and dignified. It should not be a toy or a joke item. It should be worthy of holding a holy person."
    }
  ],
  es: [
    {
      question: "¿Mi familia puede tener una vista antes de la cremación?",
      answer: "Sí, en la mayoría de los casos. Si su familia quiere verlo una última vez, la funeraria puede prepararlo para una vista privada. Esto generalmente necesita suceder dentro de unos días. La Iglesia fomenta esto porque ayuda a su familia a despedirse."
    },
    {
      question: "¿Qué debo saber sobre elegir una urna?",
      answer: "Sí. Necesitará un contenedor para las cenizas. Esto se llama urna. Puede elegir entre muchos tipos diferentes. Algunas están hechas de madera, metal o piedra. La urna debe ser respetuosa y digna. No debe ser un juguete o un artículo de broma. Debe ser digna de contener a una persona santa."
    }
  ]
};
const catholicFAQs = {
  en: [
    {
      question: 'Is natural or "green" burial allowed?',
      answer: "Yes. Some Catholic cemeteries offer natural burial. This means the body is buried in a simple way without strong chemicals. Ask us if this is available in your area."
    },
    {
      question: "Can non-Catholic family members be buried in a Catholic cemetery?",
      answer: "Usually, yes. If you have a family member who is not Catholic, they can often be buried with you. The Church believes that families should stay together."
    }
  ],
  es: [
    {
      question: '¿Se permite el entierro natural o "verde"?',
      answer: "Sí. Algunos cementerios católicos ofrecen entierro natural. Esto significa que el cuerpo es enterrado de manera simple sin productos químicos fuertes. Pregúntenos si esto está disponible en su área."
    },
    {
      question: "¿Pueden los miembros de la familia que no son católicos ser enterrados en un cementerio católico?",
      answer: "Por lo general, sí. Si tiene un miembro de la familia que no es católico, a menudo pueden ser enterrados con usted. La Iglesia cree que las familias deben permanecer juntas."
    }
  ]
};
const veteranFAQs = {
  en: [
    {
      question: "What veteran benefits are available?",
      answer: "Veterans and their families may be eligible for various benefits including burial allowances, headstones, and cemetery services. We can help you understand and access these benefits."
    }
  ],
  es: [
    {
      question: "¿Qué beneficios para veteranos están disponibles?",
      answer: "Los veteranos y sus familias pueden ser elegibles para varios beneficios, incluyendo asignaciones de entierro, lápidas y servicios de cementerio. Podemos ayudarlo a entender y acceder a estos beneficios."
    }
  ]
};
function getFAQs(language, pageType = "general", serviceType) {
  const faqs = [];
  faqs.push(...coreFAQs[language]);
  if (serviceType === "cremation") {
    if (pageType === "catholic") {
      faqs.push(...catholicCremationFAQs[language]);
    } else {
      faqs.push(...cremationFAQs[language]);
    }
  }
  if (pageType === "catholic") {
    faqs.push(...catholicFAQs[language]);
  } else if (pageType === "veteran") {
    faqs.push(...veteranFAQs[language]);
  }
  return faqs;
}

export { $$Accordion as $, getFAQs as g };
