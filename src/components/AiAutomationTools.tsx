import { marqueeLogos } from "@/data/aiAutomationLogos";

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

export function AiAutomationTools() {
  return (
    // What we build above shares this same white background, and its own
    // bottom padding already provides the seam's breathing room, so only
    // the top is pulled in here (same pattern as Capabilities/TeamSection/
    // Testimonials) rather than stacking two full section-paddings into a
    // gap noticeably larger than every other section boundary on the page.
    <section className="section-padding bg-surface-white pt-[1.5rem]">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        <div className="mx-auto max-w-hero-copy text-center">
          <h2 className="font-display text-section-title font-bold text-ink">
            Tools we build with
          </h2>
          <p className="mt-4 text-body-md text-on-light-soft">
            We pick what fits the job and what you&rsquo;ll be able to live with
            after.
          </p>
        </div>

        {/* Logo files are not in /public yet (zapier.svg, N8n.svg,
            open_ai.svg, pipedream.svg, microsoft.svg, google_cloud.svg,
            stripe.svg, notion.svg, airtable.svg, asana.svg, zendesk.svg,
            oracle.svg, trello.svg, typeform.svg, jotform.svg, cursor.svg,
            miro.svg, softr.svg); add them there and this renders as-is.
            The set is rendered twice so the marquee can loop seamlessly:
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
