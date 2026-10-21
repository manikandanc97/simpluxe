"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { m as motion, useReducedMotion } from "motion/react";
import { ServicesTabsBar } from "@/components/services/services-tabs-bar";
import { ServicesActiveShowcase } from "@/components/services/services-active-showcase";
import { type ServiceViewData } from "@/lib/content/services";
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

export function ServicesExplorer({ services }: { services: ServiceViewData[] }) {
  const [activeServiceId, setActiveServiceId] = useState("websites");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout> | undefined;
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && services.some((service) => service.id === hash)) {
        setActiveServiceId(hash);
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          const element = document.getElementById("services-tabs-container");
          if (!element) return;

          const top = element.getBoundingClientRect().top + window.scrollY - 100;
          const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth";
          window.scrollTo({ top, behavior });
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [services]);

  const activeService = useMemo(
    () => services.find((service) => service.id === activeServiceId) ?? services[0],
    [activeServiceId, services]
  );

  if (!activeService) return null;

  return (
    <>
      <Container
        id="services-tabs-container"
        className="flex flex-col gap-12 py-12 md:gap-16 md:py-16"
      >
        <ServicesTabsBar activeId={activeServiceId} onSelect={setActiveServiceId} />

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
          <ServicesActiveShowcase service={activeService} />
        </motion.div>
      </Container>

      <Section
        id="capabilities"
        className="relative z-10 border-y border-primary/25 bg-secondary"
      >
        <Container>
          <ServicesWhatWeBuild service={activeService} />
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <ServicesDeliverablesAudience service={activeService} />
        </Container>
      </Section>

      <Section
        id="tech-stack"
        className="relative z-10 overflow-hidden bg-white border-t border-border select-none dark:bg-card/40 font-satoshi"
      >
        <Container className="relative z-10">
          <ServicesTechStack service={activeService} />
        </Container>
      </Section>
    </>
  );
}
