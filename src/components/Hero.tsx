import { ServiceCardRow } from "./ServiceCardRow";

export function Hero() {
  return (
    <section className="bg-brand pt-8 pb-8 lg:pt-12">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <h1 className="font-display text-hero font-bold text-on-brand">
          We build around
          <br />
          your business growth.
        </h1>

        <p className="mt-4 max-w-hero-copy text-body-sm text-on-brand-muted">
          From websites and applications to AI-powered workflows and search
          growth, we build digital solutions around your business and its
          growth.
        </p>

        <ServiceCardRow className="mt-8" />
      </div>
    </section>
  );
}
