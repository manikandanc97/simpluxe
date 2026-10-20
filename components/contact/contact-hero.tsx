"use client";

import { PageHero } from "@/components/ui/page-hero";
import { CONTACT_HERO_COPY } from "@/lib/content/contact";
import { SITE } from "@/lib/content/site";
import { ClockIcon } from "@animateicons/react/lucide/clock-icon";
import { MessageSquareIcon } from "@animateicons/react/lucide/message-square-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";

const features = [
  {
    title: SITE.responseTime || CONTACT_HERO_COPY.directResponse,
    description: CONTACT_HERO_COPY.projectRequirementsReview,
    icon: ClockIcon,
  },
  {
    title: CONTACT_HERO_COPY.mutualNda,
    description: CONTACT_HERO_COPY.text100Confidential,
    icon: ShieldCheckIcon,
  },
  {
    title: CONTACT_HERO_COPY.directLine,
    description: CONTACT_HERO_COPY.seniorEngineersOnly,
    icon: MessageSquareIcon,
  },
];

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
      features={features}
    />
  );
}
