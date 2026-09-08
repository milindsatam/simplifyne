import { Logo } from "./Logo";
import { PrimaryNav } from "./PrimaryNav";

export function Header() {
  // Positioning root for the Services mega-menu: the panel is full bleed, so
  // it anchors to the header rather than to the 1260px lane inside it.
  return (
    <header className="relative z-10 py-3">
      <div className="mx-auto flex w-full max-w-site items-center justify-between gap-3 px-2 sm:px-3">
        <Logo />
        <PrimaryNav />
      </div>
    </header>
  );
}
