import { PageHero } from "@/components/ui/page-hero";
import { ABOUT_HERO_COPY } from "@/lib/data/about";
import { COMMON } from "@/lib/data/common";

export function AboutHero() {
  return (
    <PageHero
      currentPage={COMMON.pages.inside}
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
