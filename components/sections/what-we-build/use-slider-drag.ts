"use client";

import { useCallback, useEffect, useRef } from "react";
import type React from "react";

export interface UseSliderDragOptions {
  /** Current snapped card index (used for momentum fall-back). */
  activeIndex: number;
  /** Programmatic scroll to a given card index (smooth). */
  scrollToIndex: (index: number) => void;
  /** Called after momentum resolves with the best-fit card index. */
  onSnap: (bestIndex: number) => void;
  /** Total number of cards in the slider. */
  totalItems: number;
}

export interface UseSliderDragResult {
  /** Attach to the slider element's `onMouseDown` prop. */
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** Attach to the slider element's `onClickCapture` prop. */
  onClickCapture: (e: React.MouseEvent) => void;
}

/**
 * Encapsulates drag tracking, velocity/momentum calculation, RAF-batched scroll
 * writes, and CSS snap-restore for a horizontally-scrollable card carousel.
 *
 * The hook returns two stable event-handler callbacks that must be attached to
 * the same element referenced by `sliderRef`.  All internal refs and timers are
 * cleaned up when the host component unmounts.
 */
export function useSliderDrag(
  sliderRef: React.RefObject<HTMLDivElement | null>,
  options: UseSliderDragOptions,
): UseSliderDragResult {
  // --- Options ref so callbacks never go stale when props change ---
  const optionsRef = useRef(options);
  useEffect(() => {
    optionsRef.current = options;
  });

  // --- Drag tracking refs ---
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const lastClientXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);

  // --- Animation frame and snap-restore refs ---
  const rafIdRef = useRef<number | null>(null);
  const targetScrollLeftRef = useRef(0);
  const snapRestoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // --- Cleanup ref for window-level drag listeners ---
  const dragCleanupRef = useRef<(() => void) | null>(null);

  // --- Unmount: cancel any in-flight timers, frames, and window listeners ---
  useEffect(() => {
    const slider = sliderRef.current;
    return () => {
      if (snapRestoreTimerRef.current) {
        clearTimeout(snapRestoreTimerRef.current);
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (dragCleanupRef.current) {
        dragCleanupRef.current();
        dragCleanupRef.current = null;
      }
      if (slider) {
        slider.style.cursor = "";
        slider.style.userSelect = "";
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.button !== 0) return;
      const slider = sliderRef.current;
      if (!slider) return;

      // Cancel any in-flight snap restore and momentum frame before starting a new drag
      if (snapRestoreTimerRef.current) {
        clearTimeout(snapRestoreTimerRef.current);
        snapRestoreTimerRef.current = null;
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (dragCleanupRef.current) {
        dragCleanupRef.current();
        dragCleanupRef.current = null;
      }

      // Initialise drag state
      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      dragStartXRef.current = e.clientX;
      dragScrollLeftRef.current = slider.scrollLeft;
      targetScrollLeftRef.current = slider.scrollLeft;
      lastClientXRef.current = e.clientX;
      lastTimeRef.current = performance.now();
      velocityRef.current = 0;

      // Temporarily disable CSS scroll-snapping so dragging is completely smooth
      slider.style.scrollSnapType = "none";
      slider.style.scrollBehavior = "auto";
      slider.style.cursor = "grabbing";
      slider.style.userSelect = "none";

      // --- Window-level move handler (registered once per drag) ---
      const handleWindowMouseMove = (ev: MouseEvent) => {
        if (!isDraggingRef.current) return;
        const currentSlider = sliderRef.current;
        if (!currentSlider) return;

        const dx = ev.clientX - dragStartXRef.current;
        if (Math.abs(dx) > 4) {
          hasDraggedRef.current = true;
        }

        const now = performance.now();
        const dt = now - lastTimeRef.current;
        if (dt > 8) {
          // Exponentially-smoothed velocity (px/ms), alpha = 0.6 current / 0.4 previous
          const currentV = (ev.clientX - lastClientXRef.current) / dt;
          velocityRef.current = 0.6 * currentV + 0.4 * velocityRef.current;
          lastClientXRef.current = ev.clientX;
          lastTimeRef.current = now;
        }

        const newScrollLeft = dragScrollLeftRef.current - dx;
        targetScrollLeftRef.current = newScrollLeft;

        // Batch the DOM write into the next animation frame
        if (!rafIdRef.current) {
          rafIdRef.current = requestAnimationFrame(() => {
            if (sliderRef.current) {
              sliderRef.current.scrollLeft = targetScrollLeftRef.current;
            }
            rafIdRef.current = null;
          });
        }
      };

      const cleanupDragListeners = () => {
        window.removeEventListener("mousemove", handleWindowMouseMove);
        window.removeEventListener("mouseup", handleWindowMouseUp);
        if (dragCleanupRef.current === cleanupDragListeners) {
          dragCleanupRef.current = null;
        }
      };

      // --- Window-level up handler ---
      const handleWindowMouseUp = () => {
        cleanupDragListeners();

        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }

        const currentSlider = sliderRef.current;
        if (!currentSlider) return;

        isDraggingRef.current = false;
        currentSlider.style.cursor = "";
        currentSlider.style.userSelect = "";

        if (hasDraggedRef.current) {
          // Project landing position from drag velocity (momentum distance = v * 180 ms)
          const momentumDistance = velocityRef.current * 180;
          const projectedScrollLeft = currentSlider.scrollLeft - momentumDistance;

          // Find the card index whose left edge is closest to the projected position
          const sliderLeft = currentSlider.getBoundingClientRect().left;
          const firstCard = currentSlider.firstElementChild as HTMLElement | null;
          const { activeIndex, scrollToIndex, onSnap, totalItems } = optionsRef.current;
          let bestIndex = activeIndex;

          if (firstCard) {
            const gutter =
              firstCard.getBoundingClientRect().left - sliderLeft + currentSlider.scrollLeft;
            const children = Array.from(currentSlider.children) as HTMLElement[];
            let minDistance = Number.POSITIVE_INFINITY;

            children.forEach((child, idx) => {
              const cardLeft =
                child.getBoundingClientRect().left -
                sliderLeft +
                currentSlider.scrollLeft -
                gutter;
              const dist = Math.abs(cardLeft - projectedScrollLeft);
              if (dist < minDistance) {
                minDistance = dist;
                bestIndex = idx;
              }
            });
          }

          bestIndex = Math.max(0, Math.min(bestIndex, totalItems - 1));

          // Smoothly glide to the target card and notify the parent
          scrollToIndex(bestIndex);
          onSnap(bestIndex);

          // Re-enable scroll snap after the glide animation settles (~400 ms)
          snapRestoreTimerRef.current = setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.scrollSnapType = "";
              sliderRef.current.style.scrollBehavior = "";
            }
          }, 400);
        } else {
          // No meaningful drag — restore snap immediately
          currentSlider.style.scrollSnapType = "";
          currentSlider.style.scrollBehavior = "";
        }
      };

      dragCleanupRef.current = cleanupDragListeners;
      window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
      window.addEventListener("mouseup", handleWindowMouseUp);
    },
    // sliderRef is stable; optionsRef is always kept current via the effect above
    [sliderRef],
  );

  /**
   * Intercept clicks that follow a drag gesture so that card links are not
   * navigated to when the user was clearly dragging rather than clicking.
   */
  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  }, []);

  return { onMouseDown, onClickCapture };
}
