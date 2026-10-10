"use client";

import { SERVICES_TECH_STACK_COPY } from "@/lib/content/services";

import { TECH_DETAILS, CATEGORY_TITLES } from "@/lib/content/tech-stack";

import { CldImage } from "@/components/ui/cld-image";
import { type ServiceData } from "@/lib/content/services";
import { m as motion, AnimatePresence } from "motion/react";

interface ServicesTechStackProps {
  service: ServiceData;
}

const ColorMap: Record<string, { text: string; bg: string; hoverBorder: string; hoverText: string }> = {
  websites: { text: "text-primary", bg: "bg-primary", hoverBorder: "hover:border-primary/30", hoverText: "group-hover:text-primary" },
  "web-apps": { text: "text-chart-2", bg: "bg-chart-2", hoverBorder: "hover:border-chart-2/30", hoverText: "group-hover:text-chart-2" },
  ecommerce: { text: "text-chart-3", bg: "bg-chart-3", hoverBorder: "hover:border-chart-3/30", hoverText: "group-hover:text-chart-3" },
  "mobile-apps": { text: "text-primary", bg: "bg-primary", hoverBorder: "hover:border-primary/30", hoverText: "group-hover:text-primary" },
  saas: { text: "text-chart-2", bg: "bg-chart-2", hoverBorder: "hover:border-chart-2/30", hoverText: "group-hover:text-chart-2" },
  branding: { text: "text-chart-4", bg: "bg-chart-4", hoverBorder: "hover:border-chart-4/30", hoverText: "group-hover:text-chart-4" },
  "ui-ux": { text: "text-chart-2", bg: "bg-chart-2", hoverBorder: "hover:border-chart-2/30", hoverText: "group-hover:text-chart-2" },
  automation: { text: "text-chart-5", bg: "bg-chart-5", hoverBorder: "hover:border-chart-5/30", hoverText: "group-hover:text-chart-5" },
  "custom-software": { text: "text-chart-1", bg: "bg-chart-1", hoverBorder: "hover:border-chart-1/30", hoverText: "group-hover:text-chart-1" },
};

export function ServicesTechStack({ service }: ServicesTechStackProps) {
  const colors = ColorMap[service.id] || ColorMap.websites;

  // Group technologies by category
  const categorizedTech = service.techStack.reduce((acc, slug) => {
    const tech = TECH_DETAILS[slug];
    if (tech) {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push({ slug, ...tech });
    }
    return acc;
  }, {} as Record<string, (typeof TECH_DETAILS[string] & { slug: string })[]>);

  // Define order of categories to display
  const categoryOrder = ["core", "backend", "database", "auth", "hosting", "domain", "deployment", "infrastructure", "ai", "design"];

  return (
    <div className="w-full relative z-20">
      {/* ── Header ── */}
      <div className="flex flex-col gap-4 items-start text-left mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-border shadow-xs">
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
          <span className="type-label font-extrabold tracking-wide text-foreground/90 uppercase">
            {SERVICES_TECH_STACK_COPY.techStack}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-satoshi">
            {SERVICES_TECH_STACK_COPY.recommendedTechStacks}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground font-normal">
            {SERVICES_TECH_STACK_COPY.theRightToolsForTheRight}</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {categoryOrder.map((category) => {
            const techs = categorizedTech[category];
            if (!techs || techs.length === 0) return null;

            return (
              <div key={category} className="flex flex-col gap-4 p-5 sm:p-6 rounded-2xl bg-white/60 dark:bg-black/20 border border-black/[0.04] dark:border-white/[0.04] backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} shadow-sm transition-colors duration-300`} />
                  {CATEGORY_TITLES[category]}
                </h4>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
                  {techs.map((tech) => (
                    <div
                      key={tech.slug}
                      className={`group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-black border border-surface-elevated ${colors.hoverBorder} shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
                    >
                      <div className={`relative w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center shrink-0 transition-opacity`}>
                        <CldImage
                          src={`simpluxe/tech/${tech.imageSlug || tech.slug}`}
                          alt={tech.name}
                          width={18}
                          height={18}
                          className={`w-full h-full object-contain transition-all duration-300 ${tech.invertDark ? "dark:invert" : ""}`}
                        />
                      </div>
                      <span className={`text-2xs sm:text-xs font-bold text-foreground/90 ${colors.hoverText} transition-colors duration-300`}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
