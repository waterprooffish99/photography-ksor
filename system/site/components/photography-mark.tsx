import type { ReactElement } from "react";

/**
 * A compact aperture mark for the human surface.
 *
 * It is deliberately geometric and single-colour: recognisable as photographic
 * equipment at small sizes, but quiet enough to sit beside a governed record's
 * title rather than behaving like a portfolio logo.
 */
export function PhotographyMark({ className = "" }: { className?: string }): ReactElement {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="13.25" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <path
        d="M16 8.5 22.5 12.25v7.5L16 23.5l-6.5-3.75v-7.5L16 8.5Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M16 2.75V8.5M27.47 9.38l-4.97 2.87M27.47 22.62l-4.97-2.87M16 29.25V23.5M4.53 22.62l4.97-2.87M4.53 9.38l4.97 2.87"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="2.15" fill="currentColor" />
    </svg>
  );
}
