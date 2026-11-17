import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Calcular precio estimado | ${siteConfig.name}`,
  description: "Calcule un estimado de su envío de cajas y materiales, seleccione su ruta y reserve una recogida.",
};

export default function CotizarPage() {
  notFound();
}
