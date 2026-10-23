"use client";

import { useState } from "react";
import Link from "next/link";
import { StaticIcon } from "@/components/ui/static-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import {
  NAVBAR_SERVICES_MENU_COPY,
  type NavItem,
} from "@/lib/data/layout";
import { getServicePath, SERVICES_LIST } from "@/lib/data/services";
import { cn } from "@/lib/utils";

interface NavbarServicesMenuProps {
  item: NavItem;
  pathname: string;
}

export function NavbarServicesMenu({ item, pathname }: NavbarServicesMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dismissedUntilPointerLeaves, setDismissedUntilPointerLeaves] = useState(false);
  const isActive = pathname === "/expertise" || pathname.startsWith("/expertise/");

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
        <span>{item.label}</span>
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
