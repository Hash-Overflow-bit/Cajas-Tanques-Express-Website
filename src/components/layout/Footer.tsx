"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { Phone, Mail, Facebook, Instagram, MessageCircle, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-canvas py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* MONUMENTAL FOOTER CARD CONTAINER */}
      <div className="max-w-7xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] bg-[#0C2216] text-[#EFECE6] overflow-hidden shadow-2xl p-8 sm:p-14 lg:p-16 border border-emerald-950 flex flex-col justify-between">
        
        {/* TOP SECTION: ASYMMETRIC GRID (Headline & CTA on Left, Social & Nav on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16 sm:mb-20">
          
          {/* Top Left: Call To Action */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#34D399] uppercase mb-3">
              ¿Listo para enviar a República Dominicana?
            </span>
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
              <Image
                src="/cajas-tanques-express-logo-transparent.png"
                alt=""
                aria-hidden="true"
                width={120}
                height={120}
                className="w-20 sm:w-24 h-auto object-contain flex-shrink-0"
              />
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.05]">
                Hablemos
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <PillButton
                href={siteConfig.acuityBookingUrl}
                isExternal
                size="lg"
                variant="white"
                className="text-base font-bold px-8 py-3.5 shadow-xl"
              >
                Reservar Recogida
              </PillButton>
              <PillButton
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                isExternal
                size="lg"
                variant="whatsapp"
                className="text-base font-bold px-7 py-3.5 shadow-xl"
              >
                WhatsApp
              </PillButton>
            </div>

            {/* Quick Contact Line */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/70">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} className="text-emerald-400" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} className="text-emerald-400" />
                {siteConfig.contact.phoneSecondaryDisplay}
              </a>
              <span>•</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail size={14} className="text-emerald-400" />
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-white/60">
              <MapPin size={14} className="text-emerald-400 flex-shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </div>
          </div>

          {/* Top Right: Social Media Icons & Navigation Links */}
          <div className="lg:col-span-6 flex flex-col lg:items-end justify-between h-full space-y-6 lg:space-y-8">
            
            {/* Social Icons with SVG / Lucide icons */}
            <div className="flex items-center gap-4 text-white/80">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 hover:text-emerald-300 transition-all flex items-center justify-center text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 hover:text-emerald-300 transition-all flex items-center justify-center text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 hover:text-emerald-300 transition-all flex items-center justify-center text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 hover:text-emerald-300 transition-all flex items-center justify-center text-white"
                aria-label="Llamar por teléfono"
              >
                <Phone size={18} />
              </a>
            </div>

            {/* Navigation Shortcuts */}
            <div className="flex flex-wrap lg:justify-end gap-5 text-xs text-white/75 font-medium">
              <Link href="/#servicios" className="hover:text-white transition-colors">
                Servicios
              </Link>
              <Link href="/#como-funciona" className="hover:text-white transition-colors">
                Cómo Funciona
              </Link>
              <Link href="/#zonas" className="hover:text-white transition-colors">
                Zonas
              </Link>
              <Link href="/#faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/contacto" className="hover:text-white transition-colors">
                Contacto
              </Link>
            </div>

          </div>

        </div>

        {/* MIDDLE SECTION: GIANT STYLIZED WORDMARK (Reference style) */}
        <div className="w-full pt-8 sm:pt-12 border-t border-white/10 select-none overflow-hidden">
          <h2 className="w-full text-center text-[#E7E4DC] font-black leading-none tracking-[-0.05em] text-[clamp(1.1rem,5vw,5rem)] uppercase whitespace-nowrap">
            CAJAS &amp; TANQUES EXPRESS
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center text-[9px] sm:text-xs font-mono font-bold tracking-[0.25em] text-white/40 uppercase mt-2 px-1">
            <span>CAJAS &amp; TANQUES EXPRESS</span>
            <span>ENVIOS PUERTA A PUERTA</span>
            <span>REP. DOMINICANA</span>
          </div>
        </div>

        {/* BOTTOM SECTION: PROPERLY ALIGNED CREDITS & LEGAL BAR */}
        <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacidad" className="hover:text-white underline underline-offset-2 transition-colors">
              Privacy policy
            </Link>
            <span>•</span>
            <Link href="/terminos" className="hover:text-white underline underline-offset-2 transition-colors">
              Terms
            </Link>
          </div>

          <div>
            <a
              href="https://www.upwork.com/freelancers/~018cb6b2be97dd2433?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300/85 hover:text-emerald-300 hover:underline underline-offset-2 transition-colors font-medium"
            >
              Developed by Hashir
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
