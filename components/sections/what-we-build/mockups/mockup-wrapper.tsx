"use client";

import type { ReactNode } from "react";

interface MockupWrapperProps {
  gradientClass: string;
  children: ReactNode;
  innerClassName?: string;
  outerChildren?: ReactNode;
}

export function MockupWrapper({
  gradientClass,
  children,
  innerClassName = "max-w-72 p-3.5 gap-3",
  outerChildren,
}: MockupWrapperProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Background ambient glow */}
      <div className={`absolute inset-0 rounded-3xl blur-2xl pointer-events-none -z-10 ${gradientClass}`} />

      <div
        className={`relative w-full bg-white/90 backdrop-blur-xl border border-white/80 rounded-2xl shadow-card flex flex-col ${innerClassName}`}
      >
        {children}
      </div>

      {outerChildren}
    </div>
  );
}
