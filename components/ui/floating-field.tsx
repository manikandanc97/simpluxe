import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface FloatingInputProps extends ComponentProps<typeof Input> {
  label: string;
}

export function FloatingInput({ id, label, className, ...props }: FloatingInputProps) {
  return (
    <div className="relative group">
      <Input
        id={id}
        placeholder=" "
        className={cn(
          "peer h-14 px-4 pb-1.5 pt-5 text-sm placeholder:text-transparent sm:h-14 sm:text-sm",
          className
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 origin-left text-xs font-medium text-muted-foreground transition-all duration-200 ease-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}

interface FloatingTextareaProps extends ComponentProps<typeof Textarea> {
  label: string;
}

export function FloatingTextarea({ id, label, className, ...props }: FloatingTextareaProps) {
  return (
    <div className="relative group">
      <Textarea
        id={id}
        placeholder=" "
        className={cn(
          "peer min-h-32 px-4 pb-3 pt-6 text-sm placeholder:text-transparent sm:min-h-32 sm:text-sm",
          className
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 origin-left text-xs font-medium text-muted-foreground transition-all duration-200 ease-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}
