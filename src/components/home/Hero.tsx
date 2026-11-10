"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-neutral-900">
      
      {/* FULL TRUCK BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=85"
          alt="Camión de transporte de carga y logística hacia República Dominicana"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        {/* Soft top gradient to ensure dark typography pops with 100% legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/75 to-transparent via-35% to-75% pointer-events-none" />
        {/* Subtle bottom darkening for floating badges */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* OVERLAY CONTENT: TOP & CENTER (Headings & Subtitle) */}
      <div className="absolute inset-x-0 top-1/2 z-10 w-full max-w-5xl mx-auto -translate-y-1/2 px-6 sm:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-neutral-950 tracking-[-0.035em] leading-[1.05] mb-5 sm:mb-6">
            CAJAS &amp; TANQUES EXPRESS
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed font-medium">
            Servicio profesional de recogida a su puerta y transporte seguro hacia toda la República Dominicana puntual, garantizado y en su fecha.
          </p>
        </motion.div>
      </div>

      {/* OVERLAY FLOATING HUD WIDGETS (Bottom-Right Customer Social Proof) */}
      <div className="absolute inset-x-0 bottom-0 z-10 w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12 pointer-events-none">
        <div className="flex items-end justify-start w-full">
          
          {/* Bottom-Right: Customer Social Proof & Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pointer-events-auto"
          >
            <div className="glass-dark rounded-2xl p-4 shadow-2xl backdrop-blur-md text-white border border-white/20 max-w-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-brand-100 text-brand-900 flex items-center justify-center text-xs font-bold">
                    RD
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-200 text-neutral-800 flex items-center justify-center text-xs font-bold">
                    JR
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-emerald-100 text-emerald-900 flex items-center justify-center text-xs font-bold">
                    MC
                  </div>
                </div>
                <div className="flex items-center text-amber-400 gap-0.5 text-xs font-bold">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span className="text-white ml-1 text-xs">4.9/5</span>
                </div>
              </div>
              <p className="text-xs text-white/90 font-medium leading-snug">
                Clientes 100% satisfechos con la puntualidad y cuidado de sus envíos.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Middle-Right Container Metric with Pinpoint line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute top-[48%] right-6 sm:right-12 lg:right-20 z-10 hidden md:block"
      >
        <div className="corner-bracket relative">
          {/* Green Container Badge */}
          <div className="bg-[#15803D] border border-white/40 rounded-lg px-5 py-3 shadow-2xl text-white min-w-[170px] backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
              10,000+
            </div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-white/90 mt-1">
              Cajas y Tanques
            </div>
          </div>

          {/* Vertical Pinpoint Indicator Line down towards the truck */}
          <div className="flex flex-col items-center">
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-glow -mt-1 ring-4 ring-emerald-500/30" />
          </div>
        </div>
      </motion.div>

    </section>
  );
};
