import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/cta-band";
import { Reveal } from "@/components/motion";
import { Container, Eyebrow, Section } from "@/components/ui";
import { cities, citiesByRegion, regions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Colorado Service Areas",
  description:
    "SQ Roofing serves Boulder, Denver, Fort Collins, Colorado Springs, Grand Junction and communities across the entire state of Colorado. Free roof inspections statewide.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-paper pt-20 pb-16 lg:pt-28 lg:pb-20">
        <Container>
          <Reveal>
            <Eyebrow>Service areas</Eyebrow>
            <h1 className="display mt-6 max-w-4xl text-h1 text-ink">
              Based in {site.baseCity}. Working across Colorado.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              We're a Front Range company by home base, but we travel. From the
              Western Slope to the eastern plains, if you're in Colorado we'll come
              look at your roof. Western Slope and mountain work gets scheduled in
              blocks, so call and we'll tell you when we're next in your area.
            </p>
            <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
              {cities.length} communities listed &middot; Statewide coverage
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="space-y-20">
            {regions.map((region) => {
              const list = citiesByRegion(region);
              return (
                <Reveal key={region}>
                  <div className="grid gap-8 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-4">
                      <h2 className="display text-h2 text-ink">{region}</h2>
                      <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                        {list.length} communities
                      </p>
                    </div>

                    <div className="lg:col-span-8">
                      <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
                        {list.map((city) =>
                          city.featured ? (
                            <li key={city.slug} className="border-b border-line">
                              <Link
                                href={`/service-areas/${city.slug}`}
                                className="group flex items-center justify-between gap-2 py-3.5 text-[0.95rem] text-ink"
                              >
                                <span className="link-draw">{city.name}</span>
                                <span
                                  aria-hidden="true"
                                  className="text-xs text-muted-light transition-transform duration-300 group-hover:translate-x-0.5"
                                >
                                  &rarr;
                                </span>
                              </Link>
                            </li>
                          ) : (
                            <li
                              key={city.slug}
                              className="border-b border-line py-3.5 text-[0.95rem] text-muted"
                            >
                              {city.name}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <p className="mt-20 border-t border-line pt-8 text-sm leading-relaxed text-muted">
              Don't see your town? The list above isn't exhaustive — it's where we
              work most often. We cover the whole state, so call{" "}
              <a href={site.phoneHref} className="link-draw text-ink">
                {site.phone}
              </a>{" "}
              and ask.
            </p>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Wherever you are in Colorado, the inspection is free."
        intro="Tell us where the house is and what you're seeing. We'll let you know when we can be out."
      />
    </>
  );
}
