"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { CredibilityStrip } from "./CredibilityStrip";

const ARROW_SIZE = 18;
const QUOTE_ICON_SIZE = 40;
const ARROW_BUTTON_CLASS =
  "flex size-[2.75rem] items-center justify-center rounded-panel bg-surface-white text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setIndex((current) => (current + 1) % testimonials.length);

  return (
    <section className="bg-surface-muted py-15">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-section-title font-bold text-ink">
            What our clients say
          </h2>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowLeft size={ARROW_SIZE} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowRight size={ARROW_SIZE} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* The viewport clips the track; only the track's transform moves,
            so every slide stays mounted and this reads as a filmstrip
            rather than one slide fading into the next. */}
        <div className="testimonial-viewport mt-7 rounded-bento">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="flex flex-col gap-2 lg:grid lg:grid-cols-[64fr_34fr] lg:gap-3">
                  <div className="flex flex-col justify-center rounded-bento bg-brand p-7 text-on-dark lg:min-h-[var(--testimonial-card-height)]">
                    <Quote
                      size={QUOTE_ICON_SIZE}
                      aria-hidden="true"
                      className="fill-on-dark/90 text-on-dark/90"
                    />

                    <p className="mt-[1.25rem] max-w-[40rem] text-testimonial-quote font-semibold">
                      {testimonial.quote}
                    </p>

                    <p className="mt-[1.25rem] max-w-[32.5rem] text-body-md text-on-dark-strong">
                      {testimonial.sub}
                    </p>

                    {/* TODO: point at the full case study once this quote has one. */}
                    <a
                      href="#"
                      className="mt-[1.75rem] inline-flex w-fit items-center rounded-menu-item bg-surface-white px-[1.25rem] py-[0.75rem] text-body-sm font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-dark"
                    >
                      Read the complete story
                    </a>
                  </div>

                  {/* TODO: replace with founder photo (jazz-gandhum.webp /
                      roshan-thiran.webp / kevin-barboza.webp). */}
                  <div className="relative order-first flex min-h-[16rem] items-end overflow-hidden rounded-bento bg-testimonial-photo lg:order-none lg:min-h-[var(--testimonial-card-height)]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[image:var(--gradient-product-scrim)]"
                    />

                    <div className="relative p-4">
                      <p className="text-body-md font-semibold text-on-dark">
                        {testimonial.name}
                      </p>
                      <p className="text-menu-body text-white/75">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CredibilityStrip />
      </div>
    </section>
  );
}
