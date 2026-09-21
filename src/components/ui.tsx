import Link from "next/link";
import type { ReactNode } from "react";

/* ---------------- Layout ---------------- */

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${wide ? "max-w-[1600px]" : "max-w-[1240px]"} ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "bone" | "ink";
  id?: string;
}) {
  const tones = {
    paper: "bg-paper text-ink",
    bone: "bg-bone text-ink",
    ink: "bg-ink text-paper",
  };
  return (
    <section id={id} className={`py-20 sm:py-28 lg:py-36 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}

/* ---------------- Typography ---------------- */

export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""} ${className}`}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2 className={`display mt-5 text-h2 ${light ? "text-paper" : "text-ink"}`}>{title}</h2>
      {intro ? (
        <p
          className={`mt-6 text-lg leading-relaxed ${light ? "text-paper/65" : "text-muted"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* ---------------- Buttons ---------------- */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light" | "signal";
  className?: string;
};

export function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-all duration-300";
  const variants = {
    solid: "bg-ink text-paper hover:bg-ink-soft hover:gap-4",
    outline:
      "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-paper hover:gap-4",
    light:
      "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink hover:gap-4",
    signal: "bg-signal text-paper hover:bg-ink hover:gap-4",
  };
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] ${
        light ? "text-paper/70 hover:text-paper" : "text-ink"
      } transition-colors ${className}`}
    >
      <span className="link-draw">{children}</span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

/* ---------------- Imagery placeholder ---------------- */

/**
 * Stand-in for Barry's real job photos.
 *
 * TODO(Barry): drop real images in /public/photos/ and replace these with
 * next/image <Image> tags. The `label` prop marks what belongs in each slot.
 */
export function PhotoSlot({
  label,
  dark = false,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  dark?: boolean;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} ${dark ? "photo-slot-dark" : "photo-slot"} relative flex items-end overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="relative z-10 w-full p-5">
        <span
          className={`inline-block border px-2.5 py-1.5 text-[0.58rem] font-medium uppercase tracking-[0.16em] ${
            dark
              ? "border-paper/20 bg-ink/70 text-paper/60"
              : "border-ink/10 bg-paper/80 text-muted"
          }`}
        >
          Photo &middot; {label}
        </span>
      </div>
    </div>
  );
}

/* ---------------- Misc ---------------- */

export function Divider({ light = false }: { light?: boolean }) {
  return <hr className={`border-0 border-t ${light ? "border-paper/15" : "border-line"}`} />;
}
