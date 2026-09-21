import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/cta-band";
import { Reveal } from "@/components/motion";
import {
  ArrowLink,
  Button,
  Container,
  Eyebrow,
  PhotoSlot,
  Section,
} from "@/components/ui";
import { citiesByRegion, featuredCities, getCity, services, site } from "@/lib/site";

export function generateStaticParams() {
  return featuredCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  const title = `Roofing Contractor in ${city.name}, CO`;
  const description = `Roof replacement, repair, and hail damage restoration in ${city.name}, Colorado. Free documented inspections and insurance claim help from SQ Roofing. Call ${site.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}/service-areas/${city.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city || !city.featured) notFound();

  const siblings = citiesByRegion(city.region)
    .filter((c) => c.slug !== city.slug && c.featured)
    .slice(0, 5);

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: `${site.name} — ${city.name}, CO`,
    parentOrganization: { "@id": `${site.url}/#business` },
    telephone: site.phone,
    email: site.email,
    url: `${site.url}/service-areas/${city.slug}`,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Colorado" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-paper pt-14 pb-16 lg:pt-20 lg:pb-20">
        <Container>
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted">
                <li>
                  <Link href="/" className="hover:text-ink">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/service-areas" className="hover:text-ink">
                    Service Areas
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ink">{city.name}</li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                {/* Several regions are named after their county (Boulder County),
                    so only show both when they actually differ. */}
                <Eyebrow>
                  {[city.county, city.region]
                    .filter((part, i, parts) => part && parts.indexOf(part) === i)
                    .join(" · ")}
                </Eyebrow>
                <h1 className="display mt-6 text-h1 text-ink">
                  Roofing in {city.name}, Colorado.
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                  {city.intro}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button href="/contact">
                    Free {city.name} Inspection
                    <span aria-hidden="true">&rarr;</span>
                  </Button>
                  <Button href={site.phoneHref} variant="outline">
                    Call {site.phone}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <PhotoSlot
                  label={`Completed roof in ${city.name}`}
                  aspect="aspect-[4/3]"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services in this city */}
      <Section tone="bone">
        <Container>
          <Reveal>
            <Eyebrow>Services in {city.name}</Eyebrow>
            <h2 className="display mt-5 max-w-2xl text-h2 text-ink">
              Everything we do, we do in {city.name}.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col bg-paper p-8 transition-colors hover:bg-ink"
                >
                  <h3 className="display text-h3 text-ink transition-colors group-hover:text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-muted transition-colors group-hover:text-paper/60">
                    {service.short}
                  </p>
                  <span className="mt-6 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-paper/70">
                    {service.title} in {city.name} &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Local context */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Working in {city.name}</Eyebrow>
              <h2 className="display mt-5 text-h2 text-ink">
                What to expect when you call.
              </h2>
              {city.nearby?.length ? (
                <div className="mt-10 border-t border-line pt-6">
                  <p className="eyebrow">Also serving nearby</p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                    {city.nearby.join(" · ")}
                  </p>
                </div>
              ) : null}
            </Reveal>

            <Reveal delay={100} className="lg:col-span-7">
              <div className="space-y-5 text-[1.02rem] leading-[1.75] text-muted">
                <p>
                  We start every {city.name} job the same way: a free inspection where
                  we actually get on the roof and photograph what's up there. You get
                  that report regardless of whether there's work to do, and there's no
                  obligation attached to it.
                </p>
                <p>
                  If it's storm damage, we'll tell you whether we think it's worth
                  filing and we'll meet your adjuster on the roof when they come out.
                  If it's wear, we'll give you a fixed estimate and a realistic
                  timeline. And if the roof is fine, we'll say that — it's the answer
                  we give more often than {city.name} homeowners expect.
                </p>
                <p className="text-ink">
                  {city.name} permits, HOA requirements, and local code all get handled
                  as part of the job. You shouldn't have to learn any of it.
                </p>
              </div>

              <div className="mt-10">
                <ArrowLink href="/insurance-claims">
                  How insurance claims work
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Nearby cities */}
      {siblings.length ? (
        <Section tone="bone" className="!py-20">
          <Container>
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
                <h2 className="display text-h3 text-ink">
                  Also serving {city.region}
                </h2>
                <ArrowLink href="/service-areas">All Colorado areas</ArrowLink>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <ul className="mt-2 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
                {siblings.map((s) => (
                  <li key={s.slug} className="border-b border-line">
                    <Link
                      href={`/service-areas/${s.slug}`}
                      className="group flex items-center justify-between py-4 text-[0.95rem] text-ink"
                    >
                      <span className="link-draw">{s.name}</span>
                      <span
                        aria-hidden="true"
                        className="text-xs text-muted-light transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        eyebrow={`${city.name}, Colorado`}
        title={`Free roof inspection in ${city.name}.`}
        intro="No cost, no obligation, and a written report either way. Tell us what you're seeing and we'll come take a look."
      />
    </>
  );
}
