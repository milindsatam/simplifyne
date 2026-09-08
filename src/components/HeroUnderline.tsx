/** Decorative hand-drawn underline that sits beneath the last hero word. */
export function HeroUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 14"
      fill="none"
      className="pointer-events-none absolute top-full -mt-0.5 left-0 w-full text-brand-tint"
    >
      <path
        d="M4 8.6C41 3.7 89 2.6 133 5.2c30 1.8 68 4.1 103 1.4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M13 12c39-3.3 86-4 129-1.9 27 1.3 59 2.4 91 .5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
