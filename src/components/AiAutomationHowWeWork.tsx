"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { howWeWorkIntro, howWeWorkSteps } from "@/data/aiAutomationHowWeWork";

const ARROW_SIZE = 18;
const ARROW_BUTTON_CLASS =
  "flex size-[2.75rem] shrink-0 items-center justify-center rounded-thumb bg-surface-white text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/* Matches --duration-standard. A clone of the last step sits before the
   first and a clone of the first sits after the last, so "next" can always
   step left and "prev" can always step right, even across the wrap; once
   the step lands on a clone, this is how long to wait before silently
   resetting to the real step underneath it, with the transition switched
   off so the reset is invisible. Same technique as Testimonials.tsx. */
const TRANSITION_MS = 300;

const slides = [
  howWeWorkSteps[howWeWorkSteps.length - 1],
  ...howWeWorkSteps,
  howWeWorkSteps[0],
];
const FIRST_REAL_INDEX = 1;
const LAST_REAL_INDEX = howWeWorkSteps.length;

export function AiAutomationHowWeWork() {
  const [trackIndex, setTrackIndex] = useState(FIRST_REAL_INDEX);
  const [instant, setInstant] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const atBoundary = trackIndex === 0 || trackIndex === LAST_REAL_INDEX + 1;

  const goPrev = () => {
    setInstant(false);
    setTrackIndex((current) => current - 1);
  };

  const goNext = () => {
    setInstant(false);
    setTrackIndex((current) => current + 1);
  };

  // Landing on a clone always steps one further in the same direction that
  // got it there, so the visible motion never reverses; only afterwards
  // does it snap back to the real step the clone stands in for, with the
  // transition off so the snap itself is invisible.
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

  const currentStep =
    (((trackIndex - FIRST_REAL_INDEX) % howWeWorkSteps.length) +
      howWeWorkSteps.length) %
    howWeWorkSteps.length;

  return (
    <section id="how-we-work" className="section-padding bg-surface-muted">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-[32.5rem]">
            <h2 className="font-display text-section-title font-bold text-ink">
              {howWeWorkIntro.heading}
            </h2>
            <p className="mt-4 text-body-md text-on-light-soft">
              {howWeWorkIntro.body}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              disabled={atBoundary}
              aria-label="Previous step"
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowLeft size={ARROW_SIZE} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={atBoundary}
              aria-label="Next step"
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowRight size={ARROW_SIZE} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Same filmstrip technique as the testimonial carousel: every step
            stays mounted side by side in the track, and only the track's
            transform ever changes. */}
        <div className="how-we-work-viewport mt-7 rounded-[1.25rem]">
          <div
            className="how-we-work-track"
            style={{
              transform: `translateX(-${trackIndex * 100}%)`,
              transitionDuration: instant ? "0ms" : undefined,
            }}
          >
            {slides.map((step, position) => {
              // Real index 0 and the last both appear twice (once as
              // themselves, once as the clone standing in for them at the
              // opposite end), so the position, not the number, has to be
              // the key and the thing that marks a step as a clone.
              const isClone = position !== howWeWorkSteps.indexOf(step) + 1;

              return (
                <div
                  key={position}
                  aria-hidden={isClone}
                  className="how-we-work-slide"
                >
                  <div className="grid grid-cols-1 overflow-hidden rounded-[1.25rem] bg-surface-white shadow-panel lg:grid-cols-[45fr_55fr]">
                    <div className="flex flex-col justify-center p-5">
                      <p className="text-[2.5rem] leading-none font-bold text-ink/40">
                        {step.number}
                      </p>
                      <h3 className="mt-4 text-menu-heading font-semibold text-ink">
                        {step.heading}
                      </h3>
                      <p className="mt-3 text-body-md text-on-light-soft">
                        {step.detail}
                      </p>
                    </div>

                    {/* TODO: replace with a real image once one exists for
                        this step; a flat tint stands in for now. */}
                    <div
                      aria-hidden="true"
                      className="min-h-[16rem] bg-surface-gray lg:min-h-[26rem]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {howWeWorkSteps.map((step, index) => (
            <span
              key={step.number}
              aria-hidden="true"
              className={`size-1 rounded-full transition-colors duration-standard ease-standard ${
                index === currentStep ? "bg-ink" : "bg-ink/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
