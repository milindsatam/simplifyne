export interface Client {
  readonly id: string;
  readonly name: string;
  /** Served from /public, so the path is the file's own base URL. */
  readonly logo: string;
  /** The file's intrinsic pixels. Only the ratio is used, so nothing shifts
      while the logo loads; the rendered height is capped by the grid. */
  readonly logoWidth: number;
  readonly logoHeight: number;
  /** The "what we did" caption the cell raises on hover or focus. */
  readonly work: string;
}

export const clients: readonly Client[] = [
  {
    id: "leaderonomics",
    name: "Leaderonomics",
    logo: "/leaderonomics-logo.webp",
    logoWidth: 350,
    logoHeight: 55,
    work: "Course subscription platform and full website build",
  },
  {
    id: "ecareers",
    name: "e-Careers",
    logo: "/ecareers-logo.webp",
    logoWidth: 144,
    logoHeight: 60,
    work: "eLearning course production and delivery",
  },
  {
    id: "esteril",
    name: "Esteril",
    logo: "/esteril-logo.webp",
    logoWidth: 233,
    logoHeight: 55,
    work: "SEO and web development retainer",
  },
  {
    id: "shaftcraft",
    name: "Shaft Craft Industry",
    logo: "/shaftcraft-logo.webp",
    logoWidth: 65,
    logoHeight: 56,
    work: "Website and ongoing digital services",
  },
  {
    id: "aarogyam",
    name: "Aarogyam",
    logo: "/aarogyam-logo.webp",
    logoWidth: 85,
    logoHeight: 55,
    work: "SEO and long-form healthcare content",
  },
];
