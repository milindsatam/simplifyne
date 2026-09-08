"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import {
  featuredWork,
  serviceMenuIntro,
  serviceMenuItems,
} from "@/data/serviceMenu";
import { ChevronDownIcon } from "./ChevronDownIcon";

const ICON_SIZE = 20;
const ARROW_SIZE = 14;
const ICON_STROKE = 1.75;

const itemClass =
  "group flex items-start gap-1.5 rounded-menu-item p-1.5 transition-colors duration-standard ease-standard hover:bg-menu-item-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function ServicesMegaMenu({
  triggerClassName,
}: {
  triggerClassName: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  // Returning focus to the trigger fires a focus event that would otherwise
  // reopen the panel we just closed. Focus dispatch is synchronous, so the
  // flag only has to survive the .focus() call itself.
  const returningFocusRef = useRef(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      returningFocusRef.current = true;
      triggerRef.current?.focus();
      returningFocusRef.current = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    // The bottom padding stretches this box down to the header's lower edge,
    // where the panel begins, so moving the pointer into the panel never
    // leaves the subtree. The negative margin keeps the nav row's height.
    <div
      className="pb-3 -mb-3"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      // Only keyboard focus opens the panel. If pointer focus opened it too,
      // the click that produced the focus would immediately toggle it shut.
      onFocus={(event) => {
        if (returningFocusRef.current) return;
        if (event.target.matches(":focus-visible")) setOpen(true);
      }}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
          setOpen(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className={`${triggerClassName} inline-flex h-6 items-center gap-1`}
      >
        Services
        <ChevronDownIcon
          className={`transition-transform duration-standard ease-standard ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={panelId}
        role="menu"
        aria-label="Services"
        data-open={open}
        className="mega-panel absolute inset-x-0 top-full z-20 bg-surface-white shadow-panel"
      >
        <div className="mega-regions mx-auto w-full max-w-site px-2 py-5 sm:px-3">
          <div>
            <h2 className="text-menu-heading font-semibold text-ink">
              {serviceMenuIntro.heading}
            </h2>
            <p className="mt-2 max-w-menu-intro text-card-body text-on-light-soft">
              {serviceMenuIntro.body}
            </p>

            <a
              role="menuitem"
              href={serviceMenuIntro.ctaHref}
              className="mega-cta mt-2.5 inline-flex items-center gap-1 rounded-menu-item text-card-body font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {serviceMenuIntro.ctaLabel}
              <ArrowUpRight
                size={ARROW_SIZE}
                strokeWidth={ICON_STROKE}
                aria-hidden="true"
                className="mega-cta-arrow"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 content-start gap-2">
            {serviceMenuItems.map(
              ({ id, icon: Icon, title, description, href }) => (
                <a key={id} role="menuitem" href={href} className={itemClass}>
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-menu-item bg-icon-tile transition-colors duration-standard ease-standard group-hover:bg-icon-tile-hover">
                    <Icon
                      size={ICON_SIZE}
                      strokeWidth={ICON_STROKE}
                      aria-hidden="true"
                      className="text-on-light"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-menu-title font-semibold text-ink">
                      {title}
                    </span>
                    <span className="mt-0.5 block text-menu-body text-on-light-faint">
                      {description}
                    </span>
                  </span>
                </a>
              ),
            )}
          </div>

          <a
            role="menuitem"
            href={featuredWork.href}
            className="mega-card block border-l border-menu-divider pl-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <p className="text-label font-semibold uppercase text-label-featured">
              {featuredWork.label}
            </p>

            {/* TODO: replace with real case study image. */}
            <div className="mega-lift mt-2 aspect-video rounded-thumb bg-icon-tile" />

            <h3 className="mt-2 text-featured-title font-semibold text-ink">
              {featuredWork.title}
            </h3>
            <p className="mt-0.5 text-menu-body text-on-light-faint">
              {featuredWork.descriptor}
            </p>

            <span className="mt-2 inline-flex items-center gap-1 text-menu-body font-semibold text-ink">
              {featuredWork.linkLabel}
              <ArrowRight
                size={ARROW_SIZE}
                strokeWidth={ICON_STROKE}
                aria-hidden="true"
                className="mega-arrow"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
