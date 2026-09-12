import { ArrowRight } from "lucide-react";
import type { CaseStudySlot } from "@/data/caseStudies";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";

const ARROW_SIZE = 16;

/* The bento shape is named grid areas, and grid-area only takes effect on a
   grid's direct children, so the slot lives on the <li> rather than the
   <a> that CaseStudyCard renders. */
const slotClass: Record<CaseStudySlot, string> = {
  left: "bento-card--left",
  top: "bento-card--top",
  bl: "bento-card--bl",
  br: "bento-card--br",
};

export function CaseStudies() {
  return (
    <section className="section-padding bg-surface-white">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-6">
          <div>
            <h2 className="font-display text-section-title font-bold text-ink">
              Some of our work
            </h2>

            <p className="mt-4 max-w-client-intro text-body-md text-ink-soft">
              A few projects that show how we build around a business, and
              what it does for them.
            </p>
          </div>

          {/* TODO: point at the works index once that route exists. */}
          <a
            href="#"
            className="mt-6 inline-flex w-fit items-center gap-1 rounded-pill bg-ink px-3 py-[0.875rem] text-body-sm font-semibold text-on-dark transition-colors duration-standard ease-standard hover:bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink lg:mt-0"
          >
            View all work
            <ArrowRight size={ARROW_SIZE} aria-hidden="true" />
          </a>
        </div>

        <ul className="bento-grid mt-7">
          {caseStudies.map((caseStudy) => (
            <li
              key={caseStudy.id}
              className={`min-w-0 ${slotClass[caseStudy.slot]}`}
            >
              <CaseStudyCard caseStudy={caseStudy} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
