/**
 * SQ Roofing logo.
 *
 * Vector recreation of Barry's mark (overbarred "D" + wide-tracked wordmark)
 * so it stays crisp at every size and can be recolored for dark sections.
 *
 * TODO(Barry): when the original vector file arrives, drop it at
 * /public/logo.svg. This component can then render that file instead —
 * but keep the same props so nothing else has to change.
 */

type LogoProps = {
  variant?: "horizontal" | "stacked";
  tone?: "dark" | "light";
  className?: string;
};

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Floating overbar */}
      <path d="M22 9 H138" stroke="currentColor" strokeWidth="8.5" strokeLinecap="butt" />
      {/* Stem */}
      <path d="M46 34 V 108" stroke="currentColor" strokeWidth="7" strokeLinecap="butt" />
      {/* Top and bottom arms */}
      <path d="M34 37.5 H 82" stroke="currentColor" strokeWidth="7" strokeLinecap="butt" />
      <path d="M34 104.5 H 82" stroke="currentColor" strokeWidth="7" strokeLinecap="butt" />
      {/* Bowl */}
      <path
        d="M80 37.5 C 116 37.5, 132 52, 132 71 C 132 90, 116 104.5, 80 104.5"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="butt"
      />
    </svg>
  );
}

export function Logo({ variant = "horizontal", tone = "dark", className = "" }: LogoProps) {
  const color = tone === "light" ? "text-paper" : "text-ink";

  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center ${color} ${className}`}>
        <Mark className="h-14 w-auto" />
        <span className="mt-3 text-[0.8rem] font-medium uppercase leading-none tracking-[0.34em]">
          SQ Roofing
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${color} ${className}`}>
      <Mark className="h-9 w-auto shrink-0" />
      <span className="text-[0.78rem] font-medium uppercase leading-none tracking-[0.3em] whitespace-nowrap">
        SQ Roofing
      </span>
    </span>
  );
}

export default Logo;
