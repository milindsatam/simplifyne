"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";

const ARROW_SIZE = 18;
const ARROW_BUTTON_CLASS =
  "flex size-[2.75rem] items-center justify-center rounded-panel bg-surface-white text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const slide = testimonials[index];

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

        {/* Keying on the slide remounts this whole block on every prev/next,
            which is what replays the testimonial-slide-in animation. */}
        <div
          key={slide.id}
          className="testimonial-slide mt-7 flex flex-col gap-2 lg:grid lg:grid-cols-[64fr_34fr] lg:gap-3"
        >
          <div className="flex flex-col gap-6 rounded-bento bg-testimonial-card p-6 text-on-dark sm:grid sm:grid-cols-[58fr_38fr] sm:gap-6">
            <div>
              <p className="text-testimonial-quote font-semibold">
                {slide.quote}
              </p>

              <p className="mt-[1.25rem] max-w-[23.75rem] text-body-sm text-on-dark-soft">
                {slide.sub}
              </p>

              {/* TODO: point at the full case study once this quote has one. */}
              <a
                href="#"
                className="mt-3 inline-flex w-fit items-center rounded-menu-item bg-surface-white px-[1.25rem] py-[0.75rem] text-body-sm font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-dark"
              >
                Read the complete story
              </a>
            </div>

            <ul className="flex flex-col gap-3">
              {slide.stats.map((stat) => (
                <li key={stat.value} className="border-l border-white/15 pl-2">
                  <p className="text-testimonial-stat font-semibold">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-menu-body text-white/60">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* TODO: replace with founder photo (jazz-gandhum.webp /
              roshan-thiran.webp / kevin-barboza.webp). */}
          <div className="relative order-first flex min-h-[16rem] items-end overflow-hidden rounded-bento bg-testimonial-photo lg:order-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[image:var(--gradient-product-scrim)]"
            />

            <div className="relative p-4">
              <p className="text-body-md font-semibold text-on-dark">
                {slide.name}
              </p>
              <p className="text-menu-body text-white/75">{slide.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
