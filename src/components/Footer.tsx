import { FEATURES } from "@/config/features";

/** TODO: point at real routes once those pages exist (stubs for now). */
const FOOTER_COLUMNS = [
  {
    heading: "Social",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/simplifyne",
        show: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/simplifyne.in/",
        show: true,
      },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about", show: true },
      { label: "Case studies", href: "#", show: FEATURES.footerFullLinks },
      { label: "Services", href: "#", show: FEATURES.footerFullLinks },
      { label: "Products", href: "#", show: FEATURES.footerFullLinks },
      { label: "Team", href: "#", show: FEATURES.footerFullLinks },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Blog", href: "#", show: FEATURES.footerFullLinks },
      { label: "FAQs", href: "#", show: FEATURES.footerFullLinks },
      { label: "Process", href: "#", show: FEATURES.footerFullLinks },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      {
        label: "contact@simplifyne.in",
        href: "mailto:contact@simplifyne.in",
        show: true,
      },
      { label: "099300 38380", href: "tel:09930038380", show: true },
      { label: "Contact us", href: "/contact", show: true },
    ],
  },
] as const;

const VISIBLE_FOOTER_COLUMNS = FOOTER_COLUMNS.map((column) => ({
  heading: column.heading,
  links: column.links.filter((link) => link.show),
})).filter((column) => column.links.length > 0);

const SOCIAL_HEADING = "Social";

const LEGAL_ITEMS = [
  { text: "© 2026 Simplifyne. All rights reserved" },
  { text: "contact@simplifyne.in", href: "mailto:contact@simplifyne.in" },
  { text: "Sitemap" },
  { text: "Privacy Policy" },
  { text: "Terms of Use" },
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

        {/* Link columns. Full launch has four columns spanning the row; the
            reduced set (fewer, wider columns) is centered instead of
            stretched, so the lighter footer still reads as deliberate. */}
        <nav aria-label="Footer" className="mt-10">
          <div
            className={
              FEATURES.footerFullLinks
                ? "grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4"
                : "flex flex-wrap justify-center gap-x-16 gap-y-8 text-center sm:text-left"
            }
          >
            {VISIBLE_FOOTER_COLUMNS.map((column) => (
              <div
                key={column.heading}
                className={FEATURES.footerFullLinks ? "" : "min-w-[9rem]"}
              >
                <h3 className="text-menu-body font-medium text-label-featured">
                  {column.heading}
                </h3>
                <ul className="mt-[1.25rem] flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={LINK_CLASS}
                        {...(column.heading === SOCIAL_HEADING
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
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
            {LEGAL_ITEMS.map((item) =>
              "href" in item ? (
                <a
                  key={item.text}
                  href={item.href}
                  className="transition-colors duration-standard ease-standard hover:text-ink lg:px-3"
                >
                  {item.text}
                </a>
              ) : (
                <span key={item.text} className="lg:px-3">
                  {item.text}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
