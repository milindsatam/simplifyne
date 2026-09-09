import { MobileMenu } from "./MobileMenu";
import { ServicesMegaMenu } from "./ServicesMegaMenu";

/** TODO: point at real routes once those pages exist (out of scope for now). */
const NAV_LINKS = [
  { label: "Work", href: "#" },
  { label: "About", href: "/about" },
  { label: "Products", href: "#" },
  { label: "Blog", href: "#" },
] as const;

export function PrimaryNav({ glassy = false }: { glassy?: boolean }) {
  const navItemClass = glassy
    ? "text-nav font-medium text-ink-soft underline-offset-4 decoration-1 transition-colors duration-standard ease-standard hover:text-ink hover:underline focus-visible:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    : "text-nav font-medium text-on-brand-muted underline-offset-4 decoration-1 transition-colors duration-standard ease-standard hover:text-on-brand hover:underline focus-visible:text-on-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand";

  // Both states stay glass, never a solid fill; only the tint flips so the
  // pill keeps working over the hero's blue and the glassy light surface.
  const ctaClass = glassy
    ? "inline-flex h-6 items-center rounded-pill border border-cta-glass-border-ink bg-transparent px-3 text-nav font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-cta-glass-bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    : "inline-flex h-6 items-center rounded-pill border border-cta-glass-border bg-cta-glass-bg px-3 text-nav font-semibold text-on-brand backdrop-blur-md transition-colors duration-standard ease-standard hover:bg-cta-glass-bg-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand";

  // Same treatment as the desktop pill, just tall enough on its own (44px)
  // to be a comfortable tap target next to the hamburger, rather than
  // inheriting the desktop pill's much shorter 24px.
  const mobileCtaClass = glassy
    ? "inline-flex h-[2.75rem] items-center rounded-pill border border-cta-glass-border-ink bg-transparent px-3 text-nav font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-cta-glass-bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    : "inline-flex h-[2.75rem] items-center rounded-pill border border-cta-glass-border bg-cta-glass-bg px-3 text-nav font-semibold text-on-brand backdrop-blur-md transition-colors duration-standard ease-standard hover:bg-cta-glass-bg-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand";

  return (
    <div className="flex items-center">
      {/* The hamburger and mega-menu never show at the same width: the
          desktop row (links plus mega-menu) only exists from 1024px up,
          and the hamburger only below it. */}
      <nav
        aria-label="Primary"
        className="hidden lg:flex lg:items-center lg:gap-6"
      >
        <ul className="flex items-center gap-4">
          <li>
            <ServicesMegaMenu triggerClassName={navItemClass} />
          </li>

          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={navItemClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/contact" className={ctaClass}>
          Let&rsquo;s Talk
        </a>
      </nav>

      {/* Logo, then this compact Let's Talk, then the hamburger: the same
          priority order the desktop row keeps, just condensed. */}
      <div className="flex items-center gap-2 lg:hidden">
        <a href="/contact" className={mobileCtaClass}>
          Let&rsquo;s Talk
        </a>
        <MobileMenu glassy={glassy} />
      </div>
    </div>
  );
}
