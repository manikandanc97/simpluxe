"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { type Project } from "@/types/project";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { ExternalLinkIcon } from "@animateicons/react/lucide/external-link-icon";
import { LockIcon } from "@animateicons/react/lucide/lock-icon";
import { WORK_VIEW_COPY } from "@/lib/data/projects";

interface ProjectTemplateCardProps {
  project: Project;
}

export function ProjectTemplateCard({ project }: ProjectTemplateCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [duration, setDuration] = useState(5.5);
  const [returnDuration, setReturnDuration] = useState(4);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (containerRef.current && imgRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const imageHeight = imgRef.current.clientHeight;

      if (imageHeight > containerHeight) {
        const delta = -(imageHeight - containerHeight);
        setTranslateY(delta);
        const calculatedDuration = Math.min(
          40,
          Math.max(18, Math.abs(delta) / 130)
        );
        setDuration(calculatedDuration);
      }
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (imgRef.current) {
      try {
        const style = window.getComputedStyle(imgRef.current);
        const transform = style.transform;
        let currentY = 0;
        if (transform && transform !== "none") {
          const matrix = new DOMMatrixReadOnly(transform);
          currentY = Math.abs(matrix.m42);
        }
        // Smooth and slow return proportional to scrolled distance: ~220px/s
        const calculatedReturn = Math.max(
          2.5,
          Math.min(10, currentY / 220)
        );
        setReturnDuration(calculatedReturn);
      } catch {
        setReturnDuration(4.5);
      }
    }
    setTranslateY(0);
  }, []);

  const imageSrc =
    project.fullPageImage || project.desktopImage || project.mobileImage;

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col rounded-xl bg-white border border-surface-elevated overflow-hidden shadow-card transition-all duration-300 hover:shadow-xl hover:border-primary/30 group"
    >
      {/* ── Mini Browser Chrome Header ── */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-50 border-b border-surface-elevated select-none shrink-0">
        {/* Left: Traffic light dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="size-2.5 rounded-full bg-red-400/90" />
          <span className="size-2.5 rounded-full bg-amber-400/90" />
          <span className="size-2.5 rounded-full bg-green-500/90" />
        </div>

        {/* Center: Domain pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-surface-elevated text-2xs font-mono text-muted-foreground truncate max-w-44">
          <AnimatedIcon icon={LockIcon} size={10} className="text-emerald-500 shrink-0" />
          <span className="truncate">{project.domain}</span>
        </div>

        {/* Right: Number */}
        <span className="text-2xs font-bold text-primary tracking-wide uppercase">
          {project.number}
        </span>
      </div>

      {/* ── Scroll Viewport ── */}
      <div
        ref={containerRef}
        className="bg-slate-100 flex items-start justify-center template-scroll-window"
      >
        {imageSrc ? (
          <Image
            ref={imgRef}
            src={imageSrc}
            alt={project.name}
            width={1440}
            height={5000}
            style={{
              transform: `translate3d(0, ${translateY}px, 0)`,
              transition: isHovered
                ? `transform ${duration}s linear`
                : `transform ${returnDuration}s ease-out`,
              display: "block",
              width: "100%",
              height: "auto",
            }}
            className="will-change-transform select-none"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center gap-3">
            <AnimatedIcon icon={LockIcon} size={28} className="text-slate-300" />
            <span className="text-xs font-medium text-muted-foreground">
              {WORK_VIEW_COPY.previewComingSoon}
            </span>
          </div>
        )}

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* ── Bottom Bar: Name + Link only ── */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white border-t border-surface-elevated">
        <h3 className="text-sm font-semibold text-foreground tracking-tight truncate">
          {project.name}
        </h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={WORK_VIEW_COPY.openInNewTab(project.name)}
          className="size-7 rounded-full bg-surface-elevated text-muted-foreground flex items-center justify-center shrink-0 transition-colors hover:bg-primary hover:text-white"
        >
          <AnimatedIcon icon={ExternalLinkIcon} size={12} />
        </a>
      </div>
    </article>
  );
}
