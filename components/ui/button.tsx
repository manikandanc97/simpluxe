"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { buttonVariants } from "./button-variants";
import React from "react";
import { m as motion } from "motion/react";
import { hoverLift, tapScale, fadeUp } from "@/lib/motion";

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
      initial={false}
      animate={disableScrollAnimation ? undefined : "visible"}
      variants={disableScrollAnimation ? undefined : fadeUp}
      className={cn(buttonVariants({ variant, size, className }), "rounded-lg")}
      {...props}
    >
      {children}
    </MotionButton>
  );
}

export { Button, buttonVariants };
