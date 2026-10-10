"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { m as motion } from "motion/react";
import { DEFAULT_TECH_SLUGS } from "@/lib/visuals/page-banner";
import {
  PageBannerBreadcrumb,
  type BreadcrumbItem,
} from "./page-banner-breadcrumb";
import { PageBannerFloatingTech } from "./page-banner-floating-tech";

;

export interface PageBannerProps {
  breadcrumb: BreadcrumbItem[];
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  techStack?: string[];
  className?: string;
}

export function PageBanner({
  breadcrumb,
  badge,
  badgeIcon,
  title,
  description,
  techStack = DEFAULT_TECH_SLUGS,
  className,
}: PageBannerProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden select-none",
        "bg-primary",
        "py-8 sm:py-12 md:py-12",
        className
      )}
    >
      {/* ─── Subtle dot-grid on primary ──────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-7"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 85% 90% at 50% 50%, #000 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 90% at 50% 50%, #000 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Top-left corner glow accent ─────────────────────── */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-60 h-60 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      {/* ─── Bottom-right corner glow accent ─────────────────── */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      {/* ─── Bottom separator line ────────────────────────────── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 35%, rgba(255,255,255,0.25) 65%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Floating Tech Badges ─────────────────────────────── */}
      <PageBannerFloatingTech techStack={techStack} />

      {/* ─── Centered Content ────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-4 sm:gap-6">
        {/* ── Breadcrumb — white glass pill on primary ── */}
        <PageBannerBreadcrumb breadcrumb={breadcrumb} />

        {/* Optional Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="flex items-center justify-center"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-white/30 bg-white/15 text-white text-xs font-bold uppercase tracking-widest">
              {badgeIcon ?? <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              {badge}
            </span>
          </motion.div>
        )}

        {/* ── MAIN TITLE — always white on solid primary ── */}
        <motion.h1
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "font-black tracking-tight text-white leading-none",
            "flex flex-wrap items-center justify-center gap-2 sm:gap-4",
            "text-heading-fluid"
          )}
        >
          {title}
        </motion.h1>

        {/* ── DESCRIPTION — soft white ── */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "text-white/60 leading-relaxed font-normal max-w-lg",
              "text-body-fluid"
            )}
          >
            {description}
          </motion.p>
        )}

        {/* ── Animated white accent line ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="origin-center h-0.5 w-10 sm:w-14 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
          }}
        />
      </div>
    </div>
  );
}
