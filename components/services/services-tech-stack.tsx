"use client";

import { SERVICES_TECH_STACK_COPY } from "@/lib/content/services";

import { TECH_DETAILS, type ServiceTechDetails } from "@/lib/content/tech-stack";

import { CldImage } from "@/components/ui/cld-image";
import { type ServiceData } from "@/lib/content/services";

interface ServicesTechStackProps {
  service: ServiceData;
}

const ColorMap: Record<string, { text: string; bg: string }> = {
  websites: { text: "text-primary", bg: "bg-primary" },
  "web-apps": { text: "text-chart-2", bg: "bg-chart-2" },
  ecommerce: { text: "text-chart-3", bg: "bg-chart-3" },
  "mobile-apps": { text: "text-primary", bg: "bg-primary" },
  saas: { text: "text-chart-2", bg: "bg-chart-2" },
  branding: { text: "text-chart-4", bg: "bg-chart-4" },
  "ui-ux": { text: "text-chart-2", bg: "bg-chart-2" },
  "custom-software": { text: "text-chart-1", bg: "bg-chart-1" },
};

export function ServicesTechStack({ service }: ServicesTechStackProps) {
  const colors = ColorMap[service.id] || ColorMap.websites;

  return (
    <section aria-labelledby={`service-tech-stack-${service.id}`} className="w-full relative z-20">
      {/* ── Header ── */}
      <div className="flex flex-col gap-4 items-start text-left mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-background/85 backdrop-blur-md border border-border shadow-xs">
          <span aria-hidden="true" className={`w-2 h-2 rounded-full ${colors.bg} inline-block`} />
          <span className="type-label font-extrabold tracking-wide text-foreground/90 uppercase">
            {SERVICES_TECH_STACK_COPY.techStack}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 id={`service-tech-stack-${service.id}`} className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-satoshi">
            {SERVICES_TECH_STACK_COPY.recommendedTechStacks}</h3>
          <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
            {service.techStackSummary}</p>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {service.techStack.map(({ slug, purpose }) => {
          const tech: ServiceTechDetails = TECH_DETAILS[slug];
          return (
            <li key={slug} className="flex items-start gap-3 rounded-2xl border border-border bg-background/70 p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                <CldImage
                  src={`simpluxe/tech/${tech.imageSlug || slug}`}
                  alt=""
                  width={24}
                  height={24}
                  className={`h-6 w-6 object-contain ${tech.invertDark ? "dark:invert" : ""}`}
                />
              </div>
              <div className="min-w-0 flex flex-col gap-1">
                <h4 className={`text-sm font-bold ${colors.text}`}>{tech.name}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{purpose}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {SERVICES_TECH_STACK_COPY.projectFitNote}
      </p>
    </section>
  );
}
