import Link from "next/link";
import { AnimatedArrowRight } from "@/components/ui/animated-icons/convenience-icons";
import { PageHero } from "@/components/ui/page-hero";
import { COMMON } from "@/lib/data/common";
import { SERVICES_HERO_COPY } from "@/lib/data/services";

export function Hero() {
  return (
    <PageHero
      currentPage={COMMON.pages.expertise}
      heading={
        <>
          {SERVICES_HERO_COPY.digitalServicesFor}{" "}
          <span className="text-white/95">{SERVICES_HERO_COPY.yourBusiness}</span>
        </>
      }
      description={SERVICES_HERO_COPY.fromWebsitesAndMobileProductsTo}
    >
      <Link
        href="/expertise/custom-software-development"
        className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/20"
      >
        <span>{SERVICES_HERO_COPY.customSoftwareDeepDive}</span>
        <AnimatedArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </PageHero>
  );
}
