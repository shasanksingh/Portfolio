import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full border border-electric/20 bg-electric/10 px-3 text-xs font-extrabold uppercase tracking-normal text-electric",
        className,
      )}
      {...props}
    />
  );
}
