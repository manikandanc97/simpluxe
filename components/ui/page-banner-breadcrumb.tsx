"use client";

import React from "react";
import Link from "next/link";
import { m as motion } from "motion/react";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerBreadcrumbProps {
  breadcrumb: BreadcrumbItem[];
}

export function PageBannerBreadcrumb({ breadcrumb }: PageBannerBreadcrumbProps) {
  const activeBreadcrumb = breadcrumb[breadcrumb.length - 1];
  const parentBreadcrumbs = breadcrumb.slice(0, breadcrumb.length - 1);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Breadcrumb"
      className="inline-flex items-center gap-1.5 text-xs sm:text-xs font-medium text-white/70 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 hover:bg-white/15 hover:border-white/40 transition-colors cursor-default"
    >
      {parentBreadcrumbs.map((crumb, i) => (
        <React.Fragment key={crumb.label}>
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              {i === 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              )}
              {crumb.label}
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
          <AnimatedIcon icon={ChevronRightIcon} size={11} className="opacity-40" />
        </React.Fragment>
      ))}
      {activeBreadcrumb && (
        <span className="text-white font-bold flex items-center gap-1.5 bg-white/15 px-2.5 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          {activeBreadcrumb.label}
        </span>
      )}
    </motion.nav>
  );
}
