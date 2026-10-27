"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, m as motion } from "motion/react";
import { AnimatedIcon, type AnimatedIconName } from "@/components/ui/animated-icon";
import { Button } from "@/components/ui/button";
import {
  NAV_ITEMS,
  NAVBAR_CONTENT,
  SITE_NAVBAR_COPY,
} from "@/lib/data/layout";
import { getServicePath, SERVICES_LIST } from "@/lib/data/services";
import { cn } from "@/lib/utils";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  onStartProject: () => void;
}

const MOBILE_NAV_ICONS: Record<string, AnimatedIconName> = {
  "/": "home",
  "/creations": "briefcase",
  "/expertise": "layers",
  "/inside": "info",
  "/insights": "pencil",
  "/connect": "mail",
};

export function NavbarMobileMenu({
  isOpen,
  onClose,
  pathname,
  onStartProject,
}: NavbarMobileMenuProps) {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label={SITE_NAVBAR_COPY.closeMenu}
            onClick={onClose}
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
                  const isActive =
                    pathname === item.route ||
                    (item.route === "/expertise" && pathname.startsWith("/expertise/"));
                  return (
                    <motion.div
                      key={item.route}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2, delay: index * 0.035 }}
                    >
                      {item.route === "/expertise" ? (
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
                            <span
                              className={cn(
                                "inline-flex size-8 items-center justify-center rounded-lg",
                                isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                              )}
                            >
                              <AnimatedIcon name="layers" size={16} />
                            </span>
                            <span>{item.label}</span>
                          </span>
                          <motion.span
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex shrink-0"
                          >
                            <AnimatedIcon name="chevron-down" size={15} />
                          </motion.span>
                        </button>
                      ) : (
                        <Link
                          href={item.route}
                          aria-current={isActive ? "page" : undefined}
                          onClick={onClose}
                          className={cn(
                            "flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                            isActive
                              ? "bg-secondary text-primary"
                              : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                          )}
                        >
                          <span
                            className={cn(
                              "inline-flex size-8 items-center justify-center rounded-lg",
                              isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                            )}
                          >
                            <AnimatedIcon name={MOBILE_NAV_ICONS[item.route] ?? "home"} size={16} />
                          </span>
                          <span>{item.label}</span>
                        </Link>
                      )}
                      {item.route === "/expertise" ? (
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen ? (
                            <motion.div
                              id="mobile-services-menu"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                                opacity: { duration: 0.22, ease: "easeOut" },
                              }}
                              className="overflow-hidden"
                            >
                              <motion.div
                                initial={{ y: -8, scale: 0.98 }}
                                animate={{ y: 0, scale: 1 }}
                                exit={{ y: -6, scale: 0.98 }}
                                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                                className="grid grid-cols-2 gap-2 px-3 py-2"
                              >
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
                                        onClose();
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
                              </motion.div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      ) : null}
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
                  onClick={onStartProject}
                  id="mobile-navbar-start-project"
                  disableScrollAnimation
                  className="w-full gap-2 group"
                >
                  <span>{NAVBAR_CONTENT.ctaText}</span>
                  <AnimatedIcon
                    name="arrow-up-right"
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
