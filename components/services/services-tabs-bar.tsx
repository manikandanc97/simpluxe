"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SERVICES_LIST } from "@/lib/content/services";
import { motion } from "motion/react";

interface ServicesTabsBarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export function ServicesTabsBar({ activeId, onSelect }: ServicesTabsBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Drag to scroll logic
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDown.current = true;
    isDragging.current = false;
    containerRef.current.classList.add("cursor-grabbing");
    containerRef.current.style.scrollBehavior = "auto";
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (containerRef.current) {
      containerRef.current.classList.remove("cursor-grabbing");
      containerRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (containerRef.current) {
      containerRef.current.classList.remove("cursor-grabbing");
      containerRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.8;
    if (Math.abs(walk) > 5) {
      isDragging.current = true;
    }
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Reorder array so the active item is always first (acting like a loop)
  const activeIndex = SERVICES_LIST.findIndex((s) => s.id === activeId);
  const reorderedServices =
    activeIndex >= 0
      ? [
          ...SERVICES_LIST.slice(activeIndex),
          ...SERVICES_LIST.slice(0, activeIndex),
        ]
      : SERVICES_LIST;

  // Scroll to the absolute left since the active item is always at index 0 now
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <div
      id="services-tabs-container"
      className="w-full relative z-20 pb-6 sm:pb-6 border-b border-surface-elevated"
    >
      <div
        ref={containerRef}
        className="flex items-center gap-2 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full cursor-grab py-1 px-0.5 select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {reorderedServices.map((service) => {
          const isActive = service.id === activeId;
          const Icon = service.icon;
          const count = parseInt(service.number, 10);

          return (
            <motion.button
              layout
              key={service.id}
              type="button"
              onClick={() => {
                if (isDragging.current) return;
                onSelect(service.id);
              }}
              className={cn(
                "group relative flex items-center gap-2 px-4.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap",
                isActive
                  ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary)] text-white shadow-elevated scale-[1.02]"
                  : "bg-white/90 hover:bg-white text-muted-foreground border border-surface-elevated hover:border-primary/30 shadow-2xs"
              )}
            >
              {Icon && (
                <Icon
                  size={15}
                  className={cn(
                    "transition-transform shrink-0",
                    isActive ? "text-white" : "text-muted-foreground group-hover:scale-110"
                  )}
                />
              )}
              <span>{service.tabLabel}</span>
              <span
                className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded-full transition-colors",
                  isActive
                    ? "bg-white/20 text-white backdrop-blur-xs"
                    : "bg-[var(--surface-elevated)] text-muted-foreground group-hover:bg-[var(--surface-elevated)]"
                )}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
