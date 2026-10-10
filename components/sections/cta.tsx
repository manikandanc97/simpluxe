"use client";

import { CTA_COPY } from "@/lib/content/cta";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@animateicons/react/lucide/calendar-icon";
import { m as motion } from "motion/react";
import { CldImage } from "@/components/ui/cld-image";
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
  const contentRef = useRef<HTMLDivElement>(null);

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
      className="select-none overflow-hidden"
    >
      {/* ── Soft Ambient Glows & Dot Patterns Matching Simpluxe Theme ── */}


      {/* Decorative Dot Matrix on corners */}
      <div className="hidden lg:block pointer-events-none absolute top-12 left-8 w-28 h-28 hero-dots cta-dots opacity-40" />
      <div className="hidden lg:block pointer-events-none absolute bottom-12 right-10 w-28 h-28 hero-dots cta-dots opacity-35" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Original 3D illustration */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-center items-center relative">
            <div className="absolute w-4/5 h-4/5 rounded-full bg-gradient-to-tr from-primary/12 via-chart-2/10 to-transparent blur-2xl pointer-events-none" />

            <div className="cta-parallax relative w-64 h-64 xs:w-72 xs:h-72 sm:w-96 sm:h-96 lg:w-96 lg:h-96">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <CldImage
                  src="simpluxe/cta/simplemind"
                  alt={CTA_COPY.illustrationAlt}
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 400px"
                  className="object-contain drop-shadow-elevated"
                />
              </motion.div>

              <div className="absolute right-1/50 bottom-4/25 xs:right-1/25 xs:bottom-1/5 sm:right-2/25 sm:bottom-11/50 z-20 inline-flex items-center gap-1.5 xs:gap-2 px-4.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card/95 backdrop-blur-md shadow-card border border-border hover:scale-105 transition-transform duration-300">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-primary font-extrabold text-xs tracking-wider sm:tracking-widest uppercase font-satoshi whitespace-nowrap">
                  {CTA_CONTENT.floatingPillText}
                </span>
              </div>
            </div>
          </div>
          
          <div
            ref={contentRef}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left font-satoshi gap-6 sm:gap-8 lg:gap-10 w-full"
          >
            <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-6 w-full">
              {/* Top Info Header */}
              <SectionHeader
                eyebrow={CTA_CONTENT.eyebrow}
                title={CTA_CONTENT.title}
                highlightedText={CTA_CONTENT.highlightedText}
                description={CTA_CONTENT.description}
                className="lg:items-start lg:text-left mx-0"
                maxWidth="max-w-full"
              />

              {/* 3 Pillars as sleek pills */}
              <div className="cta-content flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2">
              {CTA_CONTENT.pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    data-slot="card"
                    className="group inline-flex items-center gap-1.5 sm:gap-2 px-4.5 py-1.5 rounded-full bg-card border border-border shadow-2xs text-xs sm:text-sm font-semibold text-foreground cursor-default"
                  >
                    <AnimatedIcon icon={Icon} size={14} className="text-primary shrink-0" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
              </div>
            </div>

            <div className="cta-content flex flex-col items-center lg:items-start gap-4.5 sm:gap-4 w-full sm:w-auto">
              {/* Action Buttons & Fast Response Note */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  onClick={handleStart}
                  className="w-full sm:w-auto"
                >
                  <span>{CTA_CONTENT.primaryButtonText}</span>
                  <AnimatedArrowRight size={15} className="text-white" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleSchedule}
                  className="w-full sm:w-auto"
                >
                  <AnimatedIcon icon={CalendarIcon} size={15} className="text-muted-foreground" />
                  <span>{CTA_CONTENT.secondaryButtonText}</span>
                </Button>
              </div>

              {/* Subtle Trust / Response Note */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-xs font-medium text-muted-foreground text-center lg:text-left">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>{CTA_CONTENT.responseNote}</span>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}
