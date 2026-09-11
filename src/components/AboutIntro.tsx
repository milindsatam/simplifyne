export function AboutIntro() {
  return (
    // The page's first section: below lg the header floats over it, so its
    // top padding overrides section-padding's with the shared clearance
    // tokens instead. From lg up it reverts to section-padding's own
    // desktop value, above the real, in-flow header, unchanged from before.
    <section className="section-padding bg-surface-white pt-[var(--content-clearance-mobile)] sm:pt-[var(--content-clearance-tablet)] lg:pt-[var(--section-padding-desktop)]">
      <div className="mx-auto w-full max-w-site px-2 text-center sm:px-3">
        <h1 className="font-display text-page-title font-bold text-ink">
          About Simplifyne
        </h1>

        <p className="mx-auto mt-4 max-w-[48.75rem] text-body-md text-ink-soft">
          Simplifyne is a small, senior team that builds around how a
          business actually grows. We design, build, and market digital
          products for founders across six countries, blending strategy,
          engineering, and craft. We pick work where we can make a real,
          measurable difference, and we stay close to the people we build
          for.
        </p>
      </div>
    </section>
  );
}
