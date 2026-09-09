import { ServiceCardRow } from "./ServiceCardRow";

export function Hero() {
  return (
    // The header is fixed and out of the document flow, so this top padding
    // has to clear it on its own: header height (77px below 1024px, 97px
    // from 1024px up) plus ~64px of genuine breathing room above the H1,
    // rounded to a clean rem value at each of the header's own two heights.
    <section className="bg-brand pt-[9rem] pb-8 lg:pt-[10rem]">
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
