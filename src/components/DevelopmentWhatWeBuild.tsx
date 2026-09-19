import {
  whatWeBuildCards,
  whatWeBuildEyebrow,
  whatWeBuildIntro,
} from "@/data/developmentWhatWeBuild";

const ICON_SIZE = 20;

export function DevelopmentWhatWeBuild() {
  return (
    <section className="section-padding bg-surface-white">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <h2 className="font-display text-section-title font-bold text-ink">
          {whatWeBuildIntro.heading}
        </h2>
        <p className="mt-4 max-w-hero-copy text-body-md text-on-light-soft">
          {whatWeBuildIntro.body}
        </p>

        {/* --spacing is 0.5rem in this project (not Tailwind's usual
            0.25rem), so mt-7/gap-3 land at 56px/24px, matching the site's
            standard header-to-content gap and a tight, cards-fill-the-row
            gutter rather than the doubled values mt-14/gap-6 would give. */}
        <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div key={row.label} className="flex items-center gap-3 py-3">
                    <row.icon
                      size={ICON_SIZE}
                      aria-hidden="true"
                      className="shrink-0 text-ink"
                    />
                    <span className="text-menu-title font-semibold text-ink">
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
