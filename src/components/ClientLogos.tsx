"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clients } from "@/data/clients";

/* A fifth of the grid is enough to read as "arrived" without waiting for the
   whole row to clear the fold. */
const REVEAL_THRESHOLD = 0.2;
/* Matches --logo-stagger. Kept in JS (rather than a CSS transition-delay)
   because a per-cell delay on the reveal transition would also stall the
   hover tint, which needs to react instantly regardless of index. */
const REVEAL_STAGGER_MS = 60;
const ARROW_SIZE = 16;

export function ClientLogos() {
  const gridRef = useRef<HTMLUListElement>(null);
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    clients.map(() => false),
  );

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        clients.forEach((_, index) => {
          timeouts.push(
            setTimeout(() => {
              setRevealed((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * REVEAL_STAGGER_MS),
          );
        });

        // The cascade is a greeting, not a loop: once it has played,
        // scrolling back past the section should not replay it.
        observer.disconnect();
      },
      { threshold: REVEAL_THRESHOLD },
    );

    observer.observe(grid);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="bg-surface-white pt-[6.25rem] pb-15">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        {/* Desktop splits the row in two; below that the paragraph stacks under
            the heading block. */}
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-6">
          <div>
            <h2 className="max-w-section-title font-display text-section-title font-bold text-ink">
              For companies with tech leverage
            </h2>

            {/* TODO: point at the works index once that route exists. */}
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1 rounded-menu-item text-action font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              All works
              <ArrowRight size={ARROW_SIZE} aria-hidden="true" />
            </a>
          </div>

          <p className="mt-4 max-w-client-intro text-body-md text-ink-soft lg:mt-0">
            We specialize in working with digital products and brands,
            regardless of size and lifecycle stage, from startups to established
            businesses striving to achieve significant tech leverage.
          </p>
        </div>

        {/* The observer never runs without scripting, so the cascade is
            skipped rather than leaving the row permanently invisible. An
            unlayered rule outranks the components layer this overrides. */}
        <noscript>
          <style>{`.client-cell { opacity: 1; transform: none; }`}</style>
        </noscript>

        {/* One contained panel, not scattered marks: a hairline border and a
            faint tint, with logos boxed into equal cells inside it. Dividers
            only at the single-row desktop width; a wrapped row would make a
            divider land in the wrong place, so it's dropped instead. */}
        <ul
          ref={gridRef}
          className="mt-8 grid grid-cols-2 overflow-hidden rounded-bento border border-panel-border bg-panel-subtle sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-panel-border"
        >
          {clients.map((client, index) => (
            <li
              key={client.id}
              // Focusable so the caption is reachable by keyboard, the way it
              // is by pointer.
              tabIndex={0}
              data-revealed={revealed[index]}
              className="client-cell group flex flex-col items-center px-3 py-5 transition-colors duration-standard ease-standard hover:bg-panel-hover focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink focus-within:bg-panel-hover"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.logoWidth}
                height={client.logoHeight}
                className="h-[var(--logo-height)] w-[var(--logo-max-width)] object-contain"
              />

              {/* Space for the caption is reserved at rest (never display:
                  none), so revealing it on hover never reflows the cell or
                  shifts a neighbour. */}
              <p className="mt-2 h-[2.25rem] max-w-full text-center text-menu-body text-ink/65 opacity-0 translate-y-[var(--logo-caption-shift)] motion-safe:transition motion-safe:duration-standard motion-safe:ease-standard group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                {client.work}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
