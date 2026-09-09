"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { StickyHeader } from "./StickyHeader";

/** Orchestrates the two headers described in Header.tsx and
    StickyHeader.tsx: watches the real header via IntersectionObserver to
    know the instant it's fully scrolled out of view (its own bottom edge
    passing above the viewport top, not a guessed pixel threshold), and
    tracks scroll direction to decide when the sticky glassy header should
    slide into view. Scrolling down never reveals it; only scrolling up
    while the real header is already gone does, and the moment the real
    header scrolls back into view, this is gone again automatically since
    that's exactly what "at the top" means here. */
export function SiteHeader({
  variant = "brand",
}: {
  /** Passed straight through to `Header`: "brand" for the homepage's
      transparent-over-hero start, "light" for a page with no blue hero.
      `StickyHeader`'s scroll-up reveal is identical either way, since it's
      always glassy regardless of how the page started. */
  variant?: "brand" | "light";
}) {
  const headerRef = useRef<HTMLElement>(null);
  const [headerGone, setHeaderGone] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const lastY = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeaderGone(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    lastY.current = window.scrollY;

    const measure = () => {
      frame.current = null;
      const y = window.scrollY;
      setScrollingUp(y < lastY.current);
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

  const revealed = headerGone && scrollingUp;

  return (
    <>
      <Header ref={headerRef} inert={headerGone} variant={variant} />
      <StickyHeader revealed={revealed} />
    </>
  );
}
