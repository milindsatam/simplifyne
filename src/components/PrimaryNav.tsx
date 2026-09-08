"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDownIcon } from "./ChevronDownIcon";

/** TODO: point at real routes once those pages exist (out of scope for now). */
const NAV_LINKS = [
  { label: "Work", href: "#" },
  { label: "Team", href: "#" },
  { label: "Products", href: "#" },
  { label: "Blog", href: "#" },
] as const;

const navItemClass =
  "text-nav font-medium text-on-brand-muted underline-offset-4 decoration-1 transition-colors duration-standard ease-standard hover:text-on-brand hover:underline focus-visible:text-on-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand";

function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className={`${navItemClass} inline-flex items-center gap-1`}
      >
        Services
        <ChevronDownIcon
          className={`transition-transform duration-standard ease-standard ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* TODO: populate with real service links. Intentionally an empty stub. */}
      <div
        id={panelId}
        role="menu"
        aria-label="Services"
        hidden={!open}
        className="absolute top-full right-0 mt-2 min-h-6 w-menu-stub bg-surface-white shadow-lg"
      />
    </div>
  );
}

export function PrimaryNav() {
  return (
    <div className="flex items-center gap-6">
      {/* The compact nav for small screens is out of scope for this build. */}
      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex items-center gap-4">
          <li>
            <ServicesMenu />
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={navItemClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href="#"
        className="inline-flex h-6 items-center rounded-pill bg-surface-white px-3 text-nav font-semibold text-ink transition-colors duration-standard ease-standard hover:bg-pill-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand"
      >
        Let&rsquo;s Talk
      </a>
    </div>
  );
}
