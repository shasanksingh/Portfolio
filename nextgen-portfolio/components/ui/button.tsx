import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-ui px-5 text-sm font-extrabold transition focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-electric text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#075dd2]",
        secondary:
          "border border-line bg-white text-foreground shadow-sm hover:-translate-y-0.5 hover:border-electric/40 hover:shadow-panel",
        ghost: "border border-transparent bg-transparent text-foreground hover:bg-white hover:shadow-sm",
      },
      size: {
        default: "min-h-11 px-5",
        sm: "min-h-9 px-3 text-xs",
        lg: "min-h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
