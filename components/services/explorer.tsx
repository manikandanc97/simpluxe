"use client";

import dynamic from "next/dynamic";
import { ActiveShowcase } from "@/components/services/active-showcase";
import { type ServiceViewData } from "@/lib/data/services";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProcessSkeleton, TechStackSkeleton } from "@/components/ui/skeleton";

const WhatWeBuild = dynamic(
  () =>
    import("@/components/services/what-we-build").then(
      (mod) => mod.WhatWeBuild
    ),
  { loading: () => <ProcessSkeleton /> }
);

const DeliverablesAudience = dynamic(
  () =>
    import("@/components/services/deliverables-audience").then(
      (mod) => mod.DeliverablesAudience
    ),
  { loading: () => <ProcessSkeleton /> }
);

const TechStack = dynamic(
  () =>
    import("@/components/services/tech-stack").then(
      (mod) => mod.TechStack
    ),
  { loading: () => <TechStackSkeleton /> }
);

interface ExplorerProps {
  service: ServiceViewData;
  showDetailLink?: boolean;
}

export function Explorer({
  service,
  showDetailLink = false,
}: ExplorerProps) {
  return (
    <>
      <Container className="py-12 md:py-16">
        <ActiveShowcase service={service} showDetailLink={showDetailLink} />
      </Container>

      <Section
        id="capabilities"
        className="relative z-10 border-y border-primary/25 bg-secondary"
      >
        <Container>
          <WhatWeBuild service={service} />
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <DeliverablesAudience service={service} />
        </Container>
      </Section>

      <Section
        id="tech-stack"
        className="relative z-10 overflow-hidden border-t border-border bg-white font-satoshi select-none"
      >
        <Container className="relative z-10">
          <TechStack service={service} />
        </Container>
      </Section>
    </>
  );
}
