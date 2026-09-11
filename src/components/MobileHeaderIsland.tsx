"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoColor from "@/assets/simplifyne-logo-color.svg";
import logoWhite from "@/assets/simplifyne-logo-white.svg";
import { MobileMenu } from "./MobileMenu";

const ICON_SIZE = 22;

/** Below this, the island always stays put: a few px of scroll near the
    very top must never trigger a hide/show flicker. */
const VISIBILITY_THRESHOLD = 80;

/** The mobile/tablet header (below 1024px): a floating glass island,
    replacing what Header/StickyHeader render at that width (both stay
    hidden there via their own lg: classes). Self-contained rather than
    driven by SiteHeader's state, since its own rules differ: it hides on
    scroll down and shows on scroll up (not "gone past the real header"),
    and its glass tint depends on whether a blue hero is still in view
    rather than only on how the page started. */
export function MobileHeaderIsland({
  variant = "brand",
}: {
  variant?: "brand" | "light";
}) {
  const [dark, setDark] = useState(variant === "brand");
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);
  const lastY = useRef(0);
  const frame = useRef<number | null>(null);

  // Dark glass only while a blue hero is both present and still on screen;
  // an inner page, or the homepage once scrolled past it, is light. Starts
  // from the variant alone so the first paint already matches (a page
  // loaded at the top has its hero in view; a page with none never does),
  // and this only ever corrects that once scrolling actually happens.
  useEffect(() => {
    if (variant !== "brand") return;

    const hero = document.querySelector("[data-hero]");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setDark(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [variant]);

  // Hides on scroll down, shows on scroll up, gated by a threshold so nothing
  // near the very top of the page can toggle it back and forth.
  useEffect(() => {
    lastY.current = window.scrollY;

    const measure = () => {
      frame.current = null;
      const y = window.scrollY;
      setAnimate(true);
      setVisible(y < VISIBILITY_THRESHOLD || y < lastY.current);
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

  // No transition classes at all until a real scroll happens, so the very
  // first paint can never itself be seen animating in.
  const barTransition = animate
    ? "motion-safe:transition-[transform,background-color,border-color] motion-safe:duration-standard motion-safe:ease-standard"
    : "";
  const fadeTransition = animate
    ? "motion-safe:transition-opacity motion-safe:duration-standard motion-safe:ease-standard"
    : "";
  const colorTransition = animate
    ? "motion-safe:transition-colors motion-safe:duration-standard motion-safe:ease-standard"
    : "";

  return (
    <header
      data-visible={visible}
      data-dark={dark}
      className={`fixed inset-x-2 top-1.5 z-50 flex items-center justify-between gap-2 rounded-bento border px-1 py-1 backdrop-blur-md backdrop-saturate-150 lg:hidden ${barTransition} data-[visible=false]:-translate-y-[6rem] data-[dark=true]:border-mobile-island-dark-border data-[dark=true]:bg-mobile-island-dark data-[dark=false]:border-mobile-island-light-border data-[dark=false]:bg-mobile-island-light`}
    >
      <MobileMenu glassy={!dark} />

      <Link
        href="/"
        aria-label="Simplifyne, home"
        className={`grid shrink-0 place-items-center rounded-pill focus-visible:outline-2 focus-visible:outline-offset-4 ${
          dark ? "focus-visible:outline-on-brand" : "focus-visible:outline-ink"
        }`}
      >
        <Image
          src={logoWhite}
          alt="Simplifyne"
          priority
          className={`col-start-1 row-start-1 h-[1.25rem] w-auto ${fadeTransition} ${dark ? "opacity-100" : "opacity-0"}`}
        />
        <Image
          src={logoColor}
          alt=""
          aria-hidden="true"
          className={`col-start-1 row-start-1 h-[1.25rem] w-auto ${fadeTransition} ${dark ? "opacity-0" : "opacity-100"}`}
        />
      </Link>

      <Link
        href="/contact"
        aria-label="Chat with us"
        className={`flex size-[2.75rem] shrink-0 items-center justify-center rounded-pill focus-visible:outline-2 focus-visible:outline-offset-2 ${colorTransition} ${
          dark
            ? "text-on-brand hover:bg-cta-glass-bg-hover focus-visible:outline-on-brand"
            : "text-ink hover:bg-cta-glass-bg-ink-hover focus-visible:outline-ink"
        }`}
      >
        <MessageCircle size={ICON_SIZE} aria-hidden="true" />
      </Link>
    </header>
  );
}
