const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const expectedGaId = "G-0YKBLR3256";
const obsoleteAnalyticsIds = [
  "G-" + "NW9DQBKD88",
  "GTM-" + "NHW24Z4X",
  "GTM-" + "K28MRKZ2",
];
const sourceFiles = [
  "app/layout.tsx",
  "next.config.ts",
  "components/providers/analytics-provider.tsx",
  "lib/analytics/events.ts",
  "components/leads/lead-form.tsx",
  "lib/leads/actions.ts",
].map(read);
const allSource = sourceFiles.join("\n");
const analyticsConfiguration = [
  read(".env.example"),
  read("docs/analytics-setup.md"),
  allSource,
].join("\n");

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

assert(
  (allSource.match(/id="simpluxe-ga4"/g) || []).length === 1,
  "Expected exactly one direct GA4 script installation."
);
assert(/window\.gtag\?\.\("event", event, safeParameters\)/.test(allSource), "Direct GA4 event sending is missing.");
assert(
  /dataLayer\?\.push\(arguments\)/.test(allSource),
  "The gtag command queue must preserve the Arguments object expected by gtag.js."
);
assert(/NEXT_PUBLIC_GA_ID/.test(allSource), "NEXT_PUBLIC_GA_ID configuration is missing.");
assert(
  analyticsConfiguration.includes(expectedGaId),
  `Expected GA4 Measurement ID ${expectedGaId} is missing from analytics configuration.`
);
for (const obsoleteId of obsoleteAnalyticsIds) {
  assert(
    !analyticsConfiguration.includes(obsoleteId),
    `Obsolete analytics ID remains configured: ${obsoleteId}`
  );
}
assert(
  !/<GoogleTagManager\b|\bGoogleTagManager\b|googletagmanager\.com\/gtm\.js/.test(allSource),
  "Obsolete Google Tag Manager integration is present."
);
assert(/process\.env\.NODE_ENV === "production"/.test(allSource), "Production gating is missing.");
assert(/process\.env\.VERCEL_ENV === "production"/.test(allSource), "Vercel production gating is missing.");
assert(
  /script-src[^;]*https:\/\/www\.googletagmanager\.com/.test(allSource),
  "The CSP does not allow the Google Analytics script host."
);
assert(
  /connect-src[^;]*https:\/\/www\.google-analytics\.com[^;]*https:\/\/\*\.google-analytics\.com/.test(allSource),
  "The CSP does not allow Google Analytics collection endpoints."
);
assert(
  /img-src[^;]*https:\/\/www\.googletagmanager\.com[^;]*https:\/\/www\.google-analytics\.com[^;]*https:\/\/\*\.google-analytics\.com/.test(allSource),
  "The CSP does not allow the Google tag image transport and Google Analytics image endpoints."
);
assert(/consent === "granted"/.test(allSource), "Consent gating is missing.");
assert(/lastTrackedPath\.current === pathname/.test(allSource), "Content-view deduplication is missing.");
assert(
  /gtag\?\.\("set",\s*\{\s*send_page_view: false[\s\S]*?gtag\?\.\("js", new Date\(\)\)/.test(allSource),
  "The global page-view suppression must be queued before Google tag initialization."
);
assert(/send_page_view: false/.test(allSource), "Automatic initial page views are not disabled.");
assert(/pageView: "page_view"/.test(allSource), "Deterministic App Router page-view tracking is missing.");
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
  "page_view",
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

console.log("Analytics checks passed: single direct GA4 install, deterministic page views, consent/production gates, event coverage, and lead deduplication.");

