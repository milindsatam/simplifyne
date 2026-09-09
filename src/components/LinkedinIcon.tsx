/** lucide-react doesn't ship brand/social icons (LinkedIn included), so this
    is a plain inline SVG, styled with currentColor like every lucide icon
    elsewhere, the same pattern ChevronDownIcon.tsx already uses. */
export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width="18"
      height="18"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.82-1.96 3.75-1.96 4.01 0 4.75 2.5 4.75 5.76V21h-4v-5.9c0-1.4-.03-3.2-1.98-3.2-1.98 0-2.28 1.5-2.28 3.1V21h-4V9Z" />
    </svg>
  );
}
