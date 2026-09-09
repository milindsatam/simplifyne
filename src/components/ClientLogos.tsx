import { ArrowRight } from "lucide-react";
import { clients } from "@/data/clients";
import { ClientGrid } from "./ClientGrid";

const ARROW_SIZE = 16;

export function ClientLogos() {
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

        <ClientGrid clients={clients} />
      </div>
    </section>
  );
}
