import { CLOUDINARY_BRAND_MARK, cloudinaryImageUrl } from "../cloudinary";
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

const EMAIL_THEME = {
  canvas: "#F5F5F7",
  card: "#FFFFFF",
  heading: "#0F172A",
  foreground: "#1E293B",
  body: "#475569",
  muted: "#64748B",
  primary: "#0369A1",
  accent: "#0EA5E9",
  surface: "#F0F9FF",
  border: "#E2E8F0",
} as const;

const paragraphStyle = `margin:0 0 18px;font-size:15px;line-height:1.75;color:${EMAIL_THEME.body}`;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

function websiteUrl() {
  try {
    const url = new URL(SITE.url);
    if (["http:", "https:"].includes(url.protocol)) return url.href;
  } catch {
    // Keep links usable if the configured public origin is invalid.
  }
  return "https://simpluxe.in";
}

function brandLogoUrl() {
  return cloudinaryImageUrl(CLOUDINARY_BRAND_MARK, {
    width: 96,
    format: "png",
    quality: "auto",
  });
}

function actionButton(label: string, href: string, secondary = false) {
  const background = secondary ? EMAIL_THEME.card : EMAIL_THEME.primary;
  const color = secondary ? EMAIL_THEME.primary : EMAIL_THEME.card;
  return `<a href="${escapeHtml(href)}" style="display:inline-block;padding:12px 18px;border:1px solid ${EMAIL_THEME.primary};border-radius:10px;background:${background};color:${color};font-size:13px;font-weight:700;line-height:18px;text-decoration:none">${escapeHtml(label)}</a>`;
}

function frame(title: string, eyebrow: string, preheader: string, body: string, reference: string) {
  const siteUrl = websiteUrl();
  const escapedSiteUrl = escapeHtml(siteUrl);
  const hostname = escapeHtml(new URL(siteUrl).hostname);
  const logoUrl = escapeHtml(brandLogoUrl());

  // Tables and inline styles preserve the design in clients that strip embedded CSS.
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><title>${escapeHtml(title)}</title>
<style>@media only screen and (max-width:620px){.email-shell{width:100%!important}.email-pad{padding:24px 20px!important}.email-actions a{display:block!important;text-align:center!important;margin:0 0 10px!important}}</style></head>
<body style="margin:0;padding:0;background:${EMAIL_THEME.canvas};font-family:Arial,Helvetica,sans-serif;color:${EMAIL_THEME.foreground};-webkit-text-size-adjust:100%;text-size-adjust:100%">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${EMAIL_THEME.canvas}"><tr><td align="center" style="padding:32px 12px">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${EMAIL_THEME.card}" class="email-shell" style="width:100%;max-width:600px;border:1px solid ${EMAIL_THEME.border};border-radius:18px;overflow:hidden;box-shadow:0 12px 40px rgba(15,23,42,0.08)">
<tr><td bgcolor="${EMAIL_THEME.accent}" height="6" style="height:6px;font-size:0;line-height:0;background:linear-gradient(90deg,${EMAIL_THEME.primary},${EMAIL_THEME.accent})">&nbsp;</td></tr>
<tr><td class="email-pad" style="padding:26px 30px;border-bottom:1px solid ${EMAIL_THEME.border}">
<a href="${escapedSiteUrl}" style="display:inline-block;text-decoration:none" aria-label="${escapeHtml(SITE.name)} home"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td width="46" valign="middle"><img src="${logoUrl}" width="42" height="41" alt="${escapeHtml(SITE.name)}" style="display:block;width:42px;height:41px;border:0;border-radius:10px"></td><td valign="middle" style="padding-left:11px"><span style="font-size:21px;font-weight:800;line-height:25px;letter-spacing:-0.5px;color:${EMAIL_THEME.heading}">Simp<span style="color:${EMAIL_THEME.primary}">luxe</span></span><br><span style="font-size:10px;line-height:16px;color:${EMAIL_THEME.muted}">${escapeHtml(SITE.tagline)}</span></td></tr></table></a>
</td></tr>
<tr><td class="email-pad" style="padding:30px"><p style="margin:0 0 10px;font-size:10px;font-weight:700;line-height:16px;letter-spacing:1.6px;text-transform:uppercase;color:${EMAIL_THEME.primary}">${escapeHtml(eyebrow)}</p><h1 style="margin:0 0 22px;font-size:28px;line-height:1.25;letter-spacing:-0.8px;font-weight:800;color:${EMAIL_THEME.heading}">${escapeHtml(title)}</h1>${body}</td></tr>
<tr><td class="email-pad" bgcolor="${EMAIL_THEME.surface}" style="padding:20px 30px;border-top:1px solid ${EMAIL_THEME.border}"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td valign="top"><p style="margin:0 0 5px;font-size:11px;line-height:17px;color:${EMAIL_THEME.muted};word-break:break-all">Enquiry ref: ${escapeHtml(reference)}</p><a href="${escapedSiteUrl}" style="font-size:12px;font-weight:700;line-height:18px;color:${EMAIL_THEME.primary};text-decoration:none">${hostname}</a></td><td align="right" valign="top"><span style="font-size:11px;line-height:17px;color:${EMAIL_THEME.muted}">Keep It Simple.<br>Make It Luxury.</span></td></tr></table></td></tr>
</table><!--[if mso]></td></tr></table><![endif]-->
</td></tr></table></body></html>`;
}

function detailRow(label: string, value: string, href?: string) {
  const display = href
    ? `<a href="${escapeHtml(href)}" style="color:${EMAIL_THEME.primary};font-weight:700;text-decoration:none;word-break:break-word">${escapeHtml(value)}</a>`
    : escapeHtml(value);
  return `<tr><th align="left" valign="top" style="padding:11px 12px 11px 0;width:32%;border-bottom:1px solid ${EMAIL_THEME.border};font-size:12px;line-height:20px;font-weight:400;color:${EMAIL_THEME.muted}">${escapeHtml(label)}</th><td valign="top" style="padding:11px 0;border-bottom:1px solid ${EMAIL_THEME.border};font-size:14px;line-height:20px;color:${EMAIL_THEME.foreground};word-break:break-word">${display}</td></tr>`;
}

function section(label: string, value: string) {
  return `<p style="margin:24px 0 10px;font-size:12px;line-height:18px;font-weight:700;color:${EMAIL_THEME.heading}">${escapeHtml(label)}</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td bgcolor="${EMAIL_THEME.surface}" style="padding:18px;border:1px solid ${EMAIL_THEME.border};border-radius:10px;font-size:14px;line-height:1.75;color:${EMAIL_THEME.body};word-break:break-word">${escapeHtml(value).replace(/\r?\n/g, "<br>")}</td></tr></table>`;
}

export function createLeadEmail(lead: Enquiry, kind: "team_email" | "customer_email", replyTo: string) {
  if (kind === "customer_email") {
    const title = "Your project is in good hands.";
    const intro = [
      `Hi ${lead.name},`,
      "Thanks for considering Simpluxe. We've received your enquiry and the details are now with our team.",
      "We'll review your goals and follow up with a focused next step. If there is anything else we should know, simply reply to this email.",
    ];
    const projectCard = lead.project_type
      ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:22px 0"><tr><td bgcolor="${EMAIL_THEME.surface}" style="padding:17px 18px;border:1px solid ${EMAIL_THEME.border};border-left:4px solid ${EMAIL_THEME.accent};border-radius:10px"><p style="margin:0 0 5px;font-size:10px;line-height:16px;letter-spacing:1px;text-transform:uppercase;color:${EMAIL_THEME.muted}">Project category</p><p style="margin:0;font-size:16px;line-height:24px;font-weight:800;color:${EMAIL_THEME.primary}">${escapeHtml(lead.project_type)}</p></td></tr></table>`
      : "";
    const nextStep = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${EMAIL_THEME.heading}" style="margin:22px 0 0;border-radius:12px"><tr><td style="padding:20px"><p style="margin:0 0 7px;font-size:11px;font-weight:700;line-height:17px;letter-spacing:1px;text-transform:uppercase;color:#7DD3FC">What happens next</p><p style="margin:0;font-size:14px;line-height:22px;color:#E2E8F0">We review your requirements, shape the clearest path forward, and contact you with the next step.</p></td></tr></table>`;
    const body = intro.map((paragraph) => `<p style="${paragraphStyle}">${escapeHtml(paragraph)}</p>`).join("")
      + projectCard + nextStep
      + `<p style="margin:24px 0 0;font-size:14px;line-height:24px;color:${EMAIL_THEME.foreground}">Talk soon,<br><strong>The ${escapeHtml(SITE.name)} team</strong></p>`;

    return {
      subject: `${SITE.name}: We received your project enquiry`,
      text: [...intro, lead.project_type ? `Project category: ${lead.project_type}` : "",
        "Next: We'll review your requirements and contact you with a focused next step.",
        `Talk soon,\nThe ${SITE.name} team`, `Enquiry ref: ${lead.id}`, websiteUrl()].filter(Boolean).join("\n\n"),
      html: frame(title, "Enquiry received", "Your project enquiry is with the Simpluxe team.", body, lead.id),
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
  const title = "A new project opportunity.";
  const intro = `${lead.name} has reached out${lead.project_type ? ` about ${lead.project_type}` : ""}. Review the brief and follow up directly.`;
  const actions = `<table role="presentation" cellpadding="0" cellspacing="0" class="email-actions" style="margin:20px 0 4px"><tr><td style="padding:0 10px 10px 0">${actionButton("Reply by email", emailUrl)}</td>${whatsappUrl ? `<td style="padding:0 0 10px">${actionButton("Open WhatsApp", whatsappUrl, true)}</td>` : ""}</tr></table>`;
  const body = `<p style="${paragraphStyle}">${escapeHtml(intro)}</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:7px 0 12px"><p style="margin:0 0 6px;font-size:21px;line-height:29px;font-weight:800;color:${EMAIL_THEME.heading}">${escapeHtml(lead.name)}</p>${lead.project_type ? `<p style="margin:0;font-size:13px;line-height:20px;font-weight:700;color:${EMAIL_THEME.primary}">${escapeHtml(lead.project_type)}</p>` : ""}</td></tr></table>${actions}<table aria-label="Client details" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${contactRows}</table>${section("What they need", lead.description)}${lead.blueprint_summary ? section("Project brief", lead.blueprint_summary) : ""}<p style="margin:20px 0 0;font-size:11px;line-height:18px;color:${EMAIL_THEME.muted}">Source: ${escapeHtml(lead.source)}</p>`;

  return {
    subject: `${SITE.name}: New project enquiry`,
    text: intro + "\n\n" + details.map(([label, value]) => `${label}: ${value}`).join("\n\n")
      + `\n\nReply by email: ${emailUrl}`
      + (whatsappUrl ? `\n\nOpen WhatsApp: ${whatsappUrl}` : ""),
    html: frame(title, "New opportunity", `${lead.name} sent a new project enquiry.`, body, lead.id),
    reply_to: lead.email,
  };
}
