export interface TestimonialStat {
  readonly value: string;
  readonly label: string;
}

export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly sub: string;
  readonly stats: readonly [
    TestimonialStat,
    TestimonialStat,
    TestimonialStat,
  ];
  readonly name: string;
  readonly role: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    id: "jazz-gandhum",
    quote:
      "The whole build felt smooth and hassle free, exactly what we needed to launch on time.",
    sub: "They understood our course business and shipped a platform our learners actually enjoy using.",
    stats: [
      { value: "40% Faster Launch", label: "From brief to live in record time." },
      {
        value: "3x Course Completions",
        label: "Learners finishing more of what they start.",
      },
      { value: "Always On", label: "Courses available whenever learners are." },
    ],
    name: "Jazz Gandhum",
    role: "Founder, E-Careers",
  },
  {
    id: "roshan-thiran",
    quote:
      "They turned a complex idea into a subscription platform that simply works.",
    sub: "Our leadership programs now reach more people with far less friction on our side.",
    stats: [
      { value: "One Platform", label: "Sell, deliver, and manage in a single place." },
      { value: "2x Faster Onboarding", label: "New members start learning sooner." },
      { value: "Fewer Support Tickets", label: "A system the team actually trusts." },
    ],
    name: "Roshan Thiran",
    role: "Founder, Leaderonomics",
  },
  {
    id: "kevin-barboza",
    quote: "Our phone rings with the right kind of jobs now.",
    sub: "The content and search work put us in front of homeowners who are ready to buy.",
    stats: [
      { value: "3x Organic Traffic", label: "More qualified visitors every month." },
      { value: "Top 3 Rankings", label: "Visible for the searches that matter." },
      { value: "Lower Cost per Lead", label: "Paid and organic working together." },
    ],
    name: "Kevin Barboza",
    role: "Founder, BD Lights",
  },
];
