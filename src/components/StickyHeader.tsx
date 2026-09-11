import { Logo } from "./Logo";
import { PrimaryNav } from "./PrimaryNav";

/** The glassy header that takes over once the real one (`Header`) has
    scrolled out of view. Always glassy, since that's its only mode: it
    never sits over the hero, so it never needs the transparent/white
    state. Stays permanently mounted, just slid off-screen when not
    revealed, so its own entrance is a plain transform transition rather
    than a colour or backdrop-filter change that could pop. */
export function StickyHeader({ revealed }: { revealed: boolean }) {
  return (
    <header
      data-revealed={revealed}
      inert={!revealed}
      aria-hidden={!revealed}
      className="fixed inset-x-0 top-0 z-50 hidden border-b border-header-glass-border bg-header-glass py-2 backdrop-blur-md motion-safe:transition-[translate] motion-safe:duration-standard motion-safe:ease-standard data-[revealed=false]:-translate-y-full lg:block"
    >
      <div className="mx-auto flex w-full max-w-site items-center justify-between gap-3 px-2 sm:px-3">
        <Logo glassy />
        <PrimaryNav glassy />
      </div>
    </header>
  );
}
