export interface MarqueeLogo {
  /** Filename in /public. Case-sensitive, add these exact files there. */
  readonly src: string;
  readonly alt: string;
}

export const marqueeLogos: readonly MarqueeLogo[] = [
  { src: "/zapier.svg", alt: "Zapier" },
  { src: "/N8n.svg", alt: "n8n" },
  { src: "/open_ai.svg", alt: "OpenAI" },
  { src: "/pipedream.svg", alt: "Pipedream" },
  { src: "/microsoft.svg", alt: "Microsoft" },
  { src: "/google_cloud.svg", alt: "Google Cloud" },
  { src: "/stripe.svg", alt: "Stripe" },
  { src: "/notion.svg", alt: "Notion" },
  { src: "/airtable.svg", alt: "Airtable" },
  { src: "/asana.svg", alt: "Asana" },
  { src: "/zendesk.svg", alt: "Zendesk" },
  { src: "/oracle.svg", alt: "Oracle" },
  { src: "/trello.svg", alt: "Trello" },
  { src: "/typeform.svg", alt: "Typeform" },
  { src: "/jotform.svg", alt: "Jotform" },
  { src: "/cursor.svg", alt: "Cursor" },
  { src: "/miro.svg", alt: "Miro" },
  { src: "/softr.svg", alt: "Softr" },
];
