import { BrandMark } from "@/components/ui/brand-mark";
import { COMMON } from "@/lib/data/common";
import { cn } from "@/lib/utils";
import type { ImageProps } from "next/image";

interface BrandLockupProps {
  className?: string;
  loading?: ImageProps["loading"];
  size?: "compact" | "default";
}

export function BrandLockup({
  className,
  loading,
  size = "default",
}: BrandLockupProps) {
  const compact = size === "compact";

  return (
    <span className={cn("inline-flex shrink-0 items-center gap-2.5", className)}>
      <BrandMark
        loading={loading}
        className={cn(
          "transition-transform duration-200 group-hover:scale-105",
          compact ? "size-8 sm:size-9" : "size-9 sm:size-10"
        )}
      />
      <span className="flex flex-col items-start justify-center gap-1">
        <span
          className={cn(
            "font-heading font-bold leading-none tracking-tight text-heading",
            compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          )}
        >
          {COMMON.brand.wordmarkLead}
          <span className="text-primary">{COMMON.brand.wordmarkTrail}</span>
        </span>
        <span className="text-2xs font-semibold leading-none tracking-wider text-muted-foreground sm:text-xs">
          {COMMON.brand.subtitle}
        </span>
      </span>
    </span>
  );
}
