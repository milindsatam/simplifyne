import Image from "next/image";
import type { Service, ServiceSurface } from "@/data/services";

const surfaceClass: Record<ServiceSurface, string> = {
  ai: "bg-[image:var(--gradient-ai)] text-on-dark",
  gray: "bg-surface-gray text-on-light",
  white: "bg-surface-white text-on-light",
  deep: "bg-brand-deep text-on-dark",
};

const labelClass: Record<ServiceSurface, string> = {
  ai: "text-label-on-dark",
  gray: "text-label-on-light",
  white: "text-label-on-light",
  deep: "text-label-on-dark",
};

/** Tints the full-bleed image so the label and heading over it stay
    readable: a dark wash under light text, a light wash under dark text. */
const scrimClass: Record<ServiceSurface, string> = {
  ai: "bg-[image:var(--gradient-scrim-on-dark)]",
  gray: "bg-[image:var(--gradient-scrim-on-light)]",
  white: "bg-[image:var(--gradient-scrim-on-light)]",
  deep: "bg-[image:var(--gradient-scrim-on-dark)]",
};

/** Alternates across the row: cards 1 and 3 slide their image out left,
    cards 2 and 4 shrink theirs into the bottom-right corner. */
export type ImageExit = "slide" | "shrink";

export function ServiceCard({
  service,
  imageExit,
}: {
  service: Service;
  imageExit: ImageExit;
}) {
  return (
    <a
      href={service.href}
      className={`service-card p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand ${surfaceClass[service.surface]}`}
    >
      <div
        aria-hidden="true"
        className={`service-media service-media--${imageExit}`}
      >
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, 84vw"
          className="object-cover"
        />
        <div className={`absolute inset-0 ${scrimClass[service.surface]}`} />
      </div>

      <div className="relative">
        <p
          className={`text-label font-semibold uppercase ${labelClass[service.surface]}`}
        >
          {service.label}
        </p>

        <h3 className="mt-2 max-w-card-heading text-card-title font-semibold">
          {service.heading}
        </h3>

        <p className="service-reveal service-reveal--slide mt-2 hidden max-w-card-copy text-card-body lg:block">
          {service.description}
        </p>

        {/* Not a nested <button>: the whole card is the control, this is its
            affordance. On touch it sits right after the heading and is
            always visible; on desktop it reveals alongside the description. */}
        <span className="service-reveal service-reveal--rise mt-[1.25rem] inline-flex items-center gap-1 text-action font-semibold">
          Expand
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </a>
  );
}
