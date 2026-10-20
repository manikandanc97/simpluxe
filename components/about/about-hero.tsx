"use client";

import { PageHero } from "@/components/ui/page-hero";
import { ABOUT_HERO_COPY } from "@/lib/content/about";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";

const features = [
  {
    title: ABOUT_HERO_COPY.highCraft,
    description: ABOUT_HERO_COPY.pixelPerfectExecution,
    icon: SparklesIcon,
  },
  {
    title: ABOUT_HERO_COPY.zeroBloat,
    description: ABOUT_HERO_COPY.leanRapidArchitecture,
    icon: ZapIcon,
  },
  {
    title: ABOUT_HERO_COPY.productionReady,
    description: ABOUT_HERO_COPY.scaleWithConfidence,
    icon: ShieldCheckIcon,
  },
];

export function AboutHero() {
  return (
    <PageHero
      homeLabel={ABOUT_HERO_COPY.home}
      currentPage={ABOUT_HERO_COPY.about}
      separator={ABOUT_HERO_COPY.symbol}
      heading={
        <>
          {ABOUT_HERO_COPY.engineeringExcellenceShapedAround}{" "}
          <span className="text-white/95">{ABOUT_HERO_COPY.yourVision}</span>
        </>
      }
      description={ABOUT_HERO_COPY.weAreADedicatedSoftwareStudio}
      features={features}
    />
  );
}
