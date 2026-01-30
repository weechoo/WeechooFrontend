import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        brand:
          "text-[20px] text-white font-satoshi bg-gradient-to-r from-[#EF4444] via-[#F97316] to-[#FBBF24] hover:from-[#FBBF24] hover:via-[#F97316] hover:to-[#EF4444] transition-colors duration-300 ease-in py-[10px] rounded-[8px] items-center justify-center px-4 py-2 cursor-pointer",
      },
      size: {
        default: "text-[20px]",
        sm: "text-[20px]",
        lg: "text-[20px]",
      },
      width: {
        fixed: "w-full",
        full: "w-full",
        auto: "w-full",
      },
    },
    defaultVariants: {
      variant: "brand",
      width: "auto",
      size: "default",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, width, loading, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, width, className }))}
        disabled={props.disabled || loading}
        {...props}
      >
        {loading ? "Please wait…" : props.children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
