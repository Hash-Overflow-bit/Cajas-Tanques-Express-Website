import React from "react";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StepProcess } from "@/components/home/StepProcess";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CoverageSection } from "@/components/home/CoverageSection";
import { HomeFAQ } from "@/components/home/HomeFAQ";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
      <StepProcess />
      <WhyChooseUs />
      <CoverageSection />
      <HomeFAQ />
    </div>
  );
}

