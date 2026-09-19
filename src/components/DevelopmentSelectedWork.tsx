import Image from "next/image";
import { workCards, workIntro } from "@/data/developmentWork";

export function DevelopmentSelectedWork() {
  return (
    <section className="section-padding bg-surface-gray">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <h2 className="font-display text-section-title font-bold text-ink">
          {workIntro.heading}
        </h2>
        <p className="mt-4 max-w-hero-copy text-body-md text-on-light-soft">
          {workIntro.body}
        </p>

        <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {workCards.map((card) => (
            <li key={card.id} className="min-w-0">
              {/* Not a link: case study pages don't exist yet, so this is a
                  plain informational card, not an interactive control. */}
              <div className="flex h-full flex-col overflow-hidden rounded-panel bg-surface-white shadow-panel">
                <div className="relative aspect-[4/3] w-full">
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 88vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-full w-full items-center justify-center bg-bento-placeholder-on-light p-4"
                    >
                      <span className="text-center text-card-body text-on-light-soft">
                        {card.placeholderText}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-label font-semibold uppercase text-bento-label-on-light">
                    {card.label}
                  </p>
                  <h3 className="mt-3 text-bento-heading-lg font-semibold text-ink">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-card-body text-on-light-soft">
                    {card.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
