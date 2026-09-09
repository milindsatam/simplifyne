"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { PrimaryNav } from "./PrimaryNav";

/** Below this, "at the top" always wins over scroll direction, so the header
    never flickers between hidden and glassy on the small scroll wobbles that
    happen right at the top of the page. */
const TOP_THRESHOLD = 80;

export function Header() {
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  // False until the first real scroll event. The header's transition
  // classes only turn on once this flips, so whatever state that first
  // event lands on (top, glassy, hidden, any combination) is applied
  // instantly, with nothing to animate from, rather than mount-time state
  // catching a transition it was never meant to run.
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastY = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    lastY.current = window.scrollY;

    const measure = () => {
      frame.current = null;
      const y = window.scrollY;
      const isAtTop = y <= TOP_THRESHOLD;
      setAtTop(isAtTop);
      setHidden(!isAtTop && y > lastY.current);
      setHasScrolled(true);
      lastY.current = y;
    };

    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  // Transparent and white at the very top, over the hero; once scrolled,
  // glassy and ink whenever it's revealed (scrolling up).
  const glassy = !atTop;

  return (
    // Positioning root for the Services mega-menu: the panel is full bleed,
    // so it anchors to the header rather than to the 1260px lane inside it.
    // `fixed` is also what lets the header hide/reveal over scrolled
    // content instead of just sitting in the document flow.
    //
    // backdrop-blur-md stays on unconditionally, even in the transparent
    // state (where a fully transparent background gives it nothing to
    // visibly blur): toggling the filter itself on and off is what causes
    // browsers to repaint with a visible pop, so only the colour underneath
    // it ever changes.
    <header
      data-hidden={hidden}
      className={`fixed inset-x-0 top-0 z-40 border-b py-2 backdrop-blur-md data-[hidden=true]:-translate-y-full ${
        hasScrolled
          ? "motion-safe:transition-[translate,background-color,border-color] motion-safe:duration-standard motion-safe:ease-standard"
          : ""
      } ${
        glassy
          ? "border-header-glass-border bg-header-glass"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-site items-center justify-between gap-3 px-2 sm:px-3">
        <Logo glassy={glassy} />
        <PrimaryNav glassy={glassy} />
      </div>
    </header>
  );
}
