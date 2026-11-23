"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";

/**
 * Always-visible mobile action bar. It used to appear only after 450px of
 * scroll, but most ad visitors leave within seconds, before ever scrolling.
 * Hidden on the booking page itself so it never covers the ZIP step.
 */
export const MobileStickyBar: React.FC = () => {
  const pathname = usePathname();
  if (pathname === siteConfig.bookingEntryUrl) return null;

  return (
    <>
      {/* Spacer so the fixed bar never hides the end of the page. */}
      <div aria-hidden className="h-24 sm:hidden" />
      <div
        data-cta="sticky_bar"
        className="fixed inset-x-3 bottom-3 z-40 sm:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#071a3c]/95 p-2 shadow-2xl backdrop-blur-md">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            aria-label={`Llamar al ${siteConfig.contact.phoneDisplay}`}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <Phone size={18} />
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <MessageSquare size={18} />
          </a>
          <Link
            href={siteConfig.bookingEntryUrl}
            className="flex h-11 flex-grow items-center justify-between rounded-full bg-white pl-5 pr-1.5 text-sm font-extrabold text-[#0b2d66]"
          >
            Reservar recogida
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b3b85] text-white">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
