"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimationControls, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion, hoverLift, tapScale, fadeUp, viewport } from "@/lib/motion";

export interface CelebratoryButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  isPending?: boolean;
  onCelebrate?: () => void;
  disableScrollAnimation?: boolean;
}

export const CelebratoryButton = React.forwardRef<
  HTMLButtonElement,
  CelebratoryButtonProps
>(
  (
    {
      children,
      className,
      disabled,
      isPending = false,
      onClick,
      onCelebrate,
      type = "button",
      disableScrollAnimation = false,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLButtonElement | null>(null);
    const controls = useAnimationControls();
    const [isExploding, setIsExploding] = useState(false);

    const setRefs = (element: HTMLButtonElement | null) => {
      internalRef.current = element;
      if (typeof forwardedRef === "function") {
        forwardedRef(element);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = element;
      }
    };

    const triggerSpringAndConfetti = async () => {
      if (disabled || isPending) return;

      const buttonEl = internalRef.current;
      if (!buttonEl) return;

      if (type === "submit" && buttonEl.form && !buttonEl.form.checkValidity()) {
        return;
      }

      setIsExploding(true);
      onCelebrate?.();

      if (!prefersReducedMotion()) {
        await controls.start({
          scale: [0.93, 1.06, 0.98, 1],
          transition: {
            type: "spring",
            stiffness: 600,
            damping: 18,
            mass: 0.8,
          },
        });
      }

      window.setTimeout(() => {
        setIsExploding(false);
      }, 400);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      triggerSpringAndConfetti();
      onClick?.(e);
    };

    return (
      <div className="relative w-full">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isExploding
              ? { opacity: [0, 0.65, 0], scale: [0.8, 1.25, 1.45] }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -inset-2 rounded-full bg-gradient-to-r from-rose-500/35 via-primary/30 to-amber-500/35 blur-xl -z-10"
        />

        <motion.button
          ref={setRefs}
          type={type}
          disabled={disabled || isPending}
          onClick={handleClick}
          animate={controls}
          initial={disableScrollAnimation ? undefined : "hidden"}
          whileInView={disableScrollAnimation ? undefined : "visible"}
          viewport={disableScrollAnimation ? undefined : viewport}
          variants={disableScrollAnimation ? undefined : fadeUp}
          whileHover={disabled || isPending ? undefined : hoverLift}
          whileTap={disabled || isPending ? undefined : tapScale}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 25,
          }}
          className={cn(
            "group/button font-satoshi inline-flex w-full shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-bold tracking-tight whitespace-nowrap transition-colors duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer shadow-elevated hover:shadow-elevated bg-primary text-primary-foreground hover:bg-primary-hover h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base gap-2",
            className
          )}
          {...props}
        >
          {children}
        </motion.button>
      </div>
    );
  }
);

CelebratoryButton.displayName = "CelebratoryButton";
