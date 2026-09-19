export interface ClientLogo {
  /** Filename in /public. */
  readonly src: string;
  /** The SVG's own (cropped) viewBox dimensions, so next/image computes the
      right aspect ratio for sizing instead of assuming a generic box. */
  readonly width: number;
  readonly height: number;
  /** Logos vary a lot in aspect ratio (wide wordmarks vs. square/vertical
      marks) and ink density, so each one gets its own rest-state caps to
      read at a consistent visual weight instead of sharing one size. */
  readonly maxHeight: number;
  readonly maxWidth: number;
}

export interface Client {
  readonly id: string;
  /** The box's centred label when there's no logo, and always the logo's
      alt text when there is one. */
  readonly name: string;
  /** The "what we did" caption the box raises on hover or focus. */
  readonly work: string;
  /** Rendered instead of the text name when present. */
  readonly logo?: ClientLogo;
}

export const clients: readonly Client[] = [
  {
    id: "leaderonomics",
    name: "Leaderonomics",
    work: "Course subscription platform and full website build",
    logo: {
      src: "/leaderonmics.svg",
      width: 800,
      height: 301,
      maxHeight: 66,
      maxWidth: 180,
    },
  },
  {
    id: "ecareers",
    name: "E-Careers",
    work: "eLearning course production and delivery",
    logo: {
      src: "/e-careers.svg",
      width: 800,
      height: 301,
      maxHeight: 46,
      maxWidth: 180,
    },
  },
  {
    id: "esteril",
    name: "Esteril",
    work: "SEO and web development retainer",
    logo: {
      src: "/esteril.svg",
      width: 800,
      height: 301,
      maxHeight: 46,
      maxWidth: 180,
    },
  },
  {
    id: "shaftcraft",
    name: "SCI",
    work: "Website and ongoing digital services",
    logo: {
      src: "/sci.svg",
      width: 436,
      height: 339,
      maxHeight: 54,
      maxWidth: 180,
    },
  },
  {
    id: "aarogyam",
    name: "Aarogyam",
    work: "SEO and long-form healthcare content",
    logo: {
      src: "/aarogyam_hospital.svg",
      width: 800,
      height: 449,
      maxHeight: 68,
      maxWidth: 180,
    },
  },
  {
    id: "cyber-panda",
    name: "Cyber Panda",
    work: "Brand identity and marketing website",
    logo: {
      src: "/cyber_panda.svg",
      width: 427,
      height: 600,
      maxHeight: 70,
      maxWidth: 180,
    },
  },
  {
    id: "abungu-farm",
    name: "Abungu Farm",
    work: "Ecommerce store and product photography",
    logo: {
      src: "/abungu_rabbit.svg",
      width: 620,
      height: 600,
      maxHeight: 66,
      maxWidth: 180,
    },
  },
  {
    id: "alekh-holidays",
    name: "Alekh Holidays",
    work: "Travel booking website and SEO",
    logo: {
      src: "/alekh_holidays.svg",
      width: 800,
      height: 315,
      maxHeight: 62,
      maxWidth: 180,
    },
  },
  {
    id: "bd-lights",
    name: "BD Lights",
    work: "Content strategy, SEO, and paid ads",
    logo: {
      src: "/bdlghts.svg",
      width: 800,
      height: 600,
      maxHeight: 60,
      maxWidth: 180,
    },
  },
  {
    id: "revonext-waters",
    name: "RevoNext Waters",
    work: "Website design and local search growth",
    logo: {
      src: "/revonext_waters.svg",
      width: 800,
      height: 315,
      maxHeight: 58,
      maxWidth: 180,
    },
  },
];
