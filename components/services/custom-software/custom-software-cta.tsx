"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { useLead } from "@/components/leads/lead-provider";
import { CUSTOM_SOFTWARE_CTA_COPY } from "@/lib/data/custom-software";

export function CustomSoftwareCta() {
  const { openLead } = useLead();

  const handleStartProject = () => {
    openLead({ source: "cta" });
  };

  return (
    <section
      id="cta"
      className="relative select-none overflow-hidden bg-primary py-16 text-primary-foreground sm:py-20 lg:py-24 font-satoshi"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-cyan-300/20 blur-3xl"
      />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
              {CUSTOM_SOFTWARE_CTA_COPY.eyebrow}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {CUSTOM_SOFTWARE_CTA_COPY.title}{" "}
              <span className="text-sky-200">
                {CUSTOM_SOFTWARE_CTA_COPY.highlightedText}
              </span>
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-sky-100/90 sm:text-base">
              {CUSTOM_SOFTWARE_CTA_COPY.description}
            </p>
          </div>

          {/* Right Column: Actions & Reassurance */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4 lg:items-end">
            <div className="flex flex-col items-stretch gap-3 w-full sm:flex-row sm:items-center sm:w-auto lg:flex-col lg:items-stretch lg:w-72">
              <Button
                size="lg"
                variant="ghost"
                onClick={handleStartProject}
                className="w-full bg-white text-primary shadow-sm justify-center hover:bg-white/90 group"
              >
                <span className="text-primary font-semibold">{CUSTOM_SOFTWARE_CTA_COPY.primaryButtonText}</span>
                <AnimatedIcon
                  icon={ArrowUpRightIcon}
                  size={16}
                  className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>

              <Link
                href="/services"
                className={buttonVariants({
                  size: "lg",
                  variant: "ghost",
                  className:
                    "w-full border border-white/30 bg-transparent text-white shadow-sm justify-center hover:bg-white/10 hover:text-white hover:border-white/50 group",
                })}
              >
                <span className="text-white font-semibold">{CUSTOM_SOFTWARE_CTA_COPY.secondaryButtonText}</span>
                <AnimatedIcon
                  icon={ChevronRightIcon}
                  size={15}
                  className="text-sky-200 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Direct Reassurance Note */}
            <div className="flex items-center gap-2 text-xs font-medium text-sky-100/90">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>{CUSTOM_SOFTWARE_CTA_COPY.responseNote}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
