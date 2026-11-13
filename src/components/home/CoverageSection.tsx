"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { Plane } from "lucide-react";

interface NodeLocation {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  mobileX: number;
  mobileY: number;
  labelPos?: "top" | "bottom" | "left" | "right";
}

export const CoverageSection: React.FC = () => {
  // Rich scattered destination points with generous distance, exactly like the reference image
  const locations: NodeLocation[] = [
    // Core Shipping Route Endpoints
    { id: "usa", name: "USA", x: 38, y: 44, mobileX: 31, mobileY: 43, labelPos: "top" },
    { id: "rd", name: "Rep. Dominicana", x: 68, y: 56, mobileX: 76, mobileY: 52, labelPos: "bottom" },

    // Americas & Hubs
    { id: "canada", name: "Canada", x: 22, y: 22, mobileX: 14, mobileY: 17, labelPos: "top" },
    { id: "greenland", name: "Greenland", x: 52, y: 14, mobileX: 48, mobileY: 8, labelPos: "top" },
    { id: "ny", name: "New York", x: 32, y: 32, mobileX: 25, mobileY: 29, labelPos: "top" },
    { id: "miami", name: "Miami Hub", x: 27, y: 56, mobileX: 18, mobileY: 57, labelPos: "left" },
    { id: "brazil", name: "Brazil", x: 50, y: 76, mobileX: 48, mobileY: 84, labelPos: "bottom" },
    { id: "colombia", name: "Colombia", x: 42, y: 64, mobileX: 37, mobileY: 68, labelPos: "left" },

    // Dominican Republic Key Regions
    { id: "santo-domingo", name: "Santo Domingo", x: 73, y: 46, mobileX: 72, mobileY: 40, labelPos: "top" },
    { id: "santiago", name: "Santiago", x: 84, y: 36, mobileX: 88, mobileY: 31, labelPos: "top" },
    { id: "puerto-plata", name: "Puerto Plata", x: 62, y: 34, mobileX: 61, mobileY: 27, labelPos: "top" },
    { id: "punta-cana", name: "Punta Cana", x: 82, y: 68, mobileX: 91, mobileY: 65, labelPos: "right" },

    // Global / Diaspora Connections (from reference)
    { id: "germany", name: "Germany", x: 74, y: 24, mobileX: 73, mobileY: 12, labelPos: "top" },
    { id: "poland", name: "Poland", x: 89, y: 22, mobileX: 91, mobileY: 13, labelPos: "top" },
    { id: "spain", name: "España", x: 66, y: 28, mobileX: 62, mobileY: 18, labelPos: "top" },
    { id: "south-africa", name: "South Africa", x: 87, y: 58, mobileX: 84, mobileY: 82, labelPos: "bottom" },
  ];

  // Exact coordinates for route line from USA to Dominican Republic
  const startX = 38;
  const startY = 44;
  const midX = 53;
  const midY = 50;
  const endX = 68;
  const endY = 56;

  return (
    <section id="zonas" className="py-20 sm:py-28 bg-canvas text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GREEN CANVAS MAP CONTAINER */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0b2e63] via-[#123c78] to-[#0b3b85] text-white overflow-hidden shadow-2xl p-8 sm:p-14 lg:p-16 border border-blue-800">
          
          {/* MAP CANVAS WITH CONTINENTS FORMED BY REAL DOT PATTERNS */}
            <div className="relative w-full h-[560px] sm:h-[520px] lg:h-[600px]">
            
            {/* SVG WORLD CONTINENT DOT-MATRIX LANDMASSES */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Regular Dot Matrix */}
                <pattern id="continentDots" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="7" cy="7" r="1.5" fill="#91c8f5" opacity="0.6" />
                </pattern>
                {/* Dense Radial Dot Matrix (Reference Style Concentric Dots) */}
                <pattern id="continentDotsDense" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="5" r="1.4" fill="#b9e2ff" opacity="0.85" />
                </pattern>
                <pattern id="continentDotsFine" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="1.1" fill="#dff4ff" opacity="0.9" />
                </pattern>
              </defs>

              {/* NORTH AMERICA (Canada & Alaska) */}
              <path
                d="M 60 70 Q 150 20 280 40 Q 320 70 290 120 Q 220 140 180 120 Q 120 160 70 140 Z"
                fill="url(#continentDotsDense)"
              />
              <path
                d="M 120 110 Q 220 70 300 90 Q 380 140 360 220 Q 320 280 240 280 Q 180 260 120 200 Z"
                fill="url(#continentDotsFine)"
              />

              {/* USA CENTRAL & EAST */}
              <path
                d="M 220 200 Q 340 190 400 240 Q 420 300 380 340 Q 280 360 220 310 Q 180 260 220 200 Z"
                fill="url(#continentDotsDense)"
              />

              {/* GREENLAND */}
              <path
                d="M 480 50 Q 560 30 580 80 Q 560 120 510 110 Q 470 90 480 50 Z"
                fill="url(#continentDotsDense)"
              />

              {/* MEXICO & CENTRAL AMERICA */}
              <path
                d="M 200 310 Q 260 330 280 380 Q 320 410 340 430 Q 310 440 280 410 Q 220 360 200 310 Z"
                fill="url(#continentDots)"
              />

              {/* SOUTH AMERICA (Brazil, Colombia, Peru, Chile, Argentina) */}
              <path
                d="M 330 380 Q 420 380 460 440 Q 520 490 510 560 Q 450 620 400 620 Q 350 560 330 480 Q 320 420 330 380 Z"
                fill="url(#continentDotsDense)"
              />
              <path
                d="M 440 460 Q 520 470 540 520 Q 520 580 470 580 Q 420 540 440 460 Z"
                fill="url(#continentDotsFine)"
              />

              {/* CARIBBEAN ARCHIPELAGO & DOMINICAN REPUBLIC */}
              <ellipse cx="640" cy="320" rx="95" ry="40" fill="url(#continentDotsFine)" />
              <ellipse cx="680" cy="336" rx="65" ry="32" fill="url(#continentDotsDense)" />
              <ellipse cx="740" cy="300" rx="45" ry="24" fill="url(#continentDotsDense)" />
              <ellipse cx="800" cy="270" rx="55" ry="28" fill="url(#continentDots)" />
              <ellipse cx="840" cy="240" rx="50" ry="25" fill="url(#continentDots)" />

              {/* EUROPE (UK, Spain, Germany, Poland, Central Europe) */}
              <path
                d="M 640 120 Q 720 90 820 100 Q 900 130 920 180 Q 860 230 780 230 Q 700 220 660 170 Z"
                fill="url(#continentDotsDense)"
              />
              <path
                d="M 720 120 Q 800 100 860 120 Q 890 160 840 190 Q 760 190 720 150 Z"
                fill="url(#continentDotsFine)"
              />

              {/* AFRICA (North Africa, West Africa, South Africa) */}
              <path
                d="M 680 240 Q 800 240 880 290 Q 920 380 900 480 Q 870 560 830 560 Q 780 500 740 420 Q 700 340 680 240 Z"
                fill="url(#continentDotsDense)"
              />
              <path
                d="M 820 440 Q 900 460 910 520 Q 890 580 840 570 Q 800 520 820 440 Z"
                fill="url(#continentDotsFine)"
              />

              {/* ASIA / INDIA (East fringe from reference) */}
              <path
                d="M 940 240 Q 990 230 1000 260 Q 990 320 950 320 Z"
                fill="url(#continentDotsDense)"
              />
            </svg>

            {/* LASER-ACCURATE ROUTE LINE CONNECTING USA (38, 44) TO RD (68, 56) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Segment 1: Solid White Line from USA (38, 44) to Airplane Center (53, 50) */}
              <line
                x1={startX}
                y1={startY}
                x2={midX}
                y2={midY}
                stroke="#FFFFFF"
                strokeWidth="0.45"
                strokeLinecap="round"
              />

              {/* Segment 2: Dashed White Line from Airplane Center (53, 50) to RD (68, 56) */}
              <line
                x1={midX}
                y1={midY}
                x2={endX}
                y2={endY}
                stroke="#FFFFFF"
                strokeWidth="0.45"
                strokeDasharray="1.2 1.2"
                strokeLinecap="round"
              />
            </svg>

            {/* AIRPLANE BADGE IN DARK CIRCLE (Exactly at Line Center 53%, 50%) */}
            <div
              style={{ left: `${midX}%`, top: `${midY}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#123d79] border-2 border-white/90 text-white flex items-center justify-center shadow-2xl ring-4 ring-black/20">
                <Plane size={22} className="rotate-45 text-white" strokeWidth={2.4} />
              </div>
            </div>

            {/* SCATTERED LOCATION NODES (Concentric rings with clean text labels) */}
            {locations.map((loc) => {
              const isMainRoute = loc.id === "usa" || loc.id === "rd";
              return (
                <div
                  key={loc.id}
                  style={{
                    left: `${loc.x}%`,
                    top: `${loc.y}%`,
                    ["--mobile-x" as string]: `${loc.mobileX}%`,
                    ["--mobile-y" as string]: `${loc.mobileY}%`,
                  }}
                  className="coverage-node absolute -translate-x-1/2 -translate-y-1/2 z-20 group flex flex-col items-center"
                >
                  {/* Concentric Node Pin (Exact match to reference style: white disc with dark core) */}
                  <div className="relative flex items-center justify-center">
                    {/* Outer ring */}
                    <div
                      className={`rounded-full flex items-center justify-center transition-transform ${
                        isMainRoute
                          ? "w-6 h-6 sm:w-7 sm:h-7 bg-white shadow-xl scale-110"
                          : "w-5 h-5 sm:w-6 sm:h-6 bg-white/95 shadow-md group-hover:scale-115"
                      }`}
                    >
                      {/* Dark inner center dot */}
                      <span
                        className={`rounded-full ${
                          isMainRoute
                            ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#184a8c]"
                            : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#184a8c]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Text Label Pill above or below */}
                  <span
                    className={`coverage-node-label text-[10px] sm:text-xs font-bold tracking-tight text-white whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                      loc.labelPos === "top"
                        ? "order-first mb-1.5"
                        : "mt-1.5"
                    }`}
                  >
                    {loc.name}
                  </span>
                </div>
              );
            })}

          </div>

          {/* BOTTOM BAR (Matches Reference: Big Display Text on Left, Pill Button on Right) */}
          <div className="relative z-20 pt-8 sm:pt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            
            {/* Left Side: Bold Big Heading */}
            <div className="max-w-xl">
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
                Envíos y Recogidas Directas a República Dominicana
              </h3>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/75">
                Recogemos sus cajas y tanques en todo Westchester County y Connecticut, con servicio puerta a puerta hacia la República Dominicana.
              </p>
            </div>

            {/* Right Side: Capsule Action Button (Dark Pill with White Circle Arrow) */}
            <div className="flex-shrink-0">
              <PillButton
                href={siteConfig.bookingEntryUrl}
                
                size="lg"
                variant="primary"
                className="text-base px-8 py-4 shadow-2xl !bg-[#0c2d61] hover:!bg-[#081d45] border border-white/20"
              >
                Reservar Recogida
              </PillButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
