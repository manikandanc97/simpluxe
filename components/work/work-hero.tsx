"use client";

import { PageHero } from "@/components/ui/page-hero";
import { WORK_HERO_COPY } from "@/lib/content/projects";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";

const features = [
  {
    title: WORK_HERO_COPY.text100Bespoke,
    description: WORK_HERO_COPY.zeroThemeBloat,
    icon: SparklesIcon,
  },
  {
    title: WORK_HERO_COPY.subSecondSpeed,
    description: WORK_HERO_COPY.optimizedEdgeDelivery,
    icon: ZapIcon,
  },
  {
    title: WORK_HERO_COPY.productionReady,
    description: WORK_HERO_COPY.realClientOutcomes,
    icon: CodeIcon,
  },
];

export function WorkHero() {
  return (
    <PageHero
      homeLabel={WORK_HERO_COPY.home}
      currentPage={WORK_HERO_COPY.work}
      separator={WORK_HERO_COPY.symbol}
      heading={
        <>
          {WORK_HERO_COPY.engineeredDigitalProductsFor}{" "}
          <span className="text-white/95">{WORK_HERO_COPY.modernBusinesses}</span>
        </>
      }
      description={WORK_HERO_COPY.fromHighConversionWebsitesToComplex}
      features={features}
    />
  );
}
