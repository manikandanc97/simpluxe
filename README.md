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

For persisted lead capture, configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, then run supabase/leads.sql in the Supabase SQL editor. Keep the service role key server-side. RLS has no public access policies.
Without Supabase credentials, development submissions log to the server console. Production submissions return an error with direct contact options.

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
npm.cmd run lint
npm.cmd run check:copy
npx.cmd tsc --noEmit
npx.cmd knip --no-progress
npm.cmd run build
```

Pages are statically prerendered; lead capture still requires a server runtime for the Server Action. This is not a static-export deployment.

Private and proprietary - Simpluxe.
