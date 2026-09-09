import { ServiceCardRow } from "./ServiceCardRow";

export function Hero() {
  return (
    // The header sits in normal flow above this, so this top padding is
    // pure breathing room between it and the H1, not a fixed-header
    // clearance calc. Scales down on smaller screens, where 12rem would
    // push the H1 too far from a header that's already lighter there.
    <section className="bg-brand pt-[5rem] pb-8 sm:pt-[8rem] lg:pt-[12rem]">
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
