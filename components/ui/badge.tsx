import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-bold rounded-full transition-colors select-none font-satoshi",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary border border-primary/20",
        secondary: "bg-secondary text-secondary-foreground border border-border",
        outline: "bg-card/90 text-foreground border border-border shadow-2xs backdrop-blur-md",
        emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
        purple: "bg-purple-50 text-purple-700 border border-purple-200/60",
        muted: "bg-muted/80 text-muted-foreground border border-border/60",
      },
      size: {
        sm: "px-2 py-0.5 text-2xs leading-tight",
        default: "px-2.5 py-1 text-xs leading-none",
        lg: "px-3.5 py-1.5 text-xs tracking-wider uppercase font-extrabold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge,  };
