import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { NodeMotif } from "@/components/node-motif";
import { ProjectRow } from "@/components/project-row";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Julius Abaabagre — Product & UX Design",
  description:
    "Product & UX designer turning complicated systems — feeds, permissions, states, edge cases — into experiences people can actually understand.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header variant="home" />

      <main id="top" className="relative z-[1]">
        <section className="mx-auto grid min-h-screen max-w-[76rem] items-center px-[clamp(1.4rem,5vw,4rem)]">
          <div className="grid grid-cols-1 items-center gap-[clamp(2rem,5vw,4rem)] pt-[8rem] pb-[2rem] max-[900px]:grid-cols-1 min-[901px]:grid-cols-[minmax(0,1.05fr)_minmax(0,.75fr)]">
            <div>
              <div className="flex animate-[om-rise_.8s_cubic-bezier(.2,.7,.2,1)_both] items-center gap-[.6rem]">
                <span className="h-[7px] w-[7px] rounded-full bg-gold shadow-[0_0_12px_rgba(221,169,74,.9)]" />
                <span className="font-display text-[.8rem] font-semibold tracking-[.12em] text-muted uppercase">
                  Product &amp; UX Designer
                </span>
              </div>
              <h1 className="mt-[1.6rem] animate-[om-rise_.8s_cubic-bezier(.2,.7,.2,1)_.08s_both] text-balance font-display text-[clamp(2.9rem,7vw+0.5rem,7rem)] leading-[.98] font-bold tracking-[-.03em] text-fg">
                I make complicated products feel <span className="text-gold">clear</span>.
              </h1>
              <p className="mt-[1.8rem] max-w-[40ch] animate-[om-rise_.8s_cubic-bezier(.2,.7,.2,1)_.16s_both] text-pretty text-[clamp(1rem,0.35vw+0.95rem,1.12rem)] leading-[1.62] text-muted">
                Feeds, permissions, states, edge cases; I turn deep operational
                complexity into experiences people can actually understand.
                Currently designing product and UX at AmaliTech.
              </p>
              <div className="mt-[2.4rem] flex animate-[om-rise_.8s_cubic-bezier(.2,.7,.2,1)_.24s_both] flex-wrap items-center gap-[1.4rem]">
                <Link
                  href="#work"
                  className="rounded-[11px] bg-gold px-[1.5rem] py-[.85rem] font-display text-[.95rem] font-semibold text-bg transition-colors duration-150 hover:bg-gold-deep"
                >
                  View selected work
                </Link>
                <Link
                  href="#about"
                  className="border-b border-line-2 pb-[.2rem] font-display text-[.95rem] font-medium text-fg transition-colors duration-150 hover:border-gold hover:text-gold"
                >
                  About me
                </Link>
              </div>
            </div>
            <NodeMotif />
          </div>
        </section>

        <div className="mx-auto flex items-center gap-3 px-[clamp(1.4rem,5vw,4rem)] pb-6">
          <span className="h-[34px] w-px bg-gradient-to-b from-gold to-transparent" />
          <span className="font-display text-[.72rem] font-medium tracking-[.16em] text-dim uppercase">
            Scroll
          </span>
        </div>

        <section
          id="work"
          className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[clamp(5rem,11vw,10rem)]"
        >
          <Reveal className="max-w-[44ch]">
            <div className="font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
              Selected work
            </div>
            <h2 className="mt-4 text-pretty font-display text-[clamp(1.8rem,3vw+0.8rem,2.8rem)] leading-[1.1] font-semibold tracking-[-.025em] text-fg">
              Fewer, deeper projects — each proving a different strength.
            </h2>
          </Reveal>

          <ProjectRow
            href="/vicinity"
            title="Vicinity"
            description="A neighbourhood bulletin board for local news, events, discussions, and alerts — four kinds of post that all had to read clearly in one feed."
            imageSrc="/images/vicinity-feed.png"
            imageAlt="Vicinity — the community feed, filtered by category"
            imageWidth={2000}
            imageHeight={1500}
            details={[
              {
                label: "Core challenge",
                value:
                  "A single feed carrying news, events, discussions, and alerts — each needing different urgency without four different layouts.",
              },
              {
                label: "My contribution",
                value:
                  "Visual design and prototyping: the design language, the component library, and the responsive behaviour across screen sizes.",
              },
              {
                label: "Approach",
                value:
                  "Research and personas first, then low- and mid-fidelity wireframes to validate the feed, post detail, and create flows before any polish.",
              },
              {
                label: "Outcome",
                value:
                  "In testing, people could tell the four post types apart at a glance and completed the create-post flow unprompted.",
              },
            ]}
            meta="Visual design, prototyping & design system · Mobile · 2025/2026"
          />

          <ProjectRow
            href="/convo"
            title="Convo"
            description="A mobile messaging app built to WCAG standards, where accessibility sits in the main settings list rather than buried three screens down."
            imageSrc="/images/convo-hero-mockup.png"
            imageAlt="Convo — the chat list on a phone"
            imageWidth={4096}
            imageHeight={3072}
            details={[
              {
                label: "Core challenge",
                value:
                  "Accessibility features that exist but nobody finds — buried under submenus, so the people who need them never switch them on.",
              },
              {
                label: "Approach",
                value:
                  "Promote the controls to the top of settings and give each one a plain-language label, so the setting reads as an option rather than a preference file.",
              },
              {
                label: "Outcome",
                value:
                  "Large text, dark mode, flash for calls, and voice typing all sit one tap from the profile screen, and every state passes WCAG AA contrast against the app's blue.",
              },
            ]}
            meta="Product & UX · Accessibility · 2025/2026"
          />

          <ProjectRow
            href="/lets-eat"
            title="Let's Eat"
            description="A food ordering app where the whole decision — dish, rating, price, and wait — fits in one row, so ordering takes a scroll rather than a sequence of screens."
            imageSrc="/images/letseat-home.png"
            imageAlt="Let's Eat — the home screen with promotions and the order list"
            imageWidth={2000}
            imageHeight={1500}
            details={[
              {
                label: "Core challenge",
                value:
                  "Four facts per dish — rating, price, prep time, and a way to save it — without the list turning into a wall.",
              },
              {
                label: "Approach",
                value:
                  "One row per dish: photo left, name and facts stacked in the middle, the commit action held to the right where the thumb lands.",
              },
              {
                label: "Outcome",
                value:
                  "Browsing to ordering collapsed into a single screen, and the same dish row held up unchanged across search, favourites, and promotions.",
              },
            ]}
            meta="Product & UX · Mobile commerce · 2025/2026"
          />
        </section>

        <section id="about" className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[clamp(5rem,11vw,10rem)]" />
      </main>

      <Footer />
    </>
  );
}
