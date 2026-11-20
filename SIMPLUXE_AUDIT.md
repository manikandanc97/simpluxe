# Simpluxe SEO, GEO/AEO & Organic Lead Audit

Audit date: 19 November 2026. Scope: repository plus limited read-only production checks. No Search Console, GBP, Vercel, Supabase, email-provider, CRM, or analytics account data was available.

## A. Executive summary

Simpluxe has a sound technical SEO base: Next.js 16 App Router, pre-renderable routes, unique page metadata/canonicals, crawlable navigation, a 27-URL sitemap, permissive robots rules, structured data, optimized images, and a secure lead form. The root canonical does **not** override child pages: every indexable page supplies its own canonical, confirmed on two production samples. No P0 issue was verified. The largest opportunity is editorial and commercial credibility. The live sitemap exposes ten short Insights URLs although the business context says real blogs are planned; their publication status must be reconciled before search engines treat placeholders as the brand's expertise. Eight services contain strong FAQ data that is never rendered, while portfolio cards provide little case-study evidence. Local/global entity facts are incomplete, and lead interactions are not explicitly tracked. Prioritize index control, service FAQs, business facts, case studies, and conversion events before expanding content.

## B. Existing features working correctly

- Installed Next.js 16.4.2/React 19.2.8, App Router, static pages and statically enumerated dynamic service/article routes (`package.json:19-33`, `app/expertise/[slug]/page.tsx:21-24`, `app/insights/[slug]/page.tsx:15-18`). No `vercel.json`, middleware, or proxy; Vercel uses framework defaults.
- Central metadata helper emits unique title, description, canonical, OG and Twitter tags (`lib/metadata.ts:14-46`). Production service/article samples had correct self-canonicals. Therefore root `canonical: "/"` is safely overridden (`app/layout.tsx:27-31`).
- Production `robots.txt` and `sitemap.xml` returned 200; wildcard crawling is allowed and the sitemap contains all 27 generated URLs (`app/robots.ts:4-11`, `app/sitemap.ts:8-76`). This also allows major search and AI crawlers that honor `User-agent: *`.
- Validly serialized JSON-LD covers Organization, WebSite, Service, BreadcrumbList, AboutPage, ContactPage and BlogPosting; `<` is escaped (`lib/schema.ts:15-147`, `components/shared/json-ld.tsx:10-17`). No harmful duplicate schema was found.
- Semantic H1 is centralized in page heroes; internal navigation, breadcrumbs and service links are crawlable (`components/ui/page-hero.tsx:34-78`, `components/layout/navbar-services-menu.tsx:129`). Unknown production URL returned HTTP 404; custom UI exists (`app/not-found.tsx:6-29`).
- Lead capture has client/server Zod validation, consent, honeypot, timing check, Turnstile hostname/action validation, durable Supabase storage, database-backed throttling and queued notification retries (`components/leads/lead-form.tsx:114-375`, `lib/leads/actions.ts:22-156`, `lib/leads/security.ts:5-59`, `supabase/lead-security.sql:9-44`). Secrets are server-only and `.env*` is ignored; only `.env.example` is tracked (`.gitignore:36-38`).
- Next Image/custom Cloudinary delivery, self-hosted Geist, dynamic imports, Vercel Analytics/Speed Insights, skip link and reduced-motion support are present (`app/layout.tsx:20-25,72-99`, `components/providers/motion-provider.tsx:7-13`).

## C. Actionable issues

| Priority | Finding | Evidence | Impact | Recommended fix |
|---|---|---|---|---|
| P1 | Publication state conflicts with the brief: **10**, not one, Insights articles are statically generated, indexable and in the live sitemap. Each is a short, similarly structured article. | `lib/data/insights.ts:24-35`; `app/sitemap.ts:52-57`; `app/insights/[slug]/page.tsx:15-31` | Placeholder/thin content can dilute expertise and waste crawl/index signals. | Identify approved articles. For every placeholder, remove from sitemap/navigation and apply `noindex` or unpublish; expand approved posts with original evidence, named expertise, examples, references and service CTA before requesting indexing. |
| P1 | All eight services define four FAQs, but service pages never render them; no FAQPage schema exists. | `lib/data/services/foundation.ts:103-119`; `components/services/explorer.tsx:43-72`; `lib/schema.ts:88-114` | Loses high-intent answers, objection handling, long-tail relevance and quotable AEO passages. | Render service-specific FAQs in visible HTML; add matching FAQPage JSON-LD only for displayed answers. Do not expect Google FAQ rich results. |
| P1 | Entity/local facts are incomplete: visible `location` and response time are empty; address lacks locality/postcode; Service schema says India only while copy claims worldwide delivery. No LocalBusiness subtype is present. | `lib/data/site.ts:18-23`; `lib/schema.ts:35-45,109-112`; `lib/data/about.ts:102-109` | Weak/contradictory entity resolution for local, India-wide and global queries; weaker trust near conversion. | After GBP correction, define exact public business name, address/service area, locality, postcode, hours, languages, response SLA and global eligibility. Reconcile visible copy, Organization/appropriate LocalBusiness schema, Service `areaServed`, GBP and citations. |
| P1 | Vercel page analytics exists, but no explicit lead events are implemented. Lead `source` is a coarse enum and does not retain landing route/UTM/referrer. | `app/layout.tsx:94-98`; `lib/leads/schema.ts:8-19,71`; `components/leads/lead-form.tsx:164-169` | Cannot attribute qualified enquiries or optimize organic landing pages/CTAs. | Define events for CTA/form open, form start/error/success, WhatsApp/email/phone click; persist landing path and consent-safe UTM/referrer with leads. Avoid PII in analytics payloads. |
| P1 | `/creations` calls items “case studies,” but exposes cards with category, stack and slogan-like result only; no project detail routes, problem/process/outcome/testimonial evidence. | `lib/data/metadata.ts:34-37`; `lib/data/projects.ts:9-42`; `components/work/project-template-card.tsx:65-80` | Limits commercial trust, service-topic depth and organic proof for qualified buyers. | Create permissioned case studies with client context, challenge, scope, service links, screenshots, measurable verified outcomes and testimonial/source; otherwise change the metadata claim from “case studies.” |
| P1 | Privacy copy does not match actual collection: it claims credentials/payment data but omits specific lead fields, processors, retention, rights and analytics/Turnstile disclosures. | `lib/data/legal.ts:11-18`; `lib/leads/schema.ts:21-85` | Consent/trust and compliance risk at the primary conversion point. | Have counsel align policy with actual form, Supabase, Vercel Analytics, Turnstile, Resend/Zoho, retention/deletion and applicable user rights; remove uncollected categories. |
| P2 | Article schema/social metadata are generic: `BlogPosting` lacks image, `dateModified`, URL-bearing author and language; metadata uses the same square logo and `website` OG type for every article. | `app/insights/[slug]/page.tsx:51-60`; `lib/metadata.ts:31-45` | Weaker social CTR and less complete article/entity signals. | Extend article metadata with its cover, `openGraph.type="article"`, published/modified times, author identity, canonical URL and complete BlogPosting fields. |
| P2 | Service metadata uses generic naming such as production “Websites Services”; local/industry intent and benefit differentiation are absent from titles. | `lib/data/services/copy.ts:20-23`; `app/expertise/[slug]/page.tsx:32-41` | Lower SERP clarity/CTR and weaker intent targeting. | Write unique, natural titles/descriptions per service based on validated target market (for example, “Website Development Company…” only if accurate); preserve self-canonicals. |
| P2 | Sitemap `lastModified` is hard-coded to 1 September 2026 for most commercial pages, regardless of real edits. | `app/sitemap.ts:6,11-45,59-63` | Sends unreliable freshness signals. | Source actual content modification dates or omit `lastModified` until maintained. |
| P2 | Homepage loads one preloaded and two additional eager collage images. No production CWV result was available. | `components/sections/hero/hero-collage.tsx:83-105` | Potential mobile bandwidth/LCP contention. | Measure field LCP/INP/CLS first; if implicated, keep only the true LCP image high priority and lazy-load decorative side images. |

No hreflang issue exists today: the site has one English version. Add hreflang only when real localized equivalents exist.

## D. Route-by-route SEO matrix

| Route(s) | Metadata/schema | Action |
|---|---|---|
| `/` | Unique canonical; Organization + WebSite | Add verified entity/local facts; retain visible FAQ. |
| `/creations` | Unique; Breadcrumb | Build real case studies or revise claim. |
| `/expertise` | Unique; Breadcrumb + 8 Services | Keep; consider an ItemList wrapper. |
| `/expertise/web-development` | Unique; Breadcrumb + Service | Naturalize title; render FAQ. |
| `/expertise/web-application-development` | Unique; Breadcrumb + Service | Render FAQ; add proof/use cases. |
| `/expertise/ecommerce-development` | Unique; Breadcrumb + Service | Render FAQ; link relevant case study. |
| `/expertise/mobile-app-development` | Unique; Breadcrumb + Service | Render FAQ; add platform proof. |
| `/expertise/saas-development` | Unique; Breadcrumb + Service | Render FAQ; add SaaS proof. |
| `/expertise/brand-identity` | Unique; Breadcrumb + Service | Render FAQ; add portfolio proof. |
| `/expertise/ui-ux-design` | Unique; Breadcrumb + Service | Render FAQ; add portfolio proof. |
| `/expertise/custom-software-development` | Unique; Breadcrumb + Service | Render FAQ; clarify target industries. |
| `/inside` | Unique; Breadcrumb + AboutPage | Add verified team/entity credentials and location. |
| `/connect` | Unique; Breadcrumb + ContactPage | Add response SLA/hours; track conversions. |
| `/insights` | Unique; Breadcrumb | Publish only approved editorial inventory. |
| `/insights/architecture-before-features`, `/designing-calm-business-software`, `/mvp-without-throwaway-code`, `/when-to-modernize-internal-tools`, `/api-first-product-foundations` | Unique; Breadcrumb + BlogPosting | Approve/expand or noindex/unpublish. |
| `/insights/design-tokens-at-scale`, `/scaling-saas-data-layers`, `/mobile-offline-first-architecture`, `/technical-debt-repayment-strategy`, `/observability-beyond-monitoring` | Unique; Breadcrumb + BlogPosting | Approve/expand or noindex/unpublish. |
| `/lab` | Unique; Breadcrumb | Keep indexed only if experiments demonstrate expertise and link services. |
| `/privacy`, `/terms` | Unique; Breadcrumb | Correct legal/business facts. |
| `/api/lead-notifications` | Authenticated GET/POST, not in sitemap | Keep non-discoverable; monitor scheduler authentication/errors. |

## E. Lead conversion funnel assessment

Discovery is broad (eight service routes, portfolio and articles), CTAs are persistent, and service CTAs prefill project type. Capture is robust but asks seven inputs plus consent and Turnstile, so monitor mobile abandonment before shortening. Delivery is designed well—atomic save, queue, team/customer emails and retries—but deployed migrations, cron and inbox delivery were not verified. Missing middle/bottom-funnel proof, response SLA and event attribution are the biggest conversion gaps. WhatsApp is conditional on production environment configuration; email and phone are public intentionally. Add consent-safe funnel events and a lead-quality outcome taxonomy (qualified, service, geography, budget band, won) before judging SEO by form counts.

## F. AI search readiness assessment

Crawler access, pre-renderable HTML, headings, breadcrumbs and factual JSON-LD are good. Answer readiness is moderate: service data contains concise deliverables, audiences and FAQs, but the strongest Q&A is not rendered. Entity readiness is weak-to-moderate because business name/location/service area/team credentials and external profiles are incomplete or environment-dependent. Publish consistent, verifiable facts; expose service FAQs; add author/reviewer identity and first-hand case evidence. Do not add unsupported claims or an `llms.txt` substitute for crawlable HTML.

## G. Prioritized implementation plan with dependencies

1. **Editorial gate:** owner classifies all ten Insights; noindex/unpublish placeholders, then update sitemap. Dependency: approved article inventory.
2. **Business fact sheet:** settle GBP address/name, service areas, hours, SLA, languages, team/author identities and social profiles. Dependency: GBP review/owner confirmation.
3. **Service AEO:** render stored FAQs, add matching schema, improve eight metadata sets and internal case-study links. Dependency: fact sheet and claim review.
4. **Proof layer:** produce permissioned case studies and testimonials; connect each to relevant services/articles. Dependency: client approval and verified outcomes.
5. **Measurement:** specify conversion events and persist landing/UTM context; create organic-qualified-lead reporting. Dependency: analytics/privacy decision.
6. **Technical polish:** article metadata/schema, accurate sitemap dates, then field-performance tuning. Dependency: approved content and baseline data.

## H. Files requiring changes

Likely: `lib/data/site.ts`, `lib/data/metadata.ts`, `lib/metadata.ts`, `lib/schema.ts`, `app/sitemap.ts`, `app/insights/[slug]/page.tsx`, `lib/data/insights*.ts`, `components/services/explorer.tsx`, a reusable FAQ component, all `lib/data/services/*.ts`, `lib/data/projects.ts`, work routes/components, lead schema/form/action, CTA/contact components, and `lib/data/legal.ts`. No changes are required in `app/layout.tsx` for the child-canonical concern.

## I. Missing business information/questions

- Which of the ten Insights are approved, original publications, and who is accountable as author/reviewer?
- Exact legal/trading name, founding year, team names/credentials, public address/locality/postcode, GBP URL, hours, languages and target local cities?
- Is the office customer-facing, and is worldwide delivery currently available? Which countries are priority markets?
- Confirm response SLA and “Taking on new projects”; provide canonical social/profile URLs.
- Which portfolio clients permit named case studies, testimonials and quantified outcomes?
- Required lead budget/timeline qualification, privacy retention period, controller contact and desired CRM/analytics system?

## J. Validation checklist and baseline metrics

- Crawl production after release: status, indexability, canonical, titles/descriptions, H1, rendered text, links, sitemap membership and redirect chains for all 27 URLs; validate schema in Schema.org/Google tools.
- Verify real 404 metadata/noindex, legacy 308 redirects, `www`/HTTP/trailing-slash host normalization, OG previews and Turnstile on production/mobile.
- Run Lighthouse plus PageSpeed field data; record per-template LCP, INP, CLS, TTFB, JS and image bytes. Root live check was intermittently unavailable during this audit.
- In Search Console record indexed/excluded URLs, queries, landing pages, impressions, clicks, CTR, average position, crawl issues and branded/non-branded split—no values were inferred here.
- Test lead persistence, rate limits, cron queue, team/customer email inbox placement and WhatsApp; never use a real client's data for tests.
- Establish monthly baseline: organic sessions, CTA opens, form starts, validation failures, successful submissions, channel clicks, qualified leads by service/location, lead-to-meeting and lead-to-client rates. Keep counts separate from quality and revenue.
