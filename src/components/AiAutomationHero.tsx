import { ArrowRight } from "lucide-react";

const ARROW_SIZE = 18;

export function AiAutomationHero() {
  return (
    // Same header-clear top spacing as the homepage hero (Hero.tsx): the
    // floating mobile island below lg, pure breathing room above the real,
    // in-flow header from lg up. No data-hero attribute here though: that
    // marker tells MobileHeaderIsland to flip to its light glass treatment
    // once the hero scrolls away, which only makes sense on a page that
    // turns light further down. This page stays black throughout, so the
    // island should stay in its dark, white-logo state the whole way.
    // The dark gradient background lives on the page-level wrapper (see
    // page.tsx) so it runs continuously behind the header too, rather than
    // starting fresh here and leaving a seam where the two meet.
    <section className="pt-[var(--content-clearance-mobile)] pb-16 sm:pt-[var(--content-clearance-tablet)] lg:pt-[8rem]">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <p className="text-label font-semibold uppercase text-label-on-dark">
          AI &amp; Automation
        </p>

        <h1 className="mt-4 max-w-[19ch] font-display text-hero font-bold text-on-dark">
          Put AI to work where it actually helps
        </h1>

        <p className="mt-6 max-w-hero-copy text-body-md text-on-dark-soft">
          We design AI and automation around how your business already runs, so
          your team spends less time on repetitive work and more on what
          matters.
        </p>

        <a
          href="/contact"
          className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-surface-white px-5 py-[0.875rem] text-body-sm font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-dark sm:w-fit"
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
