export interface Capability {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly bullets: readonly string[];
  readonly testimonial: {
    readonly quote: string;
    readonly name: string;
    readonly role: string;
    readonly company: string;
  };
}

export const capabilities: readonly Capability[] = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Put AI and automation to work inside your everyday operations, so your team spends time on what matters.",
    bullets: [
      "AI agents and assistants",
      "Workflow automation",
      "Process audits",
      "System integrations",
      "Internal tools",
    ],
    // DEMO testimonial, replace
    testimonial: {
      quote:
        "They automated the busywork we thought we were stuck with forever.",
      name: "Priya Nair",
      role: "Operations Lead",
      company: "NorthBridge",
    },
  },
  {
    id: "development",
    title: "Development",
    description:
      "Websites, web apps, and the systems that connect them, built to last and easy to grow.",
    bullets: [
      "Websites and web apps",
      "Ecommerce builds",
      "Custom platforms",
      "API and integrations",
      "Maintenance and support",
    ],
    // DEMO testimonial, replace
    testimonial: {
      quote:
        "The platform they built just works, and it's held up as we've grown.",
      name: "Rahul Mehta",
      role: "Founder",
      company: "Craftline",
    },
  },
  {
    id: "search-growth",
    title: "Search & Growth",
    description:
      "Get found by the right people through search and content that compounds over time.",
    bullets: [
      "SEO strategy",
      "Content production",
      "Technical SEO",
      "Paid search and social",
      "Analytics and reporting",
    ],
    // DEMO testimonial, replace
    testimonial: {
      quote:
        "We finally show up for the searches that actually bring us business.",
      name: "Sara Coelho",
      role: "Marketing Head",
      company: "Vellum",
    },
  },
  {
    id: "design-ux",
    title: "Design & UX",
    description:
      "Design people actually enjoy using, from first impression to daily use.",
    bullets: [
      "Brand identity",
      "UI and UX design",
      "Design systems",
      "Prototyping",
      "Packaging and collateral",
    ],
    // DEMO testimonial, replace
    testimonial: {
      quote: "Our product feels considered now, people notice the difference.",
      name: "Daniel Fox",
      role: "Product Lead",
      company: "Kessel",
    },
  },
  {
    id: "iot-solutions",
    title: "IoT Solutions",
    description:
      "Connect devices to real business value with reliable, well-integrated IoT.",
    bullets: [
      "Device integration",
      "Dashboards and monitoring",
      "Data pipelines",
      "Hardware plus software",
      "Ongoing support",
    ],
    // DEMO testimonial, replace
    testimonial: {
      quote: "Devices, data, and dashboards, all finally talking to each other.",
      name: "Meera Iyer",
      role: "CTO",
      company: "Attera",
    },
  },
] as const;
