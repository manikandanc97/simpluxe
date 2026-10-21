import { PageHero } from "@/components/ui/page-hero";
import { ABOUT_HERO_COPY } from "@/lib/data/about";

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
    />
  );
}
