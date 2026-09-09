/** TODO: point at real routes once those pages exist (stubs for now). */
const FOOTER_COLUMNS = [
  {
    heading: "Social",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Case studies", href: "#" },
      { label: "Services", href: "#" },
      { label: "Products", href: "#" },
      { label: "Team", href: "#" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Blog", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Process", href: "#" },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      { label: "hello@simplifyne.com", href: "#" },
      { label: "+91 90000 00000", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
] as const;

const LEGAL_ITEMS = [
  "© 2026 Simplifyne. All rights reserved",
  "hello@simplifyne.com",
  "Sitemap",
  "Privacy Policy",
  "Terms of Use",
] as const;

const LINK_CLASS =
  "text-body-sm text-ink-soft transition-colors duration-standard ease-standard hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function Footer() {
  return (
    <footer className="section-padding bg-surface-white">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        {/* Newsletter bar */}
        <div className="flex flex-col items-start gap-4 rounded-bento bg-surface-muted p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-menu-heading font-bold text-ink">
              Sign up for our newsletter
            </h2>
            <p className="mt-2 text-body-md text-ink-soft">
              Insights, case studies, and updates from the Simplifyne team.
            </p>
          </div>

          {/* Stub, no real subscribe flow yet. */}
          <a
            href="#"
            className="w-full shrink-0 rounded-pill border border-ink px-4 py-[0.875rem] text-center text-body-sm font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-ink hover:text-on-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:w-fit"
          >
            Subscribe
          </a>
        </div>

        {/* Link columns */}
        <nav aria-label="Footer" className="mt-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading}>
                <h3 className="text-menu-body font-medium text-label-featured">
                  {column.heading}
                </h3>
                <ul className="mt-[1.25rem] flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={LINK_CLASS}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom legal bar. Stacked with no dividers below 1024px, where the
            five items no longer fit one line, since Tailwind's divide-x
            borders the DOM's non-last children regardless of which visual
            line they land on, leaving a stray trailing divider at a wrap
            point rather than actually dropping it. A single divided row
            only ever appears where it's guaranteed to fit unwrapped. */}
        <div className="mt-10 border-t border-menu-divider pt-4">
          <div className="flex flex-col items-center gap-2 text-center text-card-body text-bento-label-on-light lg:flex-row lg:justify-center lg:gap-0 lg:divide-x lg:divide-menu-divider">
            {LEGAL_ITEMS.map((item) => (
              <span key={item} className="lg:px-3">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
