"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { getServicePath, SERVICES_ACTIVE_SHOWCASE_COPY } from "@/lib/data/services";

import { useLead } from "@/components/leads/lead-provider";
import { type ServiceViewData } from "@/lib/data/services";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ServicesMockupWindow } from "./showcase/services-mockup-window";
import { EyeIcon } from "@animateicons/react/lucide/eye-icon";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";

interface ServicesActiveShowcaseProps {
  service: ServiceViewData;
  showDetailLink?: boolean;
}

export function ServicesActiveShowcase({
  service,
  showDetailLink = false,
}: ServicesActiveShowcaseProps) {
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
                <h2 className="type-h2 text-foreground">
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
                className="group"
              >
                <span>{SERVICES_ACTIVE_SHOWCASE_COPY.startAProject}</span>
                <AnimatedIcon
                  icon={ArrowUpRightIcon}
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>

              <Link
                href={service.relatedWorkUrl}
                className={buttonVariants({ variant: "outline", className: "gap-2" })}
              >
                <AnimatedIcon icon={EyeIcon} size={14} />
                <span>{SERVICES_ACTIVE_SHOWCASE_COPY.viewRelatedWork}</span>
              </Link>

              {showDetailLink && (
                <Link
                  href={getServicePath(service.id)}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline sm:text-sm font-satoshi py-2 px-1"
                >
                  <span>
                    {service.detailPageLabel ??
                      SERVICES_ACTIVE_SHOWCASE_COPY.exploreService(service.tabLabel)}
                  </span>
                  <AnimatedIcon
                    icon={ArrowUpRightIcon}
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              )}
            </div>

            {/* 3 Key Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-surface-elevated sm:gap-5">
              {service.stats.map((st, i) => (
                <div key={i} className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-base font-bold text-heading tracking-tight sm:text-lg">
                    {st.value}
                  </span>
                  <span className="text-2xs font-normal text-muted-foreground leading-snug sm:text-xs">
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
