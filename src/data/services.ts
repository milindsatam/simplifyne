/** Which of the four card surfaces a service renders on. */
export type ServiceSurface = "ai" | "gray" | "white" | "deep";

export interface Service {
  readonly id: string;
  readonly label: string;
  readonly heading: string;
  readonly description: string;
  readonly image: string;
  readonly surface: ServiceSurface;
  /** TODO: point at real service routes once they exist (out of scope for now). */
  readonly href: string;
}

export const services: readonly Service[] = [
  {
    id: "ai-automation",
    label: "AI & Automation",
    heading: "Turn AI into everyday advantage",
    description:
      "Agents, integrations and automations that take the repetitive work off your team.",
    image: "/ai-automation-business-solutions-simplifyne.webp",
    surface: "ai",
    href: "#",
  },
  {
    id: "development",
    label: "Development",
    heading: "Build digital that means business",
    description:
      "Web apps and the APIs, infrastructure and integrations that hold them together.",
    image: "/web-app-development-solutions-simplifyne.webp",
    surface: "gray",
    href: "#",
  },
  {
    id: "design-ux",
    label: "Design & UX",
    heading: "Make every interaction matter",
    description:
      "Interfaces shaped around how people really behave, then tested before they ship.",
    image: "/ui-ux-design-user-experience-simplifyne.webp",
    surface: "white",
    href: "#",
  },
  {
    id: "search-growth",
    label: "Search & Growth",
    heading: "Be found by the right people",
    description:
      "Technical SEO, content and analytics that put you in front of people already looking.",
    image: "/seo-search-engine-growth-simplifyne.webp",
    surface: "deep",
    href: "#",
  },
];
