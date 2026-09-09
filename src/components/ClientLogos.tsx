"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { clients } from "@/data/clients";

/* A fifth of the grid is enough to read as "arrived" without waiting for the
   whole row to clear the fold. */
const REVEAL_THRESHOLD = 0.2;
const ARROW_SIZE = 16;

export function ClientLogos() {
  const gridRef = useRef<HTMLUListElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        // The cascade is a greeting, not a loop: once it has played, scrolling
        // back past the section should not replay it.
        observer.disconnect();
      },
      { threshold: REVEAL_THRESHOLD },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface-white py-15">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        {/* Desktop splits the row in two; below that the paragraph stacks under
            the heading block. */}
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-6">
          <div>
            <h2 className="font-display text-section-title font-bold text-ink">
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
          data-revealed={revealed}
          className="mt-10 grid grid-cols-2 gap-x-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {clients.map((client, index) => (
            <li
              key={client.id}
              // Focusable so the caption is reachable by keyboard, the way it
              // is by pointer. The caption itself is always in the document,
              // so assistive tech reads it either way.
              tabIndex={0}
              style={{ "--logo-index": index } as CSSProperties}
              className="client-cell flex flex-col items-center gap-1.5 rounded-menu-item px-1 py-4 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.logoWidth}
                height={client.logoHeight}
                className="client-logo max-h-[var(--logo-height)] w-auto object-contain"
              />

              <p className="client-caption text-caption text-ink-soft">
                {client.work}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
