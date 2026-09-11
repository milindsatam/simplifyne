"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import logoColor from "@/assets/simplifyne-logo-color.svg";
import logoWhite from "@/assets/simplifyne-logo-white.svg";

export function Logo({ glassy = false }: { glassy?: boolean }) {
  const pathname = usePathname();

  // Link already lands at the top of any other page. Already home, though,
  // a link to the same URL is a no-op, so this steps in to scroll there
  // instead of leaving the click feeling dead.
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="Simplifyne, home"
      className={`inline-flex items-center rounded-pill focus-visible:outline-2 focus-visible:outline-offset-4 ${
        glassy ? "focus-visible:outline-ink" : "focus-visible:outline-on-brand"
      }`}
    >
      {/* White mark over the hero; the real colour mark once the header
          goes glassy, where a light surface can actually show it. */}
      <Image
        src={glassy ? logoColor : logoWhite}
        alt="Simplifyne"
        priority
        className="h-[1.5rem] w-auto"
      />
    </Link>
  );
}
