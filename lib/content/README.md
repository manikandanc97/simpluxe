# Editing website content

Start with the file for the area you want to change. Each file contains its main content, headings, labels, and related visual text.

| Edit | File |
| --- | --- |
| Company name, headline, contact details, availability | `site.ts` |
| Shared buttons, page names, labels, technology names | `common.ts` |
| Navigation, footer, social links, mobile navigation | `layout.ts` |
| Homepage hero and developer illustration | `hero.ts` |
| About page | `about.ts` |
| Contact page and floating contact actions | `contact.ts` |
| Service descriptions, page headings, service mockups | `services.ts` |
| Projects, portfolio filters, project details | `projects.ts` |
| Process steps and their illustrations | `how-we-work.ts` |
| Philosophy and flow diagrams | `philosophy.ts` |
| Technology catalogues and category headings | `tech-stack.ts` |
| Questions and FAQ contact card | `faq.ts` |
| Homepage call to action | `cta.ts` |
| Ideas page and experiments | `lab.ts` |
| Form options, validation, success and error messages | `leads.ts` |
| Page SEO and social sharing image text | `metadata.ts` |
| Privacy and terms policies | `legal.ts` |
| Command menu, dialog labels, error pages, shared UI | `ui.ts` |

## Shared text

For example, `COMMON.actions.startProject` supplies the same button label to the hero, navigation, footer, and forms. Change it once in `common.ts` to update all of them.

Page-specific wording stays in the page's file. A reference to `COMMON` means that wording is shared; a plain string belongs to that page. Project detail headings inherit their project name from `PROJECTS`.

Keep deliberate spaces in headline fragments. The hero and footer use `TAGLINE` in `site.ts`, and SEO uses the same brand name and tagline. Form options are shared with the validation schema, so changing an option changes the accepted value too.

Background geometry and animation positioning live in `lib/visuals/`.

## Check changes

```powershell
npm.cmd run check:copy
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
```

The copy check catches inline presentation text and shared labels copied into page content. Keep numerical metrics and project-specific claims with their own content so they can be edited independently.
