/** Which corner of the bento shape a card occupies. Only meaningful at the
    desktop breakpoint; the tablet/mobile grids place cards in this same
    array order instead. */
export type CaseStudySlot = "left" | "top" | "bl" | "br";

/** Which of the four card surfaces a case study renders on. */
export type CaseStudySurface = "gray" | "ai" | "brand" | "deep";

/** The heading's type scale differs by card, largest on the tall card. */
export type CaseStudyHeadingSize = "lg" | "md" | "sm";

export interface CaseStudy {
  readonly id: string;
  readonly slot: CaseStudySlot;
  readonly surface: CaseStudySurface;
  readonly headingSize: CaseStudyHeadingSize;
  readonly label: string;
  readonly heading: string;
  readonly body: string;
  /** TODO: point at real case study routes once they exist (out of scope for now). */
  readonly href: string;
  /** Overrides the surface's own background for this one card, so it can
      match a real image's tone exactly instead of the shared surface. */
  readonly backgroundColor?: string;
  /** A real image shown instead of the placeholder block. */
  readonly image?: string;
}

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "leaderonomics",
    slot: "left",
    surface: "gray",
    headingSize: "lg",
    label: "LEADERONOMICS",
    heading: "A subscription platform for leadership learning",
    body: "We built the course subscription system and website that lets a Malaysian leadership brand sell, deliver, and manage its programs in one place.",
    href: "#",
    backgroundColor: "var(--color-bento-leaderonomics)",
    image: "/leaderonomics-lms-platform-built-simplifyne.webp",
  },
  {
    id: "ecareers",
    slot: "top",
    surface: "ai",
    headingSize: "md",
    label: "E-CAREERS",
    heading: "Course material turned into polished eLearning",
    body: "We produced structured, engaging online course content built to keep learners moving from first lesson to certification.",
    href: "#",
  },
  {
    id: "bd-lights",
    slot: "bl",
    surface: "brand",
    headingSize: "sm",
    label: "BD LIGHTS",
    heading: "Search that brings in the right jobs",
    body: "Content strategy, SEO, and paid ads that help a Toronto lighting company get found by homeowners ready to buy.",
    href: "#",
  },
  {
    id: "esteril",
    slot: "br",
    surface: "deep",
    headingSize: "sm",
    label: "ESTERIL",
    heading: "SEO and web for a pharma equipment maker",
    body: "An ongoing SEO and development retainer growing qualified search visibility in a specialised B2B niche.",
    href: "#",
  },
];
