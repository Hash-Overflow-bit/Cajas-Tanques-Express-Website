"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { Calendar, MessageSquare } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero (e.g. 500px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-40 sm:hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-[#071a3c]/95 backdrop-blur-md border border-white/20 p-2.5 rounded-full shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors flex-shrink-0"
        >
          <MessageSquare size={14} className="text-[#2563eb]" />
          <span>WhatsApp</span>
        </a>

        <PillButton
          href={siteConfig.bookingEntryUrl}
          
          size="sm"
          variant="white"
          className="flex-grow justify-between text-xs py-2.5 font-bold"
        >
          Reservar
        </PillButton>
      </div>
    </div>
  );
};

