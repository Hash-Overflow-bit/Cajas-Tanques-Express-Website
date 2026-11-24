import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto: Llámenos o Escríbanos por WhatsApp",
  description:
    "Hable con Cajas & Tanques Express por teléfono, WhatsApp o correo. Recogida de cajas y tanques en Yonkers, Westchester y Connecticut con envío a toda la República Dominicana.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
