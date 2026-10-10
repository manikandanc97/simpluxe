"use client";

import { cn } from "@/lib/utils";
import { m as motion, useAnimation } from "motion/react";
import React, { useCallback, useEffect, useRef } from "react";

import { ArrowLeftIcon } from "@animateicons/react/lucide/arrow-left-icon";
import { ArrowRightIcon } from "@animateicons/react/lucide/arrow-right-icon";
import { CheckIcon } from "@animateicons/react/lucide/check-icon";
import { ChevronRightIcon } from "@animateicons/react/lucide/chevron-right-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { ContactIcon } from "@animateicons/react/lucide/contact-icon";
import { CpuIcon } from "@animateicons/react/lucide/cpu-icon";
import { ExternalLinkIcon } from "@animateicons/react/lucide/external-link-icon";
import { FolderIcon } from "@animateicons/react/lucide/folder-icon";
import { GlobeIcon } from "@animateicons/react/lucide/globe-icon";
import { HouseIcon } from "@animateicons/react/lucide/house-icon";
import { InfoIcon } from "@animateicons/react/lucide/info-icon";
import { LaptopIcon } from "@animateicons/react/lucide/laptop-icon";
import { LayersIcon } from "@animateicons/react/lucide/layers-icon";
import { LayoutGridIcon } from "@animateicons/react/lucide/layout-grid-icon";
import { LightbulbIcon } from "@animateicons/react/lucide/lightbulb-icon";
import { ListChecksIcon } from "@animateicons/react/lucide/list-checks-icon";
import { MailIcon } from "@animateicons/react/lucide/mail-icon";
import { MenuIcon } from "@animateicons/react/lucide/menu-icon";
import { MessageSquareIcon } from "@animateicons/react/lucide/message-square-icon";
import { MoonIcon } from "@animateicons/react/lucide/moon-icon";
import { PencilIcon } from "@animateicons/react/lucide/pencil-icon";
import { RefreshCwIcon } from "@animateicons/react/lucide/refresh-cw-icon";
import { SearchIcon } from "@animateicons/react/lucide/search-icon";
import { SendIcon } from "@animateicons/react/lucide/send-icon";
import { SlidersHorizontalIcon } from "@animateicons/react/lucide/sliders-horizontal-icon";
import { SmartphoneIcon } from "@animateicons/react/lucide/smartphone-icon";
import { SparklesIcon } from "@animateicons/react/lucide/sparkles-icon";
import { SunMediumIcon } from "@animateicons/react/lucide/sun-medium-icon";
import { TypeIcon } from "@animateicons/react/lucide/type-icon";
import { XIcon } from "@animateicons/react/lucide/x-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { PlayIcon } from "@animateicons/react/lucide/play-icon";

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
  parentSelector,
  ...props
}: AnimatedIconProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (icon || (name ? ICON_COMPONENT_MAP[name] : null) || SparklesIcon) as React.ElementType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SolidComponent = solid && name ? (SOLID_ICON_MAP[name] as React.ElementType<any>) : null;

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
  // and respects once-per-interaction across both hover and click.
  // We defer the DOM query (closest) to avoid forced reflows during React's commit phase.
  useEffect(() => {
    let interactiveParent: Element | null = null;

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
      if (hoverDelayTimerRef.current) {
        clearTimeout(hoverDelayTimerRef.current);
        hoverDelayTimerRef.current = null;
      }
      if (!hasAnimatedRef.current) {
        executeAnimation();
      }
    };

    const timeoutId = setTimeout(() => {
      const span = containerRef.current;
      if (!span) return;

      interactiveParent = parentSelector
        ? span.closest(parentSelector)
        : span.closest(
            "button, a, [role='button'], [role='tab'], .group, [class*='group/'], [data-slot='button'], [data-slot='card'], [data-slot='tab'], [data-card], .card, [class*='shadow-card'], [class*='hover:shadow'], [class*='hover:border']"
          );
      
      if (!interactiveParent) return;

      interactiveParent.addEventListener("mouseenter", handleParentEnter);
      interactiveParent.addEventListener("mouseleave", handleParentLeave);
      interactiveParent.addEventListener("click", handleParentClick);
    }, 150); // Delay slightly to ensure layout is settled and avoid blocking the main thread during hydration

    return () => {
      clearTimeout(timeoutId);
      if (interactiveParent) {
        interactiveParent.removeEventListener("mouseenter", handleParentEnter);
        interactiveParent.removeEventListener("mouseleave", handleParentLeave);
        interactiveParent.removeEventListener("click", handleParentClick);
      }
      if (hoverDelayTimerRef.current) clearTimeout(hoverDelayTimerRef.current);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [animateOnHover, hoverDelay, oncePerInteraction, executeAnimation, stopAnimation, parentSelector]);

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
        
          <IconComponent
            ref={iconRef}
            size={numericSize}
            isAnimated={animateOnHover}
            className="shrink-0"
          />
        
      )}
    </span>
  );
}
