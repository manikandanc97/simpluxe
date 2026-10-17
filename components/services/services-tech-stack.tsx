"use client";

import { useMemo } from "react";
import { m as motion, AnimatePresence } from "motion/react";
import { SERVICES_TECH_STACK_COPY, type ServiceData } from "@/lib/content/services";
import { TECH_DETAILS, TECH_STACK, type ServiceTechSlug, type ServiceTechDetails } from "@/lib/content/tech-stack";
import { CldImage } from "@/components/ui/cld-image";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeUpWrapper } from "@/components/ui/fade-up-wrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ServicesTechStackProps {
  service: ServiceData;
}

interface ServiceToolItem {
  name: string;
  slug: string;
  imageSlug: string;
  accentColor: string;
  badge: string;
  purpose: string;
  invertInDark: boolean;
}

export function ServicesTechStack({ service }: ServicesTechStackProps) {
  const stackItems = useMemo(() => {
    return service.techStack.map(({ slug, purpose }): ServiceToolItem => {
      const fromStack = TECH_STACK.find((t) => t.slug === slug);
      const fromDetails: ServiceTechDetails | undefined = TECH_DETAILS[slug as ServiceTechSlug];

      const name = fromStack?.name || fromDetails?.name || slug;
      const imageSlug = fromDetails?.imageSlug || fromStack?.slug || slug;
      const accentColor = fromStack?.accentColor || (slug === "hostingervps" ? "#673DE6" : "#2563EB");
      const badge = fromStack?.badge || (slug === "hostingervps" ? "VPS Hosting" : "Technology");
      const invertInDark = Boolean(fromStack?.invertInDark || fromDetails?.invertDark);

      return {
        name,
        slug,
        imageSlug,
        accentColor,
        badge,
        purpose,
        invertInDark,
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
          title="Recommended"
          highlightedText="tools"
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
                data-invert={item.invertInDark ? "true" : undefined}
                style={{
                  "--tech-accent": item.accentColor,
                  "--tech-glow": `${item.accentColor}40`,
                  "--tech-glow-subtle": `${item.accentColor}20`,
                } as React.CSSProperties}
                className="tech-stack-card group relative flex flex-col items-center justify-between text-center gap-4 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-border/70 bg-slate-50 dark:bg-card/70 shadow-xs overflow-hidden h-full"
              >
                {/* Official Brand Logo Squircle Container */}
                <div className="relative w-15 h-15 rounded-2xl bg-white dark:bg-muted/40 border border-slate-200/70 dark:border-border/60 flex items-center justify-center p-3.5 sm:p-4 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <CldImage
                    src={`simpluxe/tech/${item.imageSlug}`}
                    alt={`${item.name} logo`}
                    width={38}
                    height={38}
                    className={cn(
                      "w-full h-full object-contain transition-transform duration-300 group-hover:scale-110",
                      item.invertInDark && "dark:invert dark:brightness-125"
                    )}
                  />
                </div>

                <div className="flex flex-col items-center gap-1.5 flex-1 justify-center w-full">
                  {/* Brand-Colored Heading */}
                  <h3
                    className={cn(
                      "type-h3 !text-base font-bold transition-all group-hover:brightness-110",
                      item.invertInDark && "dark:!text-white"
                    )}
                    style={{ color: item.accentColor }}
                  >
                    {item.name}
                  </h3>

                  {/* Purpose Description */}
                  <p className="text-xs leading-5 text-muted-foreground text-center line-clamp-2 min-h-10 flex items-center justify-center w-full px-1">
                    {item.purpose}
                  </p>
                </div>

                <div className="flex items-center justify-center w-full pt-1">
                  <span
                    className={cn(
                      "text-xs font-semibold whitespace-nowrap text-center tracking-wide",
                      item.invertInDark && "dark:!text-white"
                    )}
                    style={{ color: item.accentColor }}
                  >
                    {item.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom Divider & Project Fit Note ── */}
      <div className="ts-footer flex items-center justify-center gap-4 max-w-4xl w-full px-2">
        <div className="hidden sm:block h-px bg-slate-200/80 dark:bg-border/60 flex-1" />
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-muted-foreground/60 text-center leading-relaxed">
          {SERVICES_TECH_STACK_COPY.projectFitNote}
        </p>
        <div className="hidden sm:block h-px bg-slate-200/80 dark:bg-border/60 flex-1" />
      </div>
    </div>
  );
}

