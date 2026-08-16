import type { AnchorHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Icon3D, type Icon3DAction } from "@/components/ui/icon-3d";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
};

function inferAction(href: string, children: ButtonLinkProps["children"]): Icon3DAction {
  const lowerHref = href.toLowerCase();
  const label = typeof children === "string" ? children.toLowerCase() : "";

  if (lowerHref.includes("resume") || label.includes("download")) {
    return "download";
  }

  if (lowerHref.includes("github") || label.includes("github")) {
    return "github";
  }

  if (lowerHref.includes("contact") || lowerHref.startsWith("mailto:") || label.includes("contact")) {
    return "contact";
  }

  if (lowerHref.startsWith("http") || label.includes("live")) {
    return "external";
  }

  return "navigate";
}

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
  const iconAction = inferAction(href, children);
  const content = (
    <>
      {Icon ? <Icon3D icon={Icon} action={iconAction} size="sm" tone={variant === "primary" ? "cyan" : "blue"} /> : null}
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
