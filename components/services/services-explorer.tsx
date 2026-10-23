"use client";

import dynamic from "next/dynamic";
import { ServicesActiveShowcase } from "@/components/services/services-active-showcase";
import { type ServiceViewData } from "@/lib/data/services";
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

interface ServicesExplorerProps {
  service: ServiceViewData;
  showDetailLink?: boolean;
}

export function ServicesExplorer({
  service,
  showDetailLink = false,
}: ServicesExplorerProps) {
  return (
    <>
      <Container className="py-12 md:py-16">
        <ServicesActiveShowcase service={service} showDetailLink={showDetailLink} />
      </Container>

      <Section
        id="capabilities"
        className="relative z-10 border-y border-primary/25 bg-secondary"
      >
        <Container>
          <ServicesWhatWeBuild service={service} />
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <ServicesDeliverablesAudience service={service} />
        </Container>
      </Section>

      <Section
        id="tech-stack"
        className="relative z-10 overflow-hidden border-t border-border bg-white font-satoshi select-none"
      >
        <Container className="relative z-10">
          <ServicesTechStack service={service} />
        </Container>
      </Section>
    </>
  );
}
