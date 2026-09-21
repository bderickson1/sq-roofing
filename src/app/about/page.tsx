import type { Metadata } from "next";
import CtaBand from "@/components/cta-band";
import { Reveal } from "@/components/motion";
import {
  Container,
  Eyebrow,
  PhotoSlot,
  Section,
  SectionHeading,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About SQ Roofing",
  description:
    "SQ Roofing is a Boulder-based roofing contractor owned by Barry Derickson, serving homeowners and businesses across Colorado with honest assessments and work that holds up.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "We'll talk you out of work",
    text: "If your roof has years left, we'll say so in writing. It costs us an invoice today and earns us the job when the roof is genuinely finished — plus every neighbor you tell.",
  },
  {
    title: "The owner is on the job",
    text: "You deal with Barry, not a commissioned closer who hands you off after the signature. The person who quoted your roof is the person answerable for it.",
  },
  {
    title: "We're still here in five years",
    text: "Storm chasers work a season and leave the state. Our address doesn't change. When you call about a warranty in 2031, someone picks up.",
  },
  {
    title: "No deductible games",
    text: "Covering your deductible is illegal in Colorado, and the roofers who offer it are telling you what kind of company they are. We do the work and bill it straight.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-20 pb-16 lg:pt-28 lg:pb-20">
        <Container>
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h1 className="display mt-6 max-w-4xl text-h1 text-ink">
              A Colorado roofer you can still find next year.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              SQ Roofing is owned and operated by {site.owner}, based in{" "}
              {site.baseCity} and working across the state.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Portrait + story */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <Reveal>
            <PhotoSlot
              label={`${site.owner} on a roof — wide landscape hero shot`}
              aspect="aspect-[21/9]"
            />
          </Reveal>

          <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-4">
              <SectionHeading eyebrow="The story" title="Why SQ Roofing exists." />
            </Reveal>

            <Reveal delay={100} className="lg:col-span-8">
              <div className="space-y-6 text-[1.02rem] leading-[1.75] text-muted">
                <p>
                  {/* TODO(Barry): replace this section with Barry's real story —
                      how long he's been roofing, what he did before, why he
                      started SQ Roofing. This is the single most-read block of
                      copy on any contractor site and it needs to be true. */}
                  Every hail season in Colorado brings the same pattern. Storms roll
                  through the Front Range, and within days the neighborhoods are full
                  of out-of-state crews knocking doors with clipboards. They sell
                  hard, they work fast, and by the time the first roof leaks they've
                  moved on to the next state's weather.
                </p>
                <p>
                  Homeowners are left with a roof that was installed by whoever was
                  available, a warranty from a company that no longer answers the
                  phone, and no way to tell the difference until it rains.
                </p>
                <p>
                  {site.name} was built to be the opposite of that. We're based in{" "}
                  {site.baseCity}. Our name is on every roof we install. We'd rather
                  do a smaller number of roofs properly than the maximum number
                  possible in a season, and we'd rather tell a homeowner their roof
                  is fine than sell them one they don't need.
                </p>
                <p className="text-ink">
                  That's not a marketing position. It's just what it takes to still
                  be roofing in the same towns a decade from now.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="bone">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Four things we don't compromise on."
            />
          </Reveal>

          <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 80}>
                <div className="flex h-full flex-col bg-paper p-9 lg:p-12">
                  <span className="display text-3xl text-line-strong">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-6 text-h3 text-ink">{value.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Credentials */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Credentials"
                title="Licensed, insured, and accountable."
                intro="The paperwork that protects you if something goes wrong. Ask any contractor for it — a real one will hand it over without hesitating."
              />
            </Reveal>

            <Reveal delay={100} className="lg:col-span-7">
              <dl className="divide-y divide-line border-y border-line">
                {[
                  {
                    term: "Licensing",
                    // TODO(Barry): add the license number to site.licenseNumber.
                    def: site.licenseNumber
                      ? `Colorado licensed roofing contractor — ${site.licenseNumber}`
                      : "Licensed roofing contractor in Colorado. License number to be added.",
                  },
                  {
                    term: "Insurance",
                    def: "General liability and workers' compensation coverage. Certificates available on request before any work begins.",
                  },
                  {
                    term: "Warranties",
                    // TODO(Barry): confirm actual warranty terms before launch.
                    def: "Manufacturer material warranty plus a written workmanship warranty on every installation. Terms provided with your estimate.",
                  },
                  {
                    term: "Service area",
                    def: `Based in ${site.baseCity}, ${site.baseState}. Residential and commercial work across the entire state of Colorado.`,
                  },
                  {
                    term: "Hours",
                    def: `${site.hours}. Emergency storm response outside of those hours.`,
                  },
                ].map((row) => (
                  <div key={row.term} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8">
                    <dt className="eyebrow">{row.term}</dt>
                    <dd className="text-[0.95rem] leading-relaxed text-muted sm:col-span-2">
                      {row.def}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Let's start with a look at the roof."
        intro="No charge, no obligation, and an honest answer about what you're actually dealing with."
      />
    </>
  );
}
