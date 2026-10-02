"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const ENDPOINT = "https://formsubmit.co/ajax/jabaabagre@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _honey: data.get("_honey"),
          _subject: `Portfolio message from ${String(data.get("name")).replace(/[\r\n]+/g, " ")}`,
          _replyto: data.get("email"),
          _template: "table",
          _captcha: "false",
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || String(result.success) === "false") {
        setError("Couldn't send your message. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setError("Couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[clamp(3rem,6vw,5rem)] grid max-w-[46rem] gap-[1.6rem] border-t border-line pt-[clamp(2.5rem,5vw,3.5rem)]"
    >
      <div className="font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
        Or send a note
      </div>
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="grid grid-cols-1 gap-[1.6rem] sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-display text-[.82rem] font-medium text-muted">Your name</span>
          <input
            name="name"
            type="text"
            required
            maxLength={120}
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
            maxLength={200}
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
          maxLength={5000}
          placeholder="A sentence or two is plenty."
          className="resize-y rounded-lg border border-line-2 bg-white/3 px-[.9rem] py-[.8rem] font-display text-base leading-relaxed text-fg outline-none transition-colors focus:border-gold"
        />
      </label>
      <div className="flex flex-wrap items-center gap-[1rem_1.6rem]">
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-12 rounded-full bg-gold px-[1.6rem] py-[.85rem] font-display text-base font-semibold text-bg transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className="text-[.9rem] text-muted">
          {status === "sent" && "Your message has been sent. Thank you — I'll get back to you soon."}
          {status === "error" && <span className="text-[#e5877d]">{error}</span>}
        </p>
      </div>
    </form>
  );
}
