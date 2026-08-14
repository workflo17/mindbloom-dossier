# Mindbloom Public Marketing Funnel — Raw Notes

Research date: 2026-08-14. Scope: public, anonymous-visitor pages only. No account was created, no form was
submitted, and the eligibility quiz was not entered — reconnaissance stops at its landing screen per the
research boundary.

Method: pages were fetched via an automated fetch-and-extract tool (headline/CTA/proof-element extraction
run by a secondary model over the rendered page), then spot-checked against a live browser render for the
homepage, the pricing page, and the quiz landing page to confirm verbatim wording. Where a quote below is
marked "verbatim," it was confirmed against the live browser render. Quotes sourced only from the fetch tool
are still direct extractions but were not independently re-checked character-for-character; treat them as
high-confidence, not certified.

---

## 1. Homepage — https://www.mindbloom.com/

**Job in the funnel:** Top-of-funnel landing page. Establishes the category ("psychedelic medicine"),
states the core promise, and pushes every visitor toward one action: the eligibility quiz.

**Headline (verbatim, browser-confirmed):** "Psychedelic medicine is here"

**Subhead (verbatim, browser-confirmed):** "Experience fast, life-changing relief from anxiety, depression,
and PTSD with guided at-home ketamine therapy."

Immediately below the fold-line hero text sits a second line: "Talk therapy and daily pills aren't working.
You deserve the new standard in mental health." — followed by "Ketamine therapy is better, faster, safer."

A live-incrementing odometer-style counter sits beside the hero CTA, animating up to a number like
"854,797 — Ketamine therapy sessions facilitated" (digits visibly roll/count up on load).

**Every CTA on the page:**

| Label | Destination |
|---|---|
| "Am I a candidate?" (hero, repeats near bottom) | https://welcome.mindbloom.com/ |
| "See if you're eligible" (multiple placements) | https://welcome.mindbloom.com/ |
| "Take our quiz to see if you're a candidate" (nav) | https://welcome.mindbloom.com/ |
| "Get started" (nav) | https://welcome.mindbloom.com/ |
| "How our program works" | /why-mindbloom |
| "Why ketamine" | /why-ketamine |
| "Explore the research" | /research |
| "The Mindbloom difference" | /why-mindbloom |
| "See more reviews" | /reviews |
| "Find my program focus" | condition-specific program pages |
| "Our story" | founder story anchor/section |
| "Read all articles" | /blog |
| "Login" | https://my.mindbloom.com/#/login |

Every distinct CTA on the homepage, without exception, resolves to the same destination:
`welcome.mindbloom.com` (the quiz), `mindbloom.com` informational pages, or login. There is no CTA that
leads anywhere transactional other than the quiz.

**Proof elements and position relative to CTA:**
- Live session counter ("854,797... sessions facilitated") — directly beside the first hero CTA, above the fold.
- Clinical stats block (mid-page, after the "neuroplasticity" explainer, before testimonials): "89% reported
  improvement in their depression and anxiety symptoms," "95% reported no side effects," "84% who
  experienced significant improvements maintained progress or recovered with a second round of treatment."
  Footnoted 1/2 to studies (full citations appear only in a References block at the very bottom of the page).
- "Study co-authors from:" line with institutional logos, positioned directly above the stats block.
- 13 short first-name testimonial quotes with occupation tags (e.g., "JACOB, RANCH HAND," "JEFF, BUSINESS
  OWNER") in a carousel, positioned after the stats block and before the founder story.
- Founder story ("Our mission is personal" / Dylan Beynon's account of losing his mother and sister to
  overdoses) — positioned after testimonials, before the on-page FAQ.
- On-page FAQ accordion (6 questions: eligibility, who leads treatment, how ketamine works, time-to-results,
  what ketamine feels like, insurance/HSA/FSA, dosage) — positioned near the bottom, after the founder story
  and before the final CTA and blog teaser.
- Full References block (peer-reviewed citations, e.g., *Journal of Affective Disorders* 2024, a
  psychotherapy meta-analysis, an SSRI side-effect review) — very bottom of page, below the final CTA.

**What a nervous first-time visitor would still not know after this page:**
- Total dollar cost of a program (no dollar figures appear anywhere on the homepage; cost is discussed only
  in relative/reimbursement terms — "you may be eligible to reimburse over 50%").
- How many total sessions a "program" consists of (the page never states 6/12/18; it just says "sessions").
- Which states Mindbloom operates in (the FAQ references "one of the states in which Mindbloom is
  available" without naming them).
- What happens immediately after the quiz (scheduling, wait time to first consult, whether payment is
  collected then).

**One concrete friction observation:** The on-page FAQ directly answers "Does Mindbloom accept insurance and
HSA/FSA?" with "Mindbloom does not directly accept insurance for our ketamine therapy programs" — but that
correction sits several scroll-lengths below an above-the-fold insurance-logo strip and "reimburse over 50%
of your program cost" line that a skimming visitor is likely to read as "insurance accepted here." The
qualifying language only arrives if the visitor scrolls all the way to the FAQ or clicks through to pricing.

---

## 2. How it works — https://www.mindbloom.com/why-mindbloom (nav-labeled "How it works") and
https://www.mindbloom.com/program (site-index-labeled "Our Program: How Mindbloom Works")

Both pages plausibly answer "how it works"; they were both captured since the site itself is inconsistent
about which one is the canonical "how it works" page (main nav CTA "How our program works" on the homepage
points to `/why-mindbloom`; the site index separately lists `/program` under that description).

### 2a. /why-mindbloom

**Job in the funnel:** Differentiation/trust page — argues Mindbloom's model against generic ketamine
therapy and against talk therapy/SSRIs, using a comparative outcomes chart.

**Headline:** "THE MINDBLOOM DIFFERENCE"

**Subhead:** "More than medicine. A caring community and comprehensive support system that changes lives."

**Every CTA:**
| Label | Destination |
|---|---|
| "Take our quiz to see if you're a candidate" | https://welcome.mindbloom.com/ |
| "Get started" | https://welcome.mindbloom.com/ |
| "See if you're eligible" (x3) | https://welcome.mindbloom.com/ |
| "Watch our intro video" | in-page anchor |
| "Safety information" | in-page expandable |
| "Find my program" | in-page anchor |
| "Research" | /research |
| "Why Ketamine" | /why-ketamine |
| Program name links (Self-Love, Relationships, Resilience, etc.) | /programs/[name] |
| "Subscribe" | email capture |

**Proof elements and position:** A comparative-outcomes chart sits mid-page claiming Mindbloom is "27%
stronger than studies of talk therapy," "16% stronger than studies of SSRI antidepressants," "4% stronger
than studies of IV ketamine," alongside a 56% symptom-reduction figure. Two short testimonials (Kyle S.,
Stephen R.) about the community/Integration Circles feature follow the chart, before a "Your Dedicated Team"
section.

**What a nervous visitor still wouldn't know:** No session count, program duration, or price appears on this
page at all — it links out to /pricing rather than stating anything. The process itself (what actually
happens, step by step) is described only in generalities ("guided preparation and integration," "a peer
treatment monitor physically present") rather than as a walkthrough.

**Friction observation:** The comparative chart's "X% stronger than Y" claims are presented as a settled
head-to-head result, but nothing on the page states the comparison's methodology (same population? matched
severity? same outcome measure?) — a skeptical visitor has no way to evaluate the comparison from this page
alone.

### 2b. /program

**Job in the funnel:** The actual step-by-step process explainer — this is the page that answers "what
happens if I sign up."

**Headline:** "Our comprehensive, science-backed program is designed to help you build a life you love"

**Section header:** "How Mindbloom works"

**Every CTA:**
| Label | Destination |
|---|---|
| "Take our quiz to see if you're a candidate" | https://welcome.mindbloom.com/ |
| "See if you're eligible" | https://welcome.mindbloom.com/ |
| "Am I a candidate?" | https://welcome.mindbloom.com/ |
| "Get started" | https://welcome.mindbloom.com/ |
| "Learn more" (x4: Clinicians, Guides, Bloombox, Sessions, Integration Circles) | individual /blog posts |
| "Read all articles" | /blog |
| "Subscribe" | email capture |

**The 6-step process, as stated on the page:**
1. "Meet with your clinician" — health-history review; "if you aren't a fit, you will receive a full refund."
2. "Receive your Bloombox" — delivered "after your consultation."
3. "Prepare with your guide" — a Mindbloom guide "trained in supporting ketamine therapy" who has "helped
   facilitate 800,000+ sessions."
4. "Your first session" — tablet placed "between your cheek and gums"; "effects last about 1 hour"; client
   "relax[es] on a sofa or bed with an eye mask on."
5. "Choose a program designed for your goals" — 12+ pathways (PTSD, Burnout, Anxiety, Depression, Grief,
   Habits, etc.).
6. "Explore Group Integration Circles" — "unlimited access" to peer support groups.

**Time commitment / session detail:** Session length is stated ("about 1 hour"). Total number of sessions in
a program and total program duration are NOT stated on this page.

**Price/insurance:** None. Page links to /pricing but contains no cost figures itself.

**What a nervous visitor still wouldn't know:** Exactly how many sessions the program includes, total cost,
who is physically present during the first at-home session beyond "your guide" (is the guide in the room, on
video, or on call?), and what happens if the first session goes badly.

**Friction observation:** Step 1 promises "a full refund" if the clinician determines the visitor isn't a
fit — but that promise appears only after the visitor has already been told to expect a Bloombox shipment
(step 2), which reads as if physical product arrives before the eligibility screening is fully resolved. The
sequencing (screening → refund caveat → then "receive your Bloombox") could leave a cautious reader unsure
whether the box ships before or after the clinician's final sign-off.

---

## 3. Pricing — https://www.mindbloom.com/pricing

**Job in the funnel:** The only page with concrete dollar figures. Positioned as a comparison-shopping /
objection-handling page (title tag itself is "Mindbloom Pricing | Treatment for 75% Less").

**Headline (verbatim, browser-confirmed):** "Breakthroughs that don't break the bank"

**Subhead bullets (verbatim, browser-confirmed):** "Save with partial insurance reimbursement" / "HSA/FSA
eligible" / "As low as $165/session for new clients" / "No hidden fees"

**Prices as displayed (New Client tab, default view showed 12-session mid-tier):**
- 6-Session Treatment: $215/session → $1,290 total ($430/month × 3 months)
- 12-Session Treatment: $185/session → $2,220 total ($370/month × 6 months) — "SAVE $360"
- 18-Session Treatment: $165/session → $2,970 total ($330/month × 9 months) — "SAVE $900"

**Returning Client tab (per earlier automated extraction, not browser re-verified):**
- 6-Session Injectables: $159/session, $954 total, $318/month × 3 ("26% less than New Client offering")
- 18-Session Injectables: $129/session, $2,322 total, $258/month × 9 ("40% less per session than New Client offering")
- 6-Session Tablets: $179/session, $1,074 total, $358/month × 3
- 18-Session Tablets: $139/session, $2,502 total

**What's included (verbatim list from the page):** "12 Mindbloom Sessions," "4 Guide Coaching Sessions +
Unlimited Messaging," "3 Clinician Consults," "Bloombox," "Personalized care" (Tablet or Injectable choice),
"Unlimited group integration circles," "Access to the Mindbloom app." (Counts scale with the session tier
selected.)

**Every CTA:**
| Label | Destination |
|---|---|
| "Am I a candidate?" (hero and mid-page) | https://welcome.mindbloom.com/ |
| "Get started" (Injectables/Tablets toggle section) | https://welcome.mindbloom.com/ |
| "Login" | https://my.mindbloom.com/#/login |

**Insurance language (verbatim):** "Mindbloom does not accept insurance at this time. However, some clients
are able to get reimbursed by their insurance provider. After your first virtual visit, we can provide you
with a 'superbill' —an itemized invoice— that you can submit." Billing codes given: "99204 - 45 min initial
consult" and "99214 - 25 min med mgmt. after Virtual Visit #1." Separately: "Save up to $1,150 through
reimbursements with these insurers and many more" next to a row of insurer logos.

**HSA/FSA language (verbatim):** "As some Mindbloom treatment services could be considered qualified
expenses, it may be possible to utilize HSAs or FSAs to pay for treatment... eligible expenses are
ultimately determined by [the card processor]."

**Refund guarantee (verbatim):** "Full refund if not a medical fit." Elsewhere: "If your Mindbloom clinician
determines that treatment is not appropriate, you will receive a 100% refund."

**Fine print:** Two numbered footnotes on the headline bullets: "1. Subject to insurance provider's
approval" and "2. Subject to card issuer's approval."

**Proof elements near pricing:**
- "4.7/5 rating across 850,000+ sessions" directly under the hero CTA.
- A competitor cost-comparison table: Mindbloom estimated annual cost "$1,300-$2,900" vs. IV ketamine
  clinics "$3,000-$6,400+" vs. Spravato "$50,000 without insurance" vs. other at-home providers "$1,000-$2,500
  on average."
- A large testimonial-video grid (20+ named clients) positioned directly below the comparison table.
  **A majority of these testimonial cards are labeled "Paid Partner."** A page-wide disclaimer reads:
  "*Opinions expressed belong to the individuals depicted. Results may vary and may not be representative of
  all clients."
- A "Your pricing questions—answered" FAQ accordion near the bottom, covering: whether Injectables cost more
  than Tablets (they don't), insurance, HSA/FSA, time-to-results, and the refund policy.

**Pricing clarity assessment:** Total cost is stated clearly per tier — this is the only page in the funnel
where a visitor can compute an exact dollar figure without submitting any information. What is NOT clear:
the actual out-of-pocket cost after any insurance reimbursement (depends on individual provider approval,
"up to $1,150," not guaranteed), and the entry-level rate is $215/session (6-session plan) — the "$165/session"
headline figure requires committing to the largest, 9-month, 18-session plan.

**Friction observation:** Roughly half or more of the "client testimonial" video cards on this specific page
carry a "Paid Partner" tag — i.e., paid endorsements rather than organic client stories — sitting directly
beneath a page whose entire purpose is to justify the cost. A visitor evaluating whether the price is "worth
it" is shown paid-partner content as part of that evaluation without the tag being explained anywhere on the
page (no link or tooltip clarifying what "Paid Partner" means in this context).

---

## 4. Reviews — https://www.mindbloom.com/reviews

**Job in the funnel:** Dedicated social-proof page; the "See more reviews" link from the homepage lands here.

**Headline:** "Our north star: Your 5-star experience."

**Subhead:** "Mindbloom changes lives. But don't take our word for it."

**Format:** Text-quote testimonials with first-name-plus-occupation attribution (no visible star ratings on
individual entries, no video on this page). 24 of a stated 334 total testimonials are shown on initial load,
with a "Load more" control.

**Representative quotes (verbatim, as extracted):**
- "The best thing I have ever tried to help with my depression! The way my mood has changed is unreal." — Howard J.
- "This therapy is very helpful for PTSD, and treatment resistant depression/anxiety. It's given me hope..." — Andrew
- "My mind is quiet for maybe the first time ever! Mindbloom is changing my life for the better..." — Teresa
- "After my first session I said why didn't I do this sooner? I will be a patient for life..." — Michelle D.
- "I started Mindbloom 6 months ago and today I'm completely off antidepressants..." — Kodey G.

**Aggregate stat:** "4.7/5.0 across 850,000+ sessions" (same figure used on the pricing page).

**Source of reviews:** Self-hosted on mindbloom.com. No link-out to Trustpilot, Google Reviews, the App
Store, or any independently auditable third-party review platform was found on this page.

**Every CTA:** "Get started" (nav), "See if you're eligible" (repeated), "Take our quiz" (nav), "Load more"
(reviews pagination), newsletter subscribe. All conversion CTAs go to https://welcome.mindbloom.com/.

**CTA placement relative to testimonials:** CTAs appear in the persistent nav above the testimonial grid,
and again after the "Load more" section — i.e., the visitor is invited to convert both before reading any
reviews and after.

**Sentiment:** 100% positive in the sample captured. No negative, mixed, or critical reviews are shown.

**What a nervous visitor still wouldn't know:** Whether 334 is the total count of all reviews ever collected
or a filtered/curated subset; how reviews are solicited (post-treatment survey? incentivized?); whether any
negative reviews exist and are excluded.

**Friction observation:** Because every testimonial is self-hosted with no external verification link, a
skeptical visitor has no mechanism on this page to confirm any single quote is genuine — there's nothing to
click through to on Trustpilot, Google, or elsewhere.

---

## 5. State page — https://www.mindbloom.com/where-we-treat/best-ketamine-therapy-new-york

**Job in the funnel:** SEO-driven local-intent landing page (title tag: "Best Ketamine Therapy Near Me in
New York | Mindbloom"), designed to capture geo-specific search traffic and route it into the same funnel.

**Headline / title:** "Best Ketamine Therapy Near Me in New York | Mindbloom"

**Subhead:** "Mindbloom offers guided at-home ketamine therapy throughout New York, serving residents in New
York City, Brooklyn, Buffalo, Rochester, Albany, and statewide via telehealth."

This is by far the longest page captured — an estimated 25 sections, functioning more like a long-form
SEO article than a conversion landing page, with a byline attributed to "Leonardo Vando, MD (Board Certified
Psychiatrist, 15+ years experience)."

**Localization present:** Named NY cities/regions (NYC, Brooklyn, Long Island, Buffalo, Rochester, Albany,
Syracuse, "rural or suburban communities"), and an argument that telehealth removes the "barrier of distance
from the IV ketamine clinic market concentrated in New York City." No local testimonials, no NY-specific
statistics, and no citation of New York State telehealth or controlled-substance law.

**Every CTA:**
| Label | Destination |
|---|---|
| "Take our quiz to see if you're a candidate" | https://welcome.mindbloom.com/ |
| "See if you're eligible" (x3) | https://welcome.mindbloom.com/ |
| "Get started" (x2) | https://welcome.mindbloom.com/ |
| "Read all articles" | /blog |
| "Login" | https://my.mindbloom.com/#/login |
| Links to /why-mindbloom, /pricing, /why-ketamine, /research, condition pages, /tablets, /injectables | respective pages |

**Proof elements:** "Key Takeaways" bullet block near the top states "92.2% of clients reported symptom
improvement" (PTSD), "89% reported symptom improvement" (depression/anxiety), "60.7% remission rate" (PTSD),
"81% of clients ... report [injectables] preferable," "serious adverse events occurring in fewer than 0.1%
of sessions." Cites "a peer-reviewed study of 11,441 Mindbloom clients" and "two peer-reviewed studies
published in the Journal of Affective Disorders." A modality-comparison table appears mid-page (IV, IM,
Spravato, at-home).

**Price mentions:** "New client programs start at $215 per session for a new client 6-session program,"
"billed in monthly installments of $430 per month for 3 months, totaling $1,290," and a competitor
comparison ("IV Ketamine: $400 to $800+ per session"). Same core figures as the /pricing page.

**Regulatory/safety disclosure (found deep in the page, roughly 20 of ~25 sections down):** "Ketamine is
classified as a Schedule III controlled substance under DEA regulations." "Ketamine is not FDA-approved for
PTSD, depression, or anxiety" — its use for these conditions is "off-label prescribing by licensed
clinicians." Contraindications named: "uncontrolled hypertension, psychotic disorders, and substance use
disorders." No New-York-specific telehealth statute or prescribing-law citation was found anywhere on the
page — the legal content is generic/national despite the page's geo-targeted framing.

**What a nervous visitor still wouldn't know:** Whether Mindbloom's NY-licensed clinicians differ in any way
from clinicians serving other states; any state-specific consumer protections; actual appointment
availability/wait time in New York specifically.

**Friction observation:** The page's own "Key Takeaways" open with upbeat efficacy percentages, while the
Schedule III / off-label / FDA-non-approval disclosure — arguably the single most decision-relevant fact for
a nervous first-time visitor — is placed roughly 20 sections into a 25-section page, well past every CTA
that has already appeared multiple times by that point.

---

## 6. Science / Results

Two distinct pages cover this ground; both were captured since the task's target ("science/results page")
maps ambiguously between them.

### 6a. /science — https://www.mindbloom.com/science

**Job in the funnel:** Mechanism-of-action explainer ("why does this work biologically").

**Headline:** "Unlock the power of ketamine."

**Subhead:** "Ketamine is a transformational medicine of the mind. It can rapidly —often within an hour or
two— lift the symptoms of anxiety, depression, and other conditions."

**Mechanism explanation (verbatim extracts):** "Ketamine helps repair this damage by stimulating
neuroplasticity and fertilizing the brain, restoring and strengthening new connections between neurons."
Also: altering "connectivity" in the brain's default mode network "can help people to break out of old
thought patterns that cause anxiety and depression." The page does not use glutamate-level pharmacological
language — it stays at an accessible, lay-audience level.

**Every CTA:** "Take our quiz to see if you're a candidate," "See if you're eligible" (x3), "Get started,"
"Read all articles" — all funnel CTAs go to https://welcome.mindbloom.com/.

**Proof elements and placement:** Client testimonials (grouped into 4 categories: relief, gentle experience,
new perspective, etc.) appear BEFORE the "Ketamine research" citation section — i.e., emotional testimonial
content is placed ahead of the scientific citations on this specific page. Two studies are named: the 2022
*Journal of Affective Disorders* paper and a *Frontiers in Psychiatry* paper on "Safety, effectiveness and
tolerability of sublingual ketamine." No individual researcher names or institutional affiliations are shown
alongside either citation on this page.

**Price mentions:** None.

**What a nervous visitor still wouldn't know:** Any comparative risk data against other treatments (this
page explains mechanism but not comparative safety); dosage specifics; whether effects described are typical
or best-case.

**Friction observation:** Testimonials are sequenced ahead of the research citations on the page that is
explicitly framed as "the science" — a visitor arriving specifically to evaluate clinical evidence encounters
persuasive personal narrative before reaching the (thinner) citation list.

### 6b. /results — https://www.mindbloom.com/results

**Job in the funnel:** Outcomes/evidence page, the most data-dense page in the funnel.

**Headline / title:** "Mindbloom | The Outcomes of Treatment"

**Subhead:** "Mindbloom participated in a landmark clinical study on ketamine therapy which followed 1,200+
Mindbloom clients over 4 sessions."

**Key stats, all attributed to Mindbloom's own study (Journal of Affective Disorders, 2022, described on the
page as an "open-label effectiveness trial"):**
- "89% reported improvement in depression/anxiety after 4 sessions"
- "62% with suicidal ideation no longer reported it after 4 sessions"
- "95% reported no side effects"
- "30% achieved remission/virtually no symptoms"

**Comparative chart** (>50% symptom reduction rates, each sourced to a separate external citation):
psychotherapy 41%, SSRIs 47%, IV ketamine clinics 54%, Mindbloom 56%.

**Rigor assessment:** The Mindbloom figures come from the company's own proprietary study — peer-reviewed
and published, but explicitly labeled "open-label" (not blinded, no stated control group). The comparison
benchmarks (psychotherapy, SSRI, IV ketamine) are drawn from separate, independently published sources,
which gives the comparison chart more external grounding than the headline stats do on their own.

**Explicit disclaimer (verbatim):** "The FDA has not evaluated head-to-head trials comparing the safety of
ketamine to other medications that are FDA-approved for the treatment of depression, anxiety, or other
psychiatric disorders." Also: "Although some clients report that they had more success with ketamine than
with FDA-approved therapies, these outcomes may not be typical."

**Every CTA:** "Take our quiz to see if you're a candidate," "See if you're eligible," "Am I a candidate?,"
"Get started," "Read the article" (links to a blog writeup of the study), "Join the Facebook Community"
(https://bit.ly/3IIhyN9).

**Stat/CTA sequencing:** All four headline stats and the comparison chart appear before the first strong CTA
("Am I a candidate?"), which is placed at the bottom of the page after safety disclaimers — evidence-first,
ask-second structure.

**What a nervous visitor still wouldn't know:** Whether the 1,200+ study cohort resembles them
demographically; dropout/attrition rate of the study (not stated); what portion of clients who don't improve
look like.

**Friction observation:** The single largest source of "proof" throughout the entire site — the 89%/95%/56%
figures repeated on nearly every page — traces back to one open-label, non-controlled, company-run study;
that limitation is disclosed only in fine print on this one page and is not carried forward as a caveat
anywhere the same stats are re-used elsewhere in the funnel (homepage, pricing, NY state page).

---

## 7. FAQ

### 7a. Public help center — https://help-center.mindbloom.com/en/

**Job in the funnel:** Post-conversion / logistics support hub, publicly readable without login.

**Categories listed (with article counts):** About Mindbloom (38), Scheduling (21), Shipping + Tracking
(11), Appointments + Sessions (39), Programs (36), Account, Billing + Payments (24).

**Featured question titles visible (verbatim):** "How do I get started?" / "How much do Mindbloom programs
cost?" / "How do I schedule?" / "Why was I charged again?" / "What is Mindbloom's refund policy?" / "Where is
my medication and how can I track it?"

**Gap:** The featured/surfaced questions skew heavily toward account logistics (billing, shipping,
scheduling). No safety, side-effect, or "what does a session feel like" question appears among the featured
titles — those experiential questions are instead answered on the homepage's own FAQ accordion (see Page 1),
not in the help center's featured list.

**CTA:** "How do I get started?" article, plus a live-chat widget (described as a "yellow message icon" in
the corner) for direct support contact.

### 7b. On-page FAQ (homepage, /pricing, and /program/others each carry their own accordion)

As documented under Page 1 and Page 3 above — the homepage FAQ covers eligibility, care team, mechanism, time
to results, felt experience, and insurance; the pricing-page FAQ covers Tablets-vs-Injectables cost parity,
insurance, HSA/FSA, time to results, and the refund policy. There is meaningful overlap/duplication between
the homepage FAQ and the pricing-page FAQ (both restate the insurance and time-to-results answers nearly
verbatim).

**Friction observation:** FAQ content relevant to a nervous first-timer is split across at least three
places (homepage accordion, pricing-page accordion, and the separate help-center subdomain) with duplicated
content in two of them and no single canonical FAQ page — a visitor who reads the homepage FAQ and then
visits the help center will re-encounter some answers while other logistics-only answers (e.g., "Why was I
charged again?") only exist on the help-center subdomain.

---

## 8. Main CTA destination — quiz landing page — https://welcome.mindbloom.com/

**Job in the funnel:** The door to the actual eligibility quiz. Every single CTA captured across all seven
pages above resolves here. Per the research boundary, this page was viewed read-only; the "Start now" button
was NOT clicked and no quiz question was seen.

**Note on tooling:** This URL returned an empty/JS-shell response to the automated fetch tool (no content
extractable) — recorded here as a genuine fetch failure. Content below was instead confirmed with a live
browser render, viewing the landing screen only.

**Headline (verbatim, browser-confirmed):** "We're glad you're taking this important step towards improving
your mental health."

**Subhead (verbatim, browser-confirmed):** "This brief survey helps us tailor your treatment to your mental
health goals."

**CTA:** "Start now" — single button, full width, no secondary/alternate action offered on this screen besides
a "Back" link.

**Legal gate below the button (verbatim):** "By clicking 'Start Now', you acknowledge that you have read,
understood, and accepted the Privacy Policy (including sensitive data processing) and Terms of Use."

**What the landing page promises about the quiz:** Only that it is "brief" and helps "tailor your treatment
to your mental health goals." No stated question count, no stated time estimate (no "X minutes" claim
anywhere on this screen), and no description of what happens immediately after completion (e.g., "you'll see
your price," "you'll be scheduled for a call").

**Trust/reassurance copy:** None beyond the "we're glad you're taking this step" framing — no "free," "no
commitment," "no credit card required," or explicit privacy reassurance beyond the standard legal
acknowledgment line.

**Fields/first question visible before starting:** None — the screen is CTA-only; no question is shown until
after "Start now" is clicked (not observed, per boundary).

**Pricing visibility on this screen:** None. A visitor lands here having already seen exact prices on
/pricing (if they went there first) but this screen itself carries no price information and no link back to
/pricing.

**Proof elements on this screen:** None — no stat, testimonial, or logo. This is the one page in the funnel
with zero social proof.

**Friction observation:** Because the page states neither a question count nor a time estimate, a visitor
who has not already visited /pricing has no way to gauge, before committing to "Start now," how much of a
time investment the quiz represents — the single largest piece of missing reassurance right at the
conversion point.

---

## Closing section — the funnel as a path

**Where cost first appears:** Never in specific dollar terms on the homepage. The homepage's only cost-
adjacent language is the reimbursement/insurance-logo framing near the top and the FAQ's "does not directly
accept insurance" answer near the bottom — neither states a number. The first page in the funnel with actual
dollar figures is /pricing, reachable via one click from the homepage nav ("Pricing" link, present in the
global nav on every page captured) or via the "Go deeper" footer links seen on /results. The NY state page
also repeats the same $215/session figure roughly 14 sections into a 25-section article. So: cost is
available within one click of any page in the funnel, but never appears unprompted on the pages a visitor is
actually pushed toward (homepage, why-mindbloom, program, science, results, reviews, the NY page's hero) —
a visitor has to actively seek out /pricing rather than encountering cost as part of the primary path.

**Clicks from homepage to the quiz:** One click. Every primary CTA on the homepage ("Am I a candidate?,"
"See if you're eligible," "Get started," "Take our quiz to see if you're a candidate") links directly to
`welcome.mindbloom.com`. A second click ("Start now") is required to leave the landing screen and enter the
quiz itself, which was not observed.

**Questions the site defers until after the quiz (inferred from what's absent pre-quiz, not observed
directly):** Final personal eligibility determination (the homepage FAQ states eligibility requires "a
diagnosis of anxiety, depression, or PTSD by a Mindbloom clinician" — something no page can confirm before
the quiz/consult); which specific state-licensed clinician is assigned; which product (Tablets vs.
Injectables) is recommended for the individual (the site states 81% prefer Injectables but frames the choice
as personalized); actual insurance-reimbursement dollar amount for that individual's plan; and scheduling/
wait time for the first virtual consult. None of these are addressed anywhere in the seven public pages
reviewed.

**Which page carries the most conversion weight:** The homepage functions as the true hub — it is the only
page carrying the founder-story emotional narrative, the full on-page FAQ, the clinical stats, and 13
testimonials all in one place, and every other page captured (why-mindbloom, program, science, results,
reviews, the NY page) largely re-serves subsets of the same content (same 89%/95% stats, same "See if you're
eligible" CTA, same insurance line) rather than introducing new arguments. /pricing is the second-heaviest
page: it's the only place a visitor can get a full answer to "what will this actually cost me," and it
independently repeats the core proof stack (rating, comparison table, testimonials, FAQ) rather than assuming
the visitor already saw it elsewhere.

**Which page is weakest:** The quiz-landing page (welcome.mindbloom.com) is the weakest single touchpoint
observed — it carries zero proof elements, no time estimate, and no restated value proposition at the exact
moment a visitor is being asked to commit to starting a survey. Among the content pages, /why-mindbloom is
the thinnest on concrete information relative to its length: despite being the page the homepage explicitly
labels "How our program works," it does not actually walk through the process step by step (that content
lives on the separate /program page instead) and its headline comparative stats ("27% stronger than... talk
therapy") are presented without visible methodology.

**Duplication observed across the funnel:** The same core proof stack — "89% reported improvement,"
"95% reported no side effects," "4.7/5 across 850,000+ sessions," "See if you're eligible" CTA, and the
2022 *Journal of Affective Disorders* citation — recurs on the homepage, /why-mindbloom, /program, /science,
/results, /pricing, and the NY state page. The underlying evidence for the headline percentages traces to a
single open-label company study; that study's specific limitations (no control group, self-reported outcomes)
are disclosed only on /results and are not repeated wherever the same stats are reused elsewhere.

---

## Fetch/access notes

| URL | Status |
|---|---|
| https://www.mindbloom.com/ | OK — fetched and browser-verified |
| https://www.mindbloom.com/why-mindbloom | OK — fetched via automated extraction |
| https://www.mindbloom.com/program | OK — fetched via automated extraction |
| https://www.mindbloom.com/pricing | OK — fetched and browser-verified |
| https://www.mindbloom.com/reviews | OK — fetched via automated extraction |
| https://www.mindbloom.com/where-we-treat/best-ketamine-therapy-new-york | OK — fetched via automated extraction |
| https://www.mindbloom.com/science | OK — fetched via automated extraction |
| https://www.mindbloom.com/results | OK — fetched via automated extraction |
| https://help-center.mindbloom.com/en/ | OK — fetched via automated extraction, public/no login required |
| https://welcome.mindbloom.com/ | Automated fetch tool returned an EMPTY/JS-SHELL response (no extractable content) on two attempts. Recovered via live browser render of the landing screen only — did not proceed past it. |

No other page in scope failed to load.
