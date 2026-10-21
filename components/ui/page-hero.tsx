import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { COMMON } from "@/lib/content/common";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import * as motion from "motion/react-m";

interface PageHeroProps {
  currentPage: ReactNode;
  description: ReactNode;
  heading: ReactNode;
  homeLabel: ReactNode;
  separator?: ReactNode;
}

export function PageHero({
  currentPage,
  description,
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
        </motion.div>
      </Container>
    </section>
  );
}
