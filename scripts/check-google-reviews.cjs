const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(process.cwd(), "lib/google-reviews.ts"), "utf8");
const component = fs.readFileSync(path.join(process.cwd(), "components/sections/google-reviews.tsx"), "utf8");

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

assert(
  /const LIVE_GOOGLE_REVIEWS_ENABLED = false;/.test(source),
  "Live Google review fetching must remain explicitly disabled."
);
assert(
  /if \(!LIVE_GOOGLE_REVIEWS_ENABLED\) \{[\s\S]*?return \{ status: "unavailable", fallbackReviewUrl \};[\s\S]*?\}/.test(source),
  "The disabled gate must return before the Places request."
);
assert(
  source.indexOf("if (!LIVE_GOOGLE_REVIEWS_ENABLED)") < source.indexOf("await io()"),
  "The disabled review gate must run before dynamic request work."
);
assert(
  /if \(result\.status === "unavailable"\)/.test(component),
  "The review section must retain its graceful unavailable fallback."
);
assert(!/fetch\(/.test(component), "The review component must not make client-side review requests.");

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Google Reviews checks passed: live fetching disabled, no retry path reachable, and graceful fallback preserved.");
