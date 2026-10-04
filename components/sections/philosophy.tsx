"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";
import { FlowDiagram } from "./philosophy/flow-diagram";
import { PhilosophyProcessSteps } from "./philosophy/philosophy-process-steps";
import { PhilosophyOutcomes } from "./philosophy/philosophy-outcomes";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PHILOSOPHY_SECTION_CONTENT } from "@/lib/content/philosophy";

export function WhySimpluxe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <Section
      id="why-simpluxe"
      className="overflow-hidden font-satoshi"
    >
      <Container ref={containerRef} className="relative z-10 flex flex-col gap-6 sm:gap-10 lg:gap-12">
        <SectionHeader
          eyebrow={PHILOSOPHY_SECTION_CONTENT.eyebrow}
          centered
          title={PHILOSOPHY_SECTION_CONTENT.title}
          highlightedText={PHILOSOPHY_SECTION_CONTENT.highlightedText}
          description={PHILOSOPHY_SECTION_CONTENT.description}
        />

        {/* ── Main 3-Column Layout ── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_240px] xl:grid-cols-[250px_minmax(0,1fr)_250px] gap-6 xl:gap-8 items-center">
          {/* 1. LEFT COLUMN: PROCESS / 04 */}
          <PhilosophyProcessSteps inView={inView} />

          {/* 2. CENTER PANEL: SIGNAL / 01 & INTERACTIVE FLOW DIAGRAM */}
          <FlowDiagram inView={inView} />

          {/* 3. RIGHT COLUMN: REAL OUTCOMES */}
          <PhilosophyOutcomes inView={inView} />
        </div>
      </Container>
    </Section>
  );
}
