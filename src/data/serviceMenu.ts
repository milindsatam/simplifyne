import {
  Code2,
  Cpu,
  PenTool,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface ServiceMenuItem {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  /** TODO: point at real service routes once they exist (stubs for now). */
  readonly href: string;
}

export const serviceMenuIntro = {
  heading: "What we do",
  body: "We build digital solutions around your business, from AI workflows to search growth.",
  ctaLabel: "How we work",
  /** TODO: point at the real page once it exists. */
  ctaHref: "#",
} as const;

export const serviceMenuItems: readonly ServiceMenuItem[] = [
  {
    id: "ai-automation",
    icon: Sparkles,
    title: "AI & Automation",
    description: "Put AI and automation into everyday work",
    href: "#",
  },
  {
    id: "development",
    icon: Code2,
    title: "Development",
    description: "Websites, apps, and the wiring between",
    href: "#",
  },
  {
    id: "search-growth",
    icon: TrendingUp,
    title: "Search & Growth",
    description: "Get found by the right people",
    href: "#",
  },
  {
    id: "design-ux",
    icon: PenTool,
    title: "Design & UX",
    description: "Design people actually use",
    href: "#",
  },
  {
    id: "iot",
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connect devices to real business value",
    href: "#",
  },
];

export const featuredWork = {
  label: "Featured work",
  title: "PhysiTAI",
  descriptor: "AI powered rehabilitation platform",
  linkLabel: "View work",
  /** TODO: point at the real case study once it exists. */
  href: "#",
} as const;
