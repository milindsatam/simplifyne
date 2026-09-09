export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly sub: string;
  readonly name: string;
  readonly role: string;
  readonly photo: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    id: "roshan-thiran",
    quote:
      "They turned a complex idea into a subscription platform that simply works.",
    sub: "Our leadership programs now reach more people with far less friction on our side.",
    name: "Roshan Thiran",
    role: "Founder, Leaderonomics",
    photo: "/roshan-thiran-leaderonomics.webp",
  },
  {
    id: "jazz-gandhum",
    quote:
      "The whole build felt smooth and hassle free, exactly what we needed to launch on time.",
    sub: "They understood our course business and shipped a platform our learners actually enjoy using.",
    name: "Jazz Gandhum",
    role: "Founder, E-Careers",
    photo: "/jazz-gandhum-ecareers.webp",
  },
  {
    id: "kevin-barboza",
    quote: "Our phone rings with the right kind of jobs now.",
    sub: "The content and search work put us in front of homeowners who are ready to buy.",
    name: "Kevin Barboza",
    role: "Founder, BD Lights",
    photo: "/kevin-barboza-bdlights.webp",
  },
];
