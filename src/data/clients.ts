export interface ClientLogo {
  /** Filename in /public. */
  readonly src: string;
  /** Logos vary in aspect ratio (wide wordmarks vs. square/vertical marks),
      so each one gets its own rest-state cap to read at a consistent
      visual weight instead of sharing one height for every shape. */
  readonly maxHeight: number;
}

export interface Client {
  readonly id: string;
  /** The box's centred label when there's no logo, and always the logo's
      alt text when there is one. */
  readonly name: string;
  /** The "what we did" caption the box raises on hover or focus. */
  readonly work: string;
  /** Rendered instead of the text name when present. SCI has no logo file
      and keeps the text label. */
  readonly logo?: ClientLogo;
}

export const clients: readonly Client[] = [
  {
    id: "leaderonomics",
    name: "Leaderonomics",
    work: "Course subscription platform and full website build",
    logo: { src: "/leaderonmics.svg", maxHeight: 40 },
  },
  {
    id: "ecareers",
    name: "E-Careers",
    work: "eLearning course production and delivery",
    logo: { src: "/e-careers.svg", maxHeight: 40 },
  },
  {
    id: "esteril",
    name: "Esteril",
    work: "SEO and web development retainer",
    logo: { src: "/esteril.svg", maxHeight: 40 },
  },
  {
    id: "shaftcraft",
    name: "SCI",
    work: "Website and ongoing digital services",
  },
  {
    id: "aarogyam",
    name: "Aarogyam",
    work: "SEO and long-form healthcare content",
    logo: { src: "/aarogyam_hospital.svg", maxHeight: 30 },
  },
  {
    id: "cyber-panda",
    name: "Cyber Panda",
    work: "Brand identity and marketing website",
    logo: { src: "/cyber_panda.svg", maxHeight: 24 },
  },
  {
    id: "abungu-farm",
    name: "Abungu Farm",
    work: "Ecommerce store and product photography",
    logo: { src: "/abungu_rabbit.svg", maxHeight: 24 },
  },
  {
    id: "alekh-holidays",
    name: "Alekh Holidays",
    work: "Travel booking website and SEO",
    logo: { src: "/alekh_holidays.svg", maxHeight: 40 },
  },
  {
    id: "bd-lights",
    name: "BD Lights",
    work: "Content strategy, SEO, and paid ads",
    logo: { src: "/bdlghts.svg", maxHeight: 28 },
  },
  {
    id: "revonext-waters",
    name: "RevoNext Waters",
    work: "Website design and local search growth",
    logo: { src: "/revonext_waters.svg", maxHeight: 40 },
  },
];
