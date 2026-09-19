"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { howWeWorkIntro, howWeWorkSteps } from "@/data/aiAutomationHowWeWork";

const ARROW_SIZE = 18;
const ARROW_BUTTON_CLASS =
  "flex size-[2.75rem] shrink-0 items-center justify-center rounded-thumb bg-surface-white text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-40 disabled:pointer-events-none";

/* Same width at every breakpoint the active slide and its peeks share, so
   a peek is just this same card partly clipped by the viewport rather than
   a smaller, separate treatment. Mobile stays close to full width with
   only a sliver peeking, tablet opens that up a bit, desktop settles at
   the 66-70% "centered peek" proportion. */
const SLIDE_WIDTH_CLASS = "w-[88%] sm:w-[80%] lg:w-[68%]";

/* The space between slides has to stay well under the narrowest peek the
   width above leaves visible (mobile's is the tightest), or the gap alone
   would swallow it and the peek would never show at all. */
const SLIDE_GAP_CLASS = "gap-1 sm:gap-2 lg:gap-4";

const LAST_INDEX = howWeWorkSteps.length - 1;

export function AiAutomationHowWeWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Measures the actual rendered layout rather than assuming the width
  // classes above, so the centering math stays correct at every breakpoint
  // and gap without duplicating those Tailwind values here.
  const recompute = useCallback(() => {
    const viewport = viewportRef.current;
    const slide = slideRefs.current[activeIndex];
    if (!viewport || !slide) return;

    setOffset(
      slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2,
    );
  }, [activeIndex]);

  useLayoutEffect(() => {
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, [recompute]);

  const atFirst = activeIndex === 0;
  const atLast = activeIndex === LAST_INDEX;

  const goPrev = () => setActiveIndex((current) => Math.max(0, current - 1));
  const goNext = () =>
    setActiveIndex((current) => Math.min(LAST_INDEX, current + 1));

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
              disabled={atFirst}
              aria-label="Previous step"
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowLeft size={ARROW_SIZE} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={atLast}
              aria-label="Next step"
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowRight size={ARROW_SIZE} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* The viewport spans the full container and clips anything past
            its edges; the track is wider than it (each slide sits at
            SLIDE_WIDTH_CLASS, well under 100%), so stepping the active
            index only ever needs to slide the track's transform, and the
            previous/next cards show up as peeks for free wherever one
            exists. At the two ends there's simply no neighbouring slide to
            peek, so that side of the viewport stays empty rather than
            being padded or faked. */}
        <div ref={viewportRef} className="how-we-work-viewport mt-7">
          <div
            className={`how-we-work-track ${SLIDE_GAP_CLASS}`}
            style={{ transform: `translateX(${-offset}px)` }}
          >
            {howWeWorkSteps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                  aria-hidden={!isActive}
                  className={`how-we-work-slide ${SLIDE_WIDTH_CLASS} motion-safe:transition-opacity motion-safe:duration-standard motion-safe:ease-standard ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-35"
                  }`}
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
                index === activeIndex ? "bg-ink" : "bg-ink/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
