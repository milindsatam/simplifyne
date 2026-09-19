import { ArrowRight } from "lucide-react";

const ARROW_SIZE = 18;

export function DevelopmentHero() {
  return (
    // Same header-clear top spacing as the AI & Automation hero, but this
    // page has no dark hero background of its own (see page.tsx), so the
    // section just sits on the white surface with the light header above it.
    <section className="bg-surface-white pt-[var(--content-clearance-mobile)] pb-16 sm:pt-[var(--content-clearance-tablet)] lg:pt-[8rem]">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <p className="text-label font-semibold uppercase text-label-on-light">
          Development
        </p>

        <h1 className="mt-4 max-w-[19ch] font-display text-hero font-bold text-ink">
          Build the software your business runs on
        </h1>

        <p className="mt-6 max-w-hero-copy text-body-md text-on-light-soft">
          We build websites, apps, and the systems behind them around how your
          business actually works, so the tech pulls its weight instead of
          getting in the way.
        </p>

        <a
          href="/contact"
          className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-ink px-5 py-[0.875rem] text-body-sm font-semibold text-on-dark transition-colors duration-standard ease-standard hover:bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:w-fit"
        >
          Let&rsquo;s talk
          <ArrowRight
            size={ARROW_SIZE}
            aria-hidden="true"
            className="motion-safe:transition-transform motion-safe:duration-standard motion-safe:ease-standard motion-safe:group-hover:translate-x-[var(--arrow-shift)]"
          />
        </a>
      </div>
    </section>
  );
}
