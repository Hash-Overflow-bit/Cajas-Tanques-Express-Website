export interface SiteConfig {
  name: string;
  legalBusinessName: string;
  tagline: string;
  description: string;
  url: string;
  acuityBookingUrl: string;
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    phoneSecondaryDisplay: string;
    phoneSecondaryRaw: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    email: string;
    address: string;
    hours: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
  };
  metrics: {
    deliveredCount: string;
    rating: string;
    satisfaction: string;
    depositAmount: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "CAJAS & TANQUES EXPRESS",
  legalBusinessName: "Sebastian online store corp",
  tagline: "Envíos Confiables a República Dominicana",
  description:
    "Servicio profesional de recogida y transporte de cajas y tanques hacia toda la República Dominicana. Puntualidad garantizada y reserva en línea con solo $10 de depósito.",
  url: "https://cajasytanquesexpress.com",
  acuityBookingUrl: "https://CajasYtanquesExpress.as.me/",
  contact: {
    phoneDisplay: "(914) 510-7716",
    phoneRaw: "+19145107716",
    phoneSecondaryDisplay: "(646) 652-9547",
    phoneSecondaryRaw: "+16466529547",
    whatsappNumber: "16466529547",
    whatsappDisplay: "(646) 652-9547",
    email: "inf@cajasytanquesexpress.com",
    address: "23 Saw Mill River Rd, Yonkers, NY 10701, United States",
    hours: "Monday to Friday: 8:00 AM - 6:00 PM · Saturday: 8:00 AM - 12:00 PM",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  metrics: {
    deliveredCount: "10,000+ Cajas y Tanques",
    rating: "4.9 / 5.0",
    satisfaction: "99.8% Satisfacción",
    depositAmount: "$10",
  },
};

export const navigationLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Cómo Funciona", href: "/#como-funciona" },
  { name: "Zonas de Cobertura", href: "/#zonas" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contacto", href: "/contacto" },
];

