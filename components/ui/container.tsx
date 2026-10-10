import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "content" | "narrow" | "wide";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full mx-auto px-4 sm:px-6 lg:px-8",
          {
            "max-w-7xl": size === "default",
            "max-w-5xl": size === "content",
            "max-w-3xl": size === "narrow",
            "max-w-360": size === "wide",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";
