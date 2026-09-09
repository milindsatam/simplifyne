import { ArrowLeft, ArrowRight } from "lucide-react";

const ARROW_SIZE = 18;

/** Placeholder proof points. Marked TODO in the copy itself, the same
    convention the case study and product image placeholders use, since
    these are stand-ins rather than a real client's actual numbers. */
const stats = [
  { id: "one", label: "Stat one" },
  { id: "two", label: "Stat two" },
  { id: "three", label: "Stat three" },
] as const;

export function Testimonials() {
  return (
    <section className="bg-surface-muted py-15">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-section-title font-bold text-ink">
            What our clients say
          </h2>

          {/* Only one testimonial exists so far, so these are inert until
              there's a second one to page to. */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              disabled
              aria-label="Previous testimonial"
              className="flex size-[2.75rem] items-center justify-center rounded-panel bg-surface-white text-ink disabled:opacity-40"
            >
              <ArrowLeft size={ARROW_SIZE} aria-hidden="true" />
            </button>
            <button
              type="button"
              disabled
              aria-label="Next testimonial"
              className="flex size-[2.75rem] items-center justify-center rounded-panel bg-surface-white text-ink disabled:opacity-40"
            >
              <ArrowRight size={ARROW_SIZE} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6 rounded-bento bg-brand-deep p-5 text-on-dark sm:flex-row sm:gap-8">
            <div className="flex-1">
              <p className="max-w-card-heading text-bento-heading-lg font-semibold">
                TODO: replace with a real client quote
              </p>

              {/* TODO: point at the full case study once this quote has one. */}
              <a
                href="#"
                className="mt-6 inline-flex w-fit items-center rounded-pill bg-surface-white px-3 py-[0.875rem] text-body-sm font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-dark"
              >
                Read the complete story
              </a>
            </div>

            <ul className="flex flex-col gap-6 sm:w-[14rem] sm:shrink-0">
              {stats.map((stat) => (
                <li
                  key={stat.id}
                  className="border-l-2 border-on-dark-soft pl-3"
                >
                  <p className="font-semibold">{stat.label}</p>
                  <p className="mt-1 text-card-body text-on-dark-soft">
                    Replace with a real, measurable result from this
                    engagement.
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Reserved for a client photo, added later. */}
          <div
            aria-hidden="true"
            className="flex min-h-[16rem] flex-1 items-center justify-center rounded-bento bg-surface-gray p-2 lg:max-w-sm"
          >
            <span className="text-center text-card-body text-ink-soft">
              TODO: replace with client photo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
