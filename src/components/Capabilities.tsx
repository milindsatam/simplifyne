"use client";

import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { capabilities } from "@/data/capabilities";

const ICON_SIZE = 20;
const ARROW_SIZE = 16;

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState(0);
  const active = capabilities[openIndex];

  const goPrev = () =>
    setOpenIndex(
      (current) => (current - 1 + capabilities.length) % capabilities.length,
    );
  const goNext = () =>
    setOpenIndex((current) => (current + 1) % capabilities.length);

  return (
    <section className="section-padding bg-surface-muted">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <h2 className="font-display text-section-title font-bold text-ink">
          Capabilities
        </h2>

        <div className="mt-6 flex flex-col gap-8 lg:mt-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
          <ul className="flex flex-col gap-2">
            {capabilities.map((capability, index) => {
              const isOpen = index === openIndex;

              return (
                <li
                  key={capability.id}
                  className={`rounded-panel transition-colors duration-standard ease-standard ${
                    isOpen
                      ? "bg-surface-white shadow-panel"
                      : "bg-surface-muted"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink"
                  >
                    <span className="text-bento-heading-md font-semibold text-ink">
                      {capability.title}
                    </span>
                    {isOpen ? (
                      <Minus
                        size={ICON_SIZE}
                        aria-hidden="true"
                        className="shrink-0 text-ink"
                      />
                    ) : (
                      <Plus
                        size={ICON_SIZE}
                        aria-hidden="true"
                        className="shrink-0 text-ink"
                      />
                    )}
                  </button>

                  <div data-open={isOpen} className="accordion-panel">
                    <div className="px-4 pb-4">
                      <p className="text-body-md text-ink-soft">
                        {capability.description}
                      </p>
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {capability.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center gap-2 text-body-sm text-ink"
                          >
                            <span
                              aria-hidden="true"
                              className="size-1 shrink-0 rounded-full bg-ink/40"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div>
            <div className="flex items-center justify-between">
              <p className="font-display text-card-title font-bold text-brand">
                {active.testimonial.company}
              </p>

              <div className="flex items-center gap-3 text-body-sm text-ink/60">
                <span>
                  {openIndex + 1} / {capabilities.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous capability"
                    className="flex size-7 items-center justify-center rounded-pill transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <ArrowLeft size={ARROW_SIZE} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next capability"
                    className="flex size-7 items-center justify-center rounded-pill transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <ArrowRight size={ARROW_SIZE} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Remounts on every switch (the key), which is what replays
                the fade keyframe instead of the content just jumping to
                its new value. motion-safe: drops the animation entirely
                under prefers-reduced-motion, not just its duration. */}
            <div
              key={active.id}
              className="motion-safe:animate-[testimonial-fade_var(--duration-standard)_var(--ease-standard)]"
            >
              <p className="mt-6 text-[1.375rem]/[1.3] font-medium text-ink">
                {active.testimonial.quote}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-pill bg-surface-muted text-body-sm font-semibold text-ink/50"
                >
                  {initials(active.testimonial.name)}
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-ink">
                    {active.testimonial.name}
                  </p>
                  <p className="text-menu-body text-ink/60">
                    {active.testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
