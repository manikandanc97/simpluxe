"use client";

import { CTA_COPY } from "@/lib/content/cta";
import { useLead } from "@/components/leads/lead-provider";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@animateicons/react/lucide/calendar-icon";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { CTA_CONTENT } from "@/lib/content/cta";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

interface CTAProps {
  onStartProject?: () => void;
}

export function CTA({ onStartProject }: CTAProps) {
  const { openLead } = useLead();
  const ref = useRef<HTMLElement>(null);

  const handleStart = () => {
    if (onStartProject) onStartProject();
    else openLead({ source: "cta" });
  };

  const handleSchedule = () => {
    openLead({ source: "cta-schedule", description: CTA_COPY.interestedInSchedulingADiscoveryCall });
  };

  return (
    <Section
      id="cta"
      ref={ref}
      className="select-none overflow-hidden bg-primary text-primary-foreground"
    >
      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Col 1 (Left): Value proposition */}
          <div className="lg:col-span-7 flex flex-col items-start font-satoshi gap-6 sm:gap-8 w-full text-left">
            <SectionHeader
              eyebrow={CTA_CONTENT.eyebrow}
              title={CTA_CONTENT.title}
              highlightedText={CTA_CONTENT.highlightedText}
              description={CTA_CONTENT.description}
              inverted
              maxWidth="max-w-xl"
              className="items-start text-left"
            />
          </div>

          {/* Col 2 (Right): Action Buttons */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center w-full gap-4">
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-3 w-full sm:w-auto lg:w-72">
              <Button
                size="lg"
                onClick={handleStart}
                className="group w-full bg-white text-primary hover:bg-white/90 shadow-sm justify-center"
              >
                <span>{CTA_CONTENT.primaryButtonText}</span>
                <AnimatedIcon
                  icon={ArrowUpRightIcon}
                  size={16}
                  className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleSchedule}
                className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/50 shadow-sm justify-center"
              >
                <AnimatedIcon icon={CalendarIcon} size={15} className="text-sky-200" />
                <span>{CTA_CONTENT.secondaryButtonText}</span>
              </Button>
            </div>

            {/* Subtle Trust / Response Note */}
            <div className="flex items-center gap-2 text-xs font-medium text-sky-100/90">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>{CTA_CONTENT.responseNote}</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
