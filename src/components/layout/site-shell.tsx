"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/china-skincare-guides" || pathname.startsWith("/china-skincare-guides/")) return <>{children}</>;
  return <><Navbar /><main className="flex-1 pt-16 lg:pt-20">{children}</main><Footer /></>;
}
