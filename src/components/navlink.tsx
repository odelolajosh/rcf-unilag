"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  exact?: boolean;
  activeClassName?: string;
};

export function NavLink({
  href,
  children,
  exact = false,
  activeClassName,
  className = "",
  ...props
}: NavLinkProps) {
  const pathname = usePathname();

  let isActive: boolean;

  if (href === "/") {
    // home link should only be active on the exact root
    isActive = pathname === "/";
  } else if (exact) {
    isActive = pathname === href;
  } else {
    isActive = pathname.startsWith(href);
  }

  return (
    <Link
      href={href}
      className={cn(className, { [activeClassName ?? ""]: isActive })}
      data-active={isActive}
      {...props}
    >
      {children}
    </Link>
  );
}
