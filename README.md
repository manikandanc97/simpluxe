# Simpluxe

Keep It Simple. Make It Luxury.

A Next.js website for Simpluxe, with services, portfolio, about, contact, ideas, and policy pages.

## Stack

- Next.js 16 App Router, React 19, and TypeScript
- Tailwind CSS v4 with shared tokens and utilities in app/globals.css
- Base UI primitives and @animateicons/react icons
- Motion for interactions and animation
- Local Satoshi, Inter, Manrope, and Caveat fonts
- Cloudinary for image delivery
- Zod validation and Supabase for lead capture
- Vercel Analytics and Speed Insights in production

## Setup

Use Node.js 20.9 or newer and npm.

```powershell
npm.cmd ci
Copy-Item .env.example .env.local
npm.cmd run dev
```

On shells without the PowerShell script restriction, npm can be used directly.
Open http://localhost:3000.

Set NEXT_PUBLIC_SITE_URL to the public site origin (http://localhost:3000 for local metadata). The default production origin is https://simpluxe.in.
The example includes the Cloudinary cloud serving the existing site assets. Change it only when those assets exist in another cloud.
Set NEXT_PUBLIC_CONTACT_EMAIL and NEXT_PUBLIC_CONTACT_PHONE for direct contact. Optional NEXT_PUBLIC_TWITTER_URL, NEXT_PUBLIC_LINKEDIN_URL, NEXT_PUBLIC_INSTAGRAM_URL, NEXT_PUBLIC_YOUTUBE_URL, and NEXT_PUBLIC_GITHUB_URL configure social profiles; blank values hide their links. NEXT_PUBLIC_WHATSAPP_NUMBER is optional and should include the country code; leave it blank to hide WhatsApp links.

Form submissions require Supabase. Cloudinary credentials configure images and cannot save form submissions. Without Supabase credentials, submissions return an error with direct contact options in both development and production; they are never reported as saved.

### Production form setup

1. Create a Supabase project and wait for it to finish provisioning.
2. Run [supabase/leads.sql](supabase/leads.sql) in that project's SQL editor to create the `public.leads` table.
3. Copy the project URL and a server secret key (`sb_secret_...`, recommended) from Settings > API Keys in the Supabase dashboard. Set `SUPABASE_URL` and `SUPABASE_SECRET_KEY` in `.env.local`. The existing `NEXT_PUBLIC_SUPABASE_URL` and legacy `SUPABASE_SERVICE_ROLE_KEY` names are also supported. Keep the secret key server-side; do not use an anon/publishable key or a `NEXT_PUBLIC_` prefix for it. Keep real secrets out of `.env.example`. RLS has no public access policies.
4. In Vercel's project settings, add those same two variables to the **Production** environment. Add them to **Preview** too if preview forms need to work. Local `.env.local` values are not uploaded to Vercel.
5. Redeploy the production site after saving the variables. Environment changes do not update an existing deployment. The production build now fails with the missing variable names if either required value is absent.
6. Run `npm.cmd run check:leads` to verify credentials and required table columns without reading or creating enquiry rows. Then submit the form and verify that a new row appears in Supabase's `leads` table.

For team email alerts and customer email acknowledgements, follow [notification setup](supabase/NOTIFICATIONS.md). Notifications use Resend's free sending tier and a durable Supabase queue. Team emails include a manual WhatsApp contact link when the customer supplies an international phone number. Automatic WhatsApp alerts are not part of this free setup.

For bot protection, create a [Cloudflare Turnstile widget](https://developers.cloudflare.com/turnstile/get-started/widget-management/dashboard/) with `simpluxe.in` and `www.simpluxe.in` allowed. Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` to `.env.local` and the hosting environment, then rebuild. Keep the secret server-side. The shared form verifies each token through Siteverify before saving, checks the `lead` action and production hostname, and renews the widget after failed submissions. Local development uses the same real keys. In Cloudflare, choose a Managed widget and authorize `localhost` and `127.0.0.1` when testing locally. The widget displays Cloudflare's original light theme and standard size, with compact size on narrow screens. Managed mode decides whether a visitor needs to click the human-verification checkbox or can be verified automatically. Every environment verifies the `lead` action; production also verifies the hostname from `NEXT_PUBLIC_SITE_URL`.

Production requires both Turnstile keys; missing keys block submissions, and Vercel production builds check them before deployment. Both development and production call Siteverify with the configured real secret and reject test keys. Both modes retain honeypot, minimum completion time, input validation, and a database-backed limit of three enquiries per email in 15 minutes. Setting only one production key blocks submissions rather than bypassing verification. The email limit is supplemental and does not provide an atomic limit against concurrent floods; use hosting-level rate limits for that. Turnstile outages return a retryable error; widget failures wait for the visitor to retry rather than repeatedly logging the same error. The form requires an explicit enquiry-processing consent checkbox; it does not request marketing consent.

`@supabase/supabase-js` is already a project dependency. This form uses a server-only client without user login or cookie sessions, so `@supabase/ssr` and the authentication tutorial's session/proxy setup are not required. Restart `npm.cmd run dev` after changing local environment variables.

The "submission service is temporarily unavailable" message means at least one required Supabase variable is missing from the running deployment. Server logs name missing variables without printing secrets or enquiry data. If configuration exists but the insert fails, logs include the Supabase error code; check that the table exists and that the service role key belongs to the same project as the URL.

## Structure

- app/: routes, root layout, global CSS, metadata, sitemap, and robots
- components/layout/: navigation, footer, and floating contact actions
- components/providers/: motion and scroll restoration
- components/pages/: page views
- components/sections/: homepage sections and their visuals
- components/services/, work/, about/, contact/: page-specific components
- components/leads/: shared lead form, dialog, and provider
- components/ui/: shared UI primitives
- lib/content/: site identity, navigation, services, projects, and section copy
- lib/visuals/: background patterns and floating badge positioning
- lib/leads/: validation and submission Server Action
- hooks/: shared hooks
- types/: shared content types
- public/: local fonts (website images and technology logos are served by Cloudinary)
- supabase/leads.sql: lead storage schema

All website copy lives in lib/content/, with one file per area. Edit services.ts for service descriptions, headings, and mockup text; about.ts for About; contact.ts for Contact; projects.ts for project cards and details. The content directory's [editing guide](lib/content/README.md) lists every file.

Edit common.ts for shared buttons, page names, and technology labels. Page files reference these values, so a shared wording change applies everywhere. Edit site.ts for identity, headline fragments, contact settings, availability, and response time. SEO lives in metadata.ts; legal policies in legal.ts; form options and messages in leads.ts.

Content modules export data and pure text formatters usable by server and client components. Preserve intentional spaces beside highlighted spans and links. Background patterns and badge positioning live in lib/visuals/. Run npm.cmd run check:copy after editing to catch inline presentation strings and repeated shared labels.
Process scenes share Tailwind utilities in components/sections/how-we-work/visuals/step-visual-classes.ts.

## Verification

```powershell
npm.cmd run check
npm.cmd run build
```

Pages are statically prerendered; lead capture still requires a server runtime for the Server Action. This is not a static-export deployment.

`check` runs Next.js/React/TypeScript lint rules with zero warnings, centralized copy checks, file and asset consistency checks, TypeScript, and Knip's unused file/export/dependency scan. Individual commands are `lint`, `check:copy`, `check:consistency`, `typecheck`, and `check:unused`.

Use lowercase kebab-case for source and asset filenames, PascalCase for React components, and explicit type-only imports. Keep local fonts named by family and weight (for example, `inter-400.woff2`). Use semicolons and double quotes in JavaScript and TypeScript. Keep Tailwind class strings free of bracket syntax; use standard utilities or shared tokens in `app/globals.css`. Every file in `public/` must have a source reference, and duplicate assets fail the consistency check. Private environment files and generated build/cache files stay ignored by Git.

Private and proprietary - Simpluxe.
