"use client";

import { useState, useMemo, useEffect } from "react";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesTabsBar } from "@/components/services/services-tabs-bar";
import { ServicesActiveShowcase } from "@/components/services/services-active-showcase";
import { ServicesWhatWeBuild } from "@/components/services/services-what-we-build";
import { ServicesDeliverablesAudience } from "@/components/services/services-deliverables-audience";
import { ServicesTechStack } from "@/components/services/services-tech-stack";
import { SERVICES_LIST } from "@/lib/content/services";
import { Container } from "@/components/ui/container";

export function ServicesView() {
  // Default to "websites" as requested by user
  const [activeServiceId, setActiveServiceId] = useState<string>("websites");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && SERVICES_LIST.some((s) => s.id === hash)) {
        setActiveServiceId(hash);
        
        // Scroll to the tabs area smoothly
        setTimeout(() => {
          const el = document.getElementById("services-tabs-container");
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeService = useMemo(() => {
    return (
      SERVICES_LIST.find((s) => s.id === activeServiceId) ||
      SERVICES_LIST[0]
    );
  }, [activeServiceId]);

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      {/* ── Background Atmospheric Elements ── */}
      <AmbientBackground screen="services" />
      <div className="absolute inset-0 bg-dots-soft  opacity-35 pointer-events-none" />

      {/* ── 1. Hero Section (Title, CTAs, Highlights & Cloudinary 3D Section Banner) ── */}
      <ServicesHero />

      {/* ── Main Structured Showcase Area ── */}
      <Container className="relative z-20 pb-16 md:pb-20 lg:pb-24 flex flex-col gap-16 sm:gap-20">
        {/* ── 2. The 9 Service Category Tabs Bar ── */}
        <ServicesTabsBar
          activeId={activeServiceId}
          onSelect={setActiveServiceId}
        />

        {/* ── 3. Active Service Showcase (Metrics, Description & Interactive Mockup) ── */}
        <ServicesActiveShowcase service={activeService} />

        {/* ── 4. What We Build (4 Capabilities with Prev/Next Controls) ── */}
        <ServicesWhatWeBuild service={activeService} />

        {/* ── 5. Everything Included & Perfect For ── */}
        <ServicesDeliverablesAudience service={activeService} />

        {/* ── 6. Technology by Service (Cloudinary Tech Stack Icons) ── */}
        <ServicesTechStack service={activeService} />
      </Container>
    </div>
  );
}
