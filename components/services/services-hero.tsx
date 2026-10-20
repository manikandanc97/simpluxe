"use client";

import { PageHero } from "@/components/ui/page-hero";
import { SERVICES_HERO_COPY } from "@/lib/content/services";
import { LayoutGridIcon } from "@animateicons/react/lucide/layout-grid-icon";
import { TrendingUpIcon } from "@animateicons/react/lucide/trending-up-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";

const features = [
  {
    title: SERVICES_HERO_COPY.text9Capabilities,
    description: SERVICES_HERO_COPY.endToEndDigitalServices,
    icon: LayoutGridIcon,
  },
  {
    title: SERVICES_HERO_COPY.designDevelopment,
    description: SERVICES_HERO_COPY.modernAndScalable,
    icon: ZapIcon,
  },
  {
    title: SERVICES_HERO_COPY.builtForGrowth,
    description: SERVICES_HERO_COPY.realBusinessOutcomes,
    icon: TrendingUpIcon,
  },
];

export function ServicesHero() {
  return (
    <PageHero
      homeLabel={SERVICES_HERO_COPY.home}
      currentPage={SERVICES_HERO_COPY.services}
      separator={SERVICES_HERO_COPY.symbol}
      heading={
        <>
          {SERVICES_HERO_COPY.digitalServicesFor}{" "}
          <span className="text-white/95">{SERVICES_HERO_COPY.yourBusiness}</span>
        </>
      }
      description={SERVICES_HERO_COPY.fromWebsitesAndMobileProductsTo}
      features={features}
    />
  );
}
