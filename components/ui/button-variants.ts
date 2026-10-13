import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button font-satoshi inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-semibold tracking-tight whitespace-nowrap outline-none select-none transition-colors duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-haspopup:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 cursor-pointer icon:pointer-events-none icon:shrink-0 icon-default:size-4 icon:transition-transform icon:duration-200 icon:ease-out hover:icon:translate-x-0.5 active:icon:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover",
        outline:
          "bg-white text-foreground border border-border shadow-sm hover:border-primary/40 hover:bg-secondary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 sm:h-11 px-5 sm:px-6 text-sm gap-2",
        xs: "h-7.5 sm:h-8 px-3 sm:px-3.5 text-xs gap-1.5",
        sm: "h-9 sm:h-9.5 px-4 sm:px-4.5 text-xs sm:text-sm gap-1.5 sm:gap-2",
        lg: "h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base gap-2 sm:gap-2.5",
        xl: "h-13 sm:h-14 px-7 sm:px-8 text-base gap-2.5",
        icon: "size-10",
        "icon-xs": "size-6 icon-default:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
