/**
 * Standardized FAQ Content
 * 
 * This file contains all FAQ questions and answers in a consistent format
 * to ensure uniformity across all pages.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

// Core FAQs - Should appear on ALL pages
export const coreFAQs: Record<'en' | 'es', FAQItem[]> = {
  en: [
    {
      question: "Can I pay for everything before I die?",
      answer: "Yes. You can put money into a safe account (a Life Insurance policy, which we help with). This is a very caring thing to do because it takes the stress off your family later."
    },
    {
      question: "What if I die while I am traveling?",
      answer: "If you are away from home when you pass away, your family just needs to call the funeral home. They will talk to the local authorities and bring you back home."
    },
    {
      question: "Is there a lot of paperwork?",
      answer: "There can be, but the funeral home will help. They will guide your family through every step. They help notify Social Security and check for any Veteran benefits or insurance money."
    },
    {
      question: "If we do not have a cemetery plot or a headstone, can you help us choose one?",
      answer: "Yes, absolutely. We are here to guide you through these decisions. We maintain a complete directory of local cemeteries and their prices to help you find a peaceful resting place that is right for your family. We can also connect you with trusted local experts to help you design a beautiful headstone or marker. You do not have to make these choices alone; we will ensure you have all the options you need."
    }
  ],
  es: [
    {
      question: "¿Puedo pagar todo antes de morir?",
      answer: "Sí. Puede poner dinero en una cuenta segura (una póliza de seguro de vida, con la cual le ayudamos). Esto es algo muy cariñoso de hacer porque quita el estrés de su familia más tarde."
    },
    {
      question: "¿Qué pasa si muero mientras estoy viajando?",
      answer: "Si está lejos de casa cuando fallece, su familia solo necesita llamar a la funeraria. Ellos hablarán con las autoridades locales y lo traerán de vuelta a casa."
    },
    {
      question: "¿Hay mucho papeleo?",
      answer: "Puede haberlo, pero la funeraria ayudará. Guiarán a su familia a través de cada paso. Ayudan a notificar al Seguro Social y verificar cualquier beneficio de Veterano o dinero del seguro."
    },
    {
      question: "Si no tenemos una parcela de cementerio o una lápida, ¿puede ayudarnos a elegir una?",
      answer: "Sí, absolutamente. Estamos aquí para guiarlo a través de estas decisiones. Mantenemos un directorio completo de cementerios locales y sus precios para ayudarlo a encontrar un lugar de descanso pacífico que sea adecuado para su familia. También podemos conectarlo con expertos locales de confianza para ayudarlo a diseñar una hermosa lápida o marcador. No tiene que tomar estas decisiones solo; nos aseguraremos de que tenga todas las opciones que necesita."
    }
  ]
};

// Cremation-specific FAQs
export const cremationFAQs: Record<'en' | 'es', FAQItem[]> = {
  en: [
    {
      question: "Can my family see me before I am cremated?",
      answer: "Yes, in most cases. If your family wants to see you one last time, the funeral home can prepare you for a private viewing. This usually needs to happen within a few days."
    },
    {
      question: "Do I need to buy an urn?",
      answer: "You can choose from many different types of urns. Some are made of wood, metal, or other materials. You can pick one that fits your style."
    }
  ],
  es: [
    {
      question: "¿Mi familia puede verme antes de que sea cremado?",
      answer: "Sí, en la mayoría de los casos. Si su familia quiere verlo una última vez, la funeraria puede prepararlo para una vista privada. Esto generalmente necesita suceder dentro de unos días."
    },
    {
      question: "¿Necesito comprar una urna?",
      answer: "Puede elegir entre muchos tipos diferentes de urnas. Algunas están hechas de madera, metal u otros materiales. Puede elegir una que se ajuste a su estilo."
    }
  ]
};

// Catholic-specific cremation FAQs (with Church-specific wording)
export const catholicCremationFAQs: Record<'en' | 'es', FAQItem[]> = {
  en: [
    {
      question: "Can my family see me before I am cremated?",
      answer: "Yes, in most cases. If your family wants to see you one last time, the funeral home can prepare you for a private viewing. This usually needs to happen within a few days. The Church encourages this because it helps your family say goodbye."
    },
    {
      question: "Do I need to buy an urn?",
      answer: "Yes. You will need a container for the ashes. This is called an urn. You can choose from many different types. Some are made of wood, metal, or stone. The urn should be respectful and dignified. It should not be a toy or a joke item. It should be worthy of holding a holy person."
    }
  ],
  es: [
    {
      question: "¿Mi familia puede verme antes de que sea cremado?",
      answer: "Sí, en la mayoría de los casos. Si su familia quiere verlo una última vez, la funeraria puede prepararlo para una vista privada. Esto generalmente necesita suceder dentro de unos días. La Iglesia fomenta esto porque ayuda a su familia a despedirse."
    },
    {
      question: "¿Necesito comprar una urna?",
      answer: "Sí. Necesitará un contenedor para las cenizas. Esto se llama urna. Puede elegir entre muchos tipos diferentes. Algunas están hechas de madera, metal o piedra. La urna debe ser respetuosa y digna. No debe ser un juguete o un artículo de broma. Debe ser digna de contener a una persona santa."
    }
  ]
};

// Burial-specific FAQs (currently none, but structure is here for future use)
export const burialFAQs: Record<'en' | 'es', FAQItem[]> = {
  en: [],
  es: []
};

// Catholic-specific FAQs
export const catholicFAQs: Record<'en' | 'es', FAQItem[]> = {
  en: [
    {
      question: "Does the Church allow \"Green\" or Natural Burial?",
      answer: "Yes. Some Catholic cemeteries offer natural burial. This means the body is buried in a simple way without strong chemicals. Ask us if this is available in your area."
    },
    {
      question: "Can non-Catholics be buried in a Catholic cemetery?",
      answer: "Usually, yes. If you have a family member who is not Catholic, they can often be buried with you. The Church believes that families should stay together."
    }
  ],
  es: [
    {
      question: "¿La Iglesia permite el entierro \"Verde\" o Natural?",
      answer: "Sí. Algunos cementerios católicos ofrecen entierro natural. Esto significa que el cuerpo es enterrado de manera simple sin productos químicos fuertes. Pregúntenos si esto está disponible en su área."
    },
    {
      question: "¿Pueden los no católicos ser enterrados en un cementerio católico?",
      answer: "Por lo general, sí. Si tiene un miembro de la familia que no es católico, a menudo pueden ser enterrados con usted. La Iglesia cree que las familias deben permanecer juntas."
    }
  ]
};

// Veteran-specific FAQs
export const veteranFAQs: Record<'en' | 'es', FAQItem[]> = {
  en: [
    {
      question: "What benefits are available for veterans?",
      answer: "Veterans and their families may be eligible for various benefits including burial allowances, headstones, and cemetery services. We can help you understand and access these benefits."
    }
  ],
  es: [
    {
      question: "¿Qué beneficios están disponibles para los veteranos?",
      answer: "Los veteranos y sus familias pueden ser elegibles para varios beneficios, incluyendo asignaciones de entierro, lápidas y servicios de cementerio. Podemos ayudarlo a entender y acceder a estos beneficios."
    }
  ]
};

/**
 * Get standardized FAQs for a page
 * @param language - 'en' or 'es'
 * @param pageType - 'general', 'catholic', or 'veteran'
 * @param serviceType - 'cremation', 'burial', or undefined for landing pages
 * @returns Array of FAQ items
 */
export function getFAQs(
  language: 'en' | 'es',
  pageType: 'general' | 'catholic' | 'veteran' = 'general',
  serviceType?: 'cremation' | 'burial'
): FAQItem[] {
  const faqs: FAQItem[] = [];
  
  // Always include core FAQs
  faqs.push(...coreFAQs[language]);
  
  // Add service-specific FAQs
  if (serviceType === 'cremation') {
    // Use Catholic-specific wording for Catholic pages
    if (pageType === 'catholic') {
      faqs.push(...catholicCremationFAQs[language]);
    } else {
      faqs.push(...cremationFAQs[language]);
    }
  }
  
  // Add page-type-specific FAQs
  if (pageType === 'catholic') {
    faqs.push(...catholicFAQs[language]);
  } else if (pageType === 'veteran') {
    faqs.push(...veteranFAQs[language]);
  }
  
  return faqs;
}
