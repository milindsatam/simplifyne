"use client";

import { useEffect, useRef, useState } from "react";
import type { Client } from "@/data/clients";

/* A fifth of the grid is enough to read as "arrived" without waiting for the
   whole row to clear the fold. */
const REVEAL_THRESHOLD = 0.2;
/* Matches --grid-reveal-stagger. Kept in JS (rather than a CSS
   transition-delay) because a per-cell delay on the reveal transition would
   also stall the hover transition, which needs to react instantly
   regardless of index. */
const REVEAL_STAGGER_MS = 50;

/** The bordered, hover-to-brand reveal grid shared by the homepage's client
    section and the About page's client section: identical interaction and
    animation, just a different list of clients and a different heading
    around it. */
export function ClientGrid({ clients }: { clients: readonly Client[] }) {
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
  }, [clients]);

  return (
    <>
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
    </>
  );
}
