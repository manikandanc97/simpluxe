"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatedX } from "@/components/ui/animated-icons/convenience-icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  ariaLabel: string;
  clearLabel: string;
  className?: string;
}

export function SearchInput({
  value,
  onValueChange,
  placeholder,
  ariaLabel,
  clearLabel,
  className,
}: SearchInputProps) {
  return (
    <div data-animated-icon-target className={cn("relative w-full", className)}>
      <AnimatedIcon
        name="search"
        size={15}
        aria-hidden="true"
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        type="search"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        autoComplete="off"
        className="appearance-none pl-9 pr-10"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onValueChange("")}
          aria-label={clearLabel}
          className="absolute right-1 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
        >
          <AnimatedX size={14} />
        </button>
      ) : null}
    </div>
  );
}
