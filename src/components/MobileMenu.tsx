"use client";

import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { products } from "@/data/products";
import { serviceMenuItems } from "@/data/serviceMenu";

/** TODO: point at real routes once those pages exist (stubs for now). */
const TOP_ITEMS = [
  { id: "work", label: "Work", href: "#" },
  { id: "services", label: "Services", submenu: "services" as const },
  { id: "products", label: "Products", submenu: "products" as const },
  { id: "team", label: "Team", href: "/team" },
  { id: "blog", label: "Blog", href: "#" },
];

const SUBMENUS = {
  services: {
    label: "Services",
    items: serviceMenuItems.map((item) => ({
      id: item.id,
      label: item.title,
      href: item.href,
    })),
  },
  products: {
    label: "Products",
    items: products.map((product) => ({
      id: product.id,
      label: product.name,
      href: product.href,
    })),
  },
} as const;

type SubmenuKey = keyof typeof SUBMENUS;

const ICON_SIZE = 20;
/** Big enough to read as a confident, primary control, not an
    afterthought; the button itself stays a full 44px hit area via its own
    padding regardless of the glyph's own size. */
const HAMBURGER_SIZE = 26;

const CIRCLE_BUTTON_CLASS =
  "flex size-7 shrink-0 items-center justify-center rounded-pill transition-colors duration-standard ease-standard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/** The portal target only exists client-side. Never changes once true, so
    no subscription is needed beyond the initial client/server mismatch. */
function subscribeToNothing() {
  return () => {};
}

export function MobileMenu({ glassy = false }: { glassy?: boolean }) {
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<SubmenuKey | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const mainCloseRef = useRef<HTMLButtonElement>(null);
  const subBackRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    setSubmenu(null);
    triggerRef.current?.focus();
  };

  // Body scroll lock, initial focus, Escape-to-close, and a focus trap, all
  // scoped to the open backdrop. `inert` on the two cards already keeps
  // whichever one isn't active out of this trap's tab order, so the query
  // below only ever has to consider what's actually visible.
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    mainCloseRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ),
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Hands focus to the submenu card the moment it becomes the active one,
  // mirroring how attention visually moves from one floating card to the
  // next.
  useEffect(() => {
    if (submenu) subBackRef.current?.focus();
  }, [submenu]);

  const hamburgerClass = glassy
    ? "flex size-[2.75rem] items-center justify-center rounded-pill text-ink transition-colors duration-standard ease-standard hover:bg-cta-glass-bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    : "flex size-[2.75rem] items-center justify-center rounded-pill text-on-brand transition-colors duration-standard ease-standard hover:bg-cta-glass-bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={hamburgerClass}
      >
        <Menu size={HAMBURGER_SIZE} aria-hidden="true" />
      </button>

      {mounted &&
        createPortal(
          // A dimmed backdrop, not a full-bleed panel: it centres a "stage"
          // sized to one card, so the page stays faintly visible around the
          // floating menu rather than being covered outright.
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            data-open={open}
            className="mobile-menu-backdrop fixed inset-0 z-50 flex items-center justify-center bg-mobile-menu-scrim p-4"
          >
            <div className="mobile-menu-stage w-full max-w-[28rem]">
              {/* Main card. Sits in normal flow, so it's what gives the
                  stage its height; the submenu card below overlays exactly
                  this same frame once it's active. */}
              <div
                data-pushed={submenu !== null}
                aria-hidden={submenu !== null}
                inert={submenu !== null}
                className="mobile-menu-card mobile-menu-main bg-surface-white p-6"
              >
                <nav aria-label="Mobile">
                  <ul className="flex flex-col gap-1">
                    {TOP_ITEMS.map((item) =>
                      item.submenu ? (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={() => setSubmenu(item.submenu)}
                            className="flex w-full items-center justify-between gap-2 rounded-menu-item py-2 text-left font-display text-mobile-menu-item font-bold text-ink transition-colors duration-standard ease-standard hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                          >
                            {item.label}
                            <ArrowRight size={ICON_SIZE} aria-hidden="true" />
                          </button>
                        </li>
                      ) : (
                        <li key={item.id}>
                          <a
                            href={item.href}
                            className="block rounded-menu-item py-2 font-display text-mobile-menu-item font-bold text-ink transition-colors duration-standard ease-standard hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                          >
                            {item.label}
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>

                <div className="mt-6 flex justify-end">
                  <button
                    ref={mainCloseRef}
                    type="button"
                    aria-label="Close menu"
                    onClick={close}
                    className={`${CIRCLE_BUTTON_CLASS} bg-ink text-on-dark hover:bg-ink-hover`}
                  >
                    <X size={ICON_SIZE} aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Submenu card. Overlays the main card's frame, sliding in
                  from the right (and pushing that one to the left, with a
                  gap) once a submenu is chosen. */}
              <div
                data-open={submenu !== null}
                aria-hidden={submenu === null}
                inert={submenu === null}
                className="mobile-menu-card mobile-menu-sub bg-surface-white p-6"
              >
                {submenu && (
                  <>
                    <h2 className="text-menu-heading font-semibold text-ink">
                      {SUBMENUS[submenu].label}
                    </h2>
                    <ul className="mt-4">
                      {SUBMENUS[submenu].items.map((sub) => (
                        <li
                          key={sub.id}
                          className="border-b border-menu-divider"
                        >
                          <a
                            href={sub.href}
                            className="block py-3 text-mobile-submenu-item text-ink transition-colors duration-standard ease-standard hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between">
                      <button
                        ref={subBackRef}
                        type="button"
                        aria-label="Back to main menu"
                        onClick={() => setSubmenu(null)}
                        className={`${CIRCLE_BUTTON_CLASS} bg-surface-muted text-ink hover:bg-pill-hover`}
                      >
                        <ArrowLeft size={ICON_SIZE} aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        aria-label="Close menu"
                        onClick={close}
                        className={`${CIRCLE_BUTTON_CLASS} bg-ink text-on-dark hover:bg-ink-hover`}
                      >
                        <X size={ICON_SIZE} aria-hidden="true" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
