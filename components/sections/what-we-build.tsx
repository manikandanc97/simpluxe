"use client";

import { useLead } from "@/components/leads/lead-provider";
import { useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { SERVICES_LIST, SERVICES_SECTION_CONTENT } from "@/lib/content/services";
import { WhatWeBuildCard } from "./what-we-build/what-we-build-card";
import { WhatWeBuildNav } from "./what-we-build/what-we-build-nav";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { m as motion } from "motion/react";
import { fadeUp, scaleIn, viewportReveal } from "@/lib/motion";

export function WhatWeBuild() {
  const { openLead } = useLead();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayServices = SERVICES_LIST.slice(0, 8);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % displayServices.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + displayServices.length) % displayServices.length);
  };

  const handleOpenLead = (serviceName: string) => {
    openLead({
      source: "what-we-build",
      description: `Interested in: ${serviceName}.`,
    });
  };

  return (
    <Section
      ref={sectionRef}
      id="capabilities"
      className="overflow-hidden"
    >
      <Container className="relative z-10 flex flex-col gap-6 sm:gap-8">
        <motion.div variants={fadeUp} {...viewportReveal}>
          <SectionHeader
          eyebrow={SERVICES_SECTION_CONTENT.eyebrow}
          centered
          title={SERVICES_SECTION_CONTENT.title}
          highlightedText={SERVICES_SECTION_CONTENT.highlightedText}
          description={SERVICES_SECTION_CONTENT.description}
        />
        </motion.div>

        <motion.div variants={scaleIn} {...viewportReveal} ref={parallaxWrapperRef} className="w-full">
          <div ref={containerRef} className="wwb-outer-card relative w-full py-2 perspective-[1400px] overflow-hidden sm:overflow-visible">
            <div className="flex items-center justify-center min-h-[620px] xs:min-h-[580px] sm:min-h-[520px] md:min-h-[460px] lg:min-h-[420px] xl:min-h-[420px] relative w-full">
              {displayServices.map((service, index) => (
                <WhatWeBuildCard
                  key={service.id}
                  service={service}
                  index={index}
                  activeIndex={activeIndex}
                  totalCount={displayServices.length}
                  onSelect={() => setActiveIndex(index)}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  onOpenLead={handleOpenLead}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <WhatWeBuildNav
          services={displayServices}
          activeIndex={activeIndex}
          onSelectIndex={setActiveIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </Container>
    </Section>
  );
}
