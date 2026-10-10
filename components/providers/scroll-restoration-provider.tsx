"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollRestorationProvider() {
  const pathname = usePathname();
  const initialPath = useRef<string | null>(pathname);

  useEffect(() => {
    if (pathname !== initialPath.current) initialPath.current = null;
    const scrollKey = `scroll-pos-${pathname}`;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let debounceTimer: ReturnType<typeof setTimeout> | undefined;
    let isRestoring = false;

    const savePosition = () => {
      if (isRestoring) return;
      try {
        sessionStorage.setItem(scrollKey, String(window.scrollY));
      } catch {
        // Storage may be disabled by browser privacy settings.
      }
    };

    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (initialPath.current === pathname && navigation?.type === "reload" && !window.location.hash) {
      try {
        const position = Number(sessionStorage.getItem(scrollKey));
        if (Number.isFinite(position) && position > 0) {
          isRestoring = true;
          for (const delay of [0, 50, 100, 250, 500, 1000]) {
            timers.push(setTimeout(() => {
              window.scrollTo({ top: position, left: 0, behavior: "instant" });
            }, delay));
          }
          timers.push(setTimeout(() => { isRestoring = false; }, 1100));
        }
      } catch {
        // Let the browser handle restoration when storage is unavailable.
      }
    }

    const handleScroll = () => {
      if (isRestoring) return;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(savePosition, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pagehide", savePosition);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pagehide", savePosition);
      clearTimeout(debounceTimer);
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
