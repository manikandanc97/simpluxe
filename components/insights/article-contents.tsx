"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ArticleContentsProps {
  headings: string[];
  showSectionLabels?: boolean;
}

export function ArticleContents({
  headings,
  showSectionLabels = true,
}: ArticleContentsProps) {
  const [activeId, setActiveId] = useState("insight-section-1");

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;
      const activationLine = window.innerHeight * 0.3;
      let currentId = "insight-section-1";

      for (let index = 0; index < headings.length; index += 1) {
        const section = document.getElementById(`insight-section-${index + 1}`);
        if (!section || section.getBoundingClientRect().top > activationLine) break;
        currentId = section.id;
      }

      setActiveId(currentId);
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [headings]);

  const handleTopicClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();
    setActiveId(id);
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <ol className="flex flex-col gap-2">
      {headings.map((heading, index) => {
        const id = `insight-section-${index + 1}`;
        const isActive = activeId === id;

        return (
          <li key={heading}>
            <a
              href={`#${id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={(event) => handleTopicClick(event, id)}
              className={cn(
                "group flex items-stretch gap-3 rounded-xl border p-3 text-sm leading-relaxed outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                isActive
                  ? "border-primary/30 bg-primary/10 font-semibold text-primary shadow-xs"
                  : "border-transparent text-muted-foreground hover:border-border hover:bg-surface hover:text-heading"
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "w-1 shrink-0 rounded-full transition-colors",
                  isActive ? "bg-primary" : "bg-border group-hover:bg-primary/30"
                )}
              />
              {showSectionLabels ? (
                <span className="font-mono text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : null}
              <span>{heading}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
