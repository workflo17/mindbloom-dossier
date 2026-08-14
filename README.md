# The Mindbloom Dossier

**Read it: https://workflo17.github.io/mindbloom-dossier/**

Seven pieces of lifecycle-marketing work built for a job application, aimed at the
questions the team actually carries rather than at a resume. Real public data where data
exists, working tools where a tool was the honest format, and memos where writing was.

Mindbloom is a real company and I do not work there. Nothing here is insider information:
every input is public (published reviews and forum posts, the public site, published
telehealth benchmarks), and every model is clearly labeled with its assumptions.

## What's in it

**Voice of the Client** collects what people say about the company in public reviews and
forums, with sources, clustered into the objections a funnel team can act on.

**The Show-Rate Ledger** is an interactive model of what one percentage point of consult
show rate is worth, in dollars and in people who start care. You can drag in your own
numbers.

**Where keyword filters break** is the piece I'd point at first. It ships a 90-message
labeled test set (30 crisis, 30 clear, 30 deliberately ambiguous: idioms, dark humor,
quoted lyrics, resolved past-tense distress) and a runnable harness that scores two crisis
classifiers against it. The naive keyword filter catches 4 of 30 crisis messages and fires
on 12 that were fine. Adding idiom allowlists and context guards fixes every false alarm
and still catches only those same 4. That is the argument: you cannot keyword your way to
safe automated messaging, and the fix is a design where the agent stops selling on
uncertainty instead of trying to be certain.

**The payment-plan experiment** is a full proposal in async-doc form: hypothesis, metrics,
sample-size logic, guardrails, kill criteria.

**The public funnel, walked** reads the site the way a nervous first-time visitor reads
it: what each page answers, what it defers, where doubt gets in.

**The first 90 days** sequences the rest, with what each phase has to prove before the
next one spends anything.

**How this was made** documents the operating model: agent fleets under one director, a
coordination protocol, and the verification pass that caught what the machines got wrong.

## Running it

Every page is standalone HTML. Open `index.html`, or serve the folder with any static
server. No build, no dependencies, no external requests.

The safety harness runs on its own:

```
node redteam/harness.mjs
```

It reads `redteam/dataset.json`, scores both classifiers, and writes `redteam/results.json`.
The numbers quoted above and on the page come out of that file, so changing the dataset
changes the page.

## Related

[Tend](https://github.com/workflo17/tend) is the prototype that came before this: a
guarded SMS re-engagement agent with the crisis and opt-out rules built in.
