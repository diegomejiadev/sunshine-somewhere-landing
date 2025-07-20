import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 items-center justify-center active:scale-95",
  {
    variants: {
      padding: {
        default: "py-3 px-4",
      },
      typeButton: {
        fancy: "border-white border-2",
      },
    },

    defaultVariants: {
      padding: "default",
      typeButton: "fancy",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, disabled, isLoading, padding, typeButton, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(buttonVariants({ className, padding, typeButton }))}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = Button.name;
