"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, CalendarCheck, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-[650px] overflow-hidden bg-[#071a3c] text-white sm:min-h-[700px]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_45%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_10%_0%,rgba(37,99,235,0.42),transparent_36%),linear-gradient(135deg,#071a3c_0%,#0b2d66_54%,#061f4f_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-6 pb-14 pt-28 sm:pt-32 sm:min-h-[700px] sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-16 lg:pt-28">
        {/* Rendered visible on first paint: no hide-then-animate, so slow phones never see an empty hero. */}
        <div className="relative z-10 max-w-xl">
          <h1 id="hero-title" className="text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[76px]">
            <span className="mb-4 block text-base font-bold leading-snug tracking-normal text-cyan-100 sm:text-lg">
              Envío de cajas y tanques a República Dominicana desde Yonkers, Westchester y Connecticut
            </span>
            <span className="block">CAJAS &amp; TANQUES</span>
            <span className="block bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent">EXPRESS</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-50/90 sm:text-lg">
            Servicio profesional de recogida a su puerta y transporte seguro hacia toda la República Dominicana.
          </p>

          <Link
            href={siteConfig.bookingEntryUrl}
            data-cta="hero"
            className="group mt-7 inline-flex w-full items-center justify-between gap-3 rounded-full bg-white py-2.5 pl-6 pr-2.5 text-base font-extrabold text-[#0b2d66] shadow-xl shadow-blue-950/30 transition-transform hover:-translate-y-0.5 sm:w-auto sm:min-w-[320px]"
          >
            <span className="inline-flex items-center gap-2.5">
              <CalendarCheck size={20} />
              Reservar recogida
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b3b85] text-white transition-transform group-hover:translate-x-0.5">
              <ArrowRight size={18} />
            </span>
          </Link>
          <p className="mt-2 pl-2 text-xs text-blue-50/70">Depósito de solo {siteConfig.metrics.depositAmount} · Elija su día por ZIP</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              data-cta="hero"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <Phone size={16} className="text-cyan-200" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hola, quiero información sobre sus servicios de recogida.")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <MessageCircle size={16} className="text-cyan-200" />
              WhatsApp
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-50/75">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-cyan-200" /> Seguro y puntual</span>
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan-200" /> Puerta a puerta · RD</span>
          </div>
        </div>

        <motion.div style={{ y: prefersReducedMotion ? 0 : imageY }} className="relative mx-auto w-full max-w-[820px] lg:justify-self-end">
          {/* Starts fully visible (it is the LCP image); only a small slide-in after hydration. */}
          <motion.div
            initial={prefersReducedMotion ? false : { x: 24 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full"
          >
            <Image
              src="/cajas-tanques-express-van-reference-transparent.png"
              alt="Van de CAJAS & TANQUES EXPRESS con cajas y tanques"
              width={758}
              height={506}
              priority
              quality={100}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-auto w-full origin-right object-contain contrast-[1.04] saturate-[1.05] lg:scale-[1.25]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
