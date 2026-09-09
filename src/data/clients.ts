export interface Client {
  readonly id: string;
  /** The box's centred label. TODO: swap for a logo image once files exist
      for every client here, the way the first five already do in /public. */
  readonly name: string;
  /** The "what we did" caption the box raises on hover or focus. */
  readonly work: string;
}

export const clients: readonly Client[] = [
  {
    id: "leaderonomics",
    name: "Leaderonomics",
    work: "Course subscription platform and full website build",
  },
  {
    id: "ecareers",
    name: "E-Careers",
    work: "eLearning course production and delivery",
  },
  {
    id: "esteril",
    name: "Esteril",
    work: "SEO and web development retainer",
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
  },
  {
    id: "cyber-panda",
    name: "Cyber Panda",
    work: "Brand identity and marketing website",
  },
  {
    id: "abungu-farm",
    name: "Abungu Farm",
    work: "Ecommerce store and product photography",
  },
  {
    id: "alekh-holidays",
    name: "Alekh Holidays",
    work: "Travel booking website and SEO",
  },
  {
    id: "bd-lights",
    name: "BD Lights",
    work: "Content strategy, SEO, and paid ads",
  },
  {
    id: "standish-memorial",
    name: "Standish Memorial",
    work: "Website design and local search growth",
  },
];
