import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MockupWrapperProps {
  gradientClass: string;
  children: ReactNode;
  innerClassName?: string;
  outerChildren?: ReactNode;
  variant?: "standard" | "phone";
}

export function MockupWrapper({
  gradientClass,
  children,
  innerClassName = "p-3.5 gap-3",
  outerChildren,
  variant = "standard",
}: MockupWrapperProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Background ambient glow */}
      <div className={`absolute inset-0 rounded-3xl blur-2xl pointer-events-none -z-10 ${gradientClass}`} />

      <div
        className={cn(
          "relative flex w-full flex-col rounded-2xl border border-white/80 bg-white/90 shadow-card backdrop-blur-xl",
          variant === "standard" ? "h-64 max-w-80" : "max-w-64",
          innerClassName
        )}
      >
        {children}
      </div>

      {outerChildren}
    </div>
  );
}
