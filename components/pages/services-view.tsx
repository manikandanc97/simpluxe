"use client";

import { useState, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import { m as motion, useReducedMotion } from "motion/react";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesTabsBar } from "@/components/services/services-tabs-bar";
import { ServicesActiveShowcase } from "@/components/services/services-active-showcase";
import { SERVICES_LIST } from "@/lib/content/services";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProcessSkeleton, TechStackSkeleton } from "@/components/ui/skeleton";

const ServicesWhatWeBuild = dynamic(
  () =>
    import("@/components/services/services-what-we-build").then(
      (mod) => mod.ServicesWhatWeBuild
    ),
  { loading: () => <ProcessSkeleton /> }
);

const ServicesDeliverablesAudience = dynamic(
  () =>
    import("@/components/services/services-deliverables-audience").then(
      (mod) => mod.ServicesDeliverablesAudience
    ),
  { loading: () => <ProcessSkeleton /> }
);

const ServicesTechStack = dynamic(
  () =>
    import("@/components/services/services-tech-stack").then(
      (mod) => mod.ServicesTechStack
    ),
  { loading: () => <TechStackSkeleton /> }
);

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
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* ── Fixed navbar height spacer so full-width banner starts cleanly below the header ── */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />

      {/* ── 1. Full-Width Hero Section ── */}
      <ServicesHero />

      {/* ── 2. Category Tabs Bar & Active Showcase Area ── */}
      <Container
        id="services-tabs-container"
        className="pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 flex flex-col gap-12 sm:gap-16"
      >
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
          className="w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {/* ── Active Service Showcase (Metrics, Description & Interactive Mockup) ── */}
          <ServicesActiveShowcase service={activeService} />
        </motion.div>
      </Container>

      {/* ── 3. What We Build / Capabilities (Consistent Light Blue Theme Section) ── */}
      <Section
        id="capabilities"
        className="relative z-10 border-y border-primary/25 bg-secondary"
      >
        <Container>
          <ServicesWhatWeBuild service={activeService} />
        </Container>
      </Section>

      {/* ── 4. Deliverables & Target Audience ── */}
      <Section className="bg-background">
        <Container>
          <ServicesDeliverablesAudience service={activeService} />
        </Container>
      </Section>

      {/* ── 5. Recommended Tools Tech Stack ── */}
      <Section
        id="tech-stack"
        className="relative z-10 overflow-hidden bg-white dark:bg-card/40 font-satoshi border-t border-border select-none"
      >
        <Container className="relative z-10">
          <ServicesTechStack service={activeService} />
        </Container>
      </Section>
    </div>
  );
}
