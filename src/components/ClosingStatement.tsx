const LINK_CLASS =
  "text-brand transition-colors duration-standard ease-standard hover:text-brand-deep hover:underline focus-visible:text-brand-deep focus-visible:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-deep";

export function ClosingStatement() {
  return (
    <section className="bg-surface-white py-[7.5rem]">
      <div className="mx-auto w-full max-w-site px-2 sm:px-3">
        {/* Right-weighted like the reference: the block itself narrows and
            shifts right as the viewport grows, leaving the left side open
            rather than centering or stretching the copy full width. */}
        <div className="sm:mx-auto sm:max-w-[80%] lg:mx-0 lg:ml-auto lg:max-w-closing-statement">
          <p className="font-display text-closing-statement font-semibold text-ink">
            At Simplifyne, we genuinely enjoy working with founders.
            Established, startup, SMB, or enterprise, it doesn&apos;t matter.
            What we care about is building the right solution around how
            your business actually grows. That might mean putting{" "}
            <a href="#" className={LINK_CLASS}>
              AI agents and workflow automation
            </a>{" "}
            to work,{" "}
            <a href="#" className={LINK_CLASS}>
              building the software
            </a>{" "}
            you need, or making sure people{" "}
            <a href="#" className={LINK_CLASS}>
              find you on Google and AI
            </a>
            . All of it backed by people who have done this for years and
            actually care how it turns out.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex w-fit items-center rounded-pill bg-ink px-4 py-2 text-body-sm font-semibold text-on-dark transition-colors duration-standard ease-standard hover:bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
