"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#344c68]"
      style={{ aspectRatio: "1024 / 572" }}
      aria-labelledby="hero-title"
    >
      <h1 id="hero-title" className="sr-only">
        Cajas y Tanques Express — servicio puerta a puerta hacia República Dominicana
      </h1>

      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative h-full w-full"
        >
        <Image
          src="/cajas-tanques-express-hero.jpg"
          alt="Cajas y Tanques Express — servicio puerta a puerta hacia República Dominicana"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
        </motion.div>
      </div>
    </section>
  );
};
