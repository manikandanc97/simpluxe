"use client";

import React, { useRef, useState } from "react";
import { m as motion, useAnimationControls, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion, hoverLift, tapScale, fadeUp } from "@/lib/motion";

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
          className="pointer-events-none absolute -inset-2 -z-10 rounded-xl bg-gradient-to-r from-rose-500/35 via-primary/30 to-amber-500/35 blur-xl"
        />

        <motion.button
          ref={setRefs}
          type={type}
          disabled={disabled || isPending}
          onClick={handleClick}
          animate={controls}
          initial={false}
          variants={disableScrollAnimation ? undefined : fadeUp}
          whileHover={disabled || isPending ? undefined : hoverLift}
          whileTap={disabled || isPending ? undefined : tapScale}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 25,
          }}
          className={cn(
            "group/button inline-flex h-11 w-full shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-transparent bg-primary px-6 font-satoshi text-sm font-semibold tracking-tight text-primary-foreground shadow-sm outline-none transition-colors duration-200 hover:bg-primary-hover focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:bg-primary sm:h-12 sm:px-7 sm:text-base",
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
