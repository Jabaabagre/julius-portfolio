import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseHero } from "@/components/case-study/case-hero";
import { CaseBody } from "@/components/case-study/case-body";
import { CaseSection, P } from "@/components/case-study/case-section";
import { DecisionBlock } from "@/components/case-study/decision-block";
import { Callout } from "@/components/case-study/callout";
import { CaseFigure } from "@/components/case-study/case-figure";
import { NextProjectNav } from "@/components/case-study/next-project-nav";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Vicinity — Julius Abaabagre",
  description:
    "A neighbourhood bulletin board where four kinds of post share one feed. Visual design, prototyping, and design system for a two-designer team.",
  path: "/vicinity",
});

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "users", label: "Users & role" },
  { id: "process", label: "Process" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function VicinityPage() {
  return (
    <>
      <Header variant="case-study" />
      <main>
        <CaseHero
          title="Vicinity"
          tagline="A neighbourhood bulletin board where four kinds of post share one feed."
          imageSrc="/images/vicinity-post-detail.png"
          imageAlt="Vicinity — post detail with comments, shown on a phone"
          imageWidth={2880}
          imageHeight={2160}
          meta={[
            { label: "My role", value: "Visual design, prototyping & design system" },
            { label: "Product", value: "Community board, mobile" },
            { label: "Roles in product", value: "Admin and user" },
            { label: "Timeline", value: "2025/2026" },
          ]}
        />

        <CaseBody navItems={NAV_ITEMS}>
          <CaseSection id="overview" title="Overview">
            <P>
              Vicinity is a neighbourhood bulletin board — a place to post local
              news, events, discussions, and alerts, and to talk about them in
              the comments. Two roles use it: residents, who create and comment
              on their own posts, and admins, who moderate everything and see
              the full picture of what the community is doing.
            </P>
            <P>
              The MVP covered registration and login, full create-edit-delete
              for posts across the four categories, comments, search and
              filtering by category, date, and keyword, and an analytics view
              of community engagement.
            </P>
          </CaseSection>

          <CaseSection id="problem" title="Problem">
            <P>
              Most neighbourhoods have no single place for local information.
              It scatters across group chats, printed notices, and word of
              mouth, so the people who most need a message are the ones who
              miss it.
            </P>
            <P>
              Centralising it creates a second problem, though. A burst water
              main and a bake sale are not the same kind of message, but in a
              single chronological feed they arrive looking identical. The
              design question was how to let four categories share one surface
              while still reading at different volumes.
            </P>
          </CaseSection>

          <CaseSection id="users" title="Users & my role">
            <Reveal as="div" className="mt-[1.4rem] grid">
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-4 border-t border-line py-4">
                <div className="font-display text-base font-semibold text-fg">Residents</div>
                <div className="text-[.98rem] leading-[1.6] text-muted">
                  Catch up quickly, post something local, and follow the
                  replies without wading through everything else.
                </div>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-4 border-t border-b border-line py-4">
                <div className="font-display text-base font-semibold text-fg">Admins</div>
                <div className="text-[.98rem] leading-[1.6] text-muted">
                  Moderate posts and users, and read engagement well enough to
                  know what the neighbourhood actually responds to.
                </div>
              </div>
            </Reveal>
            <P>
              I worked as the visual design and prototyping lead on a
              two-designer team. That meant the mid-fidelity wireframes, the
              visual language, the component library, the responsive
              behaviour, and the usability reviews — with research, personas,
              and the information architecture owned alongside me rather than
              by me.
            </P>
            <Callout title="What the research found">
              Two findings changed the design. People scanned for relevance
              before they read anything, so the post type had to be legible
              before the headline; and alerts were the reason most people
              opened the app at all, which moved them out of the general feed
              and into their own tier.
            </Callout>
          </CaseSection>

          <CaseSection id="process" title="Process">
            <P>
              Four days, with the visual work deliberately last. Research and
              personas came first, then low-fidelity wireframes for every MVP
              screen, then mid-fidelity work to validate the feed and post
              detail before anything got polished.
            </P>
            <Reveal as="div" className="mt-[1.6rem] grid gap-[1.2rem]">
              {[
                {
                  title: "Research & planning",
                  body: "Interviews, a survey, and competitive analysis, resolved into personas, journey maps, and a site map.",
                },
                {
                  title: "Wireframes & flows",
                  body: "Low-fidelity screens for login, registration, feed, post detail, create and edit, and analytics — enough to argue about structure before style.",
                },
                {
                  title: "Component library",
                  body: "Colour, type, and iconography fixed once, then built into reusable components so the four categories couldn't drift apart.",
                },
                {
                  title: "Usability review",
                  body: "Sessions against the mid-fidelity prototype, with findings documented and fed back before the final pass.",
                },
              ].map((s) => (
                <div key={s.title}>
                  <div className="font-display text-base font-semibold text-fg">{s.title}</div>
                  <p className="mt-[.4rem] text-pretty text-[.98rem] leading-[1.65] text-muted">
                    {s.body}
                  </p>
                </div>
              ))}
            </Reveal>
          </CaseSection>

          <CaseSection id="decisions" title="Decisions">
            <P>Three decisions carried the design. Each one is about hierarchy — what the eye should reach first.</P>

            <DecisionBlock
              title="One card, four volumes"
              problem="News, events, discussions, and alerts all needed to be scannable in one feed, but four bespoke card layouts would have made the feed feel like four apps."
              decision="One card structure — author, image, category tag, headline, excerpt, reactions — with the category tag carrying the difference. The layout stays constant so the eye learns it once; only the tag and its colour change."
              figure={
                <CaseFigure
                  src="/images/vicinity-feed.png"
                  alt="Vicinity — the community feed with category filters across the top"
                  caption="The feed with category filters across the top — one card structure, the tag doing the sorting"
                  width={2000}
                  height={1500}
                />
              }
            />

            <DecisionBlock
              title="Filters where the thumb already is"
              problem="Filtering by category, date, and keyword is three controls. Hidden behind an icon they go unused; laid out in full they push the feed off the screen."
              decision="The category filter sits permanently under the header as a scrollable tab row, because it's the one people reach for constantly. Search and date filtering live on the dedicated search screen, one tap away in the bottom bar. Posting keeps the centre position."
            />

            <DecisionBlock
              title="Settings that name their own consequences"
              problem="On a platform where neighbours can see what you post, privacy and notification settings are not housekeeping — they're the reason someone decides to join in or stay quiet."
              decision="Put notification and privacy settings at the top of the profile, ahead of guidelines and support, each on its own labelled row. Sign out sits apart at the bottom in red, so the destructive action is never adjacent to a routine one."
              bordered
              figure={
                <CaseFigure
                  src="/images/vicinity-profile.png"
                  alt="Vicinity — the profile screen with notification, privacy, guidelines and support settings"
                  caption="Profile and settings — controls in order of how much they matter to the person using them"
                  width={2000}
                  height={1500}
                />
              }
            />
          </CaseSection>

          <CaseSection id="outcome" title="Outcome">
            <P>
              The team shipped a full mid-fidelity prototype and a component
              library covering every MVP screen, responsive across desktop,
              tablet, and mobile.
            </P>
            <Callout title="What usability testing showed">
              Testing showed the four post types were distinguishable at a
              glance, and the create flow was completed without prompting.
              What needed changing was the filter row — people missed that it
              was interactive, so the selected state was strengthened and the
              chips given more contrast.
            </Callout>
          </CaseSection>

          <CaseSection id="reflection" title="Reflection">
            <P>
              Fixing the card structure early was what made the rest fast.
              Once one card had to serve all four categories, most later
              questions became questions about the tag and the hierarchy
              inside a single component rather than arguments about new
              layouts.
            </P>
            <P>
              What I would do differently is test the alert category properly.
              Everything else in the feed is something you read when you
              happen to open the app; an alert is something you need to reach
              someone who is not looking. We designed it as a tag on the
              standard card, which is consistent, but I never validated that
              consistency is the right answer for the one category where
              interrupting is the point.
            </P>
            <P>
              What I learned is how much a two-designer split depends on the
              handover between research and visual work. Taking mid-fidelity
              from someone else&apos;s personas and wireframes meant I
              inherited decisions I had not argued for, and the useful move
              was to ask what each wireframe was trying to prove rather than
              treating it as a layout to skin. That question changed the feed
              more than any visual choice I made afterwards.
            </P>
          </CaseSection>

          <NextProjectNav
            text="Next: Convo, a messaging app built to WCAG standards."
            nextHref="/convo"
            nextLabel="Read the Convo case study"
          />
        </CaseBody>
      </main>
      <Footer />
    </>
  );
}
