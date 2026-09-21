import { Button, Container, Eyebrow } from "./ui";
import { site } from "@/lib/site";

export function CtaBand({
  eyebrow = "Free, no-obligation inspection",
  title = "Let's take a look at your roof.",
  intro = "We'll get on the roof, document what we find, and give you a straight answer. If it doesn't need work, we'll tell you that too.",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <Container>
        <div className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <Eyebrow light>{eyebrow}</Eyebrow>
            <h2 className="display mt-5 text-h2 text-paper">{title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/60">{intro}</p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Button href="/contact" variant="light" className="justify-center sm:flex-1">
                Request Free Inspection
                <span aria-hidden="true">&rarr;</span>
              </Button>
              <a
                href={site.phoneHref}
                className="group flex flex-col items-center justify-center border border-paper/15 px-7 py-4 text-center transition-colors hover:border-paper/40 sm:flex-1"
              >
                <span className="eyebrow eyebrow-light">Or call us directly</span>
                <span className="display mt-1.5 text-2xl text-paper">{site.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CtaBand;
