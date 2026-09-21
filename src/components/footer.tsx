import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "./ui";
import { featuredCities, services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <Container>
        <div className="grid gap-14 py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="stacked" tone="light" className="items-start" />
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-paper/55">
              Roofing, repairs, and storm damage restoration from Boulder across the
              state of Colorado. Free inspections, honest assessments, and work that
              holds up.
            </p>
            <div className="mt-8 space-y-1.5">
              <a
                href={site.phoneHref}
                className="display block text-3xl text-paper transition-opacity hover:opacity-70"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block break-all text-sm text-paper/55 transition-colors hover:text-paper"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <p className="eyebrow eyebrow-light">Services</p>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div className="lg:col-span-3">
            <p className="eyebrow eyebrow-light">Service Areas</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {featuredCities.slice(0, 14).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/service-areas/${c.slug}`}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="mt-6 inline-block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-paper underline underline-offset-4"
            >
              All Colorado areas
            </Link>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <p className="eyebrow eyebrow-light">Company</p>
            <ul className="mt-6 space-y-3">
              {[
                { href: "/about", label: "About SQ Roofing" },
                { href: "/insurance-claims", label: "Insurance Claims" },
                { href: "/gallery", label: "Our Work" },
                { href: "/contact", label: "Free Estimate" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-paper/12 pt-6">
              <p className="eyebrow eyebrow-light">Hours</p>
              <p className="mt-3 text-sm text-paper/60">{site.hours}</p>
              <p className="mt-1 text-sm text-paper/60">
                Emergency storm response available
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-paper/12 py-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. Licensed &amp; insured in Colorado.
          </p>
          <p>
            Based in {site.baseCity}, {site.baseState} &middot; Serving all of Colorado
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
