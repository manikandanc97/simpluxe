import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { CUSTOM_SOFTWARE_HERO_COPY } from "@/lib/data/custom-software";
import { COMMON } from "@/lib/data/common";

export function CustomSoftwareHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-primary-hover/30 bg-luxury-banner text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/2 translate-x-1/2 size-96 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <Container className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label={COMMON.labels.breadcrumb}
            className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-white/75 font-satoshi"
          >
            <Link href="/" className="transition-colors hover:text-white">
              {CUSTOM_SOFTWARE_HERO_COPY.home}
            </Link>
            <span aria-hidden="true" className="text-white/40">
              {CUSTOM_SOFTWARE_HERO_COPY.symbol}
            </span>
            <Link href="/services" className="transition-colors hover:text-white">
              {CUSTOM_SOFTWARE_HERO_COPY.services}
            </Link>
            <span aria-hidden="true" className="text-white/40">
              {CUSTOM_SOFTWARE_HERO_COPY.symbol}
            </span>
            <span aria-current="page" className="font-semibold text-white">
              {CUSTOM_SOFTWARE_HERO_COPY.currentPage}
            </span>
          </nav>

          {/* Eyebrow & Titles */}
          <div className="flex w-full max-w-4xl flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-sky-300 font-satoshi">
              <span className="size-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>{CUSTOM_SOFTWARE_HERO_COPY.eyebrow}</span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl font-satoshi">
              {CUSTOM_SOFTWARE_HERO_COPY.title}
              <span className="block text-sky-200">
                {CUSTOM_SOFTWARE_HERO_COPY.titleHighlight}
              </span>
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base font-satoshi">
              {CUSTOM_SOFTWARE_HERO_COPY.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
                className:
                  "group inline-flex items-center gap-2 bg-white text-primary shadow-sm hover:bg-white/90 font-satoshi",
              })}
            >
              <span className="text-primary font-semibold">{CUSTOM_SOFTWARE_HERO_COPY.primaryCta}</span>
              <AnimatedIcon
                icon={ArrowUpRightIcon}
                size={16}
                className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href="#capabilities"
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
                className:
                  "group inline-flex items-center gap-2 border border-white/30 bg-transparent text-white shadow-sm hover:border-white/50 hover:bg-white/10 hover:text-white font-satoshi",
              })}
            >
              <span className="text-white font-semibold">{CUSTOM_SOFTWARE_HERO_COPY.secondaryCta}</span>
              <AnimatedIcon
                icon={ChevronRightIcon}
                size={15}
                className="text-sky-200 transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <Link
              href="/work"
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
                className:
                  "text-white/80 hover:bg-white/10 hover:text-white font-satoshi",
              })}
            >
              <span>{CUSTOM_SOFTWARE_HERO_COPY.viewWorkCta}</span>
            </Link>
          </div>

          {/* Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {CUSTOM_SOFTWARE_HERO_COPY.badges.map((badgeText) => (
              <Badge
                key={badgeText}
                variant="outline"
                size="default"
                className="border-white/20 bg-white/5 text-white/90 backdrop-blur-xs font-satoshi"
              >
                <span className="size-1 rounded-full bg-sky-300" />
                <span>{badgeText}</span>
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
