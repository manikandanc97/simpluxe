import { PageHero } from "@/components/ui/page-hero";
import { WORK_HERO_COPY } from "@/lib/content/projects";

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
    />
  );
}
