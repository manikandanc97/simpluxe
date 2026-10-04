"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { buttonVariants } from "./button-variants";
import React from "react";
import { motion } from "motion/react";
import { hoverLift, tapScale, fadeUp, viewport } from "@/lib/motion";

const MotionButton = motion.create(ButtonPrimitive);

interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof MotionButton>, "className">,
    VariantProps<typeof buttonVariants> {
  className?: string;
  disableScrollAnimation?: boolean;
}


function Button({
  className,
  variant = "default",
  size = "default",
  disableScrollAnimation = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <MotionButton
      data-slot="button"
      whileHover={hoverLift}
      whileTap={tapScale}
      initial={disableScrollAnimation ? undefined : "hidden"}
      whileInView={disableScrollAnimation ? undefined : "visible"}
      viewport={disableScrollAnimation ? undefined : viewport}
      variants={disableScrollAnimation ? undefined : fadeUp}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </MotionButton>
  )
}

export { Button, buttonVariants }
