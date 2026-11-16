import type { Metadata } from "next";
import { PriceCalculator } from "@/components/booking/PriceCalculator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Calcular precio estimado | ${siteConfig.name}`,
  description: "Calcule un estimado de su envío de cajas y materiales, seleccione su ruta y reserve una recogida.",
};

export default function CotizarPage() {
  return (
    <main className="min-h-screen bg-canvas pt-32 pb-20 sm:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="inline-block rounded-full bg-brand-100/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-900">
            Cotizador rápido
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 mt-4">
            Calcule su precio estimado
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-neutral-600 mt-4 max-w-2xl">
            Seleccione sus artículos, indique la zona de recogida y el destino. El estimado se calcula con nuestras tarifas base y el depósito de $10 se acredita al envío final.
          </p>
        </div>

        <PriceCalculator />
      </div>
    </main>
  );
}
