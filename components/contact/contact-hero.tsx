"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { CONTACT_HERO_COPY } from "@/lib/content/contact";
import { SITE } from "@/lib/content/site";
import { m as motion } from "motion/react";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { ClockIcon } from "@animateicons/react/lucide/clock-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { MessageSquareIcon } from "@animateicons/react/lucide/message-square-icon";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export function ContactHero() {
  return (
    <section className="w-full bg-luxury-banner text-white border-b border-primary-hover/30">
      <Container className="py-12 sm:py-16 lg:py-18">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-6 sm:gap-7"
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp}
            className="flex items-center gap-2 text-xs font-medium text-white/75"
          >
            <Link href="/" className="hover:text-white transition-colors">
              {CONTACT_HERO_COPY.home}
            </Link>
            <span className="text-white/40">{CONTACT_HERO_COPY.symbol}</span>
            <span className="text-white font-semibold">{CONTACT_HERO_COPY.contact}</span>
          </motion.nav>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight"
          >
            {CONTACT_HERO_COPY.letSBuildYourSystem}{" "}
            <span className="text-white/95">{CONTACT_HERO_COPY.theRightWay}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed"
          >
            {CONTACT_HERO_COPY.directCollaborationWithSeniorSoftwareArchitects}
          </motion.p>

          {/* 3 Value Props */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-14 pt-6 sm:pt-8 border-t border-white/15 w-full max-w-3xl"
          >
            {/* Value Prop 1 */}
            <div data-animated-icon-target className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white shadow-sm">
                <AnimatedIcon icon={ClockIcon} size={16} />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white leading-tight">
                  {SITE.responseTime || CONTACT_HERO_COPY.directResponse}
                </div>
                <div className="text-xs text-white/70 leading-snug">
                  {CONTACT_HERO_COPY.projectRequirementsReview}
                </div>
              </div>
            </div>

            <span className="hidden sm:block h-8 w-px bg-white/15" />

            {/* Value Prop 2 */}
            <div data-animated-icon-target className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white shadow-sm">
                <AnimatedIcon icon={ShieldCheckIcon} size={16} />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white leading-tight">
                  {CONTACT_HERO_COPY.mutualNda}
                </div>
                <div className="text-xs text-white/70 leading-snug">
                  {CONTACT_HERO_COPY.text100Confidential}
                </div>
              </div>
            </div>

            <span className="hidden sm:block h-8 w-px bg-white/15" />

            {/* Value Prop 3 */}
            <div data-animated-icon-target className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white shadow-sm">
                <AnimatedIcon icon={MessageSquareIcon} size={16} />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white leading-tight">
                  {CONTACT_HERO_COPY.directLine}
                </div>
                <div className="text-xs text-white/70 leading-snug">
                  {CONTACT_HERO_COPY.seniorEngineersOnly}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
