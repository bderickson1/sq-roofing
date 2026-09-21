import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/cta-band";
import { Reveal } from "@/components/motion";
import { Container, Eyebrow, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Completed roofing projects across Colorado — replacements, skylight and vent work, ridge ventilation, and storm restorations by SQ Roofing of Boulder.",
  alternates: { canonical: "/gallery" },
};

/**
 * Real SQ Roofing jobs. Every caption describes work that is actually visible
 * in its photo — nothing here is invented.
 *
 * TODO(Barry): add the `city` for the three jobs that don't have one. Boulder
 * is filled in already because the Flatirons are visible in that shot. Cities
 * matter for local search, so it's worth doing — but only put down the real
 * one. Add the shingle manufacturer and colour to `detail` too if you have it;
 * homeowners comparing quotes genuinely look for that.
 */
type Project = {
  file: string;
  alt: string;
  type: string;
  city?: string;
  detail: string;
};

const projects: Project[] = [
  {
    file: "job-boulder-flatirons.jpg",
    alt: "Completed light grey architectural shingle roof in Boulder, Colorado, with the Flatirons visible behind the ridge",
    type: "Full replacement",
    city: "Boulder, CO",
    detail:
      "Light grey architectural shingles on a hip roof, with new pipe boots and box vents set and sealed. Shot from the ridge looking toward the Flatirons.",
  },
  {
    file: "job-skylight-brown-shingle.jpg",
    alt: "Weathered-wood brown architectural shingles around a newly flashed skylight, with two box vents nearby",
    type: "Skylight & vent work",
    detail:
      "Weathered-wood shingles run tight to a reflashed skylight curb, with new box vents set into the field. The flashing and step detail around a skylight is where most roofs of this age start leaking.",
  },
  {
    file: "job-charcoal-ridge-vent.jpg",
    alt: "Charcoal architectural shingle roof with a continuous ridge vent and newly flashed plumbing vents",
    type: "Replacement with ridge ventilation",
    detail:
      "Charcoal architectural shingles with continuous ridge vent along the peak and plumbing stacks reflashed. Proper ridge exhaust is what keeps an attic from cooking shingles from underneath.",
  },
  {
    file: "job-plains-gray-hip-roof.jpg",
    alt: "Grey architectural shingle hip roof on a rural Colorado property, with open farmland stretching to the horizon",
    type: "Rural full replacement",
    detail:
      "Grey architectural shingles on a large hip roof east of the Front Range, with vents and the satellite dish reset onto the new deck. Wind exposure out here makes fastening pattern and ridge cap security the whole job.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-paper pt-20 pb-14 lg:pt-28 lg:pb-16">
        <Container>
          <Reveal>
            <Eyebrow>Our work</Eyebrow>
            <h1 className="display mt-6 max-w-4xl text-h1 text-ink">
              Roofs we've put our name on.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              Replacements, skylight and vent work, and ventilation done properly —
              from Boulder to the eastern plains. If you want to see something near
              you, ask. There's usually a job within a few miles.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.file} delay={(i % 2) * 90}>
                <figure className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-bone-deep">
                    <Image
                      src={`/photos/${project.file}`}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <figcaption className="mt-6 border-t border-line pt-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <span className="display text-h3 text-ink">{project.type}</span>
                      {project.city ? (
                        <span className="eyebrow">{project.city}</span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">
                      {project.detail}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Want yours on this page?"
        title="Start with a free inspection."
        intro="We'll document what's up there and tell you honestly what it needs — including when the answer is nothing."
      />
    </>
  );
}
