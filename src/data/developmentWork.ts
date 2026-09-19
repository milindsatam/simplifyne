export interface WorkCard {
  readonly id: string;
  /** Filename in /public. Omit while the real screenshot isn't ready yet;
      the card then renders `placeholderText` instead. */
  readonly image?: string;
  readonly placeholderText?: string;
  readonly label: string;
  readonly name: string;
  readonly description: string;
}

export const workIntro = {
  heading: "Selected work",
  body: "A few things we've built, and what they do for the business.",
} as const;

export const workCards: readonly WorkCard[] = [
  {
    id: "leaderonomics",
    image: "/leaderonomics-lms-platform-built-simplifyne.webp",
    label: "Leaderonomics",
    name: "A subscription platform for leadership learning",
    description:
      "Course subscription system and website that lets a Malaysian leadership brand sell, deliver, and manage its programs in one place.",
  },
  {
    id: "ecareers",
    placeholderText: "TODO: replace with real E-Careers image",
    label: "E-Careers",
    name: "A smart LMS for guided learning",
    description:
      "An eLearning platform with an AI chatbot that keeps learners moving from first lesson to certification.",
  },
  {
    id: "aarogyam",
    placeholderText: "TODO: replace with real Aarogyam image",
    label: "Aarogyam",
    name: "Booking and web for a multispecialty hospital",
    description:
      "An appointment booking platform, website, and search setup that brings patients in and keeps the front desk clear.",
  },
];
