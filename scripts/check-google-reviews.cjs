const fs = require("node:fs");
const path = require("node:path");

const read = (file) => fs.readFileSync(path.join(process.cwd(), file), "utf8");
const data = read("lib/data/google-reviews.ts");
const adapter = read("lib/google-reviews.ts");
const section = read("components/sections/google-reviews.tsx");
const slider = read("components/sections/google-reviews/reviews-slider.tsx");
const reviewSource = [data, adapter, section, slider].join("\n");

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

assert(/export interface NormalizedGoogleReview/.test(data), "Normalized review type is missing.");
assert(/export const MANUAL_GOOGLE_REVIEWS/.test(data), "Central manual review collection is missing.");
assert(/reviews: \[\]/.test(data), "Unverified review content was added to the default collection.");
assert(/collectionSchema\.safeParse\(MANUAL_GOOGLE_REVIEWS\)/.test(adapter), "Manual review validation is missing.");
assert(!/fetch\s*\(/.test(reviewSource), "Review rendering must not make an external API request.");
assert(!/places\.googleapis\.com/.test(reviewSource), "A live Google Places endpoint remains in review rendering code.");
assert(/if \(!hasMultiple\)/.test(slider), "Single-review navigation suppression is missing.");
assert(/reviewerInitials/.test(slider), "Initials avatar fallback is missing.");
assert(/collection\.ratingSummary/.test(section), "Optional verified rating summary is missing.");

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Google Reviews checks passed: manual typed data, no API requests, verified summary support, and single-review controls.");
