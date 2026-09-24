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
  title: "Entra — Julius Abaabagre",
  description:
    "AmaliTech's internal staffing platform, seen from the applicant side — browsing open roles, checking your fit, and applying, redesigned as one consistent flow.",
  path: "/entra",
});

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "flow", label: "The flow" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function EntraPage() {
  return (
    <>
      <Header variant="case-study" />
      <main>
        <CaseHero
          title="Entra"
          tagline="An internal staffing platform where you can check your fit for a role before you spend an application on it."
          imageSrc="/images/entra-hero.png"
          imageAlt="Entra — the open roles list, showing available internal projects at AmaliTech"
          imageWidth={1840}
          imageHeight={1380}
          meta={[
            { label: "My role", value: "Product & UX design" },
            { label: "Product", value: "Internal staffing platform, web" },
            { label: "Scope", value: "The applicant flow" },
            { label: "Timeline", value: "2025/2026" },
          ]}
        />

        <CaseBody navItems={NAV_ITEMS}>
          <CaseSection id="overview" title="Overview">
            <P>
              Entra is AmaliTech&apos;s internal platform for staffing
              associates onto projects — the system that turns an open role
              into a match. This case study covers one path through it: what
              an associate sees from the moment a new role opens to the
              moment they know where their application stands.
            </P>
            <P>
              Sixteen roles were open across AmaliTech&apos;s client projects
              when these screens were captured — CraftsyHub, TradeLink,
              Vortexa, and more — each with its own stack, seniority band,
              and closing date.
            </P>
          </CaseSection>

          <CaseSection id="problem" title="Problem">
            <P>
              Every open role is a small decision under real time pressure:
              the listing closes on a fixed date, other associates are
              almost certainly looking at the same page, and applying takes
              real effort — a CV, a written case for why you&apos;re the
              right fit. Get the fit wrong and the effort is wasted; get it
              right too late and the role has closed.
            </P>
            <P>
              The interface question was how to help someone size up sixteen
              very different roles quickly, without turning every one of
              them into a research project before they can even decide
              whether to apply.
            </P>
          </CaseSection>

          <CaseSection id="flow" title="The flow">
            <P>
              Three screens carry an application from start to finish: the
              open roles list, a role&apos;s detail page with a fit
              assessment, and the application form itself.
            </P>
            <ScreensGrid
              light={false}
              screens={[
                {
                  src: "/images/entra-projects.png",
                  alt: "Entra — Open Roles, a list of sixteen internal projects with tags, stack, and closing dates",
                  caption:
                    "Open Roles — sixteen roles from different client projects, each read the same way: a logo, an urgency tag, a role type, a one-line brief, the stack, and a closing date.",
                  width: 2000,
                  height: 1500,
                },
                {
                  src: "/images/entra-details.png",
                  alt: "Entra — a role detail page showing the description, who can apply, soft skills, and a fit assessment",
                  caption:
                    "Role detail — the full brief, who's eligible by seniority band, the soft skills asked for, and a fit assessment before you commit to applying.",
                  width: 2000,
                  height: 1500,
                },
                {
                  src: "/images/entra-apply.png",
                  alt: "Entra — the application form with CV upload and a justification field capped at 500 characters",
                  caption:
                    "Application — one CV, imported rather than re-uploaded, and a 500-character field for the one thing that matters: why this role.",
                  width: 2000,
                  height: 1500,
                },
              ]}
            />
          </CaseSection>

          <CaseSection id="decisions" title="Decisions">
            <DecisionBlock
              title="A fit check before the application, not after"
              problem="Role listings already show what's required — seniority band, soft skills, a technical stack. What they don't show is whether your own profile actually clears that bar, and the only way to find out on most platforms is to apply and wait."
              decision="Put “My Fit Assessment” directly on the role page, above the apply button, with a plain one-line explanation of what it's for and a “Reload Assessment” option if a profile changes. An associate decides whether a role is worth an application before they spend one, not after."
            />

            <DecisionBlock
              title="Reuse the CV, spend the words on the case"
              problem="The same associates apply to many roles over a service period. Re-uploading a CV file for every one of sixteen open roles is friction that has nothing to do with whether someone is a good fit."
              decision="Let applicants import a CV already on file in ARMS instead of attaching a new one, and give the actual writing a single, deliberately short field — “Justify Your Application”, capped at 500 characters — so the one thing anyone has to compose is the specific reason this role fits them, not a whole cover letter again."
            />

            <DecisionBlock
              title="An application that stays visible, and reversible"
              problem="Once submitted into an internal system, an application can disappear into a queue with no way to check it or change your mind — deadlines and status become something you have to go and ask someone about."
              decision="Give every submission its own page: role, project, submission date, deadline, the CV and justification exactly as submitted, and a plain status pill. A “Withdraw Application” action sits right there too, so an associate isn't locked into a decision the moment they click submit."
              bordered
              figure={
                <CaseFigure
                  src="/images/entra-tracking.png"
                  alt="Entra — My Applications, showing an application's status, documents, and a withdraw action"
                  caption="My Applications — status, documents, and a withdraw action on the same page, not buried in a menu."
                  width={1840}
                  height={1380}
                />
              }
            />
          </CaseSection>

          <CaseSection id="outcome" title="Outcome">
            <Callout title="Impact">
              The fit-assessment and CV-import decisions came directly out
              of watching how much a full application form asks for,
              multiplied by sixteen live roles at once. Both are live in the
              flow associates use today. What&apos;s still untested is how
              the assessment&apos;s copy lands when it tells someone
              they&apos;re not yet a fit — a false “good fit” costs more
              trust than a blunt one, and that only shows up with real use
              over time.
            </Callout>
          </CaseSection>

          <CaseSection id="reflection" title="Reflection">
            <P>
              What I would do differently is design the “not a fit” state of
              the assessment as carefully as the “good fit” one. It&apos;s
              easy to make a checkmark feel good; it&apos;s harder to tell
              someone they&apos;re missing three of five required skills in
              a way that reads as useful rather than discouraging, and that
              state didn&apos;t get the same attention as the rest of the
              flow.
            </P>
            <P>
              What I learned is that reusing a CV sounds like a small
              convenience until you watch how many roles someone can
              realistically apply to in a week. The CV import and the
              500-character justification field both came from the same
              realisation: the bottleneck was never the writing, it was
              deciding whether a role was worth the writing at all. Once the
              fit assessment answered that question up front, the rest of
              the form could stay small.
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
