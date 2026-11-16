export interface SiteConfig {
  name: string;
  legalBusinessName: string;
  tagline: string;
  description: string;
  url: string;
  acuityBookingUrl: string;
  bookingEntryUrl: string;
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
  legalBusinessName: "Sebastian Online Store Corp.",
  tagline: "Envíos Confiables a República Dominicana",
  description:
    "Servicio profesional de recogida y transporte de cajas y tanques hacia toda la República Dominicana. Puntualidad garantizada y reserva en línea con solo $10 de depósito.",
  url: "https://cajasytanquesexpress.com",
  acuityBookingUrl: "https://CajasYtanquesExpress.as.me/",
  bookingEntryUrl: "/reservar",
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
  { name: "Prices", href: "/#precios" },
  { name: "Contacto", href: "/contacto" },
];

export const boxPricing = [
  {
    id: "box-medium",
    name: "Caja Mediana",
    size: '18" × 18" × 16"',
    price: 75,
    idealFor: "Ropa, zapatos, juguetes y alimentos no perecederos.",
  },
  {
    id: "box-large",
    name: "Caja Grande",
    size: '18" × 18" × 24"',
    price: 85,
    idealFor: "Cobijas, colchas y electrodomésticos pequeños.",
  },
  {
    id: "box-xl",
    name: "Caja Extra Grande",
    size: '24" × 24" × 24"',
    price: 110,
    idealFor: "Artículos voluminosos y ligeros.",
  },
  {
    id: "box-jumbo",
    name: "Caja Jumbo",
    size: 'Más de 24"',
    price: 135,
    idealFor: "Cargas de mayor tamaño, hasta 150 lb.",
  },
] as const;

export const supplyPricing = [
  { id: "box-empty", name: "Caja vacía", detail: "Según tamaño", price: 5.99 },
  { id: "tape", name: "Cinta comercial", detail: 'Rollo de 3"', price: 2.98 },
  { id: "wrap", name: "Wrap transparente", detail: "Por rollo", price: 9.98 },
  { id: "tank-small", name: "Tanque pequeño vacío", detail: "30 galones", price: 64.98 },
  { id: "tank-large", name: "Tanque grande vacío", detail: "55 galones", price: 74.98 },
] as const;

