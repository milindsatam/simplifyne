import { ServiceCardRow } from "./ServiceCardRow";

export function Hero() {
  return (
    // Below sm, the header is the floating island (not normal flow), so this
    // top padding is a deliberate clearance calc: island height plus a
    // generous gap. From sm up it reverts to pure breathing room above the
    // real, in-flow header, unchanged from before.
    <section data-hero className="bg-brand pt-[7rem] pb-8 sm:pt-[8rem]">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <h1 className="text-center font-display text-hero font-bold text-on-brand sm:text-left">
          We build around
          <br />
          your business growth.
        </h1>

        <p className="mt-4 max-w-hero-copy text-center text-body-sm text-on-brand-muted sm:text-left">
          From websites and applications to AI-powered workflows and search
          growth, we build digital solutions around your business and its
          growth.
        </p>

        <ServiceCardRow className="mt-8" />
      </div>
    </section>
  );
}
