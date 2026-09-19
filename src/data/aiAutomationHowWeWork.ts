export interface HowWeWorkStep {
  readonly number: string;
  readonly heading: string;
  readonly detail: string;
}

export const howWeWorkIntro = {
  heading: "How we work",
  body: "No jargon, no six-month discovery phase. A simple way of working that gets you to something real, fast.",
} as const;

export const howWeWorkSteps: readonly HowWeWorkStep[] = [
  {
    number: "01",
    heading: "Find the leak",
    detail:
      "We look at where your team loses time and what's worth fixing first.",
  },
  {
    number: "02",
    heading: "Design the fix",
    detail: "A clear plan: what gets automated, with which tools, and why.",
  },
  {
    number: "03",
    heading: "Build in the open",
    detail: "You see working pieces early and shape them as we go.",
  },
  {
    number: "04",
    heading: "Ship and tune",
    detail: "It goes live, then we refine it against real use.",
  },
];
