"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MapPin, Ship } from "lucide-react";

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const BusinessStatsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const revealInitial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
  const revealVisible = { opacity: 1, y: 0 };

  return (
    <section
      aria-label="Estadísticas de Cajas Y Tanques Express"
      className="relative overflow-hidden bg-[#071A2A] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,74,105,0.38),transparent_68%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          <motion.article
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{ once: true, amount: 0.35 }}
            transition={revealTransition}
            className="flex flex-col items-center px-4 py-8 text-center first:pt-0 last:pb-0 md:px-8 md:py-2"
          >
            <motion.div
              aria-hidden="true"
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...revealTransition, delay: 0.08 }}
              className="mb-6 text-red-400"
            >
              <Ship size={48} strokeWidth={1.45} />
            </motion.div>
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-5xl font-extrabold tracking-[-0.05em] sm:text-6xl">15–21</span>
              <span className="text-lg font-medium text-white/75">días</span>
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-white/55">TIEMPO PROMEDIO</p>
          </motion.article>

          <motion.article
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ ...revealTransition, delay: 0.1 }}
            className="flex flex-col items-center px-4 py-8 text-center md:px-8 md:py-2"
          >
            <motion.div
              aria-hidden="true"
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...revealTransition, delay: 0.18 }}
              className="mb-6 text-red-400"
            >
              <MapPin size={48} strokeWidth={1.45} />
            </motion.div>
            <span className="text-5xl font-extrabold tracking-[-0.05em] sm:text-6xl">100%</span>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-white/55">COBERTURA RD</p>
          </motion.article>

          <motion.article
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ ...revealTransition, delay: 0.2 }}
            className="flex flex-col items-center px-4 py-8 text-center first:pt-0 last:pb-0 md:px-8 md:py-2"
          >
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...revealTransition, delay: 0.28 }}
              className="mb-6 flex items-center gap-2 text-2xl"
              aria-label="Conexión entre Estados Unidos y República Dominicana"
            >
              <span role="img" aria-label="Estados Unidos">🇺🇸</span>
              <ArrowRight aria-hidden="true" className="text-red-400" size={28} strokeWidth={1.7} />
              <span role="img" aria-label="República Dominicana">🇩🇴</span>
            </motion.div>
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-5xl font-extrabold tracking-[-0.05em] sm:text-6xl">+1,500</span>
              <span className="text-lg font-medium text-white/75">mi</span>
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-white/55">CONECTADOS CON AMOR</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
