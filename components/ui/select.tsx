"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "@/lib/utils";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { CheckIcon } from "@animateicons/react/lucide/check-icon";

export interface FloatingSelectProps {
  id?: string;
  name?: string;
  label: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options: readonly string[] | string[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}

export function FloatingSelect({
  id,
  name,
  label,
  value,
  defaultValue,
  onValueChange,
  options,
  placeholder,
  required,
  disabled,
  className,
  "aria-label": ariaLabel,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedby,
}: FloatingSelectProps) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const [triggerWidth, setTriggerWidth] = React.useState<number | undefined>(undefined);

  const hasValue = Boolean(value || defaultValue);

  React.useEffect(() => {
    if (open && triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [open]);

  return (
    <SelectPrimitive.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={(nextVal) => {
        if (typeof nextVal === "string") {
          onValueChange?.(nextVal);
        }
      }}
      open={open}
      onOpenChange={setOpen}
      name={name}
      required={required}
      disabled={disabled}
      id={id}
    >
      <div data-animated-icon-target className="relative group w-full">
        <SelectPrimitive.Trigger
          ref={triggerRef}
          aria-label={ariaLabel}
          aria-invalid={ariaInvalid}
          aria-describedby={ariaDescribedby}
          className={cn(
            "h-14 w-full cursor-pointer appearance-none rounded-xl border border-border bg-card px-4 pb-1.5 pt-5 pr-10 text-left text-sm shadow-2xs outline-none transition-all duration-150 hover:border-primary/40 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 font-satoshi",
            open ? "border-primary ring-2 ring-primary/15" : "",
            className
          )}
        >
          <SelectPrimitive.Value
            placeholder={placeholder || " "}
            className={cn(
              "block truncate text-sm font-medium",
              hasValue ? "text-foreground" : "text-transparent select-none"
            )}
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-transform duration-200 group-hover:text-foreground">
            <AnimatedIcon
              icon={ChevronDownIcon}
              size={16}
              className={cn("transition-transform duration-200", open ? "rotate-180 text-primary" : "")}
            />
          </span>
        </SelectPrimitive.Trigger>

        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute left-4 origin-left font-medium transition-all duration-200 ease-out",
            open
              ? "top-2 translate-y-0 text-xs text-primary font-medium"
              : hasValue
                ? "top-2 translate-y-0 text-xs text-muted-foreground"
                : "top-1/2 -translate-y-1/2 text-sm font-normal text-muted-foreground/70"
          )}
        >
          {label}
        </label>
      </div>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner
          sideOffset={6}
          alignItemWithTrigger={false}
          align="start"
          className="z-50"
        >
          <SelectPrimitive.Popup
            style={{ minWidth: triggerWidth ? `${triggerWidth}px` : undefined }}
            className={cn(
              "z-50 max-h-72 overflow-y-auto rounded-xl border border-border bg-popover/98 p-1.5 text-sm text-popover-foreground shadow-elevated backdrop-blur-md outline-none transition-all duration-150 data-starting-style:opacity-0 data-starting-style:scale-95 data-ending-style:opacity-0 data-ending-style:scale-95 motion-reduce:transition-none"
            )}
          >
            <div className="flex flex-col gap-0.5">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option}
                  value={option}
                  className={cn(
                    "group relative flex w-full cursor-pointer select-none items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium outline-none transition-colors",
                    "text-foreground hover:bg-secondary hover:text-primary data-highlighted:bg-secondary data-highlighted:text-primary",
                    "data-selected:bg-primary/10 data-selected:text-primary data-selected:font-semibold"
                  )}
                >
                  <SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>
                    <AnimatedIcon icon={CheckIcon} size={14} className="text-primary shrink-0" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </div>
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
