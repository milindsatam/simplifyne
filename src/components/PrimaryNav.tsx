"use client";

import { ServicesMegaMenu } from "./ServicesMegaMenu";

/** TODO: point at real routes once those pages exist (out of scope for now). */
const NAV_LINKS = [
  { label: "Work", href: "#" },
  { label: "Team", href: "#" },
  { label: "Products", href: "#" },
  { label: "Blog", href: "#" },
] as const;

const navItemClass =
  "text-nav font-medium text-on-brand-muted underline-offset-4 decoration-1 transition-colors duration-standard ease-standard hover:text-on-brand hover:underline focus-visible:text-on-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand";

export function PrimaryNav() {
  return (
    <div className="flex items-center gap-6">
      {/* The compact nav for small screens is out of scope for this build. */}
      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex items-center gap-4">
          {/* The mega-menu is a pointer pattern, so below 1024px Services is a
              plain nav item until the mobile menu is built. */}
          <li className="hidden lg:block">
            <ServicesMegaMenu triggerClassName={navItemClass} />
          </li>
          <li className="lg:hidden">
            <a href="#" className={navItemClass}>
              Services
            </a>
          </li>

          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={navItemClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href="#"
        className="inline-flex h-6 items-center rounded-pill bg-surface-white px-3 text-nav font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand"
      >
        Let&rsquo;s Talk
      </a>
    </div>
  );
}
