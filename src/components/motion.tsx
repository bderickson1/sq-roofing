"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Fades content up as it scrolls into view.
 *
 * The hidden starting state lives in globals.css under `.js .reveal`, and the
 * `js` class is server-rendered — so there's no flash, no hydration mismatch,
 * and a <noscript> rule keeps everything readable without JavaScript.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Stagger, in ms. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver available — show it rather than hide it.
    //
    // Same for a document that isn't being rendered: IntersectionObserver
    // reports nothing while the page is hidden, so a headless renderer, a
    // preview/screenshot service, or a tab opened in the background would
    // otherwise sit at opacity 0 indefinitely. Skip the animation and show
    // the content — there's nobody watching it animate anyway.
    if (
      typeof IntersectionObserver === "undefined" ||
      document.visibilityState === "hidden"
    ) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? ({ "--d": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

/**
 * Entrance animation for above-the-fold content. Hero elements are already
 * past their scroll-timeline entry point on load, so they animate on a plain
 * timer instead, staggered via the `delay` prop.
 */
export function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`rise ${className}`}
      style={delay ? ({ "--d": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
