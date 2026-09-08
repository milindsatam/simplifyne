/** Which of the four card surfaces a service renders on. */
export type ServiceSurface = "ai" | "gray" | "white" | "deep";

export interface Service {
  readonly id: string;
  readonly label: string;
  readonly heading: string;
  readonly description: string;
  readonly surface: ServiceSurface;
  /** TODO: point at real service routes once they exist (out of scope for now). */
  readonly href: string;
}

export const services: readonly Service[] = [
  {
    id: "ai-automation",
    label: "AI & Automation",
    heading: "AI and automation into everyday work",
    description:
      "Agents, integrations and automations that take the repetitive work off your team.",
    surface: "ai",
    href: "#",
  },
  {
    id: "development",
    label: "Development",
    heading: "Websites, apps, and the wiring between",
    description:
      "Web apps and the APIs, infrastructure and integrations that hold them together.",
    surface: "gray",
    href: "#",
  },
  {
    id: "design-ux",
    label: "Design & UX",
    heading: "Design people actually use",
    description:
      "Interfaces shaped around how people really behave, then tested before they ship.",
    surface: "white",
    href: "#",
  },
  {
    id: "search-growth",
    label: "Search & Growth",
    heading: "Get found by the right people",
    description:
      "Technical SEO, content and analytics that put you in front of people already looking.",
    surface: "deep",
    href: "#",
  },
];
