"use client";

import { m as motion } from "motion/react";
import { fadeUp, viewportReveal } from "@/lib/motion";
import { ReactNode } from "react";

export function FadeUpWrapper({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} {...viewportReveal} className={className}>
      {children}
    </motion.div>
  );
}
