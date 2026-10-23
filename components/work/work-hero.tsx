import { PageHero } from "@/components/ui/page-hero";
import { COMMON } from "@/lib/data/common";
import { WORK_HERO_COPY } from "@/lib/data/projects";

export function WorkHero() {
  return (
    <PageHero
      currentPage={COMMON.pages.creations}
      heading={
        <>
          {WORK_HERO_COPY.engineeredDigitalProductsFor}{" "}
          <span className="text-white/95">{WORK_HERO_COPY.modernBusinesses}</span>
        </>
      }
      description={WORK_HERO_COPY.fromHighConversionWebsitesToComplex}
    />
  );
}
