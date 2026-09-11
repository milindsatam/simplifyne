export interface Product {
  readonly id: string;
  readonly name: string;
  /** Small uppercase tag shown at the top of the card. */
  readonly category: string;
  readonly image: string;
  readonly description: string;
  readonly href: string;
}

export const products: readonly Product[] = [
  {
    id: "physitai",
    name: "PhysiTAI",
    category: "Health tech",
    image: "/physitai-simplifyne-product.webp",
    description:
      "AI and thermal imaging that turn physical assessment into clear clinical insight.",
    href: "https://milindsatam.github.io/physitai/",
  },
  {
    id: "societybee",
    name: "SocietyBee",
    category: "Community management",
    image: "/societybee-simplifyne-product.webp",
    description:
      "Housing society management made simple, from billing to communication in one app.",
    href: "https://www.societybee.in/",
  },
  {
    id: "salonbee",
    name: "Salonbee",
    category: "Booking & salon",
    image: "/salonbee-simplifyne-product.webp",
    description:
      "Booking and management built for salons, so owners run the day without the chaos.",
    href: "https://salonbee.in/",
  },
];
