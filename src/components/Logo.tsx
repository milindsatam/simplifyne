import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/simplifyne-logo-white.webp";

export function Logo({ glassy = false }: { glassy?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Simplifyne, home"
      className={`inline-flex items-center rounded-pill focus-visible:outline-2 focus-visible:outline-offset-4 ${
        glassy ? "focus-visible:outline-ink" : "focus-visible:outline-on-brand"
      }`}
    >
      {/* Only a white mark exists. brightness-0 multiplies every opaque
          pixel to black while leaving the transparent background alone, so
          the same file stands in for an ink mark once the header goes
          glassy, no second asset needed. */}
      <Image
        src={logo}
        alt="Simplifyne"
        priority
        className={`h-3.5 w-auto motion-safe:transition-[filter] motion-safe:duration-standard motion-safe:ease-standard ${
          glassy ? "brightness-0" : ""
        }`}
      />
    </Link>
  );
}
