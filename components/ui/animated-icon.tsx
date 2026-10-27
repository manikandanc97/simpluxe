"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef } from "react";

import { ArrowLeftIcon } from "@animateicons/react/lucide/arrow-left-icon";
import { ArrowRightIcon } from "@animateicons/react/lucide/arrow-right-icon";
import { ArrowUpIcon } from "@animateicons/react/lucide/arrow-up-icon";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import { BriefcaseIcon } from "@animateicons/react/lucide/briefcase-icon";
import { CheckIcon } from "@animateicons/react/lucide/check-icon";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
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
import { PaletteIcon } from "@animateicons/react/lucide/palette-icon";
import { PencilIcon } from "@animateicons/react/lucide/pencil-icon";
import { PhoneIcon } from "@animateicons/react/lucide/phone-icon";
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

// Re-export types & icons for complete backwards compatibility
export * from "./animated-icons/types";

const ICON_COMPONENT_MAP: Record<AnimatedIconName, React.ComponentType<IconBaseProps>> = {
  "arrow-right": ArrowRightIcon as unknown as React.ComponentType<IconBaseProps>,
  "arrow-left": ArrowLeftIcon as unknown as React.ComponentType<IconBaseProps>,
  "arrow-up": ArrowUpIcon as unknown as React.ComponentType<IconBaseProps>,
  "arrow-up-right": ArrowUpRightIcon as unknown as React.ComponentType<IconBaseProps>,
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
  phone: PhoneIcon as unknown as React.ComponentType<IconBaseProps>,
  "message-square": MessageSquareIcon as unknown as React.ComponentType<IconBaseProps>,
  x: XIcon as unknown as React.ComponentType<IconBaseProps>,
  menu: MenuIcon as unknown as React.ComponentType<IconBaseProps>,
  grid: LayoutGridIcon as unknown as React.ComponentType<IconBaseProps>,
  "chevron-down": ChevronDownIcon as unknown as React.ComponentType<IconBaseProps>,
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
  refresh: RefreshCwIcon as unknown as React.ComponentType<IconBaseProps>,
};

export function AnimatedIcon({
  name = "sparkles",
  icon,
  size = 16,
  className,
  animateOnHover = true,
  loop = false,
  hoverDelay = 0,
  oncePerInteraction = false,
  parentSelector,
  style,
  ...props
}: AnimatedIconProps) {
  const IconComponent = (icon || ICON_COMPONENT_MAP[name]) as React.ElementType<IconBaseProps>;
  const iconRef = useRef<AnimateIconHandle>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  const hasAnimatedRef = useRef<boolean>(false);
  const hoverDelayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationRunRef = useRef(0);

  const numericSize = typeof size === "number" ? size : parseInt(size, 10) || 16;

  // Plays original AnimateIcons animation (or solid spring bounce) exactly once per interaction,
  // and smoothly returns to normal state afterwards.
  const executeAnimation = useCallback(() => {
    if (oncePerInteraction && hasAnimatedRef.current) {
      return;
    }
    hasAnimatedRef.current = true;

    const run = ++animationRunRef.current;
    const animation = iconRef.current?.startAnimation?.();

    // Let each icon finish its own timeline instead of cutting longer icons short.
    animation?.then(() => {
      if (animationRunRef.current !== run) return;
      iconRef.current?.stopAnimation?.();
    });
  }, [oncePerInteraction]);

  const stopAnimation = useCallback(() => {
    if (hoverDelayTimerRef.current) {
      clearTimeout(hoverDelayTimerRef.current);
      hoverDelayTimerRef.current = null;
    }
    animationRunRef.current += 1;
    iconRef.current?.stopAnimation?.();
    // Interaction session ended on mouseleave, so reset hasAnimated
    hasAnimatedRef.current = false;
  }, []);

  // One interaction surface owns the icon, so moving between its text and glyph
  // never restarts or cancels the original animation.
  useEffect(() => {
    const span = containerRef.current;
    if (!span) return;

    const controlSelector = "button, a, [role='button'], [role='tab'], [role='menuitem'], [role='option'], [data-slot='button'], [data-slot='tab'], label";
    const surfaceSelector = "[data-animated-icon-target], [data-slot='card'], [data-card], .card, .group, [class*='group/']";
    const target = (parentSelector ? span.closest(parentSelector) : null)
      ?? span.closest(controlSelector)
      ?? span.parentElement?.closest(surfaceSelector)
      ?? span;
    let hovered = false;
    let focused = false;

    const enter = () => {
      if (!animateOnHover || (oncePerInteraction && hasAnimatedRef.current)) return;
      if (hoverDelayTimerRef.current) return;
      if (hoverDelay > 0) {
        hoverDelayTimerRef.current = setTimeout(() => {
          hoverDelayTimerRef.current = null;
          executeAnimation();
        }, hoverDelay);
      } else {
        executeAnimation();
      }
    };
    const leave = () => {
      if (!hovered && !focused) stopAnimation();
    };
    const mouseEnter = () => { hovered = true; enter(); };
    const mouseLeave = () => { hovered = false; leave(); };
    const focusIn = (event: Event) => {
      if (event instanceof FocusEvent && event.relatedTarget instanceof Node && target.contains(event.relatedTarget)) return;
      focused = true;
      enter();
    };
    const focusOut = (event: Event) => {
      if (event instanceof FocusEvent && event.relatedTarget instanceof Node && target.contains(event.relatedTarget)) return;
      focused = false;
      leave();
    };
    const click = () => {
      if (!animateOnHover) return;
      if (hoverDelayTimerRef.current) {
        clearTimeout(hoverDelayTimerRef.current);
        hoverDelayTimerRef.current = null;
      }
      if (!hasAnimatedRef.current) executeAnimation();
    };

    target.addEventListener("mouseenter", mouseEnter);
    target.addEventListener("mouseleave", mouseLeave);
    target.addEventListener("focusin", focusIn);
    target.addEventListener("focusout", focusOut);
    target.addEventListener("click", click);
    if (target.matches(":hover")) mouseEnter();
    if (target.contains(document.activeElement) && document.activeElement !== document.body) {
      focused = true;
      enter();
    }

    return () => {
      target.removeEventListener("mouseenter", mouseEnter);
      target.removeEventListener("mouseleave", mouseLeave);
      target.removeEventListener("focusin", focusIn);
      target.removeEventListener("focusout", focusOut);
      target.removeEventListener("click", click);
      if (hoverDelayTimerRef.current) clearTimeout(hoverDelayTimerRef.current);
      hoverDelayTimerRef.current = null;
      animationRunRef.current += 1;
      hasAnimatedRef.current = false;
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
      className={cn(
        "animated-icon-frame inline-flex items-center justify-center shrink-0 select-none",
        className
      )}
      style={{ "--animated-icon-size": `${numericSize}px`, ...style } as React.CSSProperties}
      {...props}
    >
      <IconComponent
        ref={iconRef}
        size={numericSize}
        isAnimated={animateOnHover}
        className="shrink-0"
      />
    </span>
  );
}
