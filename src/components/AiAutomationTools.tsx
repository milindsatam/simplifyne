import Image from "next/image";
import { tools } from "@/data/aiAutomationTools";

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

        {/* Same bordered-grid technique as ClientGrid (border-t/border-l on
            the grid, border-r/border-b per cell) since it's the one that
            handles a wrapping column count cleanly, but a lighter, quieter
            treatment of its own: contained and centered rather than full
            width, generous padding, no fill colour on hover. */}
        <ul className="mx-auto mt-6 grid max-w-[60rem] grid-cols-2 overflow-hidden rounded-panel border-t border-l border-menu-divider sm:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool) => (
            <li key={tool.id} className="border-r border-b border-menu-divider">
              <div className="group flex items-center justify-center p-3.5">
                {tool.logo ? (
                  <Image
                    src={tool.logo.src}
                    alt={tool.name}
                    width={tool.logo.width}
                    height={tool.logo.height}
                    className="h-auto w-auto object-contain grayscale opacity-70 transition-all duration-standard ease-standard group-hover:grayscale-0 group-hover:opacity-100 motion-safe:group-hover:-translate-y-0.5"
                    style={{
                      maxHeight: tool.logo.maxHeight,
                      maxWidth: tool.logo.maxWidth,
                    }}
                  />
                ) : (
                  <span className="text-body-sm font-semibold text-ink transition-transform duration-standard ease-standard motion-safe:group-hover:-translate-y-0.5">
                    {tool.name}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
