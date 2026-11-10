"use client";

import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { Calendar, CreditCard, Truck, CheckCheck, ArrowRight } from "lucide-react";

export const StepProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Elija su fecha y turno",
      description:
        "Seleccione el día y horario que mejor se adapte a su disponibilidad en nuestro calendario de reservas online.",
      icon: Calendar,
      badge: "Sin esperas",
    },
    {
      number: "02",
      title: "Depósito seguro de $10",
      description:
        "Asegure su cupo con $10 procesados de forma segura mediante Square. Este monto se descuenta al 100% de su flete final.",
      icon: CreditCard,
      badge: "100% Acreditado",
    },
    {
      number: "03",
      title: "Recogida puntual en su puerta",
      description:
        "Nuestro equipo pasa directamente a su domicilio en la fecha pautada, verifica sus cajas o tanques y le entrega su recibo oficial.",
      icon: Truck,
      badge: "A domicilio",
    },
    {
      number: "04",
      title: "Entrega directa en RD",
      description:
        "Su carga viaja protegida hacia la República Dominicana y es entregada con total cuidado al destinatario final.",
      icon: CheckCheck,
      badge: "Garantizado",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 sm:py-32 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-neutral-900 mb-5 leading-tight">
            ¿Cómo Funciona el Servicio?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Sin trámites complicados ni llamadas interminables. En 4 sencillos pasos sus cajas y tanques están en camino hacia sus seres queridos en la República Dominicana.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-canvas rounded-3xl p-8 border border-neutral-200/90 shadow-sm relative hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-brand-900/25 tracking-tight font-mono">
                      {step.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white text-neutral-800 text-xs font-bold border border-neutral-200/80 shadow-sm">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-brand-900 text-white flex items-center justify-center mb-5 shadow-sm">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-2.5 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold text-brand-900">
                  <span>Paso Verificado</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="text-center">
          <PillButton
            href={siteConfig.acuityBookingUrl}
            isExternal
            size="lg"
            variant="primary"
            className="text-base sm:text-lg px-8 py-3.5 shadow-lg"
          >
            Programar mi Recogida Ahora
          </PillButton>
        </div>

      </div>
    </section>
  );
};
