"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { CheckCircle2, MessageSquare, Box, Cylinder } from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-canvas text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean, without specialized services badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-neutral-900 mb-5 leading-tight">
            Embalaje y Transporte de Cajas &amp; Tanques
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Estructuras resistentes preparadas para el trayecto internacional. Recogemos directamente en su puerta y entregamos con seguridad en cualquier provincia de la República Dominicana.
          </p>
        </div>

        {/* REFINED 2-CARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          
          {/* CARD 1: ENVÍO DE CAJAS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-3xl bg-white border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Clean Pristine Image (No tags or badges in corners) */}
            <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Cajas de cartón reforzado preparadas para envío a República Dominicana"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Card Content Body */}
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
              <div>
                {/* Title (Clean, no 01 badge) */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center">
                    <Box size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                    Envío de Cajas
                  </h3>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  Perfectas para ropa, calzado, alimentos secos, juguetes, artículos del hogar y electrónicos pequeños. Cajas estándar y de alta resistencia con flejado perimetral para máxima protección.
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Cartón corrugado de alta resistencia contra impactos y apilamiento</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Recogida a domicilio en la fecha y franja horaria programada</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Entrega puerta a puerta con comprobante de recepción en República Dominicana</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action Footer */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block">
                    Reserva Inicial
                  </span>
                  <span className="text-2xl font-black text-neutral-900">
                    $10 <span className="text-xs font-normal text-neutral-600">100% aplicado al envío</span>
                  </span>
                </div>
                <PillButton
                  href={siteConfig.acuityBookingUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Reservar Cajas
                </PillButton>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: ENVÍO DE TANQUES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group rounded-3xl bg-white border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Clean Pristine Image (No tags or badges in corners) */}
            <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                alt="Tanques y barriles de transporte marítimo para República Dominicana"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Card Content Body */}
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
              <div>
                {/* Title (Clean, no 02 badge) */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center">
                    <Cylinder size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                    Envío de Tanques
                  </h3>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  La solución predilecta para enviar víveres voluminosos, aceites, arroz, enlatados y electrodomésticos protegidos de la humedad. Cuentan con tapa hermética y aro de seguridad.
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Polietileno de alta resistencia contra golpes y peso extremo</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Cierre hermético con aro metálico y opción de precinto o candado</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Distribución directa a todas las provincias y municipios de RD</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action Footer */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block">
                    Reserva Inicial
                  </span>
                  <span className="text-2xl font-black text-neutral-900">
                    $10 <span className="text-xs font-normal text-neutral-600">100% aplicado al envío</span>
                  </span>
                </div>
                <PillButton
                  href={siteConfig.acuityBookingUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Reservar Tanques
                </PillButton>
              </div>
            </div>
          </motion.div>

        </div>

        {/* PACKING TO DELIVERY VISUAL STORY */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-900">
                De puerta a puerta
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-2">
                Empacamos, protegemos y entregamos
              </h3>
            </div>
            <p className="text-sm text-neutral-600 max-w-md sm:text-right">
              Cada envío se prepara con cuidado para que sus cajas y tanques lleguen seguros a su destino.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="group relative h-56 sm:h-64 overflow-hidden rounded-3xl bg-neutral-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85"
                alt="Cajas de cartón listas para ser empacadas y protegidas"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 pt-16 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/75">01 · Empaque</span>
                <p className="font-bold mt-1">Cajas listas para viajar</p>
              </div>
            </div>

            <div className="group relative h-56 sm:h-64 overflow-hidden rounded-3xl bg-neutral-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=85"
                alt="Tanques y carga protegida preparada para transporte"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 pt-16 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/75">02 · Protección</span>
                <p className="font-bold mt-1">Tanques asegurados</p>
              </div>
            </div>

            <div className="group relative h-56 sm:h-64 overflow-hidden rounded-3xl bg-neutral-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=85"
                alt="Camión preparado para entregar cajas y tanques a su destino"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 pt-16 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/75">03 · Entrega</span>
                <p className="font-bold mt-1">En camino a su destino</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Assistance Banner */}
        <div className="rounded-3xl bg-white border border-neutral-200/90 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-900 flex items-center justify-center flex-shrink-0">
              <MessageSquare size={24} />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-1">
                ¿Necesita cajas vacías o tanques antes de su recogida?
              </h4>
              <p className="text-sm text-neutral-600">
                Podemos coordinar la entrega previa de materiales de embalaje o resolver dudas sobre peso y artículos permitidos.
              </p>
            </div>
          </div>
          <PillButton
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
            isExternal
            size="md"
            variant="whatsapp"
            className="flex-shrink-0"
          >
            Consultar por WhatsApp
          </PillButton>
        </div>

      </div>
    </section>
  );
};
