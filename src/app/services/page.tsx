import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/cta-band";
import { Reveal } from "@/components/motion";
import { Container, Eyebrow, PhotoSlot, Section } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Services in Colorado",
  description:
    "Roof replacement, repair, hail and storm damage restoration, free inspections, seamless gutters, and commercial flat roofing across Colorado. SQ Roofing, Boulder CO.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero />

      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="divide-y divide-line border-b border-line">
            {services.map((service, i) => (
              <Reveal key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid items-center gap-8 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16"
                >
                  <div className="lg:col-span-1">
                    <span className="display text-4xl text-line-strong transition-colors group-hover:text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <h2 className="display text-h2 text-ink">{service.title}</h2>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink transition-all duration-300 group-hover:gap-4">
                      View service
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-[0.98rem] leading-relaxed text-muted">
                      {service.blurb}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <PhotoSlot
                      label={service.title}
                      aspect="aspect-[16/10]"
                      className="transition-opacity duration-500 group-hover:opacity-80"
                    />
                  </div>
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

function PageHero() {
  return (
    <section className="bg-paper pt-20 pb-16 lg:pt-28 lg:pb-24">
      <Container>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h1 className="display mt-6 max-w-4xl text-h1 text-ink">
            Residential and commercial roofing across Colorado.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            Whatever is happening above your ceiling, it falls into one of these.
            Every one of them starts with a free inspection and an honest answer.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
