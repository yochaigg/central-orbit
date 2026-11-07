"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import type { NavLink } from "@/lib/constants";

export function SiteShell({
  children,
  navLinks,
}: {
  children: React.ReactNode;
  navLinks: readonly NavLink[];
}) {
  const pathname = usePathname();
  if (pathname === "/china-skincare-guides" || pathname.startsWith("/china-skincare-guides/")) return <>{children}</>;
  return <><Navbar links={navLinks} /><main className="flex-1 pt-16 lg:pt-20">{children}</main><Footer links={navLinks} /></>;
}
