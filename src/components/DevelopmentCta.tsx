import { ArrowRight } from "lucide-react";

const ARROW_SIZE = 18;

export function DevelopmentCta() {
  return (
    <section className="section-padding bg-brand-deep">
      <div className="mx-auto w-full max-w-site px-2 text-center sm:px-3">
        <h2 className="font-display text-section-title font-bold text-on-dark">
          Got something to build?
        </h2>

        <p className="mx-auto mt-4 max-w-hero-copy text-body-md text-on-dark-soft">
          Tell us what you&rsquo;re trying to make. We&rsquo;ll tell you the
          simplest way to build it, and what it&rsquo;ll take.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-pill bg-surface-white px-5 py-[0.875rem] text-body-sm font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-dark"
          >
            Let&rsquo;s talk
            <ArrowRight
              size={ARROW_SIZE}
              aria-hidden="true"
              className="motion-safe:transition-transform motion-safe:duration-standard motion-safe:ease-standard motion-safe:group-hover:translate-x-[var(--arrow-shift)]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
