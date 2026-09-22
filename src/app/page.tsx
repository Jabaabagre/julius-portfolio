import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { NodeMotif } from "@/components/node-motif";
import { HeroTexture } from "@/components/hero-texture";
import { ProjectRow } from "@/components/project-row";
import { HabitItem } from "@/components/habit-item";
import { ContactForm } from "@/components/contact-form";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Julius Abaabagre — Product & UX Design",
  description:
    "Product & UX designer turning complicated systems — feeds, permissions, states, edge cases — into experiences people can actually understand.",
  path: "/",
});

const HABITS = [
  { title: "Understand the system", body: "Map how it works before any UI." },
  { title: "Find the real problem", body: "Operational pain is usually structure, not screens." },
  { title: "Explore before committing", body: "Weigh the cost of each option, including the edges." },
  {
    title: "Design for the edge cases",
    body: "Empty, error, permission and render states are where trust is won.",
  },
  {
    title: "Work with the team",
    body: "Design with the grain of what's buildable; keep the dev and stakeholder loop tight.",
  },
  { title: "Refine through feedback", body: "The first version is a hypothesis; real use shapes it." },
];

const EXPERIENCE = [
  {
    role: "Product & UX Designer",
    org: "AmaliTech, Ghana — National Service",
    period: "2025/2026",
  },
  {
    role: "Public Relations Officer",
    org: "Pax Romana — UTAS Local",
    period: "2023/2024",
  },
  {
    role: "Publicity Chairperson",
    org: "National Union of Ghanaian Students (NUGS) — UTAS Local",
    period: "2024/2025",
  },
];

const SKILL_GROUPS = [
  {
    title: "Product & UX",
    skills: [
      "Product thinking",
      "UX strategy",
      "User flows",
      "Information architecture",
      "Interaction design",
      "Usability",
    ],
  },
  {
    title: "UI & Visual",
    skills: [
      "Interface design",
      "Visual hierarchy",
      "Design systems",
      "Responsive design",
      "Prototyping",
      "Motion",
    ],
    note: "Tools: Figma, plus a frontend background in HTML/CSS/JS.",
  },
  {
    title: "Collaboration",
    skills: [
      "Developer collaboration",
      "Design handoff",
      "Design QA",
      "Stakeholder communication",
      "Documentation",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "“Julius asks the question everyone else skipped. He came back with the four post types mapped out before anyone had asked for it, and the build got noticeably calmer from there.”",
    name: "Product lead",
    project: "Vicinity",
  },
  {
    quote:
      "“He hands over work you can actually build. States, empty cases, edge conditions — they were already in the file, so we spent our time shipping instead of guessing.”",
    name: "Frontend engineer",
    project: "Let's Eat",
  },
  {
    quote:
      "“The accessibility thinking was not an afterthought bolted on at review. It shaped the structure of the app, which is a much harder thing to do and a much better result.”",
    name: "Design mentor",
    project: "Convo",
  },
];

export default function Home() {
  return (
    <>
      <Header variant="home" />

      <main id="top" className="relative z-[1]">
        <section className="relative mx-auto grid min-h-dvh max-w-[76rem] items-center px-[clamp(1.4rem,5vw,4rem)]">
          <HeroTexture />
          <div className="relative z-[1] grid grid-cols-1 items-center gap-[clamp(2rem,5vw,4rem)] pt-[6rem] pb-[2rem] max-[900px]:grid-cols-1 min-[901px]:pt-[8rem] min-[901px]:grid-cols-[minmax(0,1.05fr)_minmax(0,.75fr)]">
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
              <div className="mt-[3.5rem] flex items-center gap-3">
                <span className="h-[34px] w-px bg-gradient-to-b from-gold to-transparent" />
                <span className="font-display text-[.72rem] font-medium tracking-[.16em] text-dim uppercase">
                  Scroll
                </span>
              </div>
            </div>
            <NodeMotif />
          </div>
        </section>

        <section
          id="work"
          className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[clamp(5rem,11vw,10rem)]"
        >
          <Reveal>
            <div className="font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
              Selected work
            </div>
            <h2 className="mt-4 max-w-[44ch] text-pretty font-display text-[clamp(1.8rem,3vw+0.8rem,2.8rem)] leading-[1.1] font-semibold tracking-[-.025em] text-fg">
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

        <section
          id="about"
          className="mt-[clamp(5rem,11vw,10rem)] border-y border-line bg-bg-warm"
        >
          <div className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] py-[clamp(4rem,9vw,8rem)]">
            <Reveal
              className="grid items-start gap-[clamp(2rem,5vw,4.5rem)]"
              as="div"
            >
              <div
                className="grid gap-[clamp(2rem,5vw,4.5rem)]"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
              >
                <div>
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      aspectRatio: "4 / 5",
                      background:
                        "radial-gradient(62% 52% at 50% 34%, rgba(221,169,74,.42) 0%, rgba(221,169,74,.12) 46%, rgba(24,23,28,0) 74%), #1E1C22",
                    }}
                  >
                    <Image
                      src="/images/julius-portrait.png"
                      alt="Julius Abaabagre"
                      fill
                      sizes="(min-width: 768px) 40vw, 90vw"
                      className="object-cover object-[center_bottom]"
                      style={{ transform: "scale(1.1) translateY(5%)", transformOrigin: "center bottom" }}
                    />
                  </div>
                  <div className="mt-[1.1rem] font-display text-[1.05rem] font-semibold tracking-[-.01em] text-fg">
                    Julius Abaabagre
                  </div>
                  <div className="mt-[.3rem] font-display text-[.82rem] font-medium tracking-[.12em] text-dim uppercase">
                    Product &amp; UX Designer
                  </div>
                </div>
                <div className="max-w-[66ch]">
                  <div className="font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
                    About
                  </div>
                  <p className="mt-[1.2rem] text-pretty font-accent text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.28] font-normal text-fg italic">
                    Hi — I&apos;m Julius. I like making complicated things easier to use.
                  </p>
                  <p className="mt-8 text-pretty text-[clamp(1rem,0.35vw+0.95rem,1.12rem)] leading-[1.62] text-muted">
                    My route into design wasn&apos;t a straight line, and I think
                    that&apos;s the point. I studied computer science and learned
                    frontend development first, so I&apos;ve always been close to how
                    software actually gets built. Then came graphic design — and
                    that&apos;s where I learned to really see: composition, type,
                    hierarchy, and the craft of making something read clearly.
                  </p>
                  <p className="mt-[1.4rem] text-pretty text-[clamp(1rem,0.35vw+0.95rem,1.12rem)] leading-[1.62] text-muted">
                    That graphic-design eye is a big part of why my UI/UX work has
                    grown the way it has — a lot of what I lean on in product design,
                    I first learned laying out a page. Pulling those threads
                    together gives me an engineer&apos;s sense of what&apos;s
                    buildable, a designer&apos;s eye for craft, and an instinct to
                    find the structure underneath — which tends to mean{" "}
                    <strong className="font-semibold text-fg">
                      calmer handoffs and interfaces that respect the systems
                      beneath them
                    </strong>
                    .
                  </p>
                  <p className="mt-[1.4rem] text-pretty text-[clamp(1rem,0.35vw+0.95rem,1.12rem)] leading-[1.62] text-muted">
                    What I&apos;m drawn to is the complex, unglamorous end of
                    product design — internal tools and operational software,
                    where clarity quietly saves people time all day. My instinct
                    is to reduce: to find the structure that makes a complicated
                    thing feel obvious, and to sweat the states and edge cases
                    most people skip.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="how"
          className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[clamp(5rem,11vw,10rem)]"
        >
          <Reveal>
            <div className="font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
              How I work
            </div>
            <h2 className="mt-4 max-w-[44ch] text-pretty font-display text-[clamp(1.8rem,3vw+0.8rem,2.8rem)] leading-[1.1] font-semibold tracking-[-.025em] text-fg">
              Six habits I lean on when a product gets complicated.
            </h2>
          </Reveal>
          <div
            className="mt-[clamp(3rem,6vw,4.5rem)] grid gap-[clamp(2rem,4vw,3.5rem)_clamp(2rem,4vw,3rem)]"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            {HABITS.map((habit, i) => (
              <HabitItem key={habit.title} n={i + 1} title={habit.title} body={habit.body} />
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[clamp(5rem,11vw,10rem)]"
        >
          <Reveal>
            <div className="font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
              Experience
            </div>
          </Reveal>
          <Reveal as="div" className="mt-[clamp(2rem,4vw,3rem)] grid">
            {EXPERIENCE.map((job, i) => (
              <div
                key={job.role}
                className={`border-t border-line py-[clamp(1.8rem,3vw,2.4rem)] ${
                  i === EXPERIENCE.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className="grid items-baseline gap-[.6rem_clamp(1.5rem,3vw,2.5rem)]"
                  style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
                >
                  <h3 className="font-display text-[1.35rem] font-semibold tracking-[-.02em] text-fg">
                    {job.role}
                  </h3>
                  <div className="text-base text-muted">{job.org}</div>
                  <div className="text-[.9rem] text-dim">{job.period}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[clamp(5rem,11vw,10rem)]"
        >
          <Reveal>
            <div className="font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
              Skills
            </div>
          </Reveal>
          <Reveal
            as="div"
            className="mt-[clamp(2rem,4vw,3rem)] grid gap-[clamp(2rem,4vw,3rem)]"
          >
            <div
              className="grid gap-[clamp(2rem,4vw,3rem)]"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
            >
              {SKILL_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-[1.1rem] font-display text-[1.2rem] font-semibold tracking-[-.02em] text-fg">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-[.55rem]">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-line px-[.8rem] py-[.35rem] text-[.9rem] text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {group.note && (
                    <p className="mt-4 text-[.85rem] leading-[1.6] text-dim">{group.note}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          id="words"
          className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[clamp(5rem,11vw,10rem)]"
        >
          <Reveal>
            <div className="font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
              In their words
            </div>
            <h2 className="mt-4 max-w-[44ch] text-pretty font-display text-[clamp(1.8rem,3vw+0.8rem,2.8rem)] leading-[1.1] font-semibold tracking-[-.025em] text-fg">
              What it&apos;s like to work with me.
            </h2>
          </Reveal>
          <div
            className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-[clamp(2rem,4vw,3.2rem)]"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            {TESTIMONIALS.map((t) => (
              <Reveal
                key={t.name}
                as="figure"
                className="!m-0 border-t border-line pt-[clamp(1.6rem,3vw,2.2rem)]"
              >
                <blockquote className="text-pretty font-accent text-[clamp(1.1rem,1.4vw,1.32rem)] leading-[1.42] text-fg italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-[1.2rem] font-display text-[.88rem] text-fg">
                  {t.name}
                  <span className="mt-[.2rem] block text-[.82rem] text-dim">{t.project}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <p className="mt-[clamp(2rem,4vw,3rem)] text-[.82rem] text-dim">
            Placeholder attributions — swap in real names, roles, and organisations before this goes live.
          </p>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[clamp(5rem,11vw,10rem)] pb-[clamp(4rem,8vw,7rem)]"
        >
          <Reveal>
            <h2 className="max-w-[22ch] text-balance font-display text-[clamp(2.2rem,5vw+0.4rem,4.4rem)] leading-[1.04] font-bold tracking-[-.03em] text-fg">
              Have a complex product that needs to feel <span className="text-gold">simple</span>?
            </h2>
          </Reveal>
          <Reveal className="mt-[1.8rem]">
            <p className="max-w-[46ch] text-[clamp(1rem,0.35vw+0.95rem,1.12rem)] leading-[1.62] text-muted">
              That&apos;s the work I like most. Tell me what you&apos;re building.
            </p>
          </Reveal>
          <Reveal className="mt-[2.6rem] flex flex-wrap gap-[.8rem_2rem]" as="div">
            <a
              href="mailto:jabaabagre@gmail.com"
              className="border-b border-[rgba(221,169,74,.34)] pb-[.2rem] font-display text-base font-semibold text-gold"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/julius-abaabagre-398141299/"
              target="_blank"
              rel="noopener"
              className="border-b border-line-2 pb-[.2rem] font-display text-base font-medium text-fg transition-colors hover:border-gold hover:text-gold"
            >
              LinkedIn
            </a>
          </Reveal>

          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
