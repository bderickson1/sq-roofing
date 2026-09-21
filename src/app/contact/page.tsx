import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { Reveal } from "@/components/motion";
import { Container, Eyebrow, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Roof Estimate & Inspection",
  description:
    "Request a free roof inspection anywhere in Colorado. Call SQ Roofing at 303-579-5874 or send a few details and we'll come take a look — no cost, no obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper pt-20 pb-12 lg:pt-28 lg:pb-16">
        <Container>
          <Reveal>
            <Eyebrow>Free estimate</Eyebrow>
            <h1 className="display mt-6 max-w-3xl text-h1 text-ink">
              Let's take a look at your roof.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              Tell us where the property is and what you're seeing. We'll get on the
              roof, document what's there, and give you a straight answer — including
              when the answer is that it doesn't need work yet.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="paper" className="!pt-4">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              <ContactForm />
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={120} className="lg:col-span-5">
              <div className="space-y-10 lg:sticky lg:top-32">
                <div className="border-t border-ink pt-7">
                  <Eyebrow>Faster: just call</Eyebrow>
                  <a
                    href={site.phoneHref}
                    className="display mt-4 block text-h2 text-ink transition-opacity hover:opacity-70"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                    If you have water coming in right now or a storm just went
                    through, call rather than filling in the form. We prioritize
                    active leaks and can usually tarp the same day.
                  </p>
                </div>

                <div className="border-t border-line pt-7">
                  <Eyebrow>Email</Eyebrow>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-4 block break-all text-[0.98rem] text-ink underline underline-offset-4"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="border-t border-line pt-7">
                  <Eyebrow>Hours</Eyebrow>
                  <p className="mt-4 text-[0.98rem] text-ink">{site.hours}</p>
                  <p className="mt-1 text-[0.95rem] text-muted">
                    Emergency storm response outside of those hours.
                  </p>
                </div>

                <div className="border-t border-line pt-7">
                  <Eyebrow>Where we work</Eyebrow>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                    Based in {site.baseCity}, {site.baseState}, serving the entire
                    state. Front Range work is scheduled directly; Western Slope and
                    mountain jobs are scheduled in blocks, so call and we'll tell you
                    when we're next in your area.
                  </p>
                </div>

                <div className="border-t border-line pt-7">
                  <Eyebrow>What happens next</Eyebrow>
                  <ol className="mt-5 space-y-4">
                    {[
                      "We call you back to set a time that works.",
                      "We inspect the roof and photograph everything.",
                      "You get a written report and a straight answer — free, either way.",
                    ].map((step, i) => (
                      <li key={step} className="flex gap-4">
                        <span className="display text-lg text-line-strong">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.95rem] leading-relaxed text-muted">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
