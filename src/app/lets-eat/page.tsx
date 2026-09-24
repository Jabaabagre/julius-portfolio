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
  title: "Let's Eat — Julius Abaabagre",
  description:
    "A food ordering app for the Ghanaian market where the whole decision — dish, rating, price, and wait — fits in one row.",
  path: "/lets-eat",
});

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function LetsEatPage() {
  return (
    <>
      <Header variant="case-study" />
      <main>
        <CaseHero
          title="Let's Eat"
          tagline="A food ordering app where the whole decision fits in one row."
          imageSrc="/images/letseat-home.png"
          imageAlt="Let's Eat — the home screen on a phone"
          imageWidth={2000}
          imageHeight={1500}
          meta={[
            { label: "My role", value: "Product & UX design" },
            { label: "Product", value: "Food ordering, mobile" },
            { label: "Market", value: "Ghana, priced in cedis" },
            { label: "Timeline", value: "2025/2026" },
          ]}
        />

        <CaseBody navItems={NAV_ITEMS}>
          <CaseSection id="overview" title="Overview">
            <P>
              Let&apos;s Eat is a food ordering app for the Ghanaian market —
              browse what&apos;s available, add dishes to an order, and check
              out. Three surfaces carry it: a home feed with the current
              promotion, a search screen with category filters, and a profile
              holding orders, favourites, addresses, and history.
            </P>
            <Reveal as="div" className="mt-[clamp(2rem,4vw,3rem)]">
              <CaseFigure
                src="/images/letseat-screen-home.png"
                alt="Let's Eat — home, with the current promotion and the order list"
                caption="Home — one promotion, then straight into the list and a single way out to the receipt"
                width={786}
                height={1708}
                maxWidth={300}
                light
              />
            </Reveal>
          </CaseSection>

          <CaseSection id="problem" title="Problem">
            <P>
              Ordering food is a small decision made under mild impatience.
              People want to know four things about a dish — what it looks
              like, what others thought, what it costs, and how long it takes
              — and most ordering apps make you open a detail page to find
              out.
            </P>
            <P>
              Every one of those taps is a chance to lose the order. The
              problem was fitting the whole decision into the list itself
              without the list becoming unreadable.
            </P>
          </CaseSection>

          <CaseSection id="decisions" title="Decisions">
            <DecisionBlock
              title="The whole decision in one row"
              problem="Photo, name, rating, price, prep time, a save, and an add action — seven things competing for one row's worth of space."
              decision="Three zones, fixed. Photo anchors the left, the facts stack in the middle in reading order — name, rating, then price and time — and the add button holds the right edge alone. Tapping through to a detail page becomes optional rather than required."
            />
            <DecisionBlock
              title="One row, three contexts"
              problem="Browsing, searching, and filtering by category are three different intentions, and most apps give each its own card treatment."
              decision="The same dish row appears under “Ready to Order?” on home and under “Popular Dishes” in search. Only the heading and the filters above it change, so the thing you're comparing never moves."
              figure={
                <CaseFigure
                  src="/images/letseat-screen-search.png"
                  alt="Let's Eat — search, showing the same dish rows beneath category chips"
                  caption="Search — category chips change the set, not the row"
                  width={786}
                  height={1708}
                  maxWidth={300}
                  light
                />
              }
            />
            <DecisionBlock
              title="Profile ordered by frequency, not convention"
              problem="Profile screens usually open with account details, which is the thing people touch least."
              decision="Order the list by how often it gets used: my orders, favourites, order history, saved addresses, then account details and support. Log out sits below the group in red, separated from anything routine."
              bordered
              figure={
                <CaseFigure
                  src="/images/letseat-screen-profile.png"
                  alt="Let's Eat — profile, with orders at the top and log out set apart"
                  caption="Profile — the destructive action is the only one in red, and the only one on its own"
                  width={786}
                  height={1708}
                  maxWidth={300}
                  light
                />
              }
            />
          </CaseSection>

          <CaseSection id="outcome" title="Outcome">
            <Callout title="Impact">
              The row pattern held everywhere it was reused — search results,
              favourites, and promotions all take the same component without
              modification. Next would be the cart and checkout, which is
              where the single-screen promise gets its real test.
            </Callout>
          </CaseSection>

          <CaseSection id="reflection" title="Reflection">
            <P>
              What I would do differently is design the cart and checkout at
              the same time as the list. Putting the whole decision in one
              row makes adding to an order almost frictionless, which quietly
              moves the pressure downstream — if the receipt cannot summarise
              four impulse additions clearly, the row I was so pleased with
              just produces abandoned orders further along.
            </P>
            <P>
              What I learned is that density is a hierarchy problem before it
              is a space problem. Seven elements in one row sounded
              impossible until I stopped asking what would fit and started
              asking what order people read them in. Once the sequence was
              fixed — see it, trust it, price it, commit — the layout mostly
              fell out of that, and the row stopped feeling crowded without
              anything being removed.
            </P>
          </CaseSection>

          <NextProjectNav
            text="Next: Entra, a platform for browsing open roles and applying, seen from the applicant side."
            nextHref="/entra"
            nextLabel="Read the Entra case study"
          />
        </CaseBody>
      </main>
      <Footer />
    </>
  );
}
