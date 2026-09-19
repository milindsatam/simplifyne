import { marqueeLogos } from "@/data/developmentLogos";

function LogoSet({ hidden }: { hidden: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="logo-marquee-set flex shrink-0 items-center gap-8"
    >
      {marqueeLogos.map((logo, index) => (
        <img
          key={`${logo.src}-${index}`}
          src={logo.src}
          alt={hidden ? "" : logo.alt}
          className="h-[1.75rem] w-auto max-w-[7.5rem] shrink-0 object-contain"
        />
      ))}
    </div>
  );
}

export function DevelopmentTech() {
  return (
    // What we build above shares this same white background, and its own
    // bottom padding already provides the seam's breathing room, so only
    // the top is pulled in here (same pattern as AiAutomationTools).
    <section className="section-padding bg-surface-white pt-[1.5rem]">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <div className="mx-auto max-w-hero-copy text-center">
          <h2 className="font-display text-section-title font-bold text-ink">
            Tech we build with
          </h2>
          <p className="mt-4 text-body-md text-on-light-soft">
            Proven tools, picked to fit the job and easy to hand over later.
          </p>
        </div>

        {/* The set is rendered twice so the marquee can loop seamlessly:
            translateX(-50%) always lands the second, identical copy where
            the first one started. The second copy is aria-hidden, since
            it's a visual continuation, not new content. */}
        <div className="logo-marquee-viewport mt-7">
          <div className="logo-marquee-track flex items-center gap-8">
            <LogoSet hidden={false} />
            <LogoSet hidden={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
