import Link from "next/link";
import { Reveal, Rise, StatCounter } from "@/components/motion";
import CtaBand from "@/components/cta-band";
import {
  ArrowLink,
  Button,
  Container,
  Eyebrow,
  PhotoSlot,
  Section,
  SectionHeading,
} from "@/components/ui";
import { featuredCities, services, site, testimonials } from "@/lib/site";

/**
 * TODO(Barry): every number below is a placeholder. Replace with real figures
 * before launch, or delete any stat he can't stand behind. Do not guess —
 * inflated stats are the fastest way to lose a homeowner's trust on a callback.
 */
const stats = [
  { value: 0, suffix: "+", label: "Years roofing in Colorado", todo: true },
  { value: 0, suffix: "+", label: "Roofs completed", todo: true },
  { value: 0, suffix: "", label: "Colorado communities served", todo: true },
  { value: 0, suffix: "hr", label: "Storm response time", todo: true },
];

const process = [
  {
    step: "01",
    title: "Free inspection",
    text: "We get on the roof — not just a look from the driveway — and photograph everything we find, damage or not.",
  },
  {
    step: "02",
    title: "Straight assessment",
    text: "You get a written report and a real answer on repair versus replace, including when the answer is 'do nothing yet.'",
  },
  {
    step: "03",
    title: "Claim or estimate",
    text: "If it's storm damage, we handle the claim and meet your adjuster. If it's not, you get a clear fixed estimate.",
  },
  {
    step: "04",
    title: "Work that holds",
    text: "Crews that show up when they said, clean up every day, and back the work in writing when they're done.",
  },
];

const trustPoints = [
  "Licensed & insured",
  "Free documented inspections",
  "Insurance claim specialists",
  "Locally owned in Boulder",
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <PhotoSlot
            label="Hero — wide shot of a finished roof, Front Range behind it"
            dark
            aspect="h-full"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </div>

        <Container className="relative">
          <div className="flex min-h-[600px] flex-col justify-center py-24 lg:min-h-[740px] lg:py-32">
            <Rise>
              <Eyebrow light>
                Boulder, Colorado &middot; Serving the entire state
              </Eyebrow>
            </Rise>

            <Rise delay={80}>
              <h1 className="display mt-7 max-w-4xl text-display text-paper">
                Colorado's roof,
                <br />
                done right the first time.
              </h1>
            </Rise>

            <Rise delay={160}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/65">
                Roof replacement, repair, and storm damage restoration from a crew
                that will tell you when you don't need any of it. Free documented
                inspections anywhere in Colorado.
              </p>
            </Rise>

            <Rise delay={240}>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="light">
                  Free Roof Inspection
                  <span aria-hidden="true">&rarr;</span>
                </Button>
                <a
                  href={site.phoneHref}
                  className="group inline-flex items-center gap-3 px-2 py-4 text-paper transition-opacity hover:opacity-75"
                >
                  <span className="eyebrow eyebrow-light">Call now</span>
                  <span className="display text-2xl">{site.phone}</span>
                </a>
              </div>
            </Rise>

            <Rise delay={320}>
              <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/12 pt-8">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-paper/45"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </Rise>
          </div>
        </Container>
      </section>

      {/* ---------------- Three-way split ---------------- */}
      <section className="border-b border-line bg-paper">
        <Container>
          <div className="grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {[
              {
                eyebrow: "Urgent",
                title: "Active leak or storm damage",
                text: "Water coming in right now, or a storm just went through. We prioritize these and can tarp the same day.",
                href: "/contact",
                cta: "Get emergency help",
                signal: true,
              },
              {
                eyebrow: "Most common",
                title: "Your roof is showing its age",
                text: "Curling shingles, granules in the gutters, or a roof that's simply old enough to be due. Start with a free inspection.",
                href: "/services/roof-replacement",
                cta: "Roof replacement",
              },
              {
                eyebrow: "Insurance",
                title: "You think you have a hail claim",
                text: "Most hail damage is invisible from the ground. We document it properly and work the claim alongside you.",
                href: "/insurance-claims",
                cta: "How claims work",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 90}>
                <div className="group flex h-full flex-col p-9 lg:p-12">
                  <Eyebrow className={card.signal ? "!text-signal" : ""}>
                    {card.eyebrow}
                  </Eyebrow>
                  <h2 className="display mt-5 text-h3 text-ink">{card.title}</h2>
                  <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">
                    {card.text}
                  </p>
                  <div className="mt-8">
                    <ArrowLink href={card.href}>{card.cta}</ArrowLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Welcome / story ---------------- */}
      <Section tone="paper">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <PhotoSlot
                label={`${site.owner} on site — portrait or crew shot`}
                aspect="aspect-[4/5]"
              />
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Who you're hiring"
                  title="A Boulder roofer, not a storm chaser."
                  intro="Every hail season brings out-of-state crews who knock doors, sell fast, and are gone by the time the roof leaks. We live here. Our name is on every roof we put on, and we're still around in five years when you need us."
                />
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-10 space-y-5 text-[0.95rem] leading-relaxed text-muted">
                  <p>
                    SQ Roofing is owned and run by {site.owner}, working out of{" "}
                    {site.baseCity} and traveling the state. That means you talk to the
                    person responsible for the job, not a call center and not a
                    commissioned salesman who disappears after the contract is signed.
                  </p>
                  <p>
                    We'd rather do fewer roofs properly than as many as possible. If
                    yours doesn't need replacing, we will tell you so and put it in
                    writing — which costs us an invoice today and earns us the call
                    when the roof genuinely is finished.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-10">
                  <ArrowLink href="/about">More about SQ Roofing</ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------- Services ---------------- */}
      <Section tone="bone">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Everything above the walls."
              intro="Residential and commercial roofing across Colorado, from a single failed pipe boot to a full multi-building replacement."
            />
          </Reveal>

          <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col bg-paper p-9 transition-colors duration-300 hover:bg-ink"
                >
                  <span className="eyebrow transition-colors group-hover:text-paper/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-5 text-h3 text-ink transition-colors group-hover:text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.92rem] leading-relaxed text-muted transition-colors group-hover:text-paper/60">
                    {service.short}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink transition-all duration-300 group-hover:gap-4 group-hover:text-paper">
                    Learn more
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- Stats ---------------- */}
      <section className="bg-ink py-20 text-paper lg:py-24">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="border-t border-paper/15 pt-7">
                  <p className="display text-5xl text-paper lg:text-6xl">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-paper/45">
                    {stat.label}
                  </p>
                  {stat.todo ? (
                    <p className="mt-2 text-[0.6rem] uppercase tracking-wider text-signal">
                      Placeholder — needs real number
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Process ---------------- */}
      <Section tone="paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Four steps, no surprises."
              intro="The same process whether you're filing a hail claim or just want someone to look at a stain on the ceiling."
            />
          </Reveal>

          <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="flex h-full flex-col bg-paper p-9">
                  <span className="display text-4xl text-line-strong">{item.step}</span>
                  <h3 className="mt-6 text-base font-medium text-ink">{item.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- Testimonials ---------------- */}
      <Section tone="bone">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What homeowners say"
              title="The work speaks, but so do they."
            />
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.quote} delay={i * 90}>
                <figure className="flex h-full flex-col border-t border-ink pt-8">
                  <blockquote className="flex-1">
                    <p className="display text-xl leading-snug text-ink">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="text-sm font-medium text-ink">{t.name}</p>
                    <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                      {t.location}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-14 border border-signal/25 bg-signal-soft px-6 py-4 text-sm text-signal">
              <strong className="font-medium">Placeholder reviews.</strong> Replace
              these in <code className="font-mono text-xs">src/lib/site.ts</code> with
              real customer quotes once the Google Business Profile is collecting
              them.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ---------------- Service areas ---------------- */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Where we work"
                title="Based in Boulder. Working statewide."
                intro="From the Front Range to the Western Slope and out across the eastern plains. If you're in Colorado, we'll come look at it."
              />
              <div className="mt-10">
                <ArrowLink href="/service-areas">All service areas</ArrowLink>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
                {featuredCities.map((city) => (
                  <li key={city.slug} className="border-b border-line">
                    <Link
                      href={`/service-areas/${city.slug}`}
                      className="block py-3.5 text-[0.95rem] text-muted transition-colors hover:text-ink"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
