import {
  CreditCard,
  Gauge,
  Globe,
  LayoutDashboard,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface WhatWeBuildRow {
  readonly icon: LucideIcon;
  readonly label: string;
}

export interface WhatWeBuildCard {
  readonly id: string;
  readonly heading: string;
  readonly description: string;
  readonly rows: readonly WhatWeBuildRow[];
}

export const whatWeBuildIntro = {
  heading: "What we build",
  body: "Websites, apps, and the wiring between. Built to do a job, not just to look good in a portfolio.",
} as const;

/** Shown at the top of every card in this section; kept as one constant
    since all three cards use the identical eyebrow. */
export const whatWeBuildEyebrow = "What we do";

export const whatWeBuildCards: readonly WhatWeBuildCard[] = [
  {
    id: "websites-that-sell",
    heading: "Websites that sell",
    description:
      "Fast, findable sites built to turn visitors into enquiries and sales, not just sit there looking nice. Built on the right platform for you and wired for search from day one.",
    rows: [
      { icon: Globe, label: "Business & marketing sites" },
      { icon: ShoppingCart, label: "Ecommerce (Shopify & WooCommerce)" },
    ],
  },
  {
    id: "apps-platforms",
    heading: "Apps & platforms",
    description:
      "When off-the-shelf doesn't fit, we build the platform that does. Subscription systems, booking flows, member portals, the software your business actually runs on.",
    rows: [
      { icon: LayoutDashboard, label: "Custom platforms & portals" },
      { icon: Gauge, label: "Dashboards & admin tools" },
    ],
  },
  {
    id: "the-wiring-between",
    heading: "The wiring between",
    description:
      "The part nobody sees but everyone feels. We connect your tools, payments, and messaging so data moves on its own and nothing falls through the cracks.",
    rows: [
      { icon: Workflow, label: "Integrations & APIs" },
      { icon: CreditCard, label: "Payments, WhatsApp & more" },
    ],
  },
];
