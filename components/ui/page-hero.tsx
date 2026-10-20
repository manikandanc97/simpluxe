"use client";

import type { ReactNode } from "react";
import type { IconBaseProps } from "@/components/ui/animated-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { COMMON } from "@/lib/content/common";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import { m as motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PageHeroFeature {
  title: ReactNode;
  description: ReactNode;
  icon: React.ComponentType<IconBaseProps> | React.ComponentType<unknown> | React.ElementType;
}

interface PageHeroProps {
  currentPage: ReactNode;
  description: ReactNode;
  features: PageHeroFeature[];
  heading: ReactNode;
  homeLabel: ReactNode;
  separator?: ReactNode;
}

export function PageHero({
  currentPage,
  description,
  features,
  heading,
  homeLabel,
  separator = "/",
}: PageHeroProps) {
  return (
    <section className="w-full border-b border-primary-hover/30 bg-luxury-banner text-white">
      <Container className="py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 text-center sm:gap-10"
        >
          <motion.nav
            variants={fadeUp}
            aria-label={COMMON.labels.breadcrumb}
            className="flex items-center gap-2 text-xs font-medium text-white/75"
          >
            <Link href="/" className="transition-colors hover:text-white">
              {homeLabel}
            </Link>
            <span aria-hidden="true" className="text-white/40">
              {separator}
            </span>
            <span aria-current="page" className="font-semibold text-white">
              {currentPage}
            </span>
          </motion.nav>

          <div className="flex w-full max-w-3xl flex-col items-center gap-4">
            <motion.h1
              variants={fadeUp}
              className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {heading}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base"
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="grid w-full max-w-4xl grid-cols-1 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3 sm:gap-0 sm:pt-8"
          >
            {features.map((feature, index) => (
              <div
                key={`${index}-${String(feature.title)}`}
                data-animated-icon-target
                className={cn(
                  "flex min-w-0 items-center justify-start gap-3 rounded-xl bg-white/5 px-4 py-3 text-left sm:justify-center sm:rounded-none sm:bg-transparent sm:py-0",
                  index > 0 && "sm:border-l sm:border-white/15"
                )}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white shadow-sm">
                  <AnimatedIcon icon={feature.icon} size={16} />
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="text-sm font-semibold leading-tight text-white">
                    {feature.title}
                  </span>
                  <span className="text-xs leading-snug text-white/70">
                    {feature.description}
                  </span>
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
