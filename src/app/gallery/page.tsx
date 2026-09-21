import type { Metadata } from "next";
import CtaBand from "@/components/cta-band";
import { Reveal } from "@/components/motion";
import { Container, Eyebrow, PhotoSlot, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Completed roofing projects across Colorado — replacements, storm damage restorations, repairs, and commercial work by SQ Roofing of Boulder.",
  alternates: { canonical: "/gallery" },
};

/**
 * TODO(Barry): replace this array with real jobs.
 *
 * For each project we want: 2–4 photos (at least one wide shot of the finished
 * roof), the city, the type of work, the shingle/material used, and one line
 * about what made the job notable. Before/after pairs are the single most
 * persuasive thing on a roofing site — prioritize those.
 *
 * Drop images in /public/photos/ and swap <PhotoSlot> for next/image <Image>.
 */
const projects = [
  {
    city: "Boulder, CO",
    type: "Full replacement",
    detail: "Class 4 impact-resistant shingles after a 2024 hail claim",
    span: "lg:col-span-8",
    aspect: "aspect-[16/9]",
  },
  {
    city: "Longmont, CO",
    type: "Storm restoration",
    detail: "Insurance claim, full tear-off and deck repair",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    city: "Denver, CO",
    type: "Historic home",
    detail: "Complex roofline, matched original profile",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    city: "Fort Collins, CO",
    type: "Roof repair",
    detail: "Valley flashing rebuild, leak traced and resolved",
    span: "lg:col-span-8",
    aspect: "aspect-[16/9]",
  },
  {
    city: "Broomfield, CO",
    type: "Seamless gutters",
    detail: "Resized system with correct downspout placement",
    span: "lg:col-span-6",
    aspect: "aspect-[3/2]",
  },
  {
    city: "Westminster, CO",
    type: "Commercial TPO",
    detail: "Low-slope membrane, multi-building HOA project",
    span: "lg:col-span-6",
    aspect: "aspect-[3/2]",
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
              Replacements, storm restorations, repairs, and commercial work from
              across Colorado. If you want to see something near you, ask — we'll
              usually have a job within a few miles.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="paper" className="!pt-0">
        <Container>
          <Reveal>
            <div className="mb-12 border border-signal/25 bg-signal-soft px-6 py-4 text-sm text-signal">
              <strong className="font-medium">Placeholder gallery.</strong> These are
              empty slots waiting on Barry's real job photos. Drop images into{" "}
              <code className="font-mono text-xs">/public/photos/</code> and this page
              fills in.
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-12">
            {projects.map((project, i) => (
              <Reveal key={project.detail} delay={(i % 2) * 90} className={project.span}>
                <figure className="group">
                  <PhotoSlot
                    label={`${project.type} — ${project.city}`}
                    aspect={project.aspect}
                    className="transition-opacity duration-500 group-hover:opacity-90"
                  />
                  <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line pt-4">
                    <span className="display text-h3 text-ink">{project.type}</span>
                    <span className="eyebrow">{project.city}</span>
                    <p className="w-full text-[0.9rem] leading-relaxed text-muted">
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
