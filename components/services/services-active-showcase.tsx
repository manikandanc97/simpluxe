"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { SERVICES_ACTIVE_SHOWCASE_COPY } from "@/lib/content/services";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { type ServiceViewData } from "@/lib/content/services";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ServicesMockupWindow } from "./showcase/services-mockup-window";
import { EyeIcon } from "@animateicons/react/lucide/eye-icon";

interface ServicesActiveShowcaseProps {
  service: ServiceViewData;
}

export function ServicesActiveShowcase({ service }: ServicesActiveShowcaseProps) {
  const { openLead } = useLead();

  return (
    <div className="w-full relative z-20">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-12 lg:gap-12">
        {/* ── Left Column: Content, Metrics, CTAs ── */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="w-full flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-4">
                {/* Kicker with Number & Category */}
                <div className="flex items-center gap-2">
                  <span className="text-primary font-black text-base tracking-tight sm:text-lg font-satoshi">
                    {service.number}
                  </span>
                  <span className="text-primary font-black">{SERVICES_ACTIVE_SHOWCASE_COPY.symbol}</span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground sm:text-sm font-satoshi">
                    {service.name}
                  </span>
                </div>

                {/* Dynamic Headline */}
                <h2 className="text-3xl font-black text-foreground tracking-tight leading-none sm:text-4xl sm:text-5xl lg:text-4xl font-satoshi">
                  {service.headline.normal}
                  <span className="text-primary">
                    {service.headline.highlight}
                  </span>
                </h2>
              </div>

              {/* Dynamic Description */}
              <p className="text-sm text-muted-foreground leading-relaxed font-normal sm:text-base">
                {service.description}
              </p>
            </div>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-4">
              <Button
                onClick={() =>
                  openLead({
                    source: "services-configurator",
                    projectType: service.name,
                    description: SERVICES_ACTIVE_SHOWCASE_COPY.projectInterest(service.name),
                  })
                }
              >
                <span>{SERVICES_ACTIVE_SHOWCASE_COPY.startAProject}</span>
                <AnimatedArrowRight size={14} />
              </Button>

              <Link
                href={service.relatedWorkUrl}
                className={buttonVariants({ variant: "outline", className: "gap-2" })}
              >
                <AnimatedIcon icon={EyeIcon} size={14} />
                <span>{SERVICES_ACTIVE_SHOWCASE_COPY.viewRelatedWork}</span>
              </Link>
            </div>

            {/* 3 Large Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-surface-elevated sm:gap-4">
              {service.stats.map((st, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-black text-foreground tracking-tight sm:text-2xl lg:text-3xl font-satoshi">
                    {st.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium leading-tight sm:text-xs">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right Column: Interactive Mockup Window ── */}
        <ServicesMockupWindow service={service} />
      </div>
    </div>
  );
}
