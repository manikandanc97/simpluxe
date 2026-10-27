"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m as motion } from "motion/react";
import { BrandLockup } from "@/components/ui/brand-lockup";
import { Button } from "@/components/ui/button";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { useLead } from "@/components/leads/lead-provider";
import {
  NAV_ITEMS,
  NAVBAR_CONTENT,
  SITE_NAVBAR_COPY,
} from "@/lib/data/layout";
import { SITE } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { NavbarServicesMenu } from "./navbar-services-menu";
import { NavbarMobileMenu } from "./navbar-mobile-menu";

interface SiteNavbarProps {
  onStartProject?: () => void;
}

const subscribeToScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};
const getScrolledSnapshot = () => window.scrollY > 20;
const getServerSnapshot = () => false;
const subscribeToMount = () => () => {};
const getMountedSnapshot = () => true;

export function SiteNavbar({ onStartProject }: SiteNavbarProps) {
  const { openLead } = useLead();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolledSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerSnapshot);

  const handleStart = () => {
    setMobileOpen(false);
    if (onStartProject) onStartProject();
    else openLead({ source: "navbar" });
  };

  return (
    <motion.header
      role="banner"
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex w-full flex-col items-center border-b font-satoshi transition-all duration-500",
        scrolled || mobileOpen
          ? "border-slate-200/60 bg-background/80 shadow-sm backdrop-blur-2xl backdrop-saturate-150"
          : "border-slate-200/40 bg-background/80 shadow-none backdrop-blur-2xl backdrop-saturate-150"
      )}
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        mounted
          ? { type: "spring", stiffness: 380, damping: 38, mass: 0.8 }
          : { duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
      }
      onKeyDown={(event) => {
        if (event.key === "Escape") setMobileOpen(false);
      }}
    >
      <div className="relative z-30 flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex min-w-0 items-center">
          <Link
            href="/"
            className="group flex shrink-0 items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={SITE_NAVBAR_COPY.simpluxeHome}
          >
            <BrandLockup loading="eager" size="compact" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label={SITE_NAVBAR_COPY.primaryNavigation}
          className="hidden h-full items-center gap-1 lg:flex"
        >
          {NAV_ITEMS.map((item, index) => {
            if (item.route === "/expertise") {
              return (
                <div key={item.route} className="flex h-full items-center">
                  {index > 0 ? <span className="text-border">·</span> : null}
                  <NavbarServicesMenu item={item} pathname={pathname} />
                </div>
              );
            }

            const isActive = pathname === item.route;
            return (
              <div key={item.route} className="flex h-full items-center">
                {index > 0 ? <span className="text-border">·</span> : null}
                <Link
                  href={item.route}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex h-full items-center px-3 text-sm tracking-tight outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring xl:px-4",
                    isActive
                      ? "font-semibold text-primary"
                      : "font-medium text-muted-foreground hover:text-heading"
                  )}
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0 sm:gap-4">
          {/* Availability status badge */}
          <div className="hidden items-center gap-2 xl:flex">
            <span className="relative flex size-1.5">
              <span className="inline-flex absolute bg-emerald-500 opacity-50 rounded-full w-full h-full animate-ping" />
              <span className="inline-flex relative bg-emerald-500 rounded-full size-1.5" />
            </span>
            <span className="font-medium text-muted-foreground text-xs tracking-tight">
              {NAVBAR_CONTENT.availabilityText}
            </span>
          </div>

          {/* Start a project CTA Button */}
          <Button
            size="sm"
            onClick={handleStart}
            id="navbar-start-project"
            disableScrollAnimation
            className="hidden gap-1.5 px-4 lg:inline-flex group"
          >
            <span>{NAVBAR_CONTENT.ctaText}</span>
            <AnimatedIcon
              name="arrow-up-right"
              size={14}
              className="shrink-0 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Button>

          <motion.a
            href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
            aria-label={SITE_NAVBAR_COPY.callUs}
            title={SITE.phone}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm outline-none transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden"
          >
            <AnimatedIcon name="phone" size={18} />
          </motion.a>

          <motion.button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? SITE_NAVBAR_COPY.closeMenu : SITE_NAVBAR_COPY.openMenu}
            onClick={() => setMobileOpen((open) => !open)}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-2xs transition-colors hover:border-primary/30 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 90 : 0, scale: mobileOpen ? 0.94 : 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="inline-flex"
            >
              <AnimatedIcon name={mobileOpen ? "x" : "menu"} size={20} />
            </motion.span>
          </motion.button>
        </div>
      </div>

      <NavbarMobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
        onStartProject={handleStart}
      />
    </motion.header>
  );
}
