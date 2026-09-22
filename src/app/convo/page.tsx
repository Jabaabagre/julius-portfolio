import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseHero } from "@/components/case-study/case-hero";
import { CaseBody } from "@/components/case-study/case-body";
import { CaseSection, P } from "@/components/case-study/case-section";
import { DecisionBlock } from "@/components/case-study/decision-block";
import { Callout } from "@/components/case-study/callout";
import { CaseFigure } from "@/components/case-study/case-figure";
import { ScreensGrid } from "@/components/case-study/screens-grid";
import { NextProjectNav } from "@/components/case-study/next-project-nav";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Convo — Julius Abaabagre",
  description:
    "A mobile messaging app designed to WCAG standards, with accessibility built into the main settings list from the first screen.",
  path: "/convo",
});

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "screens", label: "Screens" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function ConvoPage() {
  return (
    <>
      <Header variant="case-study" />
      <main>
        <CaseHero
          title="Convo"
          tagline="A messaging app where accessibility is part of the main settings list, not a menu you have to go looking for."
          imageSrc="/images/convo-brand-b.png"
          imageAlt="Convo — the brand identity panel"
          imageWidth={786}
          imageHeight={1704}
          meta={[
            { label: "My role", value: "Product & UX design" },
            { label: "Product", value: "Mobile messaging" },
            { label: "Constraint", value: "WCAG from the first screen" },
            { label: "Timeline", value: "2025/2026" },
          ]}
        />

        <CaseBody navItems={NAV_ITEMS}>
          <CaseSection id="overview" title="Overview">
            <P>
              Convo is a mobile messaging app designed to WCAG standards.
              Chats, calls, and settings — the ordinary shape of a messenger —
              with the accessibility work done at the level of type, contrast,
              hit targets, and defaults rather than bolted on as an alternate
              mode.
            </P>
          </CaseSection>

          <CaseSection id="problem" title="Problem">
            <P>
              Messaging is where accessibility failures hurt most, because the
              cost of missing a message is social rather than technical. Yet
              in most messengers the accessibility controls sit several layers
              down, under a heading people only find if they already know to
              look.
            </P>
            <P>
              Designing to WCAG as a first-screen constraint changes what you
              can draw. Contrast ratios rule out the low-contrast greys
              messengers lean on; minimum hit targets set the row height; and
              text that must scale without breaking rules out tightly packed
              layouts.
            </P>
          </CaseSection>

          <CaseSection id="screens" title="Screens">
            <ScreensGrid
              screens={[
                {
                  src: "/images/convo-chats.png",
                  alt: "Convo — the chat list with search, unread counts and a new-message action",
                  caption: "Chat list — search, unread counts, and a persistent new-message action",
                  width: 786,
                  height: 1704,
                },
                {
                  src: "/images/convo-conversation.png",
                  alt: "Convo — a conversation thread with sent and received bubbles",
                  caption: "Thread — sent and received distinguished by colour, side, and delivery state together",
                  width: 786,
                  height: 1704,
                },
                {
                  src: "/images/convo-profile.png",
                  alt: "Convo — profile and settings with accessibility toggles",
                  caption: "Settings — large text, dark mode, flash for calls, voice typing, voice over",
                  width: 786,
                  height: 1704,
                },
              ]}
            />
          </CaseSection>

          <CaseSection id="decisions" title="Decisions">
            <DecisionBlock
              title="Accessibility in the main settings list"
              problem="A setting filed under “Accessibility” is a setting most people never open — including people it would help, who don't necessarily think of themselves as needing an accessibility feature."
              decision="Put large text, dark mode, flash for calls, voice typing, and voice over directly in the profile settings, one tap in, each as a plain toggle with a plain name. No submenu, no euphemism, and voice typing on by default."
            />
            <DecisionBlock
              title="Never one signal alone"
              problem="Messengers lean on a single channel for state — a colour for who sent it, a tint for unread, a ring for an incoming call. Each one fails someone."
              decision="Double every signal. Sent messages carry colour, alignment, and a delivery glyph. Unread carries a count badge, not just weight. Calls can flash the torch as well as ring. Nothing important is one channel deep."
            />
            <DecisionBlock
              title="One list pattern, two jobs"
              problem="Contacts and conversations are different lists doing different jobs, but people scan them the same way. Giving each its own layout would mean learning the screen twice."
              decision="One row pattern across both: avatar, name, and the same search field at the top. The contacts list is the chat list with the message line removed — same rhythm, same hit targets, nothing new to learn."
              bordered
              figure={
                <CaseFigure
                  src="/images/convo-talking.png"
                  alt="Contacts list — search at the top, avatar-plus-name rows, captured before the app was renamed to Convo"
                  caption="Contacts — the chat list with the message line removed. Captured before the rename, so the header still reads Talking."
                  width={786}
                  height={1704}
                  maxWidth={300}
                  light
                />
              }
            />
          </CaseSection>

          <CaseSection id="outcome" title="Outcome">
            <Callout title="Impact">
              Every text and control pairing clears WCAG AA contrast against
              the app&apos;s blue, including the sent-message bubble and the
              timestamps inside it. In testing, people found large text and
              dark mode without being told where to look — which was the
              point of moving them out of a submenu.
            </Callout>
          </CaseSection>

          <CaseSection id="reflection" title="Reflection">
            <P>
              Treating WCAG as a constraint rather than a checklist made the
              design simpler, not harder. Contrast minimums and hit-target
              sizes removed a whole class of decisions early, and what was
              left was mostly about what to leave out.
            </P>
            <P>
              What I would do differently is get the screens in front of
              people who actually use assistive technology, rather than
              designing to the standard and checking my own work against it.
              WCAG tells you a contrast ratio passes. It does not tell you
              whether the delivery glyph is legible at arm&apos;s length, or
              whether flash-for-calls is useful or just alarming in a dark
              room. Those answers only come from the people concerned.
            </P>
            <P>
              What I learned is that the hardest part of accessible design is
              not the visual rules, which are largely arithmetic, but the
              naming. Deciding to put Large Text and Voice Over in the same
              list as everything else — with plain labels and no
              Accessibility heading above them — took longer to settle than
              every contrast decision combined, and it is the choice most
              likely to change who actually turns them on.
            </P>
          </CaseSection>

          <NextProjectNav
            text="Next: Vicinity, a neighbourhood bulletin board."
            nextHref="/vicinity"
            nextLabel="Read the Vicinity case study"
          />
        </CaseBody>
      </main>
      <Footer />
    </>
  );
}
