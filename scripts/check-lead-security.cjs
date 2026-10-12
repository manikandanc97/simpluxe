// Exercise rejection paths without contacting Cloudflare, Supabase, or email services.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

function load(file, env, mocks, cache = new Map()) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const module = { exports: {} };
  cache.set(file, module.exports);
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const localRequire = (name) => {
    if (name in mocks) return mocks[name];
    if (name.startsWith("@/") || name.startsWith(".")) {
      const target = name.startsWith("@/") ? path.resolve(name.slice(2)) : path.resolve(path.dirname(file), name);
      return load(`${target}.ts`, env, mocks, cache);
    }
    return require(name);
  };
  vm.runInNewContext(code, {
    module, exports: module.exports, require: localRequire, process: { env },
    FormData, URL, URLSearchParams, AbortSignal, Date, console,
    fetch: mocks.fetch,
  }, { filename: file });
  return module.exports;
}

async function check() {
  const env = {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: "test-site", TURNSTILE_SECRET_KEY: "test-secret",
    NEXT_PUBLIC_SITE_URL: "https://simpluxe.in", NODE_ENV: "production",
    SUPABASE_URL: "https://example.supabase.co", SUPABASE_SECRET_KEY: "test-only",
  };
  let result = { success: true, action: "lead", hostname: "simpluxe.in" };
  let count = 0;
  let limitError = null;
  let inserts = 0;
  let verificationCalls = 0;
  let verificationSecret;
  const mocks = {
    "server-only": {},
    "next/server": { after: () => {} },
    "./notifications": { deliverLeadNotifications: async () => {} },
    fetch: async (_url, options) => {
      verificationCalls++;
      verificationSecret = options.body.get("secret");
      return { ok: true, json: async () => result };
    },
    "@supabase/supabase-js": { createClient: () => ({ from: () => ({
      select: () => ({ ilike: () => ({ gte: () => ({ abortSignal: async () => ({ count, error: limitError }) }) }) }),
      insert: () => {
        inserts++;
        return { select: () => ({ abortSignal: () => ({ single: async () => ({ data: { id: "test-id" }, error: null }) }) }) };
      },
    }) }) },
  };
  const { verifyLeadChallenge } = load("lib/leads/security.ts", env, mocks);
  assert.equal(await verifyLeadChallenge(null), "invalid");
  assert.equal(await verifyLeadChallenge("x".repeat(2049)), "invalid");
  assert.equal(verificationCalls, 0);
  assert.equal(await verifyLeadChallenge("token"), "valid");
  for (const invalid of [
    { success: false },
    { success: true, action: "other", hostname: "simpluxe.in" },
    { success: true, action: "lead", hostname: "attacker.example" },
  ]) {
    result = invalid;
    assert.equal(await verifyLeadChallenge("token"), "invalid");
  }
  result = { success: true, action: "lead", hostname: "www.simpluxe.in" };
  assert.equal(await verifyLeadChallenge("token"), "valid");
  delete env.TURNSTILE_SECRET_KEY;
  assert.equal(await verifyLeadChallenge("token"), "unavailable");
  delete env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  assert.equal(await verifyLeadChallenge("token"), "unavailable");
  env.NODE_ENV = "development";
  assert.equal(await verifyLeadChallenge(null), "invalid");
  result = { success: true, hostname: "example.com" };
  assert.equal(await verifyLeadChallenge("XXXX.DUMMY.TOKEN.XXXX"), "valid");
  assert.equal(verificationSecret, "1x0000000000000000000000000000000AA");
  env.NODE_ENV = "production";
  env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = "1x00000000000000000000AA";
  env.TURNSTILE_SECRET_KEY = "1x0000000000000000000000000000000AA";
  assert.equal(await verifyLeadChallenge("XXXX.DUMMY.TOKEN.XXXX"), "unavailable");
  env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = "test-site";
  env.TURNSTILE_SECRET_KEY = "test-secret";
  assert.equal(await verifyLeadChallenge("token"), "invalid");
  const offline = load("lib/leads/security.ts", env, { ...mocks, fetch: async () => { throw new Error("offline"); } });
  assert.equal(await offline.verifyLeadChallenge("token"), "unavailable");

  const { submitLead } = load("lib/leads/actions.ts", env, mocks);
  function form(overrides = {}) {
    const data = new FormData();
    for (const [key, value] of Object.entries({
      firstName: "Test", lastName: "User", email: "test@example.com", phone: "+91 9876543210",
      projectType: "Not Sure Yet", description: "A test project enquiry", source: "contact",
      t: String(Date.now() - 5000), consent: "true", "cf-turnstile-response": "token", ...overrides,
    })) if (value !== null) data.set(key, value);
    return data;
  }
  const noConsent = await submitLead({ ok: false }, form({ consent: null }));
  assert.equal(noConsent.ok, false);
  assert.ok(noConsent.fieldErrors.consent);
  assert.ok(noConsent.verificationAttempt);
  const phoneError = await submitLead({ ok: false }, form({ phone: "invalid" }));
  assert.ok(phoneError.fieldErrors.phone);
  assert.equal((await submitLead({ ok: false }, form({ t: String(Date.now() + 60000) }))).ok, false);
  assert.equal((await submitLead({ ok: false }, form({ website: "spam.example" }))).ok, true);
  result = { success: false };
  assert.equal((await submitLead({ ok: false }, form())).ok, false);
  assert.equal(inserts, 0);
  result = { success: true, action: "lead", hostname: "simpluxe.in" };
  count = 3;
  assert.equal((await submitLead({ ok: false }, form())).ok, false);
  assert.equal(inserts, 0);
  count = 0;
  limitError = { code: "unavailable" };
  assert.equal((await submitLead({ ok: false }, form())).ok, false);
  assert.equal(inserts, 0);
  limitError = null;
  assert.equal((await submitLead({ ok: false }, form())).ok, true);
  assert.equal(inserts, 1);
  console.log("Lead security checks passed: consent, input bounds, honeypot, timing, token validation, hostname/action checks, outage handling, and repeated enquiries. No external requests sent.");
}

check().catch((error) => { console.error(error); process.exitCode = 1; });
