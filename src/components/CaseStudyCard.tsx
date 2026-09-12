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
  // Cancels that same padding on the bottom and right, so the image (below)
  // can bleed past the card's own bottom and right edges instead of leaving
  // a gap of card colour there. Only the left stays inset, matching the
  // text above. Height stays flex-1: it fills whatever space the grid gives
  // this card (see CaseStudies.tsx), so the card's own height is never
  // dictated by the image, and never collapses to the text's.
  const imageBleedMargin = caseStudy.slot === "left" ? "-mb-5 -mr-5" : "-mb-4 -mr-4";
  // Below lg there's no grid row to stretch these cards open, so at the
  // shared --card-min-height floor the image would be left a thin,
  // illegible sliver. This floor gives it just enough room to stay
  // legible without ballooning the card, and since the image is flex-1 it
  // absorbs the difference on every image card alike rather than leaving a
  // gap on the ones with shorter text. The left card's longer heading and
  // body wrap to an extra line at these widths, so it needs a taller floor
  // than the other two to leave its image the same comfortable amount of
  // room.
  const imageMinHeight = !caseStudy.image
    ? ""
    : caseStudy.slot === "left"
      ? "min-h-[28rem] sm:min-h-[29rem]"
      : "min-h-[24rem] sm:min-h-[25rem]";

  return (
    <a
      href={caseStudy.href}
      style={
        caseStudy.backgroundColor
          ? { backgroundColor: caseStudy.backgroundColor }
          : undefined
      }
      className={`bento-card ${padding} ${imageMinHeight} ${surfaceClass[caseStudy.surface]} focus-visible:outline-2 focus-visible:outline-offset-2 ${ringClass[caseStudy.surface]}`}
    >
      <p
        className={`text-label font-semibold uppercase ${labelClass[caseStudy.surface]}`}
      >
        {caseStudy.label}
      </p>

      <h3
        className={`mt-2 font-semibold ${headingClass[caseStudy.headingSize]}`}
      >
        {caseStudy.heading}
      </h3>

      <p className={`mt-2 text-card-body ${bodyClass[caseStudy.surface]}`}>
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
        // Fills whatever space is left in the card (flex-1), left-aligned
        // to the text above via the card's own left padding. The negative
        // bottom and right margins cancel that same padding on those two
        // sides, letting the image run past the card's own edges there;
        // the card's overflow-hidden crops it to a peek of the dashboard's
        // top-left corner, the same part of the screenshot that carries its
        // logo and nav, rather than a meaningless middle/right slice.
        <div
          aria-hidden="true"
          className={`relative mt-2 flex-1 ${imageBleedMargin} overflow-hidden rounded-tl-[0.625rem]`}
        >
          <Image
            src={caseStudy.image}
            alt=""
            fill
            quality={90}
            sizes={
              caseStudy.slot === "left"
                ? "(min-width: 1024px) 32vw, (min-width: 640px) 44vw, 88vw"
                : "(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 88vw"
            }
            className="object-cover object-left-top"
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
