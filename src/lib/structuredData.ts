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

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** A shipping service with its price list, tied to the business entity. */
export function serviceSchema(opts: {
  name: string;
  path: string;
  description: string;
  areaServed?: string[];
  offers: { name: string; price: number }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: "Envío puerta a puerta a República Dominicana",
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: (opts.areaServed ?? SERVED_AREAS).map((name) => ({ "@type": "City", name })),
    offers: opts.offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: o.price.toFixed(2),
      priceCurrency: "USD",
    })),
  };
}

/** A how-to or help article published by the business. */
export function articleSchema(opts: { headline: string; path: string; description: string; datePublished: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    mainEntityOfPage: `${siteConfig.url}${opts.path}`,
    inLanguage: "es",
    datePublished: opts.datePublished,
    image: `${siteConfig.url}/opengraph-image`,
    author: { "@id": `${siteConfig.url}/#business` },
    publisher: { "@id": `${siteConfig.url}/#business` },
  };
}
