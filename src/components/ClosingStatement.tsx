import { ArrowRight } from "lucide-react";

const LINK_CLASS =
  "text-brand transition-colors duration-standard ease-standard hover:text-brand-deep hover:underline focus-visible:text-brand-deep focus-visible:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-deep";

/** TODO: point at the real service pages once they exist (stubs for now). */
const LINK_HREF = "https://simplifyne.vercel.app/#";

const ARROW_SIZE = 18;

export function ClosingStatement() {
  return (
    <section className="section-padding bg-surface-white">
      <div className="mx-auto w-full max-w-site px-2 text-center sm:px-3">
        <p className="mx-auto max-w-closing-statement font-display text-closing-statement font-semibold text-ink">
          At Simplifyne, we genuinely enjoy working with founders.
          Established, startup, SMB, or enterprise. We care about building
          the right solution around how your business actually grows. That
          might mean putting{" "}
          <a href={LINK_HREF} className={LINK_CLASS}>
            AI agents and workflow automation
          </a>{" "}
          to work,{" "}
          <a href={LINK_HREF} className={LINK_CLASS}>
            building the software
          </a>{" "}
          you need, or making sure people{" "}
          <a href={LINK_HREF} className={LINK_CLASS}>
            find you on Google and AI
          </a>
          .
        </p>

        <p className="mx-auto mt-[1.25rem] max-w-closing-support text-body-md text-ink-soft">
          All of it backed by people who have done this for years and
          actually care how it turns out.
        </p>

        <div className="mt-5 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-[1.25rem] text-cta-large font-semibold text-on-dark transition-colors duration-standard ease-standard hover:bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            Let&apos;s talk
            <ArrowRight
              size={ARROW_SIZE}
              aria-hidden="true"
              className="motion-safe:transition-transform motion-safe:duration-standard motion-safe:ease-standard motion-safe:group-hover:translate-x-[var(--arrow-shift)]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
