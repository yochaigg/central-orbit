import Link from "next/link";
import { NAV_LINKS, OFFICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-full" />
              </div>
              <span className="font-heading font-bold text-primary tracking-wide">
                CENTRAL ORBIT
              </span>
            </Link>
            <p className="mt-4 text-sm text-text-light leading-relaxed">
              Helping companies navigate cross-cultural markets across the APAC
              region since 1998.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-text mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-light hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-heading font-semibold text-text mb-4">
              Offices
            </h4>
            <div className="space-y-4">
              {OFFICES.map((office) => (
                <div key={office.city}>
                  <p className="text-sm font-medium text-text">
                    {office.city}
                  </p>
                  <p className="text-sm text-text-light">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-text-light">
            &copy; {new Date().getFullYear()} Central Orbit. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
