import type { Metadata } from "next";
import CtaBand from "@/components/cta-band";
import { Reveal } from "@/components/motion";
import {
  Button,
  Container,
  Eyebrow,
  PhotoSlot,
  Section,
  SectionHeading,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roof Insurance Claims & Hail Damage Help in Colorado",
  description:
    "How a Colorado roof insurance claim actually works, and how SQ Roofing handles it with you — free documented inspection, adjuster meetings, and supplement filing. Call 303-579-5874.",
  alternates: { canonical: "/insurance-claims" },
};

const steps = [
  {
    step: "01",
    title: "Free documented inspection",
    text: "Before you call your insurer, find out whether you actually have a claim. We get on the roof and photograph everything — hail strikes, granule loss, soft metal damage, and the condition of flashings and vents. You get the report whether or not there's damage, and there's no charge and no obligation either way.",
  },
  {
    step: "02",
    title: "You file the claim",
    text: "If there's real damage, you call your insurance company and open the claim. It has to come from you — the policyholder — not from us. We'll tell you exactly what to say and give you the documentation to reference, but we never file on your behalf and you should be wary of any contractor who offers to.",
  },
  {
    step: "03",
    title: "We meet your adjuster on the roof",
    text: "This is the step that matters most and the one most homeowners skip. Adjusters are covering a lot of roofs in a short window after a storm. When we're up there with them, damage gets found that would otherwise be missed, and the scope of the approved work reflects what the roof actually needs.",
  },
  {
    step: "04",
    title: "Supplements when the scope falls short",
    text: "The first estimate frequently leaves out code-required items — ice and water shield, drip edge, proper ventilation, additional layers discovered during tear-off. We document those and file a supplement with your carrier so they're covered rather than coming out of your pocket.",
  },
  {
    step: "05",
    title: "Work gets done, final payment released",
    text: "We complete the roof, provide the documentation your insurer needs, and they release the recoverable depreciation. You pay your deductible. That's your share, start to finish.",
  },
];

const faqs = [
  {
    q: "Will filing a claim raise my rates?",
    a: "Hail and wind are classified as acts of nature rather than at-fault claims, so a single storm claim generally does not raise an individual policyholder's rate the way an at-fault auto accident would. Carriers do raise rates across an entire region after major storms regardless of whether you personally filed. If you have damage, not filing usually means paying for a roof yourself that your policy already covers.",
  },
  {
    q: "Do I have to pay my deductible?",
    a: "Yes. In Colorado it is illegal for a contractor to pay, waive, rebate, or absorb your insurance deductible, and it's a criminal offense for them to advertise that they will. Any roofer offering to 'eat the deductible' or 'work with you on it' is telling you something important about how they run their business. Your deductible is your only out-of-pocket cost on an approved claim.",
  },
  {
    q: "How long do I have to file?",
    a: "Most Colorado policies give you one year from the date of loss, though some allow two. The practical problem is that hail damage doesn't leak right away — it fails several years later, long after the window has closed. That's why a free inspection in the weeks after a storm is worth doing even when nothing looks wrong from the ground.",
  },
  {
    q: "My claim was denied. Is that final?",
    a: "Not necessarily. Denials often come down to an adjuster who spent ten minutes on a roof during a week when they were assigned a hundred. You can request a re-inspection, and we'll meet the second adjuster with our documentation. We won't promise a reversal, but we'll tell you honestly whether we think the denial was wrong.",
  },
  {
    q: "Do I have to use the contractor my insurance recommends?",
    a: "No. You choose your own contractor in Colorado. Insurer 'preferred' programs exist to control the carrier's costs, and that isn't always the same thing as your interest. Your policy obligates them to pay for a proper repair regardless of who performs it.",
  },
];

export default function InsuranceClaimsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <PhotoSlot
            label="Hail damage close-up, or storm clouds over the Front Range"
            dark
            aspect="h-full"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/50" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl py-24 lg:py-32">
            <Reveal>
              <Eyebrow light>Hail &amp; storm damage</Eyebrow>
              <h1 className="display mt-6 text-h1 text-paper">
                Your claim, handled properly.
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-paper/65">
                Colorado leads the country in hail claims, and most homeowners go
                through the process exactly once. We do it every week. Here is how it
                actually works — and what a good contractor does at each step.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="light">
                  Free Damage Inspection
                  <span aria-hidden="true">&rarr;</span>
                </Button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-3 px-2 py-4 text-paper transition-opacity hover:opacity-75"
                >
                  <span className="eyebrow eyebrow-light">Call</span>
                  <span className="display text-2xl">{site.phone}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why invisible */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Start here"
                title="You almost certainly can't see it from the ground."
              />
            </Reveal>

            <Reveal delay={100} className="lg:col-span-7">
              <div className="space-y-5 text-[1.02rem] leading-[1.75] text-muted">
                <p>
                  Hail doesn't usually punch holes in a roof. It bruises the shingle,
                  knocking loose the mineral granules that shield the asphalt mat
                  underneath from ultraviolet light. From your driveway the roof looks
                  exactly the same as it did the day before the storm.
                </p>
                <p>
                  What's actually happened is that the clock has been reset. The
                  exposed mat starts breaking down under Colorado's very intense sun,
                  and the roof that had eighteen years left now has four or five. The
                  leak shows up long after your claim window has closed, and at that
                  point the replacement is entirely your expense.
                </p>
                <p className="text-ink">
                  That's the whole reason a free post-storm inspection is worth twenty
                  minutes even when everything looks fine. There's no cost and no
                  obligation, and the downside of skipping it is an entire roof.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section tone="bone">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The process"
              title="Five steps from storm to finished roof."
              intro="You're responsible for your deductible and for filing the claim itself. We handle everything in between."
            />
          </Reveal>

          <div className="mt-16 space-y-px border-y border-line bg-line">
            {steps.map((item, i) => (
              <Reveal key={item.step} delay={i * 70}>
                <div className="grid gap-6 bg-bone px-0 py-10 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-2">
                    <span className="display text-5xl text-line-strong">
                      {item.step}
                    </span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="display text-h3 text-ink">{item.title}</h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-[0.98rem] leading-[1.75] text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Deductible warning */}
      <Section tone="paper" className="!py-20">
        <Container>
          <Reveal>
            <div className="border-l-2 border-signal bg-signal-soft/50 px-8 py-10 lg:px-12">
              <Eyebrow className="!text-signal">Know this before you hire anyone</Eyebrow>
              <h2 className="display mt-5 max-w-3xl text-h3 text-ink">
                In Colorado, a contractor who offers to cover your deductible is
                committing a crime.
              </h2>
              <p className="mt-6 max-w-3xl text-[0.98rem] leading-[1.75] text-muted">
                State law prohibits roofing contractors from paying, waiving, or
                rebating an insurance deductible, and from advertising that they will.
                It's insurance fraud, and the homeowner who goes along with it is
                exposed too. If someone makes you that offer, that's your answer about
                everything else they'll tell you.
              </p>
              <p className="mt-5 max-w-3xl text-[0.98rem] leading-[1.75] text-muted">
                Colorado law also gives you the right to cancel a storm-damage roofing
                contract within 72 hours of being notified that your carrier denied the
                claim, and requires the contractor to return your deposit. Any
                reputable roofer will put that in the contract themselves.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="bone">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-4">
              <SectionHeading eyebrow="Common questions" title="What homeowners ask us." />
            </Reveal>

            <div className="lg:col-span-8">
              <dl className="divide-y divide-line-strong border-y border-line-strong">
                {faqs.map((faq, i) => (
                  <Reveal key={faq.q} delay={i * 60}>
                    <div className="py-8">
                      <dt className="display text-h3 text-ink">{faq.q}</dt>
                      <dd className="mt-4 text-[0.98rem] leading-[1.75] text-muted">
                        {faq.a}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="No cost, no obligation"
        title="Think you might have storm damage?"
        intro="We'll inspect the roof, document what's there, and tell you honestly whether it's worth filing. If there's nothing, you've lost twenty minutes."
      />
    </>
  );
}
