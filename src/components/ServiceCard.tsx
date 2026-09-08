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

export function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={service.href}
      className={`service-card p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand ${surfaceClass[service.surface]}`}
    >
      <p
        className={`text-label font-semibold uppercase ${labelClass[service.surface]}`}
      >
        {service.label}
      </p>

      <h3 className="mt-2 max-w-card-heading text-card-title font-semibold">
        {service.heading}
      </h3>

      <p className="service-reveal service-reveal--slide mt-2 max-w-card-copy text-card-body">
        {service.description}
      </p>

      {/* Not a nested <button>: the whole card is the control, this is its affordance. */}
      <span className="service-reveal service-reveal--rise mt-auto inline-flex items-center gap-1 text-action font-semibold">
        Expand
        <span aria-hidden="true">&rarr;</span>
      </span>
    </a>
  );
}
