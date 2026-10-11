"use client";

import { useState, useMemo, useEffect } from "react";
import { m as motion, useReducedMotion } from "motion/react";
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
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout> | undefined;
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && SERVICES_LIST.some((s) => s.id === hash)) {
        setActiveServiceId(hash);

        // Scroll to the tabs area smoothly
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          const el = document.getElementById("services-tabs-container");
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener("hashchange", handleHashChange);
    };
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
        {/* ── 2. Service Category Tabs Bar ── */}
        <ServicesTabsBar
          activeId={activeServiceId}
          onSelect={setActiveServiceId}
        />

        <motion.div
          key={activeService.id}
          id="services-panel"
          role="tabpanel"
          aria-labelledby={`service-tab-${activeService.id}`}
          tabIndex={0}
          initial={reducedMotion ? false : { opacity: 0.65, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.24, ease: "easeOut" }}
          className="flex flex-col gap-16 sm:gap-20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {/* ── 3. Active Service Showcase (Metrics, Description & Interactive Mockup) ── */}
          <ServicesActiveShowcase service={activeService} />

          {/* ── 4. What We Build (4 Capabilities with Prev/Next Controls) ── */}
          <ServicesWhatWeBuild service={activeService} />

          {/* ── 5. Everything Included & Perfect For ── */}
          <ServicesDeliverablesAudience service={activeService} />

          {/* ── 6. Technology by Service (Cloudinary Tech Stack Icons) ── */}
          <ServicesTechStack service={activeService} />
        </motion.div>
      </Container>
    </div>
  );
}
