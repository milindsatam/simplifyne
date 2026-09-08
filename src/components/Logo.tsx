import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/simplifyne-logo-white.webp";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Simplifyne — home"
      className="inline-flex items-center rounded-pill focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand"
    >
      {/* Width and height come from the file itself, so the intrinsic size can
          never drift out of sync with the asset. */}
      <Image src={logo} alt="Simplifyne" priority className="h-3.5 w-auto" />
    </Link>
  );
}
