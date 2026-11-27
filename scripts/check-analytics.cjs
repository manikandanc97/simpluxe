const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const sourceFiles = [
  "app/layout.tsx",
  "components/providers/analytics-provider.tsx",
  "lib/analytics/events.ts",
  "components/leads/lead-form.tsx",
  "lib/leads/actions.ts",
].map(read);
const allSource = sourceFiles.join("\n");

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

assert(
  (allSource.match(/<GoogleAnalytics\b/g) || []).length === 1,
  "Expected exactly one GoogleAnalytics installation."
);
assert(/sendGAEvent\("event", event, safeParameters\)/.test(allSource), "Direct GA4 event sending is missing.");
assert(/NEXT_PUBLIC_GA_ID/.test(allSource), "NEXT_PUBLIC_GA_ID configuration is missing.");
assert(/process\.env\.NODE_ENV === "production"/.test(allSource), "Production gating is missing.");
assert(/process\.env\.VERCEL_ENV === "production"/.test(allSource), "Vercel production gating is missing.");
assert(/consent === "granted"/.test(allSource), "Consent gating is missing.");
assert(/lastTrackedPath\.current === pathname/.test(allSource), "Content-view deduplication is missing.");
assert(!/"page_view"/.test(allSource), "Manual page_view tracking can duplicate automatic App Router tracking.");
assert(
  /state\.ok && state\.accepted && !successNotified\.current/.test(allSource),
  "Successful lead tracking is not guarded by backend acceptance and a duplicate lock."
);
assert(
  /website\.trim\(\)\) return \{ ok: true \};/.test(allSource),
  "The honeypot success path must remain unaccepted for analytics."
);
assert(
  /return \{ ok: true, accepted: true \};/.test(allSource),
  "The persisted lead success path does not expose the acceptance flag."
);

const expectedEvents = [
  "service_view",
  "article_view",
  "whatsapp_click",
  "phone_click",
  "email_click",
  "contact_form_submit",
  "generate_lead",
  "primary_cta_click",
  "portfolio_interaction",
];
for (const eventName of expectedEvents) {
  assert(allSource.includes(`\"${eventName}\"`), `Missing analytics event: ${eventName}`);
}

const forbiddenParameterNames = ["firstName", "lastName", "email_address", "phone_number", "description", "message"];
const analyticsSource = read("lib/analytics/events.ts") + read("components/providers/analytics-provider.tsx");
for (const parameter of forbiddenParameterNames) {
  const parameterPattern = new RegExp(`(?:^|[,{\\s])${parameter}\\s*:`, "m");
  assert(!parameterPattern.test(analyticsSource), `Potential personal analytics parameter found: ${parameter}`);
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Analytics checks passed: direct GA4 install, automatic page views, consent/production gates, event coverage, and lead deduplication.");

