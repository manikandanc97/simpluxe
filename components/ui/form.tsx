import { FORM_COPY } from "@/lib/content/ui";
import * as React from "react";
import { cn } from "@/lib/utils";

const FormField = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1.5 text-left", className)} {...props} />
));
FormField.displayName = "FormField";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-xs font-semibold text-foreground/80 flex items-center justify-between font-satoshi",
        className
      )}
      {...props}
    >
      <span>
        {children}
        {required && <span className="text-primary ml-1 font-bold">{FORM_COPY.symbol}</span>}
      </span>
    </label>
  )
);
FormLabel.displayName = "FormLabel";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  if (!children) return null;
  return (
    <p
      ref={ref}
      className={cn("text-xs text-destructive font-medium mt-0.5", className)}
      {...props}
    >
      {children}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export { FormField, FormLabel, FormMessage };
