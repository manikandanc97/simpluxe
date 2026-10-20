"use client";

import { StaticIcon } from "@/components/ui/static-icon";
import { SITE_NAVBAR_COPY } from "@/lib/content/layout";

import { NAV_ITEMS, NAVBAR_CONTENT } from "@/lib/content/layout";
import { cn } from "@/lib/utils";
import { m as motion } from "motion/react";
import { CldImage } from "@/components/ui/cld-image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

import { useLead } from "@/components/leads/lead-provider";
import { Button } from "@/components/ui/button";

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
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolledSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerSnapshot);

  const handleStart = () => {
    if (onStartProject) onStartProject();
    else openLead({ source: "navbar" });
  };

  return (
    <motion.header
      role="banner"
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b font-satoshi transition-all duration-500",
        scrolled
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
    >
      <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <div className="flex items-center min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0"
              aria-label={SITE_NAVBAR_COPY.simpluxeHome}
            >
              <CldImage
                src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1791901666/simpluxe/favicon/Bright_Blue_S_Monogram_Logo_spudvz.png"
                alt={SITE_NAVBAR_COPY.simpluxeLogo}
                width={64}
                height={64}
                sizes="32px"
                format="auto"
                quality="auto:eco"
                className="size-8 object-contain sm:size-9"
                priority
              />
              <span className="font-heading text-lg font-bold tracking-tight text-dark sm:text-xl">
                {SITE_NAVBAR_COPY.brandSimp}<span className="text-primary">{SITE_NAVBAR_COPY.brandLuxe}</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center ml-2.5 pl-2.5 border-border border-l">
              <span className="font-semibold text-xs text-muted-foreground tracking-normal">
                {SITE_NAVBAR_COPY.technologies}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label={SITE_NAVBAR_COPY.primaryNavigation}
            className="hidden h-full items-center gap-1 lg:flex"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.route;
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex h-full items-center px-3 outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring xl:px-4 text-sm tracking-tight",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-heading font-medium"
                  )}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Availability status badge */}
            <div className="hidden xl:flex items-center gap-2">
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
              className="group gap-1.5 px-3 sm:px-4"
            >
              <span className="hidden sm:inline">{NAVBAR_CONTENT.ctaText}</span>
              <span className="sm:hidden">{SITE_NAVBAR_COPY.letsTalk}</span>
              <StaticIcon name="arrow-up-right" size={14} className="shrink-0 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
      </div>
    </motion.header>
  );
}
