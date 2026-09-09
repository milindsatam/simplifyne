import { CheckCircle, Globe, Star, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";

const ICON_SIZE = 20;
const STAR_SIZE = 14;
const STAR_COUNT = 5;

interface CredibilityItem {
  readonly key: string;
  readonly title: string;
  readonly sub: string;
  /** Omitted for the Google item, which uses the star row itself as its
      icon rather than a redundant extra star beside a row of stars. */
  readonly icon?: ComponentType<{
    size?: number;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
}

/* These are placeholder credibility figures, kept modest and believable,
   swapped for the real ones once they exist. */
const items: readonly CredibilityItem[] = [
  { key: "google", title: "4.9 average", sub: "on Google Reviews" },
  {
    key: "countries",
    icon: Globe,
    title: "6+ countries",
    sub: "clients served worldwide",
  },
  {
    key: "nps",
    icon: TrendingUp,
    title: "NPS 72",
    sub: "clients who'd recommend us",
  },
  {
    key: "projects",
    icon: CheckCircle,
    title: "50+ projects",
    sub: "shipped and growing",
  },
];

export function CredibilityStrip() {
  return (
    <ul className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:divide-x lg:divide-ink/10">
      {items.map(({ key, icon: Icon, title, sub }) => (
        <li
          key={key}
          className="flex items-start gap-2 lg:px-6 lg:first:pl-0 lg:last:pr-0"
        >
          {Icon ? (
            <Icon size={ICON_SIZE} aria-hidden="true" />
          ) : (
            // The Google "G" logo isn't available here, so the row of
            // review stars below stands in as the item's icon too.
            <div className="flex gap-0.5 pt-1" aria-hidden="true">
              {Array.from({ length: STAR_COUNT }).map((_, i) => (
                <Star key={i} size={STAR_SIZE} className="fill-rating text-rating" />
              ))}
            </div>
          )}

          <div>
            <p className="text-body-sm font-semibold text-ink">{title}</p>
            <p className="mt-1 text-menu-body text-ink/60">{sub}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
