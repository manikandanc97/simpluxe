import { PageHero } from "@/components/ui/page-hero";
import { CONTACT_HERO_COPY } from "@/lib/content/contact";

export function ContactHero() {
  return (
    <PageHero
      homeLabel={CONTACT_HERO_COPY.home}
      currentPage={CONTACT_HERO_COPY.contact}
      separator={CONTACT_HERO_COPY.symbol}
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
