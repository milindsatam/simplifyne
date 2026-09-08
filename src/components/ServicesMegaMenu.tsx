"use client";

import { useEffect, useId, useRef, useState } from "react";
import { serviceMenuIntro, serviceMenuItems } from "@/data/serviceMenu";
import { ChevronDownIcon } from "./ChevronDownIcon";

const ICON_SIZE = 20;
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

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      // Only keyboard focus opens the panel. If pointer focus opened it too,
      // the click that produced the focus would immediately toggle it shut.
      onFocus={(event) => {
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

      {/* Spans the header container so the panel can sit against its right
          edge at every width. The padded strip bridges the gap below the
          trigger, so moving the pointer into the panel never leaves this
          subtree and the menu does not flicker shut. */}
      <div className="pointer-events-none absolute inset-x-2 top-full z-20 flex justify-end sm:inset-x-3">
        <div
          className={`w-mega-panel max-w-full pt-3 ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            id={panelId}
            role="menu"
            aria-label="Services"
            data-open={open}
            className="mega-panel rounded-panel bg-surface-white p-4 shadow-panel"
          >
            <div className="flex gap-6">
              <div className="w-menu-intro shrink-0">
                <h2 className="text-menu-title font-semibold text-ink">
                  {serviceMenuIntro.heading}
                </h2>
                <p className="mt-2 text-card-body text-on-light-soft">
                  {serviceMenuIntro.body}
                </p>
              </div>

              <div className="grid flex-1 grid-cols-2 gap-1">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
