"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { SERVICES_LIST, SERVICES_TABS_COPY } from "@/lib/content/services";
import { AnimatedIcon } from "@/components/ui/animated-icon";

interface ServicesTabsBarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

const COPIES = [0, 1, 2] as const;

export function ServicesTabsBar({ activeId, onSelect }: ServicesTabsBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef(new Map<string, HTMLButtonElement>());
  const cycleWidth = useRef(0);
  const animation = useRef<number | null>(null);
  const drag = useRef({ pointerId: -1, startX: 0, lastX: 0, moved: false });
  const activeRef = useRef(activeId);
  const reducedMotion = useReducedMotion();
  const [selectionVersion, setSelectionVersion] = useState(0);

  const stopAnimation = useCallback(() => {
    if (animation.current !== null) cancelAnimationFrame(animation.current);
    animation.current = null;
  }, []);

  // Rebase into the identical middle copy without changing the visible pixels.
  const normalizeScroll = useCallback(() => {
    const container = containerRef.current;
    const width = cycleWidth.current;
    if (!container || !width) return;
    const left = container.scrollLeft;
    const base = width - 4;
    if (left < base || left >= base + width) {
      container.scrollLeft = base + (((left - base) % width) + width) % width;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const cycle = cycleRef.current;
    if (!container || !cycle) return;
    const measure = () => {
      stopAnimation();
      cycleWidth.current = cycle.getBoundingClientRect().width;
      const tab = tabsRef.current.get(activeRef.current);
      if (tab) container.scrollLeft = tab.offsetLeft - 4;
      normalizeScroll();
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(cycle);
    observer.observe(container);

    // Leave vertical page scrolling alone; capture horizontal/Shift wheel.
    const wheel = (event: WheelEvent) => {
      const delta = event.shiftKey ? event.deltaY || event.deltaX : event.deltaX;
      if (!delta || (!event.shiftKey && Math.abs(event.deltaY) > Math.abs(delta))) return;
      event.preventDefault();
      stopAnimation();
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? container.clientWidth : 1;
      container.scrollLeft += delta * unit;
      normalizeScroll();
    };
    container.addEventListener("wheel", wheel, { passive: false });
    return () => {
      observer.disconnect();
      container.removeEventListener("wheel", wheel);
      stopAnimation();
    };
  }, [normalizeScroll, stopAnimation]);

  useEffect(() => {
    activeRef.current = activeId;
    stopAnimation();
    const container = containerRef.current;
    const tab = tabsRef.current.get(activeId);
    const width = cycleWidth.current;
    if (!container || !tab || !width) return;
    // Take the shortest circular path; the service order never changes.
    const target = tab.offsetLeft - 4;
    const rawDistance = target - container.scrollLeft;
    const distance = rawDistance - Math.round(rawDistance / width) * width;
    if (reducedMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(distance) < 1) {
      container.scrollLeft += distance;
      normalizeScroll();
      return;
    }
    const start = performance.now();
    const origin = container.scrollLeft;
    const step = (now: number) => {
      const progress = Math.min((now - start) / 420, 1);
      const position = distance * (1 - Math.pow(1 - progress, 3));
      const left = origin + position;
      const base = width - 4;
      container.scrollLeft = base + (((left - base) % width) + width) % width;
      animation.current = progress < 1 ? requestAnimationFrame(step) : null;
    };
    animation.current = requestAnimationFrame(step);
    return stopAnimation;
  }, [activeId, selectionVersion, reducedMotion, normalizeScroll, stopAnimation]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    stopAnimation();
    drag.current.moved = false;
    // Native touch scrolling retains momentum. Capture mouse/pen only after
    // crossing the drag threshold so a regular press still clicks the button.
    if (event.pointerType === "touch" || event.button !== 0) return;
    event.preventDefault();
    drag.current = { pointerId: event.pointerId, startX: event.clientX, lastX: event.clientX, moved: false };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const state = drag.current;
    if (!container || state.pointerId !== event.pointerId) return;
    if (!state.moved && Math.abs(event.clientX - state.startX) < 6) return;
    if (!state.moved) {
      state.moved = true;
      container.setPointerCapture(event.pointerId);
      container.classList.add("cursor-grabbing");
    }
    container.scrollLeft += state.lastX - event.clientX;
    state.lastX = event.clientX;
    normalizeScroll();
  };

  const endDrag = () => {
    drag.current.pointerId = -1;
    containerRef.current?.classList.remove("cursor-grabbing");
  };

  const select = (id: string) => {
    if (drag.current.moved) return;
    tabsRef.current.get(id)?.focus({ preventScroll: true });
    setSelectionVersion((version) => version + 1);
    onSelect(id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % SERVICES_LIST.length; break;
      case "ArrowLeft": next = (index - 1 + SERVICES_LIST.length) % SERVICES_LIST.length; break;
      case "Home": next = 0; break;
      case "End": next = SERVICES_LIST.length - 1; break;
      default: return;
    }
    event.preventDefault();
    drag.current.moved = false;
    select(SERVICES_LIST[next].id);
  };

  return (
    <div id="services-tabs-container" className="relative z-20 w-full border-b border-surface-elevated pb-6">
      <div
        ref={containerRef}
        className="relative flex w-full cursor-grab select-none items-center overflow-x-auto overscroll-x-contain no-scrollbar py-2"
        onScroll={normalizeScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
        onPointerLeave={() => { if (!drag.current.moved) endDrag(); }}
        onDragStart={(event) => event.preventDefault()}
      >
        {COPIES.map((copy) => (
          <div
            key={copy}
            ref={copy === 1 ? cycleRef : undefined}
            role={copy === 1 ? "tablist" : undefined}
            aria-label={copy === 1 ? SERVICES_TABS_COPY.serviceCategories : undefined}
            aria-hidden={copy !== 1 ? true : undefined}
            className="flex shrink-0 items-center gap-2 pr-2"
          >
            {SERVICES_LIST.map((service, index) => {
              const isActive = service.id === activeId;
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  ref={copy === 1 ? (node) => {
                    if (node) tabsRef.current.set(service.id, node);
                    else tabsRef.current.delete(service.id);
                  } : undefined}
                  id={copy === 1 ? `service-tab-${service.id}` : undefined}
                  type="button"
                  role={copy === 1 ? "tab" : undefined}
                  aria-selected={copy === 1 ? isActive : undefined}
                  aria-controls={copy === 1 ? "services-panel" : undefined}
                  tabIndex={copy === 1 && isActive ? 0 : -1}
                  data-slot="tab"
                  data-service-id={service.id}
                  onClick={(event) => {
                    if (event.detail === 0) drag.current.moved = false;
                    select(service.id);
                  }}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={cn(
                    "group relative flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border px-4.5 py-2 text-xs font-semibold transition-colors duration-200 sm:px-4 sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none",
                    isActive
                      ? "border-primary bg-primary text-white shadow-2xs"
                      : "border-surface-elevated bg-white/90 text-muted-foreground shadow-2xs hover:border-primary/30 hover:bg-white hover:text-foreground"
                  )}
                >
                  {Icon && <AnimatedIcon icon={Icon} size={15} className="shrink-0" />}
                  <span>{service.tabLabel}</span>
                  <span className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-bold transition-colors duration-200 motion-reduce:transition-none",
                    isActive ? "bg-white/20 text-white" : "bg-surface-elevated text-muted-foreground"
                  )}>
                    {parseInt(service.number, 10)}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
