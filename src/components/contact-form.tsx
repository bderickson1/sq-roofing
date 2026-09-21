"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

const FORM_NAME = "estimate-request";

const inputClass =
  "w-full border border-line-strong bg-paper px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-muted-light transition-colors focus:border-ink focus:outline-none";

const labelClass =
  "block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("form-name", FORM_NAME);

    try {
      // Netlify Forms picks up the POST at the static form definition in
      // /public/__forms.html. This is the documented pattern for Next.js
      // App Router, where the React markup is never in the built HTML.
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) throw new Error(`Form POST failed: ${response.status}`);
      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-ink bg-bone p-10 lg:p-14">
        <p className="eyebrow">Request received</p>
        <h2 className="display mt-5 text-h2 text-ink">Thanks — we've got it.</h2>
        <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted">
          We'll be in touch shortly to schedule your free inspection. If it's urgent —
          an active leak or fresh storm damage — call us directly rather than waiting
          on email.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />

      {/* Honeypot — hidden from people, irresistible to bots */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name <span className="text-signal">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={`${inputClass} mt-3`}
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone <span className="text-signal">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={`${inputClass} mt-3`}
            placeholder="303-555-0100"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={`${inputClass} mt-3`}
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="city">
            City / town <span className="text-signal">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            className={`${inputClass} mt-3`}
            placeholder="Boulder"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="service">
            What do you need?
          </label>
          <select id="service" name="service" className={`${inputClass} mt-3`} defaultValue="">
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Tell us what&apos;s going on
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} mt-3 resize-y`}
          placeholder="Leak in the upstairs ceiling after last week's storm, roof is about 18 years old..."
        />
      </div>

      <fieldset>
        <legend className={labelClass}>Is this urgent?</legend>
        <div className="mt-3 flex flex-wrap gap-6">
          {["No — scheduling ahead", "Yes — active leak or storm damage"].map((option) => (
            <label key={option} className="flex items-center gap-2.5 text-[0.9rem] text-ink">
              <input
                type="radio"
                name="urgency"
                value={option}
                defaultChecked={option.startsWith("No")}
                className="h-4 w-4 accent-[#0a0a0a]"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" ? (
        <p className="border border-signal/30 bg-signal-soft px-4 py-3 text-sm text-signal">
          Something went wrong sending that. Please call us instead — we don&apos;t
          want you waiting on a form that didn&apos;t go through.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2.5 bg-ink px-8 py-5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-paper transition-all duration-300 hover:gap-4 hover:bg-ink-soft disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Request Free Inspection"}
        <span aria-hidden="true">&rarr;</span>
      </button>

      <p className="text-xs leading-relaxed text-muted">
        We&apos;ll only use your details to get back to you about this request. No
        lists, no sharing, no follow-up spam.
      </p>
    </form>
  );
}

export default ContactForm;
