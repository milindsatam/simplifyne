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
   hover dim, which needs to react instantly regardless of index. */
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
    <section className="bg-surface-white py-15">
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

        <ul
          ref={gridRef}
          className="client-grid mt-10 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-5"
        >
          {clients.map((client, index) => (
            <li
              key={client.id}
              // Focusable so the caption is reachable by keyboard, the way it
              // is by pointer. The caption itself is always in the document,
              // so assistive tech reads it either way.
              tabIndex={0}
              data-revealed={revealed[index]}
              className="client-cell flex items-center justify-center rounded-menu-item px-2 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.logoWidth}
                height={client.logoHeight}
                className="client-logo h-[var(--logo-height)] w-full object-contain"
              />

              {/* Never rendered on mobile: no room beside a logo for it, and
                  no hover to reveal it with. */}
              <p className="client-caption hidden text-client-caption text-ink-soft sm:block">
                {client.work}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
