import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type {
  CaseStudy,
  CaseStudyHeadingSize,
  CaseStudySurface,
} from "@/data/caseStudies";

const ARROW_SIZE = 14;

const surfaceClass: Record<CaseStudySurface, string> = {
  gray: "bg-surface-gray text-ink",
  ai: "bg-[image:var(--gradient-ai)] text-on-dark",
  brand: "bg-brand text-on-dark",
  deep: "bg-brand-deep text-on-dark",
};

/** Only the gray card carries dark-on-light text; the other three surfaces
    are all dark, so they share one soft/faint pair regardless of which of
    the three backgrounds they sit on. */
const labelClass: Record<CaseStudySurface, string> = {
  gray: "text-bento-label-on-light",
  ai: "text-bento-label-on-dark",
  brand: "text-bento-label-on-dark",
  deep: "text-bento-label-on-dark",
};

const bodyClass: Record<CaseStudySurface, string> = {
  gray: "text-ink-soft",
  ai: "text-on-dark-soft",
  brand: "text-on-dark-soft",
  deep: "text-on-dark-soft",
};

const placeholderClass: Record<CaseStudySurface, string> = {
  gray: "bg-bento-placeholder-on-light",
  ai: "bg-bento-placeholder-on-dark",
  brand: "bg-bento-placeholder-on-dark",
  deep: "bg-bento-placeholder-on-dark",
};

/** The focus ring needs to read against the card's own background, not a
    single colour for all four: ink is invisible on the two blue surfaces,
    and white is invisible on the light one. */
const ringClass: Record<CaseStudySurface, string> = {
  gray: "focus-visible:outline-ink",
  ai: "focus-visible:outline-on-dark",
  brand: "focus-visible:outline-on-dark",
  deep: "focus-visible:outline-on-dark",
};

const headingClass: Record<CaseStudyHeadingSize, string> = {
  lg: "text-bento-heading-lg",
  md: "text-bento-heading-md",
  // 18px already exists as the service cards' heading size.
  sm: "text-card-title",
};

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  // The tall left card reads first and carries more weight, so it gets a
  // touch more breathing room than the other three.
  const padding = caseStudy.slot === "left" ? "p-5" : "p-4";

  return (
    <a
      href={caseStudy.href}
      style={
        caseStudy.backgroundColor
          ? { backgroundColor: caseStudy.backgroundColor }
          : undefined
      }
      className={`bento-card ${padding} ${surfaceClass[caseStudy.surface]} focus-visible:outline-2 focus-visible:outline-offset-2 ${ringClass[caseStudy.surface]}`}
    >
      <p
        className={`text-label font-semibold uppercase ${labelClass[caseStudy.surface]}`}
      >
        {caseStudy.label}
      </p>

      <h3
        className={`mt-2 max-w-card-heading font-semibold ${headingClass[caseStudy.headingSize]}`}
      >
        {caseStudy.heading}
      </h3>

      <p
        className={`mt-2 max-w-card-copy text-card-body ${bodyClass[caseStudy.surface]}`}
      >
        {caseStudy.body}
      </p>

      {/* Not a nested <button>: the whole card is the control, this is its
          affordance. Persistent, unlike the hero cards' reveal-on-hover
          Expand, so it carries no service-reveal treatment. */}
      <span className="mt-3 inline-flex items-center gap-1 text-action font-semibold">
        Expand
        <ArrowRight
          size={ARROW_SIZE}
          aria-hidden="true"
          className="bento-arrow"
        />
      </span>

      {caseStudy.image ? (
        // object-contain: the source is a full UI screenshot (a tilted
        // browser mockup on its own light backdrop), so cropping it would
        // cut the mockup off rather than just filling frame with photo.
        <div
          aria-hidden="true"
          className="relative mt-6 flex-1 overflow-hidden rounded-panel p-2"
        >
          <Image
            src={caseStudy.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 84vw"
            className="object-contain"
          />
        </div>
      ) : (
        // Reserved for a case study image, added later. Marked aria-hidden:
        // the TODO is a note for whoever wires up the image next, not
        // content a screen reader should announce as part of the card.
        <div
          aria-hidden="true"
          className={`mt-6 flex flex-1 items-center justify-center rounded-panel p-2 ${placeholderClass[caseStudy.surface]}`}
        >
          <span
            className={`text-center text-card-body ${bodyClass[caseStudy.surface]}`}
          >
            TODO: replace with case study image
          </span>
        </div>
      )}
    </a>
  );
}
