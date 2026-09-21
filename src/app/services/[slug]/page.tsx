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
import { getService, services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    serviceType: service.title,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "State", name: "Colorado" },
    url: `${site.url}/services/${service.slug}`,
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
                  <Link href="/services" className="hover:text-ink">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ink">{service.title}</li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Service</Eyebrow>
                <h1 className="display mt-6 text-h1 text-ink">{service.title}</h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                  {service.blurb}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button href="/contact">
                    Free Inspection
                    <span aria-hidden="true">&rarr;</span>
                  </Button>
                  <Button href={site.phoneHref} variant="outline">
                    Call {site.phone}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <PhotoSlot label={service.title} aspect="aspect-[4/3]" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* What's included */}
      <Section tone="bone">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-4">
              <Eyebrow>What's included</Eyebrow>
              <h2 className="display mt-5 text-h2 text-ink">
                What you get, specifically.
              </h2>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-8">
              <ul className="divide-y divide-line-strong border-y border-line-strong">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-5 py-5">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-6 shrink-0 bg-ink"
                    />
                    <span className="text-[0.98rem] leading-relaxed text-ink">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Long-form body */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-8 lg:col-start-3">
              {service.body.map((block, i) => (
                <Reveal key={block.heading} delay={i * 80}>
                  <article className="border-t border-line pt-10 pb-12 first:border-t-0 first:pt-0">
                    <h2 className="display text-h3 text-ink">{block.heading}</h2>
                    <p className="mt-5 text-[1.02rem] leading-[1.75] text-muted">
                      {block.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Other services */}
      <Section tone="bone" className="!py-20">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="display text-h3 text-ink">Other services</h2>
              <ArrowLink href="/services">All services</ArrowLink>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 80}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full flex-col bg-paper p-8 transition-colors hover:bg-ink"
                >
                  <h3 className="display text-h3 text-ink transition-colors group-hover:text-paper">
                    {other.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.92rem] leading-relaxed text-muted transition-colors group-hover:text-paper/60">
                    {other.short}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
