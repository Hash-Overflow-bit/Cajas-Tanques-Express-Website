"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigationLinks } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent">
      {/* Full width container with extreme left & extreme right alignment */}
      <nav className="w-full px-6 sm:px-10 lg:px-16 py-6 sm:py-8 flex items-center justify-between">
        
        {/* Full Extreme Left Side: Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0" aria-label="Inicio">
          <Image
            src="/cajas-tanques-express-logo-transparent.png"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            priority
            className="h-14 w-14 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] max-w-[18vw] object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Full Extreme Right Side: Navigation Links + Pill Button together */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <div className="flex items-center gap-7 xl:gap-9">
            {navigationLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-800 hover:text-brand-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <PillButton
            href={siteConfig.bookingEntryUrl}
            
            size="sm"
            variant="primary"
          >
            Appointment
          </PillButton>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <PillButton
            href={siteConfig.bookingEntryUrl}
            
            size="sm"
            variant="primary"
          >
            Reservar
          </PillButton>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-black/5 text-neutral-900"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 p-5 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-neutral-200/80 flex flex-col gap-3">
          {navigationLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-neutral-800 hover:text-brand-900 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
            <PillButton
              href={siteConfig.bookingEntryUrl}
              
              variant="primary"
              size="md"
              className="w-full justify-between"
            >
              Reservar Recogida
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
};
