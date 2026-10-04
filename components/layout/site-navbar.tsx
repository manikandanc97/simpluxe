"use client";

import { NAV_ITEMS } from "@/config/nav";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useLead } from "@/components/leads/lead-provider";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SiteNavbarProps {
  onStartProject?: () => void;
}

export function SiteNavbar({ onStartProject }: SiteNavbarProps) {
  const { openLead } = useLead();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
    setScrolled(window.scrollY > 20);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const handleStart = () => {
    if (onStartProject) onStartProject();
    else openLead({ source: "navbar" });
  };

  return (
    <motion.header
      role="banner"
      className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
      initial={{ y: -6, opacity: 0.92 }}
      animate={{ y: scrolled ? 0 : 6, opacity: 1 }}
      transition={
        mounted
          ? { type: "spring", stiffness: 380, damping: 38, mass: 0.8 }
          : { duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
      }
    >
      <div className="max-w-7xl mx-auto">
        <div className="w-full px-4 sm:px-6 py-2.5 sm:py-4 flex items-center justify-between bg-card/90 backdrop-blur-xl border border-border rounded-full shadow-card font-satoshi">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-ring rounded-lg outline-none shrink-0"
            aria-label="Simpluxe Home"
          >
            <CldImage
              src="simpluxe/logo/logo"
              alt="Simpluxe Logo"
              width={96}
              height={32}
              sizes="96px"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.route;
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative text-sm font-semibold tracking-tight transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring flex flex-col items-center py-1",
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span 
                      layoutId="nav-indicator"
                      className="w-1.5 h-1.5 rounded-full bg-primary absolute -bottom-1" 
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 sm:gap-4 shrink-0">
            {/* Availability status badge */}
            <div className="hidden xl:flex items-center gap-2 border-l border-border pl-4 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-tight">
                Available for projects
              </span>
            </div>
            
            {/* Start a project CTA Button */}
            <Button
              size="sm"
              onClick={handleStart}
              id="navbar-start-project"
              className="group shadow-elevated gap-1.5"
            >
              <span>Start a project</span>
              <ArrowRight size={14} className="text-white shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
