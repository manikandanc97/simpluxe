"use client";

import { MotionConfig, LazyMotion } from "motion/react";

const loadFeatures = () => import("motion/react").then((res) => res.domMax);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
