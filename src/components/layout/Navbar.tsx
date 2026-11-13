"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig, navigationLinks } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const sectionIds = navigationLinks
      .map((item) => item.href.match(/^\/#(.+)$/)?.[1])
      .filter((id): id is string => Boolean(id));

    const updateActiveHash = () => {
      if (pathname !== "/") {
        setActiveHash(window.location.hash);
        return;
      }

      const activationLine = 112;
      let currentSection = "";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = `#${sectionId}`;
        }
      }

      setActiveHash(currentSection);
    };
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);

    updateActiveHash();
    updateScrollState();
    window.addEventListener("hashchange", updateActiveHash);
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("scroll", updateActiveHash, { passive: true });

    return () => {
      window.removeEventListener("hashchange", updateActiveHash);
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("scroll", updateActiveHash);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    const [hrefPath, hrefHash] = href.split("#");

    if (hrefPath === "/" && pathname === "/") {
      return hrefHash ? activeHash === `#${hrefHash}` : !activeHash;
    }

    return hrefPath === pathname && !hrefHash;
  };

  const isHomePage = pathname === "/";

  const linkClassName = (href: string) =>
    `relative text-sm font-medium transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:transition-all ${
      isActive(href)
        ? isHomePage
          ? "text-white after:w-full after:bg-white"
          : "text-brand-900 after:w-full after:bg-brand-900"
        : isHomePage
          ? "text-white hover:text-white/80 after:w-0 hover:after:w-full after:bg-white"
          : "text-brand-900 hover:text-brand-700 after:w-0 hover:after:w-full after:bg-brand-900"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/15 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Full width container with extreme left & extreme right alignment */}
      <nav className="w-full px-5 sm:px-8 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
        
        {/* Full Extreme Left Side: Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0" aria-label="Inicio">
          <Image
            src="/cajas-tanques-express-logo-transparent.png"
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            priority
            className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 max-w-[18vw] object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Full Extreme Right Side: Navigation Links + Pill Button together */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <div className="flex items-center gap-7 xl:gap-9">
            {navigationLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={linkClassName(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
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
            Reservar Recogida
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
            className="p-2 rounded-full text-white hover:bg-white/10"
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
              className={`px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                isActive(item.href)
                  ? "bg-brand-50 text-brand-900"
                  : "text-neutral-800 hover:text-brand-900 hover:bg-neutral-50"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
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
