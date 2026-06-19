import type { AnchorHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
};

export function ButtonLink({
  href,
  icon: Icon,
  children,
  className,
  variant = "primary",
  size = "default",
  target,
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || target === "_blank";
  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4 flex-none" aria-hidden="true" /> : null}
      <span className="min-w-0 text-center">{children}</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel="noreferrer"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {content}
    </Link>
  );
}
