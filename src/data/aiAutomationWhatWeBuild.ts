import {
  Blocks,
  MessageSquare,
  Search,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface WhatWeBuildRow {
  readonly icon: LucideIcon;
  readonly label: string;
  /** TODO: point at real anchors/routes once they exist (stubs for now). */
  readonly href: string;
}

export interface WhatWeBuildCard {
  readonly id: string;
  readonly heading: string;
  readonly description: string;
  readonly rows: readonly WhatWeBuildRow[];
}

export const whatWeBuildIntro = {
  heading: "What we build",
  body: "Practical AI and automation, grouped by what it does for you. No science projects, just work that gets taken off your plate.",
} as const;

/** Shown at the top of every card in this section; kept as one constant
    since all three cards use the identical eyebrow. */
export const whatWeBuildEyebrow = "What we do";

export const whatWeBuildCards: readonly WhatWeBuildCard[] = [
  {
    id: "build-with-ai",
    heading: "Build with AI",
    description:
      "AI that does real work inside your business, drafting, answering, and acting on your own data, not just clever demos.",
    rows: [
      { icon: Sparkles, label: "AI agents & assistants", href: "#" },
      { icon: MessageSquare, label: "Chatbots & support AI", href: "#" },
    ],
  },
  {
    id: "automate-the-busywork",
    heading: "Automate the busywork",
    description:
      "We connect your tools so information and tasks move on their own, no more copy-paste between apps or work stuck in someone's inbox.",
    rows: [
      { icon: Workflow, label: "Workflow automation", href: "#" },
      { icon: Blocks, label: "System integrations", href: "#" },
    ],
  },
  {
    id: "find-and-fix-whats-slow",
    heading: "Find and fix what's slow",
    description:
      "First we find where your team loses time, then we build the small, sharp tool that removes it.",
    rows: [
      { icon: Search, label: "Process audits", href: "#" },
      { icon: Wrench, label: "Internal tools", href: "#" },
    ],
  },
];
