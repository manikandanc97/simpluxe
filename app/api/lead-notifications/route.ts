import { timingSafeEqual } from "node:crypto";
import { deliverLeadNotifications } from "@/lib/leads/notifications";

export const runtime = "nodejs";
export const maxDuration = 180;

async function run(request: Request) {
  const secret = process.env.CRON_SECRET?.trim();
  if (!secret) return Response.json({ error: "Scheduler is not configured" }, { status: 503 });
  const actual = Buffer.from(request.headers.get("authorization") || "");
  const expected = Buffer.from(`Bearer ${secret}`);
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    return Response.json(await deliverLeadNotifications(), { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "Notification processing failed" }, { status: 503 });
  }
}

export const GET = run;
export const POST = run;
