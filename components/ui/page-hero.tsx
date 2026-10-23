import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { COMMON } from "@/lib/data/common";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import * as motion from "motion/react-m";

interface PageHeroProps {
  breadcrumbs?: { href: string; label: ReactNode }[];
  children?: ReactNode;
  currentPage: ReactNode;
  description: ReactNode;
  eyebrow?: ReactNode;
  heading: ReactNode;
}

export function PageHero({
  breadcrumbs = [],
  children,
  currentPage,
  description,
  eyebrow,
  heading,
}: PageHeroProps) {
  return (
    <section className="w-full border-b border-primary-hover/30 text-white bg-luxury-banner">
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
            className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-white/75"
          >
            <Link href="/" className="transition-colors hover:text-white">
              {COMMON.pages.home}
            </Link>
            <span aria-hidden="true" className="text-white/40">
              {COMMON.symbols.slash}
            </span>
            {breadcrumbs.map((item) => (
              <span key={item.href} className="contents">
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
                <span aria-hidden="true" className="text-white/40">
                  {COMMON.symbols.slash}
                </span>
              </span>
            ))}
            <span
              aria-current="page"
              className="max-w-xs truncate font-semibold text-white sm:max-w-md md:max-w-xl lg:max-w-3xl"
              title={typeof currentPage === "string" ? currentPage : undefined}
            >
              {currentPage}
            </span>
          </motion.nav>

          <div className="flex w-full max-w-3xl flex-col items-center gap-4 text-center sm:gap-5">
            {eyebrow ? (
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-sky-300"
              >
                {eyebrow}
              </motion.div>
            ) : null}
            <motion.h1
              variants={fadeUp}
              className="type-page-title text-white"
            >
              {heading}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base"
            >
              {description}
            </motion.p>
            {children ? (
              <motion.div variants={fadeUp}>
                {children}
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
