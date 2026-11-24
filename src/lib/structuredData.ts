import { siteConfig } from "@/config/site";
import type { FAQItem } from "@/content/homeFaqs";

/** Towns on the real pickup routes (see src/lib/pickupRoutes.ts). Keep the two in sync. */
const SERVED_AREAS = [
  "Yonkers, NY",
  "Mount Vernon, NY",
  "New Rochelle, NY",
  "White Plains, NY",
  "Scarsdale, NY",
  "Bronxville, NY",
  "Bronx, NY",
  "Peekskill, NY",
  "Ossining, NY",
  "Mount Kisco, NY",
  "Stamford, CT",
  "Greenwich, CT",
  "Norwalk, CT",
  "Darien, CT",
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalBusinessName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/cajas-tanques-express-logo-transparent.png`,
    image: `${siteConfig.url}/opengraph-image`,
    telephone: siteConfig.contact.phoneRaw,
    priceRange: "$$",
    inLanguage: "es",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25 Saw Mill River Road",
      addressLocality: "Yonkers",
      addressRegion: "NY",
      addressCountry: "US",
    },
    areaServed: SERVED_AREAS.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Envío de cajas a República Dominicana" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Envío de tanques a República Dominicana" } },
    ],
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
