export interface Product {
  readonly id: string;
  readonly name: string;
  /** Solid tint drawn from the product's own theme, standing in for its
      image until a real one is wired up. TODO: replace with product image. */
  readonly bg: string;
  readonly description: string;
  /** TODO: point at real product sites once they're linked (out of scope for now). */
  readonly href: string;
}

export const products: readonly Product[] = [
  {
    id: "physitai",
    name: "PhysiTAI",
    bg: "#0e4d5c",
    description:
      "AI and thermal imaging that turn physical assessment into clear clinical insight.",
    href: "#",
  },
  {
    id: "societybee",
    name: "SocietyBee",
    bg: "#e0a32e",
    description:
      "Housing society management made simple, from billing to communication in one app.",
    href: "#",
  },
  {
    id: "salonbee",
    name: "Salonbee",
    bg: "#7a2e4a",
    description:
      "Booking and management built for salons, so owners run the day without the chaos.",
    href: "#",
  },
];
