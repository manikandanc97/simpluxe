import { PageHero } from "@/components/ui/page-hero";
import { COMMON } from "@/lib/data/common";
import { CONTACT_HERO_COPY } from "@/lib/data/contact";

export function ContactHero() {
  return (
    <PageHero
      currentPage={COMMON.pages.connect}
      heading={
        <>
          {CONTACT_HERO_COPY.letSBuildYourSystem}{" "}
          <span className="text-white/95">{CONTACT_HERO_COPY.theRightWay}</span>
        </>
      }
      description={CONTACT_HERO_COPY.directCollaborationWithSeniorSoftwareArchitects}
    />
  );
}
