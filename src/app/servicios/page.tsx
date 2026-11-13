import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { Box, Cylinder, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Nuestros Servicios | ${siteConfig.name}`,
  description:
    "Conozca nuestros servicios de envío de cajas y tanques hacia toda la República Dominicana. Medidas, recomendaciones de embalaje y recogida a domicilio.",
};

export default function ServiciosPage() {
  return (
    <div className="pt-32 sm:pt-40 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-900 bg-brand-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Detalle de Servicios
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight mb-4">
            Servicios de Envío de Cajas &amp; Tanques
          </h1>
          <p className="text-base sm:text-lg text-neutral-600">
            Conectamos sus envíos con la República Dominicana con total garantía, puntualidad en la recogida y protección especializada.
          </p>
        </div>

        {/* Section: Cajas */}
        <div id="cajas" className="scroll-mt-32 mb-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-900 text-white flex items-center justify-center">
                    <Box size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                      Envío de Cajas a República Dominicana
                    </h2>
                    <span className="text-xs font-semibold text-brand-900 uppercase tracking-wider">
                      Ideal para ropa, calzado, comida no perecedera y artículos del hogar
                    </span>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  Nuestras cajas para exportación cuentan con cartón reforzado de doble pared diseñado para soportar el apilamiento y trayecto marítimo internacional. Pasamos a recoger directamente a su casa en el horario programado.
                </p>

                <h3 className="font-bold text-neutral-900 text-base mb-3">
                  Recomendaciones para sus cajas:
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-700 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                    <span>Distribuya los artículos pesados (conservas, detergentes) en el fondo de la caja.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                    <span>Rellene los espacios vacíos con prendas de vestir o plástico de burbujas para evitar que la caja se deforme.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                    <span>Selle con al menos 3 capas de cinta de embalaje adhesiva resistente en todas las uniones.</span>
                  </li>
                </ul>

                <PillButton
                  href={siteConfig.acuityBookingUrl}
                  isExternal
                  size="md"
                  variant="primary"
                >
                  Reservar Recogida de Cajas
                </PillButton>
              </div>

              <div className="lg:col-span-4 bg-canvas rounded-2xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider mb-4">
                  Resumen de Reserva
                </h4>
                <div className="space-y-3 text-sm text-neutral-600 mb-6">
                  <div className="flex justify-between py-2 border-b border-neutral-200/60">
                    <span>Depósito inicial:</span>
                    <strong className="text-brand-900">$10 (Square)</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-200/60">
                    <span>Aplicación:</span>
                    <span className="text-blue-700 font-medium">100% al costo final</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-200/60">
                    <span>Recogida:</span>
                    <span>En su puerta</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Destino:</span>
                    <span>Toda República Dominicana</span>
                  </div>
                </div>
                <div className="text-xs text-neutral-500 bg-white p-3 rounded-xl border border-neutral-200">
                  * El valor total del flete se confirma según las dimensiones y tarifas vigentes al momento de la recogida.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Tanques */}
        <div id="tanques" className="scroll-mt-32 mb-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-900 text-white flex items-center justify-center">
                    <Cylinder size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                      Envío de Tanques (Barrels)
                    </h2>
                    <span className="text-xs font-semibold text-brand-900 uppercase tracking-wider">
                      Máxima capacidad y hermetismo para víveres y artículos de gran peso
                    </span>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  Los tanques cilíndricos de plástico o cartón prensado con aro metálico son la solución predilecta de la comunidad para enviar víveres voluminosos, aceites, arroz, detergentes y electrodomésticos protegidos de la humedad.
                </p>

                <h3 className="font-bold text-neutral-900 text-base mb-3">
                  Recomendaciones para sus tanques:
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-700 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                    <span>Asegúrese de cerrar bien la tapa y ajustar fuertemente el aro de metal o abrazadera de seguridad.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                    <span>Coloque un candado o precinto numerado en el cierre del aro si desea una capa adicional de custodia.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-900 flex-shrink-0 mt-0.5" />
                    <span>Escriba con marcador permanente indeleble el nombre y teléfono del destinatario en la tapa y el costado.</span>
                  </li>
                </ul>

                <PillButton
                  href={siteConfig.acuityBookingUrl}
                  isExternal
                  size="md"
                  variant="primary"
                >
                  Reservar Recogida de Tanques
                </PillButton>
              </div>

              <div className="lg:col-span-4 bg-canvas rounded-2xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider mb-4">
                  Ventajas del Tanque
                </h4>
                <div className="space-y-3 text-sm text-neutral-600 mb-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-blue-600" />
                    <span>Impermeable y resistente al clima</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-blue-600" />
                    <span>Mayor capacidad de carga y peso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-blue-600" />
                    <span>Reutilizable en el destino para agua o almacenamiento</span>
                  </div>
                </div>
                <div className="text-xs text-neutral-500 bg-white p-3 rounded-xl border border-neutral-200">
                  * Disponemos de tanques vacíos si necesita que le suministremos uno previamente. Consúltenos por WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Preparation & Prohibited items */}
        <div id="preparacion" className="scroll-mt-32">
          <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-4">
                <AlertTriangle size={15} /> Normativa Aduanera y de Seguridad
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Artículos Prohibidos y No Permitidos
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Para garantizar un despacho aduanal rápido y seguro hacia la República Dominicana, está terminantemente prohibido incluir los siguientes artículos dentro de cualquier caja o tanque:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90 mb-8">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  ❌ Armas de fuego, pertrechos o municiones
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  ❌ Sustancias químicas, inflamables o explosivos
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  ❌ Drogas o sustancias estupefacientes no autorizadas
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  ❌ Dinero en efectivo o títulos valores al portador
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PillButton
                  href={siteConfig.acuityBookingUrl}
                  isExternal
                  size="md"
                  variant="white"
                >
                  Comenzar Reserva de Recogida
                </PillButton>
                <PillButton
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  isExternal
                  size="md"
                  variant="whatsapp"
                >
                  Consultar Artículo Específico
                </PillButton>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

