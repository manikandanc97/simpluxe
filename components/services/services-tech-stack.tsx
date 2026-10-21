"use client";

import { useMemo } from "react";
import { m as motion, AnimatePresence } from "motion/react";
import { SERVICES_TECH_STACK_COPY, type ServiceViewData } from "@/lib/data/services";
import { TECH_DETAILS, TECH_STACK, type ServiceTechSlug, type ServiceTechDetails } from "@/lib/data/tech-stack";
import { CloudinaryTechLogo } from "@/components/ui/cloudinary-tech-logo";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeUpWrapper } from "@/components/ui/fade-up-wrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ServicesTechStackProps {
  service: ServiceViewData;
}

interface ServiceToolItem {
  name: string;
  slug: string;
  accentColor: string;
}

export function ServicesTechStack({ service }: ServicesTechStackProps) {
  const stackItems = useMemo(() => {
    return service.techStack.map(({ slug }): ServiceToolItem => {
      const fromStack = TECH_STACK.find((t) => t.slug === slug);
      const fromDetails: ServiceTechDetails | undefined = TECH_DETAILS[slug as ServiceTechSlug];

      const name = fromStack?.name || fromDetails?.name || slug;
      const accentColor = fromStack?.accentColor || (slug === "hostingervps" ? "#673DE6" : "#2563EB");

      return {
        name,
        slug,
        accentColor,
      };
    });
  }, [service.techStack]);

  const gridClass = useMemo(() => {
    const len = stackItems.length;
    if (len <= 3) return "grid-cols-1 sm:grid-cols-3 max-w-3xl";
    if (len === 4) return "grid-cols-2 sm:grid-cols-2 md:grid-cols-4 max-w-5xl";
    if (len === 5) return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 max-w-6xl";
    return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 max-w-7xl";
  }, [stackItems.length]);

  return (
    <div className="w-full relative z-20 flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
      {/* ── Section Header ── */}
      <FadeUpWrapper className="relative text-center w-full flex flex-col items-center">
        <SectionHeader
          eyebrow={SERVICES_TECH_STACK_COPY.techStack}
          centered
          title={SERVICES_TECH_STACK_COPY.title}
          highlightedText={SERVICES_TECH_STACK_COPY.highlightedText}
          description={service.techStackSummary}
        />
      </FadeUpWrapper>

      {/* ── Cards Grid ── */}
      <div
        role="region"
        aria-label={SERVICES_TECH_STACK_COPY.recommendedTechStacks}
        className="relative w-full flex justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={service.id}
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            exit="hidden"
            className={cn("grid gap-4 sm:gap-5 w-full", gridClass)}
          >
            {stackItems.map((item) => (
              <motion.div
                key={item.slug}
                layout
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                style={{
                  "--tech-accent": item.accentColor,
                  "--tech-glow": `${item.accentColor}40`,
                  "--tech-glow-subtle": `${item.accentColor}20`,
                } as React.CSSProperties}
                className="relative flex flex-col items-center justify-center text-center gap-3 p-4 rounded-2xl border border-slate-200/80 bg-slate-50 shadow-xs overflow-hidden sm:p-5 tech-stack-card group"
              >
                <CloudinaryTechLogo slug={item.slug} className="sm:size-15" />

                {/* Brand-Colored Heading */}
                <h3
                  className="text-xs font-medium leading-tight transition-all group-hover:brightness-110 sm:text-sm"
                  style={{ color: item.accentColor }}
                >
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom Divider & Project Fit Note ── */}
      <div className="flex items-center justify-center gap-4 max-w-4xl w-full px-2 ts-footer">
        <div className="hidden h-px bg-slate-200/80 flex-1 sm:block" />
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center leading-relaxed">
          {SERVICES_TECH_STACK_COPY.projectFitNote}
        </p>
        <div className="hidden h-px bg-slate-200/80 flex-1 sm:block" />
      </div>
    </div>
  );
}

