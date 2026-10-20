"use client";

import { StaticIcon, type StaticIconName } from "@/components/ui/static-icon";
import { SITE_NAVBAR_COPY } from "@/lib/content/layout";

import { NAV_ITEMS, NAVBAR_CONTENT } from "@/lib/content/layout";
import { SITE } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, m as motion } from "motion/react";
import { CldImage } from "@/components/ui/cld-image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";

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

const MOBILE_NAV_ICONS: Record<string, StaticIconName> = {
  "/": "home",
  "/work": "briefcase",
  "/services": "layers",
  "/about": "info",
  "/contact": "mail",
};

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
          <div className="flex items-center gap-2.5 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-lg outline-none shrink-0 focus-visible:ring-2 focus-visible:ring-ring"
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
            <div className="hidden items-center pl-2.5 border-border border-l md:flex">
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
              <StaticIcon name="arrow-up-right" size={14} className="shrink-0 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <motion.a
              href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
              aria-label={SITE_NAVBAR_COPY.callUs}
              title={SITE.phone}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm outline-none transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden"
            >
              <StaticIcon name="phone" size={18} />
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
                <StaticIcon name={mobileOpen ? "x" : "menu"} size={20} />
              </motion.span>
            </motion.button>
          </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label={SITE_NAVBAR_COPY.closeMenu}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-x-0 bottom-0 top-16 z-10 bg-slate-950/20 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 flex w-full justify-center overflow-hidden border-t border-border/70 bg-background/95 shadow-xl backdrop-blur-2xl lg:hidden"
            >
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8"
              >
                <nav aria-label={SITE_NAVBAR_COPY.primaryNavigation} className="flex flex-col gap-1">
                  {[
                    { label: SITE_NAVBAR_COPY.home, route: "/" },
                    ...NAV_ITEMS,
                  ].map((item, index) => {
                    const isActive = pathname === item.route;
                    return (
                      <motion.div
                        key={item.route}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, delay: index * 0.035 }}
                      >
                        <Link
                          href={item.route}
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                            isActive
                              ? "bg-secondary text-primary"
                              : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                          )}
                        >
                          <span className={cn(
                            "inline-flex size-8 items-center justify-center rounded-lg",
                            isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                          )}>
                            <StaticIcon name={MOBILE_NAV_ICONS[item.route] ?? "home"} size={16} />
                          </span>
                          <span>{item.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, delay: 0.18 }}
                  className="border-t border-border pt-4"
                >
                  <Button
                    size="lg"
                    onClick={handleStart}
                    id="mobile-navbar-start-project"
                    disableScrollAnimation
                    className="w-full gap-2 group"
                  >
                    <span>{NAVBAR_CONTENT.ctaText}</span>
                    <StaticIcon name="arrow-up-right" size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
