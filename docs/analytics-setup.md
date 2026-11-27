# Simpluxe Google Analytics 4 setup

The website loads one direct GA4 `gtag.js` script with Next.js `next/script`. There is no Google Tag Manager container, duplicate analytics loader, or publishing step to maintain.

## Configuration

- GA4 Measurement ID: `G-0YKBLR3256`
- Vercel production variable: `NEXT_PUBLIC_GA_ID=G-0YKBLR3256`

Set `NEXT_PUBLIC_GA_ID` for the **Production** environment only. Vercel production deployments require `VERCEL_ENV` to be `production`, so analytics is absent from development and preview deployments. Redeploy production after changing the variable because Next.js embeds public variables at build time.

The Google Analytics script loads only after the visitor grants analytics consent. Declining consent prevents it from loading. Withdrawing consent sends a denied Consent Mode update and reopens the preference prompt.

## Page tracking

The application disables the tag's automatic initial page view and sends one explicit `page_view` after consent for each pathname visited through the Next.js App Router. The event includes `page_path` and a query-free `page_location`.

In the GA4 web stream's Enhanced Measurement page-view advanced settings, disable **Page changes based on browser history events**. The application owns SPA navigation tracking, so enabling Google's history tracking can duplicate page views.

## Custom events

The application sends these events directly to GA4 after consent:

| Event | Non-personal parameters |
| --- | --- |
| `page_view` | `page_path`, query-free `page_location` |
| `service_view` | `page_path`, `page_type`, `service_slug` |
| `article_view` | `page_path`, `page_type`, `article_slug` |
| `whatsapp_click` | `page_path`, `contact_method`, `link_location` |
| `phone_click` | `page_path`, `contact_method`, `link_location` |
| `email_click` | `page_path`, `contact_method`, `link_location` |
| `contact_form_submit` | `form_id`, `form_source`, `project_type` |
| `generate_lead` | `form_id`, `form_source`, `project_type` |
| `primary_cta_click` | `page_path`, `cta_name`, `cta_location` |
| `portfolio_interaction` | `page_path`, `interaction_type`, `project_id` |

`contact_form_submit` means a valid form was sent to the backend. `generate_lead` is emitted only after the backend successfully persists the enquiry. Invalid, rejected, spam, rate-limited, verification-failed, configuration-failed, database-failed, and duplicate client notifications do not produce a successful lead event.

Do not add names, email addresses, phone numbers, companies, enquiry descriptions, link text containing contact details, or URL query strings to analytics events.

## GA4 property steps

1. Confirm web stream `G-0YKBLR3256` is assigned to `https://simpluxe.in`.
2. Keep Enhanced Measurement enabled if desired, but disable its **Page changes based on browser history events** option because the application tracks Next.js navigation directly.
3. After a test `generate_lead` appears, open **Admin -> Data display -> Events** and enable **Mark as key event**. If it has not appeared, create `generate_lead` under **Admin -> Data display -> Key events**.
4. Do not mark `contact_form_submit` as the lead key event because it represents an attempt rather than confirmed persistence.
5. Configure GA4 data retention and internal-traffic filters according to the organization's privacy policy.

No manual Google tag, data-layer variable, custom trigger, or GA4 event tag is needed.

## Verification

1. Deploy production with `NEXT_PUBLIC_GA_ID` configured.
2. Decline analytics and confirm browser Network tools show no `gtag/js` or GA collection request.
3. Reopen **Cookie settings**, accept analytics, and confirm exactly one Google Analytics script loads.
4. Open **GA4 -> Admin -> DebugView** using a browser with the Google Analytics Debugger enabled. Navigate between internal pages without reloading and confirm one `page_view` per pathname.
5. Visit a service page and article, then exercise contact links, CTAs, and portfolio controls. Confirm the custom events and non-personal parameters listed above.
6. Submit invalid data and force a failed backend response; confirm there is no `generate_lead`. Submit one authorized test enquiry successfully and confirm one `contact_form_submit` and one `generate_lead`.
7. Confirm events appear in **Reports -> Realtime**. Realtime can lag briefly, so use DebugView and browser Network tools for immediate diagnostics.

## Google Reviews status

Reviews are managed in `lib/data/google-reviews.ts` and normalized locally. The section makes no Places API request, retry, or paid Google Cloud call. Only manually verified, permissioned customer reviews should be added; no rating or customer review content is fabricated.
