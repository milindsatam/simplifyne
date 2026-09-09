"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";

const ARROW_SIZE = 18;
const QUOTE_ICON_SIZE = 40;
const ARROW_BUTTON_CLASS =
  "flex size-[2.75rem] items-center justify-center rounded-panel bg-surface-white text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/* Matches --duration-standard. A clone of the last slide sits before the
   first and a clone of the first sits after the last, so "next" can always
   step left and "prev" can always step right, even across the wrap; once
   the step lands on a clone, this is how long to wait before silently
   resetting to the real slide underneath it, with the transition switched
   off so the reset is invisible. */
const TRANSITION_MS = 300;

const slides = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];
const FIRST_REAL_INDEX = 1;
const LAST_REAL_INDEX = testimonials.length;

export function Testimonials() {
  const [trackIndex, setTrackIndex] = useState(FIRST_REAL_INDEX);
  const [instant, setInstant] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  // A click landing on a clone schedules a reset ~300ms out; disabling the
  // buttons for that narrow window is what stops a second rapid click from
  // stepping past the clone entirely, off the end of the slides array.
  const atBoundary = trackIndex === 0 || trackIndex === LAST_REAL_INDEX + 1;

  const goPrev = () => {
    setInstant(false);
    setTrackIndex((current) => current - 1);
  };

  const goNext = () => {
    setInstant(false);
    setTrackIndex((current) => current + 1);
  };

  // Landing on a clone (index 0 or the last slot) always steps one further
  // in the same direction that got it there, so the visible motion never
  // reverses; only afterwards does it snap back to the real slide the clone
  // stands in for, with the transition off so the snap itself is invisible.
  useEffect(() => {
    if (trackIndex > 0 && trackIndex <= LAST_REAL_INDEX) return;

    resetTimeout.current = setTimeout(() => {
      setInstant(true);
      setTrackIndex(trackIndex === 0 ? LAST_REAL_INDEX : FIRST_REAL_INDEX);
    }, TRANSITION_MS);

    return () => {
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
    };
  }, [trackIndex]);

  // Once the instant snap has painted, transitions need to come back on
  // before the next click, or that click's own move would be instant too.
  useEffect(() => {
    if (!instant) return;

    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setInstant(false));
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [instant]);

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
              disabled={atBoundary}
              aria-label="Previous testimonial"
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowLeft size={ARROW_SIZE} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={atBoundary}
              aria-label="Next testimonial"
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowRight size={ARROW_SIZE} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* The viewport clips the track; only the track's transform moves,
            so every slide stays mounted and this reads as a filmstrip
            rather than one slide fading into the next. A clone before the
            first slide and after the last is what lets "next" and "prev"
            each keep moving the same direction across the wrap. */}
        <div className="testimonial-viewport mt-7 rounded-bento">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${trackIndex * 100}%)`,
              transitionDuration: instant ? "0ms" : undefined,
            }}
          >
            {slides.map((testimonial, position) => {
              // Real index 0 and the last both appear twice (once as
              // themselves, once as the clone standing in for them at the
              // opposite end), so the position, not the id, has to be the
              // key and the thing that marks a slide as a clone.
              const isClone = position !== testimonials.indexOf(testimonial) + 1;

              return (
                <div
                  key={position}
                  aria-hidden={isClone}
                  className="testimonial-slide"
                >
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
                        tabIndex={isClone ? -1 : undefined}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
