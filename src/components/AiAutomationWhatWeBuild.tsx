import { ArrowRight } from "lucide-react";
import {
  whatWeBuildCards,
  whatWeBuildEyebrow,
  whatWeBuildIntro,
} from "@/data/aiAutomationWhatWeBuild";

const ICON_SIZE = 20;
const ARROW_SIZE = 16;

export function AiAutomationWhatWeBuild() {
  return (
    <section className="section-padding bg-surface-white">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <h2 className="font-display text-section-title font-bold text-ink">
          {whatWeBuildIntro.heading}
        </h2>
        <p className="mt-4 max-w-hero-copy text-body-md text-on-light-soft">
          {whatWeBuildIntro.body}
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {whatWeBuildCards.map((card) => (
            <li
              key={card.id}
              className="flex flex-col rounded-panel border border-menu-divider bg-surface-white p-6"
            >
              <p className="text-label font-semibold uppercase text-bento-label-on-light">
                {whatWeBuildEyebrow}
              </p>

              <h3 className="mt-3 text-bento-heading-lg font-semibold text-ink">
                {card.heading}
              </h3>

              <p className="mt-2 text-card-body text-on-light-soft">
                {card.description}
              </p>

              <div className="mt-5 flex flex-1 flex-col divide-y divide-menu-divider border-t border-menu-divider">
                {card.rows.map((row) => (
                  <a
                    key={row.label}
                    href={row.href}
                    className="group flex items-center gap-3 py-3 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
                  >
                    <row.icon
                      size={ICON_SIZE}
                      aria-hidden="true"
                      className="shrink-0 text-ink"
                    />
                    <span className="flex-1 text-menu-title font-semibold text-ink">
                      {row.label}
                    </span>
                    <ArrowRight
                      size={ARROW_SIZE}
                      aria-hidden="true"
                      className="shrink-0 text-ink/40 transition-all duration-standard ease-standard group-hover:text-ink motion-safe:group-hover:translate-x-[var(--arrow-shift)]"
                    />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
