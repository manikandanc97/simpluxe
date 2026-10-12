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

const accent = "#932f56";
const paragraphStyle = "margin:0 0 18px;font-size:15px;line-height:1.75;color:#55515a";
const emailLogoUrl = "https://res.cloudinary.com/drdl4pdnx/image/upload/f_png,c_limit,w_288,q_auto/simpluxe/logo/logo";

function websiteUrl() {
  try {
    const url = new URL(SITE.url);
    if (["http:", "https:"].includes(url.protocol)) return url.href;
  } catch {
    // Keep links usable if the configured public origin is invalid.
  }
  return "https://simpluxe.in";
}

function frame(title: string, eyebrow: string, preheader: string, body: string, reference: string) {
  const siteUrl = escapeHtml(websiteUrl());
  const logoUrl = escapeHtml(emailLogoUrl);
  // Presentation tables and inline styles also work when email clients strip CSS.
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#f6f3f4;font-family:Arial,Helvetica,sans-serif;color:#211b20;-webkit-text-size-adjust:100%">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f6f3f4"><tr><td align="center" style="padding:28px 12px">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="max-width:600px;border:1px solid #eae3e6;border-radius:16px;overflow:hidden">
<tr><td bgcolor="${accent}" height="5" style="font-size:0;line-height:0">&nbsp;</td></tr>
<tr><td style="padding:28px;border-bottom:1px solid #f0eaed"><a href="${siteUrl}" style="display:inline-block;text-decoration:none"><img src="${logoUrl}" width="144" height="48" alt="${escapeHtml(SITE.name)}" border="0" style="display:block;width:144px;height:48px;max-width:100%;object-fit:contain;object-position:left center;color:${accent};font-size:20px;font-weight:700;line-height:48px;text-decoration:none"></a><p style="margin:7px 0 0;font-size:11px;line-height:18px;color:#837780">${escapeHtml(SITE.tagline)}</p></td></tr>
<tr><td style="padding:28px"><p style="margin:0 0 10px;font-size:10px;font-weight:700;line-height:16px;letter-spacing:2px;text-transform:uppercase;color:${accent}">${escapeHtml(eyebrow)}</p><h1 style="margin:0 0 22px;font-size:28px;line-height:1.25;letter-spacing:-0.8px;font-weight:700;color:#211b20">${escapeHtml(title)}</h1>${body}</td></tr>
<tr><td style="padding:20px 28px;border-top:1px solid #f0eaed"><p style="margin:0 0 8px;font-size:11px;line-height:18px;color:#8a7f87;word-break:break-all">Enquiry ref: ${escapeHtml(reference)}</p><a href="${siteUrl}" style="font-size:12px;line-height:18px;color:${accent};text-decoration:none">${escapeHtml(new URL(websiteUrl()).hostname)}</a></td></tr>
</table><!--[if mso]></td></tr></table><![endif]-->
</td></tr></table></body></html>`;
}

function detailRow(label: string, value: string, href?: string) {
  const display = href ? `<a href="${escapeHtml(href)}" style="color:${accent};text-decoration:none;word-break:break-word">${escapeHtml(value)}</a>` : escapeHtml(value);
  return `<tr><th align="left" valign="top" style="padding:10px 12px 10px 0;width:32%;border-bottom:1px solid #eee7eb;font-size:12px;line-height:20px;font-weight:400;color:#827680">${escapeHtml(label)}</th><td valign="top" style="padding:10px 0;border-bottom:1px solid #eee7eb;font-size:14px;line-height:20px;color:#211b20;word-break:break-word">${display}</td></tr>`;
}

function section(label: string, value: string) {
  return `<p style="margin:24px 0 10px;font-size:12px;line-height:18px;font-weight:700;color:#211b20">${escapeHtml(label)}</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td bgcolor="#f8f5f7" style="padding:18px;border:1px solid #eee7eb;border-radius:10px;font-size:14px;line-height:1.75;color:#55515a;word-break:break-word">${escapeHtml(value).replace(/\r?\n/g, "<br>")}</td></tr></table>`;
}

export function createLeadEmail(lead: Enquiry, kind: "team_email" | "customer_email", replyTo: string) {
  if (kind === "customer_email") {
    const title = "Thanks for reaching out.";
    const paragraphs = [
      `Hi ${lead.name},`,
      "We've received your enquiry. Thanks for considering Simpluxe for your project.",
      "Our team will review your requirements and get back to you with the next steps.",
      "Have something to add? Just reply to this email.",
    ];
    return {
      subject: `${SITE.name}: Thanks for reaching out`,
      text: [...paragraphs, lead.project_type ? `Your project: ${lead.project_type}` : "",
        `Talk soon,\nThe ${SITE.name} team`, `Enquiry ref: ${lead.id}`, websiteUrl()].filter(Boolean).join("\n\n"),
      html: frame(title, "Enquiry received", "Your enquiry is with us. We'll be in touch with the next steps.",
        paragraphs.map((paragraph) => `<p style="${paragraphStyle}">${escapeHtml(paragraph)}</p>`).join("")
        + (lead.project_type ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:22px 0"><tr><td bgcolor="#f8f5f7" style="padding:16px 18px;border:1px solid #eee7eb;border-radius:10px"><p style="margin:0 0 5px;font-size:10px;line-height:16px;letter-spacing:1px;text-transform:uppercase;color:#827680">Your project</p><p style="margin:0;font-size:16px;line-height:24px;font-weight:700;color:${accent}">${escapeHtml(lead.project_type)}</p></td></tr></table>` : "")
        + `<p style="margin:24px 0 0;font-size:14px;line-height:24px;color:#211b20">Talk soon,<br><strong>The ${escapeHtml(SITE.name)} team</strong></p>`, lead.id),
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
  const emailUrl = `mailto:${encodeURIComponent(lead.email)}?subject=${encodeURIComponent("Re: your Simpluxe project enquiry")}`;
  const contactRows = [detailRow("Email", lead.email, emailUrl),
    lead.phone ? detailRow("Phone", lead.phone, /^\+?\d{5,15}$/.test(phone) ? `tel:${phone}` : undefined) : "",
    lead.company ? detailRow("Company", lead.company) : "",
    lead.goal ? detailRow("Goal", lead.goal) : "",
    lead.stage ? detailRow("Stage", lead.stage) : ""].join("");
  const title = "A new project enquiry.";
  const intro = "A potential client has reached out. Here's what they have in mind.";
  const body = `<p style="${paragraphStyle}">${escapeHtml(intro)}</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:8px 0 12px"><p style="margin:0 0 6px;font-size:20px;line-height:28px;font-weight:700;color:#211b20">${escapeHtml(lead.name)}</p>${lead.project_type ? `<p style="margin:0;font-size:13px;line-height:20px;font-weight:700;color:${accent}">${escapeHtml(lead.project_type)}</p>` : ""}</td></tr></table><table aria-label="Client details" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${contactRows}</table>${section("What they need", lead.description)}${lead.blueprint_summary ? section("Project brief", lead.blueprint_summary) : ""}<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px"><tr><td bgcolor="${accent}" style="border-radius:8px"><a href="${escapeHtml(emailUrl)}" style="display:inline-block;padding:13px 22px;border:1px solid ${accent};border-radius:8px;font-size:14px;font-weight:700;line-height:20px;color:#ffffff;text-decoration:none">Reply to client</a></td></tr></table>${whatsappUrl ? `<p style="margin:14px 0 0;font-size:13px;line-height:20px"><a href="${escapeHtml(whatsappUrl)}" style="color:${accent};text-decoration:underline">Contact on WhatsApp</a></p>` : ""}<p style="margin:20px 0 0;font-size:11px;line-height:18px;color:#8a7f87">Source: ${escapeHtml(lead.source)}</p>`;
  return {
    subject: `${SITE.name}: New project enquiry`,
    text: intro + "\n\n" + details.map(([label, value]) => `${label}: ${value}`).join("\n\n")
      + (whatsappUrl ? `\n\nContact on WhatsApp: ${whatsappUrl}` : ""),
    html: frame(title, "New opportunity", `${lead.name} has an enquiry${lead.project_type ? ` about ${lead.project_type}` : ""}.`, body, lead.id),
    reply_to: lead.email,
  };
}
