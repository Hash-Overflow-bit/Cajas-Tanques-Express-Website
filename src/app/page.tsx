import React from "react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_FAQS } from "@/content/homeFaqs";
import { faqSchema } from "@/lib/structuredData";
import { Hero } from "@/components/home/Hero";
import { BusinessStatsSection } from "@/components/home/BusinessStatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StepProcess } from "@/components/home/StepProcess";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CoverageSection } from "@/components/home/CoverageSection";
import { HomeFAQ } from "@/components/home/HomeFAQ";

export const metadata: Metadata = {
  title: { absolute: "Envío de Cajas y Tanques a República Dominicana | Yonkers, Westchester y CT" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <BusinessStatsSection />
      <ServicesSection />
      <StepProcess />
      <WhyChooseUs />
      <CoverageSection />
      <HomeFAQ />
    </div>
  );
}

