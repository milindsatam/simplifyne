import { Logo } from "./Logo";
import { PrimaryNav } from "./PrimaryNav";

export function Header() {
  return (
    <header className="relative z-10 py-3">
      {/* Positioning root for the Services mega-menu, so the panel can anchor
          to this container's right edge instead of the trigger's. */}
      <div className="relative mx-auto flex w-full max-w-site items-center justify-between gap-3 px-2 sm:px-3">
        <Logo />
        <PrimaryNav />
      </div>
    </header>
  );
}
