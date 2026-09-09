import { ArrowRight } from "lucide-react";

const ARROW_SIZE = 18;

/** The About page's own closing: just the CTA, no statement paragraph (the
    homepage's ClosingStatement keeps that). Shares AboutClients' background
    so the two read as one continuous section with no seam between the
    client grid and this button. */
export function AboutClosing() {
  return (
    <section className="section-padding bg-surface-muted">
      <div className="mx-auto flex w-full max-w-site justify-center px-2 sm:px-3">
        <a
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-[1.25rem] text-cta-large font-semibold text-on-dark transition-colors duration-standard ease-standard hover:bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          Let&apos;s talk
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
