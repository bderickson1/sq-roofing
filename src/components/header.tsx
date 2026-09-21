"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Container } from "./ui";
import { services, site } from "@/lib/site";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", children: services },
  { href: "/insurance-claims", label: "Insurance Claims" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close both menus whenever the route changes — from a link, the back
  // button, or a redirect. This adjusts state during render rather than in an
  // effect, which is React's recommended pattern for "reset state when a prop
  // changes": it re-renders immediately without the browser ever painting the
  // stale open menu, and avoids the cascading render an effect would cause.
  const [routeAtOpen, setRouteAtOpen] = useState(pathname);
  if (routeAtOpen !== pathname) {
    setRouteAtOpen(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-ink text-paper xl:block">
        <Container>
          <div className="flex h-11 items-center justify-between text-[0.68rem] font-medium uppercase tracking-[0.16em]">
            <p className="text-paper/55">
              Boulder &middot; Denver &middot; Fort Collins &middot; Colorado Springs &middot; Statewide
            </p>
            <div className="flex items-center gap-7">
              <a href={site.phoneHref} className="link-draw text-paper/80 hover:text-paper">
                {site.phone}
              </a>
              <Link href="/contact" className="link-draw text-paper">
                Free Roof Inspection
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <header
        className={`sticky top-0 z-50 bg-paper transition-shadow duration-300 ${
          scrolled ? "border-b border-line shadow-[0_1px_20px_rgba(10,10,10,0.05)]" : "border-b border-transparent"
        }`}
      >
        <Container>
          {/* Height stays h-20 below xl so the mobile sheet's `top-20` lines up
              exactly with the bottom of the bar at every width it can open at. */}
          <div className="flex h-20 items-center justify-between gap-6 xl:h-24">
            <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
              <Logo />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
              {nav.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 whitespace-nowrap py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                        isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`text-[0.6rem] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                      >
                        &#9662;
                      </span>
                    </Link>
                    {servicesOpen ? (
                      <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 border border-line bg-paper py-2 shadow-[0_18px_50px_rgba(10,10,10,0.1)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.slug}
                            href={`/services/${child.slug}`}
                            className="block px-5 py-3 text-sm text-muted transition-colors hover:bg-bone hover:text-ink"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`whitespace-nowrap py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                      isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden shrink-0 xl:block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-paper transition-all duration-300 hover:gap-4 hover:bg-ink-soft"
              >
                Get a Free Estimate
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={site.phoneHref}
                className="px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink"
              >
                Call
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="relative flex h-11 w-11 items-center justify-center"
              >
                <span className="sr-only">Menu</span>
                <span className="flex w-6 flex-col gap-[5px]">
                  <span
                    className={`block h-px w-full bg-ink transition-transform duration-300 ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`}
                  />
                  <span
                    className={`block h-px w-full bg-ink transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block h-px w-full bg-ink transition-transform duration-300 ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
                  />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile sheet */}
      {mobileOpen ? (
        <div className="fixed inset-0 top-20 z-40 overflow-y-auto bg-paper xl:hidden">
          <Container className="py-8">
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item) => (
                <div key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    className="display block py-5 text-3xl text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="grid grid-cols-1 gap-1 pb-5 sm:grid-cols-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.slug}
                          href={`/services/${child.slug}`}
                          className="py-2 text-sm text-muted"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center bg-ink px-6 py-5 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-paper"
              >
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center border border-line-strong px-6 py-5 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-ink"
              >
                Request a Free Inspection
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted">
              Serving Boulder, Denver, Fort Collins, Colorado Springs and communities
              statewide.
            </p>
          </Container>
        </div>
      ) : null}
    </>
  );
}

export default Header;
