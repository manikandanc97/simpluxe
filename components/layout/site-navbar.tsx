"use client";

import { StaticIcon, type StaticIconName } from "@/components/ui/static-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { SITE_NAVBAR_COPY } from "@/lib/data/layout";

import {
  NAV_ITEMS,
  NAVBAR_CONTENT,
  NAVBAR_SERVICES_MENU_COPY,
} from "@/lib/data/layout";
import { SITE } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, m as motion } from "motion/react";
import { BrandMark } from "@/components/ui/brand-mark";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";

import { useLead } from "@/components/leads/lead-provider";
import { Button } from "@/components/ui/button";
import { getServicePath, SERVICES_LIST } from "@/lib/data/services";

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

function ServicesMegaMenu({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dismissedUntilPointerLeaves, setDismissedUntilPointerLeaves] = useState(false);
  const isActive = pathname === "/services" || pathname.startsWith("/services/");

  const closeAfterNavigation = () => {
    setMenuOpen(false);
    setDismissedUntilPointerLeaves(true);
  };

  return (
    <div
      className="relative flex h-full items-center"
      onPointerEnter={() => {
        if (!dismissedUntilPointerLeaves) setMenuOpen(true);
      }}
      onPointerLeave={() => {
        setMenuOpen(false);
        setDismissedUntilPointerLeaves(false);
      }}
      onFocusCapture={() => setMenuOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setMenuOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setMenuOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={menuOpen}
        aria-controls="services-mega-menu"
        onClick={() => {
          setMenuOpen(true);
          setDismissedUntilPointerLeaves(false);
        }}
        className={cn(
          "relative flex h-full items-center gap-1.5 px-3 text-sm tracking-tight outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring xl:px-4",
          isActive
            ? "font-semibold text-primary"
            : "font-medium text-muted-foreground hover:text-heading"
        )}
      >
        <span>{SITE_NAVBAR_COPY.services}</span>
        <StaticIcon
          name="chevron-down"
          size={13}
          className={cn("transition-transform", menuOpen && "rotate-180")}
        />
      </button>

      <div
        id="services-mega-menu"
        className={cn(
          "absolute left-1/2 top-full w-screen max-w-4xl -translate-x-1/2 transition-all duration-200",
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        )}
      >
        <div className="overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-luxury">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col justify-between gap-6 rounded-2xl bg-luxury-banner p-6 text-white">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs font-semibold text-sky-100">
                  {NAVBAR_SERVICES_MENU_COPY.range}
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold leading-tight text-white">
                    {NAVBAR_SERVICES_MENU_COPY.title}
                  </p>
                  <p className="text-xs leading-relaxed text-white/75">
                    {NAVBAR_SERVICES_MENU_COPY.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 rounded-xl border border-white/15 bg-white/10 p-3">
                <p className="text-2xs font-semibold text-sky-100">
                  {NAVBAR_SERVICES_MENU_COPY.processEyebrow}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {NAVBAR_SERVICES_MENU_COPY.processSteps.map((step) => (
                    <div
                      key={step.number}
                      className="flex flex-col gap-1 rounded-lg bg-white/10 px-2 py-2"
                    >
                      <span className="font-mono text-3xs font-semibold text-sky-100">
                        {step.number}
                      </span>
                      <span className="truncate text-2xs font-semibold text-white">
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-2">
              {SERVICES_LIST.map((service) => {
                const href = getServicePath(service.id);
                const serviceActive = pathname === href;
                const Icon = service.icon;

                return (
                  <Link
                    key={service.id}
                    href={href}
                    aria-current={serviceActive ? "page" : undefined}
                    onClick={closeAfterNavigation}
                    className={cn(
                      "group/item flex items-start gap-3 rounded-2xl border p-3 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary",
                      serviceActive
                        ? "border-primary/20 bg-secondary"
                        : "border-transparent hover:border-border hover:bg-slate-50"
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-xl",
                        serviceActive
                          ? "bg-primary text-white"
                          : "bg-secondary text-primary group-hover/item:bg-primary group-hover/item:text-white"
                      )}
                    >
                      <AnimatedIcon icon={Icon} size={16} />
                    </span>
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-xs font-bold text-heading">
                        {service.tabLabel}
                      </span>
                      <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        {service.outcome}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteNavbar({ onStartProject }: SiteNavbarProps) {
  const { openLead } = useLead();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
              <BrandMark loading="eager" className="size-8 sm:size-9" />
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
              if (item.route === "/services") {
                return <ServicesMegaMenu key={item.route} pathname={pathname} />;
              }

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
                className="flex max-h-dialog w-full max-w-7xl flex-col gap-4 overflow-y-auto px-4 py-4 sm:px-6 lg:px-8"
              >
                <nav aria-label={SITE_NAVBAR_COPY.primaryNavigation} className="flex flex-col gap-1">
                  {[
                    { label: SITE_NAVBAR_COPY.home, route: "/" },
                    ...NAV_ITEMS,
                  ].map((item, index) => {
                    const isActive = pathname === item.route ||
                      (item.route === "/services" && pathname.startsWith("/services/"));
                    return (
                      <motion.div
                        key={item.route}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, delay: index * 0.035 }}
                      >
                        {item.route === "/services" ? (
                          <button
                            type="button"
                            aria-expanded={mobileServicesOpen}
                            aria-controls="mobile-services-menu"
                            onClick={() => setMobileServicesOpen((open) => !open)}
                            className={cn(
                              "flex min-h-11 w-full items-center justify-between gap-3 rounded-xl px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                              isActive
                                ? "bg-secondary text-primary"
                                : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                            )}
                          >
                            <span className="flex items-center gap-3">
                              <span className={cn(
                                "inline-flex size-8 items-center justify-center rounded-lg",
                                isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                              )}>
                                <StaticIcon name="layers" size={16} />
                              </span>
                              <span>{item.label}</span>
                            </span>
                            <StaticIcon
                              name="chevron-down"
                              size={15}
                              className={cn(
                                "transition-transform",
                                mobileServicesOpen && "rotate-180"
                              )}
                            />
                          </button>
                        ) : (
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
                        )}
                        {item.route === "/services" && mobileServicesOpen && (
                          <div id="mobile-services-menu" className="grid grid-cols-2 gap-2 px-3 py-2">
                            {SERVICES_LIST.map((service) => {
                              const href = getServicePath(service.id);
                              const serviceActive = pathname === href;
                              const Icon = service.icon;

                              return (
                                <Link
                                  key={service.id}
                                  href={href}
                                  aria-current={serviceActive ? "page" : undefined}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className={cn(
                                    "flex min-h-11 items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary",
                                    serviceActive
                                      ? "border-primary bg-primary text-white"
                                      : "border-border bg-white text-muted-foreground hover:border-primary/30 hover:text-primary"
                                  )}
                                >
                                  <AnimatedIcon icon={Icon} size={14} className="shrink-0" />
                                  <span>{service.tabLabel}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
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
