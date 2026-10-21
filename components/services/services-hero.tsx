import { PageHero } from "@/components/ui/page-hero";
import { SERVICES_HERO_COPY } from "@/lib/content/services";

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
    />
  );
}
