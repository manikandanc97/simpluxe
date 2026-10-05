"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
import React, { useCallback, useEffect, useRef, Suspense } from "react";

const ArrowLeftIcon = React.lazy(() => import("@animateicons/react/lucide/arrow-left-icon").then(m => ({ default: m.ArrowLeftIcon as React.ComponentType<IconBaseProps> })));
const ArrowRightIcon = React.lazy(() => import("@animateicons/react/lucide/arrow-right-icon").then(m => ({ default: m.ArrowRightIcon as React.ComponentType<IconBaseProps> })));
const CheckIcon = React.lazy(() => import("@animateicons/react/lucide/check-icon").then(m => ({ default: m.CheckIcon as React.ComponentType<IconBaseProps> })));
const ChevronRightIcon = React.lazy(() => import("@animateicons/react/lucide/chevron-right-icon").then(m => ({ default: m.ChevronRightIcon as React.ComponentType<IconBaseProps> })));
const CodeIcon = React.lazy(() => import("@animateicons/react/lucide/code-icon").then(m => ({ default: m.CodeIcon as React.ComponentType<IconBaseProps> })));
const ContactIcon = React.lazy(() => import("@animateicons/react/lucide/contact-icon").then(m => ({ default: m.ContactIcon as React.ComponentType<IconBaseProps> })));
const CpuIcon = React.lazy(() => import("@animateicons/react/lucide/cpu-icon").then(m => ({ default: m.CpuIcon as React.ComponentType<IconBaseProps> })));
const ExternalLinkIcon = React.lazy(() => import("@animateicons/react/lucide/external-link-icon").then(m => ({ default: m.ExternalLinkIcon as React.ComponentType<IconBaseProps> })));
const FolderIcon = React.lazy(() => import("@animateicons/react/lucide/folder-icon").then(m => ({ default: m.FolderIcon as React.ComponentType<IconBaseProps> })));
const GlobeIcon = React.lazy(() => import("@animateicons/react/lucide/globe-icon").then(m => ({ default: m.GlobeIcon as React.ComponentType<IconBaseProps> })));
const HouseIcon = React.lazy(() => import("@animateicons/react/lucide/house-icon").then(m => ({ default: m.HouseIcon as React.ComponentType<IconBaseProps> })));
const InfoIcon = React.lazy(() => import("@animateicons/react/lucide/info-icon").then(m => ({ default: m.InfoIcon as React.ComponentType<IconBaseProps> })));
const LaptopIcon = React.lazy(() => import("@animateicons/react/lucide/laptop-icon").then(m => ({ default: m.LaptopIcon as React.ComponentType<IconBaseProps> })));
const LayersIcon = React.lazy(() => import("@animateicons/react/lucide/layers-icon").then(m => ({ default: m.LayersIcon as React.ComponentType<IconBaseProps> })));
const LayoutGridIcon = React.lazy(() => import("@animateicons/react/lucide/layout-grid-icon").then(m => ({ default: m.LayoutGridIcon as React.ComponentType<IconBaseProps> })));
const LightbulbIcon = React.lazy(() => import("@animateicons/react/lucide/lightbulb-icon").then(m => ({ default: m.LightbulbIcon as React.ComponentType<IconBaseProps> })));
const ListChecksIcon = React.lazy(() => import("@animateicons/react/lucide/list-checks-icon").then(m => ({ default: m.ListChecksIcon as React.ComponentType<IconBaseProps> })));
const MailIcon = React.lazy(() => import("@animateicons/react/lucide/mail-icon").then(m => ({ default: m.MailIcon as React.ComponentType<IconBaseProps> })));
const MenuIcon = React.lazy(() => import("@animateicons/react/lucide/menu-icon").then(m => ({ default: m.MenuIcon as React.ComponentType<IconBaseProps> })));
const MessageSquareIcon = React.lazy(() => import("@animateicons/react/lucide/message-square-icon").then(m => ({ default: m.MessageSquareIcon as React.ComponentType<IconBaseProps> })));
const MoonIcon = React.lazy(() => import("@animateicons/react/lucide/moon-icon").then(m => ({ default: m.MoonIcon as React.ComponentType<IconBaseProps> })));
const PencilIcon = React.lazy(() => import("@animateicons/react/lucide/pencil-icon").then(m => ({ default: m.PencilIcon as React.ComponentType<IconBaseProps> })));
const RefreshCwIcon = React.lazy(() => import("@animateicons/react/lucide/refresh-cw-icon").then(m => ({ default: m.RefreshCwIcon as React.ComponentType<IconBaseProps> })));
const SearchIcon = React.lazy(() => import("@animateicons/react/lucide/search-icon").then(m => ({ default: m.SearchIcon as React.ComponentType<IconBaseProps> })));
const SendIcon = React.lazy(() => import("@animateicons/react/lucide/send-icon").then(m => ({ default: m.SendIcon as React.ComponentType<IconBaseProps> })));
const SlidersHorizontalIcon = React.lazy(() => import("@animateicons/react/lucide/sliders-horizontal-icon").then(m => ({ default: m.SlidersHorizontalIcon as React.ComponentType<IconBaseProps> })));
const SmartphoneIcon = React.lazy(() => import("@animateicons/react/lucide/smartphone-icon").then(m => ({ default: m.SmartphoneIcon as React.ComponentType<IconBaseProps> })));
const SparklesIcon = React.lazy(() => import("@animateicons/react/lucide/sparkles-icon").then(m => ({ default: m.SparklesIcon as React.ComponentType<IconBaseProps> })));
const SunMediumIcon = React.lazy(() => import("@animateicons/react/lucide/sun-medium-icon").then(m => ({ default: m.SunMediumIcon as React.ComponentType<IconBaseProps> })));
const TypeIcon = React.lazy(() => import("@animateicons/react/lucide/type-icon").then(m => ({ default: m.TypeIcon as React.ComponentType<IconBaseProps> })));
const XIcon = React.lazy(() => import("@animateicons/react/lucide/x-icon").then(m => ({ default: m.XIcon as React.ComponentType<IconBaseProps> })));
const ZapIcon = React.lazy(() => import("@animateicons/react/lucide/zap-icon").then(m => ({ default: m.ZapIcon as React.ComponentType<IconBaseProps> })));
const PlayIcon = React.lazy(() => import("@animateicons/react/lucide").then(m => ({ default: m.PlayIcon as React.ComponentType<IconBaseProps> })));

import {
  type AnimatedIconName,
  type AnimateIconHandle,
  type IconBaseProps,
  type AnimatedIconProps,
} from "./animated-icons/types";
import { BriefcaseIcon, PaletteIcon } from "./animated-icons/custom-motion-icons";
import { SOLID_ICON_MAP, solidVariants } from "./animated-icons/solid-icons";

// Re-export types & icons for complete backwards compatibility
export * from "./animated-icons/types";
export * from "./animated-icons/custom-motion-icons";
export * from "./animated-icons/solid-icons";

const ICON_COMPONENT_MAP: Record<AnimatedIconName, React.ComponentType<IconBaseProps>> = {
  "arrow-right": ArrowRightIcon as unknown as React.ComponentType<IconBaseProps>,
  "arrow-left": ArrowLeftIcon as unknown as React.ComponentType<IconBaseProps>,
  sparkles: SparklesIcon as unknown as React.ComponentType<IconBaseProps>,
  home: HouseIcon as unknown as React.ComponentType<IconBaseProps>,
  briefcase: BriefcaseIcon as unknown as React.ComponentType<IconBaseProps>,
  layers: LayersIcon as unknown as React.ComponentType<IconBaseProps>,
  lightbulb: LightbulbIcon as unknown as React.ComponentType<IconBaseProps>,
  info: InfoIcon as unknown as React.ComponentType<IconBaseProps>,
  palette: PaletteIcon as unknown as React.ComponentType<IconBaseProps>,
  type: TypeIcon as unknown as React.ComponentType<IconBaseProps>,
  sun: SunMediumIcon as unknown as React.ComponentType<IconBaseProps>,
  moon: MoonIcon as unknown as React.ComponentType<IconBaseProps>,
  send: SendIcon as unknown as React.ComponentType<IconBaseProps>,
  check: CheckIcon as unknown as React.ComponentType<IconBaseProps>,
  "rotate-ccw": RefreshCwIcon as unknown as React.ComponentType<IconBaseProps>,
  mail: MailIcon as unknown as React.ComponentType<IconBaseProps>,
  "message-square": MessageSquareIcon as unknown as React.ComponentType<IconBaseProps>,
  x: XIcon as unknown as React.ComponentType<IconBaseProps>,
  menu: MenuIcon as unknown as React.ComponentType<IconBaseProps>,
  grid: LayoutGridIcon as unknown as React.ComponentType<IconBaseProps>,
  "chevron-right": ChevronRightIcon as unknown as React.ComponentType<IconBaseProps>,
  "external-link": ExternalLinkIcon as unknown as React.ComponentType<IconBaseProps>,
  zap: ZapIcon as unknown as React.ComponentType<IconBaseProps>,
  pencil: PencilIcon as unknown as React.ComponentType<IconBaseProps>,
  "list-checks": ListChecksIcon as unknown as React.ComponentType<IconBaseProps>,
  globe: GlobeIcon as unknown as React.ComponentType<IconBaseProps>,
  smartphone: SmartphoneIcon as unknown as React.ComponentType<IconBaseProps>,
  laptop: LaptopIcon as unknown as React.ComponentType<IconBaseProps>,
  cpu: CpuIcon as unknown as React.ComponentType<IconBaseProps>,
  "help-circle": InfoIcon as unknown as React.ComponentType<IconBaseProps>,
  folder: FolderIcon as unknown as React.ComponentType<IconBaseProps>,
  sliders: SlidersHorizontalIcon as unknown as React.ComponentType<IconBaseProps>,
  search: SearchIcon as unknown as React.ComponentType<IconBaseProps>,
  code: CodeIcon as unknown as React.ComponentType<IconBaseProps>,
  contact: ContactIcon as unknown as React.ComponentType<IconBaseProps>,
  play: PlayIcon as unknown as React.ComponentType<IconBaseProps>,
};

export function AnimatedIcon({
  name = "sparkles",
  icon,
  size = 16,
  className,
  animateOnHover = true,
  loop = false,
  solid = false,
  hoverDelay = 0,
  oncePerInteraction = false,
  ...props
}: AnimatedIconProps) {
  const IconComponent = icon || (name ? ICON_COMPONENT_MAP[name] : null) || SparklesIcon;
  const SolidComponent = solid && name ? SOLID_ICON_MAP[name] : null;

  const iconRef = useRef<AnimateIconHandle>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const solidControls = useAnimation();

  const hasAnimatedRef = useRef<boolean>(false);
  const hoverDelayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const numericSize = typeof size === "number" ? size : parseInt(size, 10) || 16;

  // Plays original AnimateIcons animation (or solid spring bounce) exactly once per interaction,
  // and smoothly returns to normal state afterwards.
  const executeAnimation = useCallback(() => {
    if (oncePerInteraction && hasAnimatedRef.current) {
      return;
    }
    hasAnimatedRef.current = true;

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }

    if (SolidComponent) {
      solidControls.start("animate");
    } else {
      iconRef.current?.startAnimation?.();
    }

    // Auto-return to normal after animation completes (900ms)
    resetTimerRef.current = setTimeout(() => {
      if (SolidComponent) {
        solidControls.start("normal");
      } else {
        iconRef.current?.stopAnimation?.();
      }
      resetTimerRef.current = null;
    }, 900);
  }, [oncePerInteraction, SolidComponent, solidControls]);

  const stopAnimation = useCallback(() => {
    if (hoverDelayTimerRef.current) {
      clearTimeout(hoverDelayTimerRef.current);
      hoverDelayTimerRef.current = null;
    }
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
    if (SolidComponent) {
      solidControls.start("normal");
    } else {
      iconRef.current?.stopAnimation?.();
    }
    // Interaction session ended on mouseleave, so reset hasAnimated
    hasAnimatedRef.current = false;
  }, [SolidComponent, solidControls]);

  // Seamless parent interaction: triggers animation after hoverDelay threshold
  // and respects once-per-interaction across both hover and click
  useEffect(() => {
    const span = containerRef.current;
    if (!span) return;

    const interactiveParent = span.closest("button, a, [role='button'], [role='tab'], .group, [data-slot='button'], [data-slot='card'], [data-slot='tab']");
    if (!interactiveParent) return;

    const handleParentEnter = () => {
      if (!animateOnHover) return;
      if (oncePerInteraction && hasAnimatedRef.current) return;

      if (hoverDelay > 0) {
        if (hoverDelayTimerRef.current) {
          clearTimeout(hoverDelayTimerRef.current);
        }
        hoverDelayTimerRef.current = setTimeout(() => {
          executeAnimation();
          hoverDelayTimerRef.current = null;
        }, hoverDelay);
      } else {
        executeAnimation();
      }
    };

    const handleParentLeave = () => {
      stopAnimation();
    };

    const handleParentClick = () => {
      // If user clicks, cancel pending hover timer and execute immediately once
      if (hoverDelayTimerRef.current) {
        clearTimeout(hoverDelayTimerRef.current);
        hoverDelayTimerRef.current = null;
      }
      if (!hasAnimatedRef.current) {
        executeAnimation();
      }
    };

    interactiveParent.addEventListener("mouseenter", handleParentEnter);
    interactiveParent.addEventListener("mouseleave", handleParentLeave);
    interactiveParent.addEventListener("click", handleParentClick);

    return () => {
      interactiveParent.removeEventListener("mouseenter", handleParentEnter);
      interactiveParent.removeEventListener("mouseleave", handleParentLeave);
      interactiveParent.removeEventListener("click", handleParentClick);
      if (hoverDelayTimerRef.current) clearTimeout(hoverDelayTimerRef.current);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [animateOnHover, hoverDelay, oncePerInteraction, executeAnimation, stopAnimation]);

  // Loop mode for continuous ambient motion if requested
  useEffect(() => {
    if (!loop) return;
    const interval = setInterval(() => {
      executeAnimation();
    }, 2800);
    return () => clearInterval(interval);
  }, [loop, executeAnimation]);

  return (
    <span
      ref={containerRef}
      data-slot="animated-icon"
      data-icon-name={name}
      data-solid={solid ? "true" : undefined}
      onMouseEnter={() => {
        if (!animateOnHover) return;
        if (oncePerInteraction && hasAnimatedRef.current) return;
        if (hoverDelay > 0) {
          if (hoverDelayTimerRef.current) clearTimeout(hoverDelayTimerRef.current);
          hoverDelayTimerRef.current = setTimeout(() => {
            executeAnimation();
            hoverDelayTimerRef.current = null;
          }, hoverDelay);
        } else {
          executeAnimation();
        }
      }}
      onMouseLeave={stopAnimation}
      onClick={() => {
        if (hoverDelayTimerRef.current) {
          clearTimeout(hoverDelayTimerRef.current);
          hoverDelayTimerRef.current = null;
        }
        if (!hasAnimatedRef.current) {
          executeAnimation();
        }
      }}
      className={cn(
        "inline-flex items-center justify-center shrink-0 select-none",
        className
      )}
      {...props}
    >
      {SolidComponent ? (
        <motion.div
          animate={solidControls}
          initial="normal"
          variants={solidVariants}
          className="inline-flex items-center justify-center shrink-0"
        >
          <SolidComponent size={numericSize} className="shrink-0" />
        </motion.div>
      ) : (
        <Suspense fallback={<span style={{ width: numericSize, height: numericSize }} />}>
          <IconComponent
            ref={iconRef}
            size={numericSize}
            isAnimated={animateOnHover}
            className="shrink-0"
          />
        </Suspense>
      )}
    </span>
  );
}
