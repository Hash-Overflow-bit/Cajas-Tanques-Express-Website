"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Clock, MapPin, HeartHandshake, MessageSquare, DollarSign } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Puntualidad en la Recogida",
      description:
        "Respetamos su tiempo. Coordinamos su día y ventana horaria con chofer asignado para que no pase el día esperando sin saber a qué hora llegarán.",
    },
    {
      icon: DollarSign,
      title: "Depósito Claro y 100% Acreditado",
      description:
        "Los $10 requeridos para reservar son un anticipo que se descuenta por completo del costo total de su flete. Sin letras pequeñas ni cargos ocultos.",
    },
    {
      icon: ShieldCheck,
      title: "Protección y Cuidado de Carga",
      description:
        "Cuidamos cada caja y tanque como si fuera propio. Cuidamos el estibado en los vehículos y contenedores para evitar roturas o deformaciones.",
    },
    {
      icon: MapPin,
      title: "Cobertura Completa en RD",
      description:
        "Llegamos tanto a las principales metrópolis (Santo Domingo, Santiago) como a provincias, pueblos y campos de toda la geografía dominicana.",
    },
    {
      icon: HeartHandshake,
      title: "Atención Cercana y en Español",
      description:
        "Entendemos el valor y el sacrificio de cada envío para sus seres queridos. Le brindamos un trato respetuoso, familiar y transparente.",
    },
    {
      icon: MessageSquare,
      title: "Asistencia Inmediata por WhatsApp",
      description:
        "Cualquier consulta sobre dimensiones de cajas, capacidad de tanques o estatus de su recogida la resolvemos rápidamente en línea.",
    },
  ];

  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-canvas scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-neutral-900 mb-5 leading-tight">
            ¿Por Qué Elegir CAJAS &amp; TANQUES EXPRESS?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Más que un servicio de transporte, somos el puente seguro y responsable entre su esfuerzo y la alegría de sus familias en la República Dominicana.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-8 sm:p-9 rounded-3xl bg-white border border-neutral-200/90 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-900 text-white flex items-center justify-center mb-6 shadow-sm">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
