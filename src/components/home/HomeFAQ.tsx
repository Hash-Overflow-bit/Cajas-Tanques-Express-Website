"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";
import { siteConfig } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
}

export const HomeFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "¿Cómo funciona el depósito de $10 para la reserva?",
      answer:
        "El depósito de $10 se procesa de forma 100% segura mediante Square al momento de confirmar su cita en Acuity. Este monto no es un costo extra, sino un anticipo que se descuenta por completo del total de su flete cuando pasamos a recoger sus cajas o tanques.",
    },
    {
      question: "¿Qué debo tener preparado para el día de la recogida?",
      answer:
        "Le recomendamos tener sus cajas debidamente cerradas y selladas con cinta de embalaje resistente en todas sus uniones, y sus tanques cerrados con su aro metálico y seguro. Tenga a mano el nombre completo, teléfono y dirección del destinatario en la República Dominicana.",
    },
    {
      question: "¿Puedo reprogramar o cancelar mi cita de recogida?",
      answer:
        "Sí. Si necesita cambiar el día o la hora, puede hacerlo fácilmente mediante el enlace provisto en su correo de confirmación con al menos 24 horas de antelación, o escribiéndonos directamente por WhatsApp.",
    },
    {
      question: "¿Cómo recibiré la confirmación y recordatorios de mi cita?",
      answer:
        "Inmediatamente después de reservar recibirá un correo electrónico con su comprobante oficial y, mediante nuestro sistema automatizado de mensajería SMS, recibirá recordatorios en su teléfono móvil sobre la llegada del chofer a su dirección.",
    },
    {
      question: "¿Cuáles artículos están prohibidos por aduanas?",
      answer:
        "Por regulaciones aduaneras de Estados Unidos y de la República Dominicana, está terminantemente prohibido incluir armas de fuego, municiones, sustancias químicas corrosivas o inflamables, drogas ilegales o dinero en efectivo.",
    },
    {
      question: "¿Llegan a todas las provincias de República Dominicana?",
      answer:
        "Sí. Contamos con cobertura integral en todo el país: Santo Domingo, Santiago, San Cristóbal, La Vega, Puerto Plata, San Pedro de Macorís, San Juan, Baní, Samaná, Higüey y comunidades rurales.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-neutral-900 mb-5 leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesita saber sobre el servicio de recogida a domicilio, el depósito de $10 y los envíos hacia la República Dominicana.
          </p>
        </div>

        {/* 2-COLUMN SPLIT LAYOUT: Left Reference Card + Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: THE REFERENCE FEATURED CONTAINER CARD */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:z-10">
            <div className="rounded-[2.5rem] bg-[#EAECE9] p-7 sm:p-9 shadow-sm border border-neutral-300/70 flex flex-col justify-between">
              
              {/* TOP HUD CONTAINER GRAPHIC (Exact match to 2M+ green container from reference) */}
              <div className="corner-bracket relative p-2 sm:p-3 mb-8">
                
                {/* Realistic Corrugated Shipping Container */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-10 text-center text-white border-2 border-emerald-700/80"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg, #185A2E 0px, #185A2E 12px, #134B26 12px, #134B26 24px)",
                  }}
                >
                  {/* Container vertical stencil serial number on the right (like XRT11G1K 4K72) */}
                  <div className="absolute right-3 top-3 bottom-3 flex flex-col justify-between text-[9px] font-mono font-bold tracking-widest text-white/50 writing-mode-vertical uppercase select-none">
                    <span>DOM-CARGO</span>
                    <span>4K72</span>
                  </div>

                  {/* Container ambient metal sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/15 pointer-events-none" />

                  {/* Centered Large Display Metric */}
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-white drop-shadow-md">
                      10,000+
                    </div>
                    <div className="text-sm sm:text-base font-semibold tracking-wide text-white/95 mt-2">
                      Cajas &amp; Tanques Entregados
                    </div>
                  </div>
                </div>

              </div>

              {/* LOWER AREA: Bold Title + Overlapping Avatars (Matches reference) */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-2">
                <div className="max-w-[240px]">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-[-0.02em] leading-tight">
                    Servicio líder y confiable en envíos a RD
                  </h3>
                </div>

                {/* 3 Circular Customer Avatars */}
                <div className="flex items-center -space-x-3 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md bg-neutral-200 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                      alt="Cliente satisfecho"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md bg-neutral-300 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                      alt="Cliente satisfecho"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md bg-neutral-400 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                      alt="Cliente satisfecho"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Support Button */}
              <div className="mt-8 pt-6 border-t border-neutral-300/60 flex items-center justify-between">
                <span className="text-xs text-neutral-600 font-medium">
                  ¿Preguntas sobre su flete?
                </span>
                <PillButton
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  isExternal
                  size="sm"
                  variant="whatsapp"
                >
                  WhatsApp
                </PillButton>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: ACCORDION QUESTIONS */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-canvas/80 border-neutral-300 shadow-sm"
                      : "bg-white border-neutral-200/90 hover:border-neutral-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-neutral-900 pr-6 tracking-tight">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-brand-900 text-white rotate-180"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      <ChevronDown size={18} strokeWidth={2.4} />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-200/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
