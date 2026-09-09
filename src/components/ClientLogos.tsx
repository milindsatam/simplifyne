"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { clients } from "@/data/clients";

/* A fifth of the grid is enough to read as "arrived" without waiting for the
   whole row to clear the fold. */
const REVEAL_THRESHOLD = 0.2;
/* Matches --grid-reveal-stagger. Kept in JS (rather than a CSS
   transition-delay) because a per-cell delay on the reveal transition would
   also stall the hover transition, which needs to react instantly
   regardless of index. */
const REVEAL_STAGGER_MS = 50;
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
    <section className="section-padding bg-surface-muted">
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

        {/* One bordered grid, not a floating row: every box carries its own
            right and bottom edge, and the container carries only the top
            and left, so adjacent boxes share a single hairline rather than
            doubling it up. That rule holds regardless of column count, so
            the same markup wraps cleanly at every breakpoint with no
            per-breakpoint divider logic. */}
        <ul
          ref={gridRef}
          className="mt-8 grid grid-cols-2 overflow-hidden rounded-bento border-t border-l border-grid-border sm:grid-cols-3 lg:grid-cols-5"
        >
          {clients.map((client, index) => (
            <li
              key={client.id}
              data-revealed={revealed[index]}
              className="client-cell min-w-0"
            >
              <a
                href="#"
                className="group relative flex aspect-[3/2] w-full flex-col items-center justify-center border-r border-b border-grid-border bg-surface-white px-2 transition-colors duration-standard ease-standard hover:bg-brand focus-visible:z-10 focus-visible:bg-brand focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-on-dark"
              >
                <span className="text-center text-body-md font-semibold text-ink transition-colors duration-standard ease-standard group-hover:text-on-dark group-focus-visible:text-on-dark">
                  {client.name}
                </span>

                {/* Zero height at rest, not display:none, so growing it on
                    hover is what makes room for the name to shift up:
                    the pair is centred as one group, and only this box's
                    own layout changes, never a neighbour's. */}
                <p className="mt-1 h-0 max-w-[80%] overflow-hidden text-center text-menu-body text-product-copy opacity-0 translate-y-[var(--grid-caption-shift)] motion-safe:transition-all motion-safe:duration-standard motion-safe:ease-standard group-hover:h-[var(--grid-caption-height)] group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:h-[var(--grid-caption-height)] group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
                  {client.work}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
