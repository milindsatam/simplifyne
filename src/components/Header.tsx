import type { Ref } from "react";
import { Logo } from "./Logo";
import { PrimaryNav } from "./PrimaryNav";

/** The real header: a normal, non-sticky element that lives at the top of
    the page and scrolls away with the hero, exactly like any other content.
    No position:fixed, no transition, no state, so there's nothing here to
    glitch on that first scroll. `SiteHeader` watches it (via `ref`) to know
    when it's scrolled out of view and the sticky glassy header should take
    over. */
export function Header({
  ref,
  inert,
}: {
  ref?: Ref<HTMLElement>;
  /** True once this header has scrolled out of view and the sticky header
      has taken over, so its own (now off-screen) nav isn't reachable by
      keyboard or a screen reader while it's not the one showing. */
  inert?: boolean;
}) {
  return (
    // `relative` is what lets the Services mega-menu's full-bleed panel
    // anchor to this element's own width rather than the 1260px lane
    // inside it.
    <header
      ref={ref}
      inert={inert}
      aria-hidden={inert}
      className="relative z-40 py-2"
    >
      <div className="mx-auto flex w-full max-w-site items-center justify-between gap-3 px-2 sm:px-3">
        <Logo glassy={false} />
        <PrimaryNav glassy={false} />
      </div>
    </header>
  );
}
