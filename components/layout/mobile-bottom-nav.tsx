"use client";

import { MOBILE_BOTTOM_NAV_COPY } from "@/lib/content/layout";

import { useMobileMenu } from "@/components/layout/mobile-menu-context";
import { useLead } from "@/components/leads/lead-provider";
import { cn } from "@/lib/utils";
import { m as motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatedIcon, type AnimatedIconName } from "@/components/ui/animated-icon";

const LEFT_TABS: { label: string; route: string; iconName: AnimatedIconName }[] = [
  { label: MOBILE_BOTTOM_NAV_COPY.home, route: "/", iconName: "home" },
  { label: MOBILE_BOTTOM_NAV_COPY.work, route: "/work", iconName: "briefcase" },
];

const RIGHT_TABS: { label: string; route: string; iconName: AnimatedIconName }[] = [
  { label: MOBILE_BOTTOM_NAV_COPY.services, route: "/services", iconName: "layers" },
  { label: MOBILE_BOTTOM_NAV_COPY.contact, route: "/contact", iconName: "mail" },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const { closeMenu } = useMobileMenu(); // Kept closeMenu to close any open menus on navigation
  const { openLead } = useLead();

  const renderTab = (tab: { label: string; route: string; iconName: AnimatedIconName }) => {
    const isActive = pathname === tab.route;

    return (
      <Link
        key={tab.route}
        href={tab.route}
        onClick={closeMenu}
        aria-label={tab.label}
        aria-current={isActive ? "page" : undefined}
        className="group relative flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-90"
      >
        <AnimatedIcon
          name={tab.iconName}
          solid={isActive}
          hoverDelay={1000}
          oncePerInteraction={true}
          size={20}
          className={cn(
            "transition-colors duration-200",
            isActive
              ? "text-primary drop-shadow-elevated"
              : "text-muted-foreground group-hover:text-foreground"
          )}
        />
        {isActive && (
          <motion.div
            layoutId="active-tab-dot"
            className="absolute bottom-1 w-1 h-1 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
      </Link>
    );
  };

  return (
    <nav
      aria-label={MOBILE_BOTTOM_NAV_COPY.mobileBottomAppNavigation}
      className="fixed bottom-safe-nav inset-x-0 z-40 md:hidden pointer-events-none flex justify-center px-4"
    >
      <div
        className="relative w-full h-12"
        style={{
          filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))",
        }}
      >
        {/* Background container with cutout mask */}
        <div
          className="relative w-full h-full rounded-full bg-card/95 backdrop-blur-2xl border border-border/60 pointer-events-auto flex items-center justify-between px-4"
          style={{
            WebkitMaskImage: "radial-gradient(circle at 50% 9px, transparent 27px, black 28px)",
            maskImage: "radial-gradient(circle at 50% 9px, transparent 27px, black 28px)",
          }}
        >
          {/* Left Side Tabs */}
          <div className="flex items-center justify-around w-2/5">
            {LEFT_TABS.map(renderTab)}
          </div>

          {/* Right Side Tabs */}
          <div className="flex items-center justify-around w-2/5">
            {RIGHT_TABS.map(renderTab)}
          </div>
        </div>

        {/* Cradle outline to seamlessly complete the cutout border */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 -top-4 w-14 h-14 rounded-full border border-border/60 pointer-events-none"
          style={{
            clipPath: "polygon(0 33%, 100% 33%, 100% 100%, 0 100%)",
          }}
        />

        {/* Center Prominent Menu Button - Floating above the mask */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-3.5 pointer-events-auto">
          <button
            type="button"
            onClick={() => openLead({ source: "mobile-nav" })}
            aria-label={MOBILE_BOTTOM_NAV_COPY.startAProject}
            className={cn(
              "relative flex items-center justify-center w-11 h-11 rounded-full shadow-card transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-background active:scale-90",
              "bg-primary text-primary-foreground hover:scale-105"
            )}
          >
            <AnimatedIcon name="pencil" size={20} className="text-primary-foreground" />
          </button>
        </div>
      </div>
    </nav>
  );
}
