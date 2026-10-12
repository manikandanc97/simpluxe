import { SITE } from "./site";

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  project_type: string | null;
  goal: string | null;
  stage: string | null;
  description: string;
  source: string;
  blueprint_summary: string | null;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

function frame(title: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#f8f5f6;font-family:Arial,sans-serif;color:#222"><div style="max-width:600px;margin:32px auto;padding:32px;background:#fff;border-radius:16px"><p style="color:#932f56;font-weight:bold">${escapeHtml(SITE.name)}</p><h1 style="font-size:24px">${escapeHtml(title)}</h1>${body}<hr style="border:0;border-top:1px solid #eee;margin-top:28px"><p style="color:#666;font-size:12px">${escapeHtml(SITE.tagline)}</p></div></body></html>`;
}

export function createLeadEmail(lead: Enquiry, kind: "team_email" | "customer_email", replyTo: string) {
  if (kind === "customer_email") {
    const title = "We've received your project enquiry";
    const paragraphs = [
      `Hi ${lead.name},`,
      "Thank you for reaching out to Simpluxe. Your project enquiry has been saved and our team will review it.",
      "We'll reply to discuss your requirements and the next steps. You can reply directly to this email if you'd like to add anything.",
      `Reference: ${lead.id}`,
      "The Simpluxe team",
    ];
    return {
      subject: `${SITE.name}: ${title}`,
      text: paragraphs.join("\n\n"),
      html: frame(title, paragraphs.map((paragraph) => `<p style="line-height:1.6">${escapeHtml(paragraph)}</p>`).join("")),
      reply_to: replyTo,
    };
  }

  const details = [
    ["Reference", lead.id], ["Name", lead.name], ["Email", lead.email],
    ["Phone", lead.phone], ["Company", lead.company], ["Project category", lead.project_type],
    ["Goal", lead.goal], ["Stage", lead.stage], ["Description", lead.description],
    ["Blueprint", lead.blueprint_summary], ["Source", lead.source],
  ].filter((entry): entry is [string, string] => !!entry[1]);
  // Only offer a WhatsApp link when the customer supplied an international number.
  const phone = lead.phone?.replace(/[\s().-]/g, "") || "";
  const whatsappUrl = /^\+[1-9]\d{7,14}$/.test(phone)
    ? `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent(`Hi ${lead.name}, this is Simpluxe following up on your project enquiry.`)}`
    : null;
  const title = "New project enquiry";
  return {
    subject: `${SITE.name}: ${title}`,
    text: details.map(([label, value]) => `${label}: ${value}`).join("\n\n")
      + (whatsappUrl ? `\n\nContact on WhatsApp: ${whatsappUrl}` : ""),
    html: frame(title, details.map(([label, value]) => `<p style="line-height:1.6;white-space:pre-wrap"><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value)}</p>`).join("")
      + (whatsappUrl ? `<p><a href="${escapeHtml(whatsappUrl)}" style="color:#932f56">Contact customer on WhatsApp</a></p>` : "")),
    reply_to: lead.email,
  };
}
