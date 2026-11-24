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
  legalBusinessName: "CAJAS & TANQUES EXPRESS LLC",
  tagline: "¡Envíos Puerta a Puerta a la República Dominicana! 🇩🇴",
  description:
    "Servicio profesional de recogida a domicilio (Yonkers, Westchester, el Bronx y Connecticut) y transporte seguro de cajas y tanques hacia toda la República Dominicana. Reserva en línea con solo $10 de depósito.",
  url: "https://www.cajasytanquesexpress.com",
  acuityBookingUrl: "https://CajasYtanquesExpress.as.me/",
  bookingEntryUrl: "/reservar",
  contact: {
    phoneDisplay: "(914) 510-7716",
    phoneRaw: "+19145107716",
    phoneSecondaryDisplay: "(646) 652-9547",
    phoneSecondaryRaw: "+16466529547",
    whatsappNumber: "16466529547",
    whatsappDisplay: "(646) 652-9547",
    email: "info@cajasytanquesexpress.com",
    address: "25 Saw Mill River Road Yonkers NY",
    hours: "Lunes a Viernes: 8:00 AM - 6:00 PM · Sábado: 8:00 AM - 12:00 PM",
  },
  social: {
    facebook: "https://facebook.com/CajasTanquesExpress",
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
  { name: "Precios", href: "/precios" },
  { name: "Cómo Funciona", href: "/#como-funciona" },
  { name: "Zonas de Recogida", href: "/zonas" },
  { name: "Contacto", href: "/contacto" },
];

export const boxPricing = [
  {
    id: "box-18x18x28",
    name: "Caja Estándar",
    size: '18" × 18" × 28"',
    price: 75,
    idealFor: "Ropa, zapatos, juguetes y alimentos no perecederos.",
  },
  {
    id: "box-24x24x27",
    name: "Caja Mediana",
    size: '24" × 24" × 27"',
    price: 125,
    idealFor: "Cobijas, colchas, electrodomésticos pequeños y despensa.",
  },
  {
    id: "box-24x24x34",
    name: "Caja Grande",
    size: '24" × 24" × 34"',
    price: 225,
    idealFor: "Envíos voluminosos, compras familiares y artículos de hogar.",
  },
  {
    id: "box-24x24x48",
    name: "Caja Jumbo",
    size: '24" × 24" × 48"',
    price: 250,
    idealFor: "Máxima capacidad para mudanzas, carga pesada y artículos grandes.",
  },
] as const;

export const tankPricing = [
  {
    id: "tank-55",
    name: "Tanque 55 Galones",
    size: "55 Galones (Azul)",
    price: 74.99,
    idealFor: "Víveres, aceites, arroz, detergentes, enlatados y ropa hermética.",
  },
  {
    id: "tank-75",
    name: "Tanque 75 Galones",
    size: "75 Galones (Negro)",
    price: 139.99,
    idealFor: "Máxima capacidad para víveres pesados, herramientas y electrodomésticos.",
  },
] as const;

export const supplyPricing = [
  { id: "box-empty", name: "Caja vacía", detail: "Según tamaño", price: 5.99 },
  { id: "tape", name: "Cinta comercial", detail: 'Rollo de 3"', price: 2.98 },
  { id: "wrap", name: "Wrap transparente", detail: "Por rollo", price: 9.98 },
  { id: "tank-55-empty", name: "Tanque 55 Galones", detail: "Plástico sellado con aro", price: 74.99 },
  { id: "tank-75-empty", name: "Tanque 75 Galones", detail: "Plástico sellado con aro", price: 139.99 },
] as const;
