"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOGO_SRC = "/images/simplifyne-logo-white.webp";
const LOGO_INTRINSIC_WIDTH = 148;
const LOGO_INTRINSIC_HEIGHT = 28;

/**
 * TODO: replace with provided logo — drop `simplifyne-logo-white.webp` into
 * /public/images. Until that asset exists the request 404s and we fall back to
 * a plain wordmark so the header never renders a broken image.
 *
 * Once the file is in the repo, prefer a static import from src/assets: Next
 * derives the intrinsic width and height from the file itself, content-hashes
 * the URL, and turns a missing asset into a build error instead of a silent
 * 404 — which also lets this component drop the fallback and stop being a
 * client component.
 */
export function Logo() {
  const [assetMissing, setAssetMissing] = useState(false);

  return (
    <Link
      href="/"
      aria-label="Simplifyne — home"
      className="inline-flex items-center rounded-pill text-on-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand"
    >
      {assetMissing ? (
        <span className="font-display text-wordmark font-bold">Simplifyne</span>
      ) : (
        <Image
          src={LOGO_SRC}
          alt="Simplifyne"
          width={LOGO_INTRINSIC_WIDTH}
          height={LOGO_INTRINSIC_HEIGHT}
          priority
          onError={() => setAssetMissing(true)}
          className="h-3.5 w-auto"
        />
      )}
    </Link>
  );
}
