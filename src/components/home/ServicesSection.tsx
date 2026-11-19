"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { boxPricing, siteConfig, tankPricing } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { CheckCircle2, MessageSquare, Box, Cylinder } from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-canvas text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-neutral-900 mb-5 leading-tight">
            Elija la mejor opción para su envío
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Cajas y tanques preparados para el trayecto internacional, con recogida programada en su puerta y entrega hacia la República Dominicana.
          </p>
        </div>

        {/* PRICING & SIZES SECTION (OFERTA DE LANZAMIENTO) */}
        <div id="precios" className="mb-16 scroll-mt-28 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                ¡Oferta de Lanzamiento! 🇩🇴
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                Lista Oficial de Precios y Medidas
              </h3>
            </div>
            <p className="text-sm text-neutral-600 max-w-md sm:text-right">
              Recogida a domicilio en NY, Westchester, CT y NJ. Depósito de solo $10 aplicado al total.
            </p>
          </div>

          {/* CAJAS PRICING (4 Medidas) */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-900 flex items-center justify-center">
                <Box size={18} />
              </div>
              <h4 className="text-lg font-bold text-neutral-900">Precios de Cajas por Medida</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
              {boxPricing.map((tier) => (
                <div
                  key={tier.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-xs font-bold text-neutral-700 font-mono">
                        {tier.size}
                      </span>
                      <span className="text-2xl font-black tracking-tight text-red-600 whitespace-nowrap">
                        ${tier.price}
                      </span>
                    </div>
                    <h5 className="text-base font-bold text-neutral-900">{tier.name}</h5>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">{tier.idealFor}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-700">✓ Puerta a puerta en RD</span>
                    <a
                      href={siteConfig.bookingEntryUrl}
                      className="text-xs font-bold text-brand-900 hover:underline"
                    >
                      Reservar →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TANQUES PRICING (2 Medidas) */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-900 flex items-center justify-center">
                <Cylinder size={18} />
              </div>
              <h4 className="text-lg font-bold text-neutral-900">Precios de Tanques (Barriletes)</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {tankPricing.map((tier) => (
                <div
                  key={tier.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-xs font-bold text-neutral-700 font-mono">
                        {tier.size}
                      </span>
                      <span className="text-2xl font-black tracking-tight text-red-600 whitespace-nowrap">
                        ${tier.price.toFixed(2)}
                      </span>
                    </div>
                    <h5 className="text-base font-bold text-neutral-900">{tier.name}</h5>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">{tier.idealFor}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-700">✓ Cierre hermético con aro</span>
                    <a
                      href={siteConfig.bookingEntryUrl}
                      className="text-xs font-bold text-brand-900 hover:underline"
                    >
                      Reservar →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-neutral-500">
            * Tarifas expresadas en USD para envíos puerta a puerta hacia toda la República Dominicana. El depósito inicial de $10 se descuenta al 100% de la factura final al momento de la recogida en su domicilio.
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
                src="/boxes-shipment.jpg"
                alt="Cajas empacadas y listas para envío a República Dominicana"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Card Content Body */}
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
              <div>
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

                <div className="rounded-2xl bg-canvas border border-neutral-200 p-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-900">Ideal para</span>
                  <p className="text-sm text-neutral-700 mt-1">Carga ligera o mediana que desea organizar y proteger por categorías.</p>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500 mb-3">Incluye</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Cartón corrugado de alta resistencia contra impactos y apilamiento</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Recogida a domicilio en la fecha y franja horaria programada</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
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
                  href={siteConfig.bookingEntryUrl}
                  
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
                src="/tanks-shipping.jpg"
                alt="Cajas y tanques cargados en una camioneta para envío a República Dominicana"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Card Content Body */}
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
              <div>
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

                <div className="rounded-2xl bg-canvas border border-neutral-200 p-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-900">Ideal para</span>
                  <p className="text-sm text-neutral-700 mt-1">Carga voluminosa o pesada que necesita un contenedor rígido y resistente.</p>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500 mb-3">Incluye</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Polietileno de alta resistencia contra golpes y peso extremo</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Cierre hermético con aro metálico y opción de precinto o candado</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
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
                  href={siteConfig.bookingEntryUrl}
                  
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

        {/* SERVICE COMPARISON */}
        <div className="mb-16 sm:mb-20 rounded-3xl border border-neutral-200/90 bg-white overflow-hidden shadow-sm">
          <div className="p-8 sm:p-10 border-b border-neutral-200">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-900">Decisión rápida</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-2">
              ¿Cajas o tanques?
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-2xl">
              Elija según el tipo de carga, el nivel de protección que necesita y la forma en que desea organizar sus artículos.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-canvas text-xs uppercase tracking-wider text-neutral-500">
                <tr>
                  <th className="px-6 sm:px-10 py-4 font-bold">Característica</th>
                  <th className="px-6 py-4 font-bold text-brand-900">Cajas</th>
                  <th className="px-6 sm:px-10 py-4 font-bold text-brand-900">Tanques</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                <tr>
                  <th className="px-6 sm:px-10 py-4 font-semibold text-neutral-900">Mejor para</th>
                  <td className="px-6 py-4">Ropa, zapatos y artículos del hogar</td>
                  <td className="px-6 sm:px-10 py-4">Víveres, artículos voluminosos y carga pesada</td>
                </tr>
                <tr>
                  <th className="px-6 sm:px-10 py-4 font-semibold text-neutral-900">Protección</th>
                  <td className="px-6 py-4">Cartón reforzado y relleno interior</td>
                  <td className="px-6 sm:px-10 py-4">Contenedor rígido, tapa y aro de seguridad</td>
                </tr>
                <tr>
                  <th className="px-6 sm:px-10 py-4 font-semibold text-neutral-900">Preparación</th>
                  <td className="px-6 py-4">Distribuya el peso y selle todas las uniones</td>
                  <td className="px-6 sm:px-10 py-4">Ajuste el cierre y coloque los datos del destinatario</td>
                </tr>
                <tr>
                  <th className="px-6 sm:px-10 py-4 font-semibold text-neutral-900">Reserva inicial</th>
                  <td className="px-6 py-4 font-bold text-neutral-900">$10 aplicados al envío</td>
                  <td className="px-6 sm:px-10 py-4 font-bold text-neutral-900">$10 aplicados al envío</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* OPERATIONAL WORKFLOW */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-900">Cómo funciona</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-2">
              Del código postal a la entrega
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Le guiamos desde la selección de la ruta hasta la entrega de su carga en la República Dominicana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "01", title: "Consulte su ZIP", detail: "Identificamos el día de recogida disponible para su zona." },
              { number: "02", title: "Reserve su turno", detail: "Elija una fecha y pague el depósito inicial de $10." },
              { number: "03", title: "Prepare su carga", detail: "Selle, etiquete y deje sus cajas o tanques listos." },
              { number: "04", title: "Recogemos y entregamos", detail: "Coordinamos el traslado hasta su destinatario en RD." },
            ].map((step) => (
              <div key={step.number} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <span className="text-sm font-black text-brand-900">{step.number}</span>
                <h4 className="text-lg font-bold text-neutral-900 mt-4 mb-2">{step.title}</h4>
                <p className="text-sm leading-relaxed text-neutral-600">{step.detail}</p>
              </div>
            ))}
          </div>
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
                src="/warehouse-boxes-tanks-v2.jpg"
                alt="Cajas y tanques preparados en un almacén para envío"
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

        {/* PINTEREST-INSPIRED PHOTO GALLERY */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-900">
              Nuestro trabajo en acción
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-2">
              Carga real, cuidado real
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[210px] sm:auto-rows-[220px] gap-4">
            <figure className="group relative sm:col-span-2 sm:row-span-2 overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src="/boxes-loading.jpg"
                alt="Cajas y tanques preparados para ser cargados"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16 text-white font-semibold">
                Preparación y carga de mercancía
              </figcaption>
            </figure>

            <figure className="group relative lg:col-span-2 overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src="/storefront-delivery.jpg"
                alt="Entrega de cajas y tanques frente al punto de servicio"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16 text-white font-semibold">
                Recogida y entrega puerta a puerta
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src="/tanks-shipping.jpg"
                alt="Camioneta cargada con cajas y tanques"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-14 text-sm text-white font-semibold">
                Carga protegida
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src="/warehouse-van.jpg"
                alt="Personal preparando cajas y tanques en el almacén"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-14 text-sm text-white font-semibold">
                Equipo listo para servirle
              </figcaption>
            </figure>

            <figure className="group relative sm:col-span-2 lg:col-span-2 overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src="/warehouse-packing.jpg"
                alt="Cajas y tanques asegurados dentro de una camioneta"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16 text-white font-semibold">
                Empaque y protección antes del traslado
              </figcaption>
            </figure>
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
