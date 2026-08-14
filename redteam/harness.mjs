#!/usr/bin/env node
/*
 * Fictional test data for safety-system evaluation.
 * If you or someone you know is struggling right now: call or text 988
 * (Suicide & Crisis Lifeline, US).
 *
 * Part of a work-sample dossier by Don Florencio for a Mindbloom job
 * application. Not a real clinical tool, not affiliated with or endorsed
 * by Mindbloom. No dependencies: run with `node harness.mjs`.
 *
 * What this measures: whether a crisis-language classifier correctly
 * hands a message off to a human. "crisis" is the positive class.
 * "clear" and "ambiguous" are both treated as expected-negative, because
 * the design decision under test is that ambiguous messages should route
 * to human review, not trip an automated crisis lock and not be waved
 * through as ordinary sales traffic. A false negative here is a crisis
 * message an automated agent kept selling into. A false positive is a
 * clear or ambiguous message that got treated as confirmed crisis.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const datasetPath = join(__dirname, "dataset.json");
const resultsPath = join(__dirname, "results.json");

const dataset = JSON.parse(readFileSync(datasetPath, "utf8"));
const items = dataset.items;

// ---------------------------------------------------------------------
// Baseline 1: naiveKeyword
// The obvious first attempt. A flat list of words someone would type
// into a filter after five minutes of thinking about it. Substring
// match, case-insensitive, nothing else.
// ---------------------------------------------------------------------

const NAIVE_KEYWORDS = [
  "suicide", "suicidal",
  "kill",
  "die",
  "dead",
  "death",
  "hopeless",
  "worthless",
  "pointless",
  "disappear",
  "give up",
  "cant go on",
  "better off without me",
  "burden",
  "want to die",
  "hurt myself",
  "harm myself",
];

function normalize(text) {
  return text.toLowerCase().replace(/['']/g, "");
}

function naiveKeyword(text) {
  const t = normalize(text);
  return NAIVE_KEYWORDS.some((kw) => t.includes(kw));
}

// ---------------------------------------------------------------------
// Baseline 2: keywordPlusGuards
// The same keyword hits as above, minus an idiom allowlist and a set of
// positive-context checks (humor markers, quote/lyric/media framing,
// stock figures of speech built on the same words). This is a genuinely
// better second attempt: it is strictly subtractive, so it can only
// remove false positives that the keyword pass created, it cannot find
// crisis language the keyword list never matched in the first place.
// Written honestly: that limitation is the headline finding below.
// ---------------------------------------------------------------------

const IDIOM_ALLOWLIST = [
  /\bkill(?:ing|ed)?\s+(?:it|me)\b/i, // "killing it" (praise), "killing me" / "killed me" (hyperbole)
  /\bdying to\b/i, // "dying to know"
  /\bto die for\b/i, // "to die for" (enthusiasm)
  /\bdied laughing\b/i,
  /\bthe death of me\b/i,
  /\bdisappear(?:ed|ing)?\s+(?:into|for)\b/i, // "disappear into a book", "disappear for a weekend"
  /\bcould murder a\b/i, // "could murder a burger"
];

const QUOTE_CONTEXT = /\b(lyric|lyrics|song|poem|quote|quoting|movie|film)\b/i;
const HUMOR_CONTEXT = /\b(lol|lmao|haha+|jk|funny|funniest|hilarious|joking|kidding)\b/i;

function keywordPlusGuards(text) {
  const hit = naiveKeyword(text);
  if (!hit) return false;
  if (IDIOM_ALLOWLIST.some((re) => re.test(text))) return false;
  if (QUOTE_CONTEXT.test(text)) return false;
  if (HUMOR_CONTEXT.test(text)) return false;
  return true;
}

const CLASSIFIERS = [
  {
    name: "naiveKeyword",
    fn: naiveKeyword,
    description:
      "Flat substring keyword list (kill, die, hopeless, end it, ...). The obvious first attempt.",
  },
  {
    name: "keywordPlusGuards",
    fn: keywordPlusGuards,
    description:
      "Same keyword hits, minus an idiom allowlist and positive-context checks (humor markers, quote/lyric framing). A genuinely better second attempt, still a keyword classifier underneath.",
  },
];

// ---------------------------------------------------------------------
// Evaluation
// ---------------------------------------------------------------------

function evaluate(classifier) {
  let tp = 0;
  let fp = 0;
  let fn = 0;
  let tn = 0;
  const falseNegatives = []; // crisis items the classifier missed
  const falsePositives = []; // clear/ambiguous items wrongly flagged as crisis

  for (const item of items) {
    const predictedCrisis = classifier.fn(item.text);
    const actualPositive = item.label === "crisis"; // clear + ambiguous are both expected-negative

    if (actualPositive && predictedCrisis) {
      tp++;
    } else if (actualPositive && !predictedCrisis) {
      fn++;
      falseNegatives.push({ id: item.id, text: item.text, label: item.label });
    } else if (!actualPositive && predictedCrisis) {
      fp++;
      falsePositives.push({ id: item.id, text: item.text, label: item.label });
    } else {
      tn++;
    }
  }

  const precision = tp + fp === 0 ? null : tp / (tp + fp);
  const recall = tp + fn === 0 ? null : tp / (tp + fn);
  const accuracy = (tp + tn) / items.length;

  return { tp, fp, fn, tn, precision, recall, accuracy, falseNegatives, falsePositives };
}

function pct(n) {
  return n === null ? "n/a" : `${(n * 100).toFixed(1)}%`;
}

const counts = { total: items.length, crisis: 0, clear: 0, ambiguous: 0 };
for (const item of items) counts[item.label]++;

console.log("=".repeat(72));
console.log("Crisis-language classifier red-team suite");
console.log("Fictional test data. If you are struggling right now: call or text 988.");
console.log("=".repeat(72));
console.log(
  `Dataset: ${counts.total} items (${counts.crisis} crisis, ${counts.clear} clear, ${counts.ambiguous} ambiguous)`
);
console.log(
  "Design decision: ambiguous items are expected NEGATIVE. They should route to a\n" +
    "human for review, not trip an automated crisis lock and not be treated as\n" +
    "ordinary sales traffic either. A classifier that flags them as crisis is\n" +
    "graded as a false positive here, same as a classifier that ignores them."
);
console.log("Positive class: \"crisis\". Precision, recall, and accuracy below treat");
console.log("crisis as positive and clear+ambiguous together as negative.");
console.log();

const resultsForFile = {
  generatedAt: new Date().toISOString(),
  notice:
    "Fictional test data for safety-system evaluation. If you or someone you know is struggling right now: call or text 988 (Suicide & Crisis Lifeline, US). Part of a work-sample dossier by Don Florencio for a Mindbloom job application.",
  datasetCounts: counts,
  designDecision:
    "Ambiguous items are expected-negative: correct behavior is to route them to human review, not to trigger an automated crisis lock and not to treat them as ordinary sales traffic. A classifier that flags an ambiguous item as crisis is scored as a false positive.",
  classifiers: {},
};

for (const classifier of CLASSIFIERS) {
  const r = evaluate(classifier);

  console.log("-".repeat(72));
  console.log(`${classifier.name}`);
  console.log(`  ${classifier.description}`);
  console.log(
    `  precision: ${pct(r.precision)}   recall: ${pct(r.recall)}   accuracy: ${pct(r.accuracy)}`
  );
  console.log(`  tp=${r.tp}  fp=${r.fp}  fn=${r.fn}  tn=${r.tn}`);

  console.log(`  false negatives (crisis messages missed): ${r.falseNegatives.length}`);
  for (const m of r.falseNegatives) {
    console.log(`    [${m.id}] "${m.text}"`);
  }

  console.log(
    `  false positives (clear/ambiguous wrongly flagged as crisis): ${r.falsePositives.length}`
  );
  for (const m of r.falsePositives) {
    console.log(`    [${m.id}] (${m.label}) "${m.text}"`);
  }
  console.log();

  resultsForFile.classifiers[classifier.name] = {
    description: classifier.description,
    precision: r.precision,
    recall: r.recall,
    accuracy: r.accuracy,
    counts: { tp: r.tp, fp: r.fp, fn: r.fn, tn: r.tn },
    falseNegatives: r.falseNegatives,
    falsePositives: r.falsePositives,
  };
}

console.log("=".repeat(72));
console.log(`Results written to ${resultsPath}`);

writeFileSync(resultsPath, JSON.stringify(resultsForFile, null, 2) + "\n", "utf8");
