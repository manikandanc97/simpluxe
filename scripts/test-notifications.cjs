// Regression checks with mocked persistence and provider calls; never sends mail.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const lead = { id: "lead-1", name: "<script>Customer</script>", email: "customer@example.com",
  phone: "+91 8675748207", company: null, project_type: "Websites", goal: null,
  stage: null, description: "Build a website", source: "contact", blueprint_summary: null };
let jobs = [];
let requests = [];
let responses = [];
let smtpRequests = [];
let smtpResponses = [];
let queueError = false;
let afterCallbacks = [];
let schedulingFails = false;

const client = {
  async rpc() {
    if (queueError) return { error: { code: "PGRST202" } };
    return { data: jobs.filter((job) => job.status === "pending").map((job) => {
      job.status = "processing";
      job.lease_token = "lease-1";
      return { ...job };
    }) };
  },
  from(table) {
    let values;
    const conditions = {};
    const builder = {
      update(next) { values = next; return builder; },
      insert() { return builder; },
      eq(name, value) { conditions[name] = value; return builder; },
      select() { return builder; },
      async single() { return { data: lead }; },
      async maybeSingle() {
        const job = jobs.find((row) => Object.entries(conditions).every(([key, value]) => row[key] === value));
        if (!job || table !== "lead_notifications") return { data: null };
        Object.assign(job, values);
        return { data: { id: job.id } };
      },
    };
    return builder;
  },
};

const cache = new Map();
function load(file) {
  const resolved = path.resolve(file);
  if (cache.has(resolved)) return cache.get(resolved).exports;
  const module = { exports: {} };
  cache.set(resolved, module);
  const output = ts.transpileModule(fs.readFileSync(resolved, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText;
  function localRequire(name) {
    if (name === "server-only") return {};
    if (name === "@supabase/supabase-js") return { createClient: () => client };
    if (name === "nodemailer") return { createTransport(options) {
      return { async sendMail(payload) {
        smtpRequests.push({ options, payload });
        const response = smtpResponses.shift();
        if (response instanceof Error) throw response;
        return response || { messageId: "zoho-message-1" };
      } };
    } };
    if (name === "next/server") return { after(callback) {
      if (schedulingFails) throw new Error("Background context unavailable");
      afterCallbacks.push(callback);
    } };
    if (name.startsWith("@/")) return load(name.slice(2) + ".ts");
    if (name.startsWith(".")) return load(path.join(path.dirname(resolved), name + ".ts"));
    return require(name);
  }
  vm.runInNewContext(output, {
    module, exports: module.exports, require: localRequire, process, Date, Error,
    Buffer, Response, AbortSignal, URL, console: { error() {}, info() {} },
    fetch: async (url, options) => {
      assert.equal(url, "https://api.resend.com/emails");
      requests.push({ ...options, payload: JSON.parse(options.body) });
      const response = responses.shift();
      if (response === "timeout") throw new Error("Timeout");
      return new Response(JSON.stringify(response?.body || { id: "provider-1" }), { status: response?.status || 200 });
    },
  }, { filename: resolved });
  return module.exports;
}

function reset(kinds = ["team_email", "customer_email"]) {
  jobs = kinds.map((kind, index) => ({ id: `job-${index}`, lead_id: lead.id, kind,
    status: "pending", attempts: 0, first_attempt_at: null, email_payload: null }));
  requests = [];
  responses = [];
  smtpRequests = [];
  smtpResponses = [];
  queueError = false;
  afterCallbacks = [];
  schedulingFails = false;
  process.env.SUPABASE_URL = "https://example.supabase.co";
  process.env.SUPABASE_SECRET_KEY = "sb_secret_test";
  process.env.RESEND_API_KEY = "re_test";
  process.env.LEAD_EMAIL_FROM = "Simpluxe <enquiries@example.com>";
  process.env.LEAD_REPLY_TO_EMAIL = "team@example.com";
  process.env.ZOHO_SMTP_HOST = "smtp.zoho.in";
  process.env.ZOHO_SMTP_PORT = "465";
  process.env.ZOHO_SMTP_USER = "team@example.com";
  process.env.ZOHO_SMTP_PASSWORD = "app-password";
  process.env.ZOHO_TEAM_EMAIL = "team@example.com";
  process.env.CRON_SECRET = "test-cron-secret";
}

async function run() {
  reset();
  const { deliverLeadNotifications } = load("lib/leads/notifications.ts");
  let result = await deliverLeadNotifications();
  assert.equal(result.accepted, 2);
  assert.ok(jobs.every((job) => job.status === "accepted"));
  assert.equal(smtpRequests.length, 1);
  assert.equal(requests.length, 1);
  assert.equal(smtpRequests[0].options.host, "smtp.zoho.in");
  assert.equal(smtpRequests[0].options.secure, true);
  assert.equal(smtpRequests[0].payload.to[0], "team@example.com");
  assert.equal(smtpRequests[0].payload.replyTo, lead.email);
  assert.equal(requests[0].payload.to[0], lead.email);
  assert.equal(requests[0].payload.reply_to, "team@example.com");
  assert.doesNotMatch(smtpRequests[0].payload.html, /<script>/);
  assert.match(smtpRequests[0].payload.html, /&lt;script&gt;/);
  assert.match(smtpRequests[0].payload.html, /https:\/\/wa.me\/918675748207/);
  assert.match(smtpRequests[0].payload.html, /res\.cloudinary\.com\/drdl4pdnx\/image\/upload\/f_png,c_limit,w_288,q_auto\/simpluxe\/logo\/logo/);
  assert.match(requests[0].payload.html, /res\.cloudinary\.com\/drdl4pdnx\/image\/upload\/f_png,c_limit,w_288,q_auto\/simpluxe\/logo\/logo/);
  assert.doesNotMatch(requests[0].payload.text, /Build a website/);

  reset(["team_email"]);
  smtpResponses = [new Error("Timeout")];
  result = await deliverLeadNotifications();
  assert.equal(result.deferred, 1);
  assert.equal(jobs[0].status, "pending");
  assert.equal(jobs[0].attempts, 1);
  const original = smtpRequests[0].payload;
  process.env.ZOHO_TEAM_EMAIL = "changed@example.com";
  await deliverLeadNotifications();
  assert.deepEqual(smtpRequests[1].payload, original);

  reset();
  delete process.env.RESEND_API_KEY;
  delete process.env.ZOHO_SMTP_PASSWORD;
  result = await deliverLeadNotifications();
  assert.equal(result.deferred, 2);
  assert.equal(requests.length, 0);
  assert.ok(jobs.every((job) => job.attempts === 0));

  reset(["customer_email"]);
  responses = [{ status: 422 }];
  await deliverLeadNotifications();
  assert.equal(jobs[0].status, "failed");
  reset(["customer_email"]);
  responses = [{ status: 429 }];
  await deliverLeadNotifications();
  assert.equal(jobs[0].status, "pending");
  assert.equal(jobs[0].last_error, "resend_http_429");

  reset(["customer_email"]);
  responses = [{ status: 403, body: { name: "validation_error",
    message: "The example.com domain is not verified. Please add and verify your domain." } }];
  await deliverLeadNotifications();
  assert.equal(jobs[0].status, "failed");
  assert.equal(jobs[0].last_error, "resend_sender_domain_unverified");
  assert.doesNotMatch(jobs[0].last_error, /example.com/);
  reset(["customer_email"]);
  responses = [{ status: 403, body: { name: "validation_error",
    message: "You can only send testing emails to your own email address (private@example.com)." } }];
  await deliverLeadNotifications();
  assert.equal(jobs[0].last_error, "resend_testing_recipient_restricted");
  assert.doesNotMatch(jobs[0].last_error, /private@example.com/);

  reset(["team_email"]);
  const authError = new Error("Authentication failed");
  authError.code = "EAUTH";
  authError.responseCode = 535;
  smtpResponses = [authError];
  await deliverLeadNotifications();
  assert.equal(jobs[0].status, "failed");
  assert.equal(jobs[0].last_error, "zoho_smtp_authentication_failed");

  reset();
  jobs[0].attempts = 8;
  jobs[1].first_attempt_at = new Date(Date.now() - 21 * 3600000).toISOString();
  result = await deliverLeadNotifications();
  assert.equal(result.failed, 2);
  assert.equal(requests.length, 0);

  reset();
  const route = load("app/api/lead-notifications/route.ts");
  assert.equal((await route.POST(new Request("https://example.com/api/lead-notifications"))).status, 401);
  assert.equal(requests.length, 0);
  queueError = true;
  assert.equal((await route.POST(new Request("https://example.com/api/lead-notifications", {
    headers: { authorization: "Bearer test-cron-secret" },
  }))).status, 503);

  reset();
  const { submitLead } = load("lib/leads/actions.ts");
  const form = new FormData();
  for (const [key, value] of Object.entries({ firstName: "Test", lastName: "User", email: lead.email,
    phone: lead.phone, projectType: "Websites", description: lead.description,
    source: "contact", consent: "true", t: String(Date.now() - 10000) })) form.set(key, value);
  assert.equal((await submitLead({ ok: false }, form)).ok, true);
  queueError = true;
  await afterCallbacks[0](); // Queue/provider outages do not invalidate a saved lead.
  schedulingFails = true;
  assert.equal((await submitLead({ ok: false }, form)).ok, true);
  console.log("Notification regression checks passed: recipients, reply routing, escaped content, WhatsApp link, frozen idempotent retries, missing config, permanent/rate-limit failures, retry bounds, protected endpoint, and saved-lead success during delivery outages.");
}

run().catch((error) => { console.error(error); process.exitCode = 1; });
