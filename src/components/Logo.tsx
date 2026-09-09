import Image from "next/image";
import Link from "next/link";
import logoColor from "@/assets/simplifyne-logo-color.svg";
import logoWhite from "@/assets/simplifyne-logo-white.webp";

export function Logo({ glassy = false }: { glassy?: boolean }) {
  return (
    <Link
      href="/"
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
