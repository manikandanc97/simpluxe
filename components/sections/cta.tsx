"use client";

import { CTA_COPY } from "@/lib/data/cta";
import { useLead } from "@/components/leads/lead-provider";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@animateicons/react/lucide/calendar-icon";
import { SectionHeader } from "@/components/ui/section-header";
import { CTA_CONTENT } from "@/lib/data/cta";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { useRef } from "react";
import { m as motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { staggerRevealProps, fadeUpItem } from "@/lib/motion";

interface CTAProps {
  onStartProject?: () => void;
}

export function CTA({ onStartProject }: CTAProps) {
  const { openLead } = useLead();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const rawGlowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.7]);
  const scale = useSpring(rawScale, { stiffness: 100, damping: 24, mass: 0.4 });
  const glowOpacity = useSpring(rawGlowOpacity, { stiffness: 100, damping: 24, mass: 0.4 });

  const handleStart = () => {
    if (onStartProject) onStartProject();
    else openLead({ source: "cta" });
  };

  const handleSchedule = () => {
    openLead({ source: "cta-schedule", description: CTA_COPY.interestedInSchedulingADiscoveryCall });
  };

  return (
    <Section
      ref={sectionRef}
      id="cta"
      className="relative select-none overflow-hidden bg-primary text-primary-foreground"
    >
      <motion.div
        aria-hidden="true"
        style={prefersReduced ? undefined : { opacity: glowOpacity }}
        className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-cyan-300/20 blur-3xl"
      />
      <Container size="default" className="relative z-10">
        <motion.div
          style={prefersReduced ? undefined : { scale }}
        >
          <motion.div
            {...staggerRevealProps(0.14)}
            className="grid grid-cols-1 gap-10 items-center lg:grid-cols-12 lg:gap-12 xl:gap-16"
          >
          {/* Col 1 (Left): Value proposition */}
          <motion.div variants={fadeUpItem} className="lg:col-span-7 flex flex-col items-start gap-6 w-full text-left sm:gap-8 font-satoshi">
            <SectionHeader
              eyebrow={CTA_CONTENT.eyebrow}
              title={CTA_CONTENT.title}
              highlightedText={CTA_CONTENT.highlightedText}
              description={CTA_CONTENT.description}
              inverted
              maxWidth="max-w-xl"
              className="items-start text-left"
            />
          </motion.div>

          {/* Col 2 (Right): Action Buttons */}
          <motion.div variants={fadeUpItem} className="lg:col-span-5 lg:items-end flex flex-col items-start justify-center w-full gap-4">
            <div className="flex flex-col items-stretch gap-3 w-full sm:flex-row sm:items-center sm:w-auto lg:flex-col lg:items-stretch lg:w-72">
              <Button
                size="lg"
                onClick={handleStart}
                className="w-full bg-white text-primary shadow-sm justify-center hover:bg-white/90 group"
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
                className="w-full border-white/30 bg-transparent text-white shadow-sm justify-center hover:bg-white/10 hover:text-white hover:border-white/50"
              >
                <AnimatedIcon icon={CalendarIcon} size={15} className="text-sky-200" />
                <span>{CTA_CONTENT.secondaryButtonText}</span>
              </Button>
            </div>

            {/* Subtle Trust / Response Note */}
            <div className="flex items-center gap-2 text-xs font-medium text-sky-100/90">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>{CTA_CONTENT.responseNote}</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      </Container>
    </Section>
  );
}
