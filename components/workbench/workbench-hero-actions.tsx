"use client";

import { useLead } from "@/components/leads/lead-provider";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "@/lib/content/hero";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import Link from "next/link";

export function WorkbenchHeroActions() {
  const { openLead } = useLead();

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        id="hero-start-project"
        onClick={() => openLead({ source: "cta" })}
        size="lg"
        disableScrollAnimation
        className="bg-white text-primary hover:bg-slate-100 group"
      >
        {HERO_CONTENT.ctaPrimary}
        <AnimatedIcon
          icon={ArrowUpRightIcon}
          size={16}
          className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Button>

      <Link
        href="/work"
        className="flex items-center gap-3 rounded-lg px-1.5 py-1 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring group"
      >
        <span className="flex flex-col gap-0.5">
          <span className="text-sm font-bold leading-tight text-white transition-colors group-hover:text-sky-300 sm:text-base">
            {HERO_CONTENT.ctaSecondaryTitle}
          </span>
          <span className="text-xs font-medium text-slate-300">
            {HERO_CONTENT.ctaSecondarySubtitle}
          </span>
        </span>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-white text-primary shadow-sm transition-all group-hover:border-primary/30 group-hover:bg-secondary group-hover:shadow-md">
          <AnimatedIcon icon={BriefcaseIcon} size={16} />
        </span>
      </Link>
    </div>
  );
}
