import * as motion from "motion/react-m";
import { fadeUp, blurFadeUp, viewportReveal } from "@/lib/motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "blur";
}

export function FadeUp({
  children,
  className,
  variant = "blur",
}: FadeUpProps) {
  return (
    <motion.div
      variants={variant === "blur" ? blurFadeUp : fadeUp}
      {...viewportReveal}
      className={className}
    >
      {children}
    </motion.div>
  );
}
