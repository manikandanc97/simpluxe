// Verify the deployed database schema without reading or creating enquiry rows.
const { createRequire } = require("node:module");
const nextRequire = createRequire(require.resolve("next/package.json"));
const { loadEnvConfig } = nextRequire("@next/env");
const { createClient } = require("@supabase/supabase-js");

loadEnvConfig(process.cwd());

async function checkLeads() {
  const url = process.env.SUPABASE_URL?.trim()
    || process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SECRET_KEY?.trim()
    || process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!url || !key) {
    throw new Error("Set SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SECRET_KEY (or SUPABASE_SERVICE_ROLE_KEY) in .env.local.");
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    throw new Error("Invalid Supabase URL. Copy the project URL without backslashes.");
  }
  if (!["https:", "http:"].includes(parsedUrl.protocol) || url.includes("\\")) {
    throw new Error("Invalid Supabase URL. Use an HTTP(S) project URL without backslashes.");
  }

  let isServerKey = key.startsWith("sb_secret_");
  if (!isServerKey) {
    try {
      isServerKey = JSON.parse(Buffer.from(key.split(".")[1], "base64url").toString()).role === "service_role";
    } catch {
      // The API verifies the actual key; this only catches wrong key types.
    }
  }
  if (!isServerKey) {
    throw new Error("Lead capture needs a server secret/service_role key, not a publishable/anon key.");
  }

  const client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { error, status } = await client.from("leads")
    .select("name,email,phone,company,project_type,goal,stage,description,source,blueprint_summary", { head: true })
    .limit(0)
    .abortSignal(AbortSignal.timeout(15000));

  if (error) {
    console.error(`Lead database check failed (HTTP ${status}, code ${error.code || "unavailable"}).`);
    if (["PGRST205", "42P01", "42703", "PGRST204"].includes(error.code)) {
      console.error("Run supabase/leads.sql in the project's SQL editor and check all required columns exist.");
    } else if ([401, 403].includes(status)) {
      console.error("Check that the server key belongs to this project and can access public.leads.");
    } else {
      console.error("Check project availability, network access, and the Supabase API logs.");
    }
    process.exitCode = 1;
    return;
  }

  console.log("Lead database check passed: server key accepted and all required leads columns available. No enquiry rows read or created. Submit the form to verify saving.");
}

checkLeads().catch((error) => {
  // Only locally generated validation messages are printed; API errors stay above.
  console.error(error instanceof Error ? error.message : "Lead database check failed.");
  process.exitCode = 1;
});
