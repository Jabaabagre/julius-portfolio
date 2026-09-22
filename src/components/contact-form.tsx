"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "jabaabagre@gmail.com";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Project inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[clamp(3rem,6vw,5rem)] grid max-w-[46rem] gap-[1.6rem] border-t border-line pt-[clamp(2.5rem,5vw,3.5rem)]"
    >
      <div className="font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
        Or send a note
      </div>
      <div className="grid grid-cols-1 gap-[1.6rem] sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-display text-[.82rem] font-medium text-muted">Your name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className="rounded-lg border border-line-2 bg-white/3 px-[.9rem] py-[.8rem] font-display text-base text-fg outline-none transition-colors focus:border-gold"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-display text-[.82rem] font-medium text-muted">Your email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className="rounded-lg border border-line-2 bg-white/3 px-[.9rem] py-[.8rem] font-display text-base text-fg outline-none transition-colors focus:border-gold"
          />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="font-display text-[.82rem] font-medium text-muted">
          What you&apos;re building
        </span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="A sentence or two is plenty."
          className="resize-y rounded-lg border border-line-2 bg-white/3 px-[.9rem] py-[.8rem] font-display text-base leading-relaxed text-fg outline-none transition-colors focus:border-gold"
        />
      </label>
      <div className="flex flex-wrap items-center gap-[1rem_1.6rem]">
        <button
          type="submit"
          className="min-h-12 rounded-full bg-gold px-[1.6rem] py-[.85rem] font-display text-base font-semibold text-bg transition-colors hover:bg-gold-light"
        >
          Send message
        </button>
        {sent && (
          <span className="text-[.9rem] text-muted">
            Opening your email client…
          </span>
        )}
      </div>
    </form>
  );
}
