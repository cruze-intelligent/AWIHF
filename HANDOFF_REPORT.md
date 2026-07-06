# AWIHF Website Handoff Report

Date: July 6, 2026  
Project: Acholi Women in Health Foundation Website  
Repository path: `D:\Users\HUSSEIN\DevSpace\Projects\AWIHF\website`

## 1. Current Status

The AWIHF website is now in a deployment-ready engineering state from a build, lint, and TypeScript perspective.

The recent work focused on correcting the gap between implemented code and browser-visible functionality. The actual running project directory has now been updated, not the duplicate workspace copy.

Current verification status:

- `npm run lint`: Passed
- `npm run build`: Passed
- `.\node_modules\.bin\tsc.cmd --noEmit`: Passed
- `/impact/report`: Present in the production route manifest
- `/impact`: Builds successfully
- `/donate`: Builds successfully
- `/studio/[[...index]]`: Builds successfully

## 2. Primary Issue Resolved

The deployed/running website did not reflect previous implementation summaries because changes had been applied to a duplicate workspace at:

`D:\Users\HUSSEIN\Documents\AWIHF`

The actual running project is:

`D:\Users\HUSSEIN\DevSpace\Projects\AWIHF\website`

All final corrections were applied to the actual project directory.

## 3. New Route Added

### `/impact/report`

A dedicated Impact Report page has been created.

The page includes:

- Annual Impact Report hero section
- Executive summary
- Key statistics
- 2025 programme phases
- Remaining gaps
- 2026 scale-up priorities
- Download CTA for the full PDF report

The PDF currently used is:

`/AWIHF Impact report.pdf`

## 4. Navigation and User Flow Updates

### Homepage Hero Impact Badge

The floating homepage badge:

`1,000+ households reached in 2025`

is now clickable.

Expected behaviour:

User clicks badge -> navigates to `/impact/report`

### Homepage Impact Report Spotlight

A new homepage section introduces the latest Impact Report.

It includes:

- Report title
- Executive summary excerpt
- Three key statistics
- CTA to `/impact/report`

### Impact Page Report Integration

The Impact page now includes a prominent Annual Impact Report spotlight section.

It links directly to:

`/impact/report`

The Impact page timeline now uses the same official 2025 phase structure as the report page, preventing contradictory impact timelines.

## 5. Content Enrichment Completed

Content was expanded using the supplied organizational and impact report materials.

Updated content areas include:

- Homepage credibility and impact flow
- Impact page
- Impact Report page
- About page values and objectives
- Partnerships / institutional ecosystem section
- Donation page
- Footer motto and social links
- Team naming consistency
- Maternal story naming consistency

## 6. Pages Modified

The following public-facing pages were modified:

- `app/page.tsx`
- `app/about/page.tsx`
- `app/impact/page.tsx`
- `app/impact/report/page.tsx`
- `app/donate/page.tsx`
- `app/team/page.tsx`
- `app/stories/[slug]/page.tsx`
- `app/sitemap.ts`

## 7. New Components Added

### `components/sections/ImpactReportSpotlight.tsx`

Reusable report spotlight section used on:

- Homepage
- Impact page

### `components/sections/PartnershipsSection.tsx`

Institutional ecosystem section showing AWIHF’s relationship with:

- Health facilities and referral networks
- District health offices and government bodies
- Academic and research institutions
- Civil society and women-led organizations
- Cultural and community institutions

## 8. Content Utilities Added

### `lib/content/impactReport.ts`

Provides a CMS-ready content layer for the Impact Report.

It attempts to fetch from Sanity first and falls back to official report content if Sanity content is unavailable.

This ensures:

- The page renders in production even before CMS content is populated.
- Sanity can later become the source of truth without redesigning the page.

## 9. Sanity Schema Updates

### New Schema

`sanity/schemaTypes/impactReport.ts`

This schema supports:

- Title
- Year
- Tagline
- Download URL
- Executive summary
- Key statistics
- Programme phases
- Remaining gaps
- Scale-up priorities

### Updated Schema Registration

`sanity/schemaTypes/index.ts`

The `impactReport` schema has been registered.

### Updated Studio Structure

`sanity/structure.ts`

Impact Reports now appear under the Studio content section.

## 10. Donation Updates

The donation page now uses the official production mobile money details.

### MTN

- Business Name: Acholi Women in Health Foundation
- Merchant Code: `30570916`
- MoMo Number: `0764902713`

### Airtel

- Business Name: Acholi Women in Health Foundation
- Merchant Code: `7083045`
- Airtel Money Number: `0706399062`

Files updated:

- `content/donation-info.json`
- `lib/content/donation.ts`
- `app/donate/page.tsx`
- `sanity/schemaTypes/donationInfo.ts`

The page now displays both merchant codes and mobile money numbers in structured payment cards.

## 11. Footer and Social Links

Footer text now reflects the official motto:

`Healing Lives, Transforming Communities`

Social links updated:

- X: `https://x.com/acholiwomen`
- Instagram: `https://www.instagram.com/acholiwomeninhealth?igsh=MTltOW1oMWE3dHFleA==`
- LinkedIn remains pointed to the existing AWIHF LinkedIn profile URL.

Developer attribution remains visible:

`Website Developed by Web Developer Uganda`

## 12. Team and Leadership Presentation

The placeholder name `Lucky Ajok` has been replaced with:

`Grace Akello`

Updated locations:

- About page leadership card
- Team page
- Maternal story content

The Team page now uses rectangular leadership image containers instead of circular frames.

## 13. Programme Image Structure

Programme pages already use one hero image and one field image per programme.

Current programme image mappings:

- Maternal & Reproductive Health
  - Hero: `/images/AWIHF-maternal-Hero.webp`
  - Field: `/images/AWIHF-maternal-Field.webp`

- Mental Health & Trauma Support
  - Hero: `/images/AWIHF-MH-Hero.webp`
  - Field: `/images/AWIHF-MH-Field.webp`

- Community Health Education
  - Hero: `/images/AWIHF-CHE-Hero.webp`
  - Field: `/images/AWIHF-CHE-Field.webp`

- Healthcare Systems Strengthening
  - Hero: `/images/AWIHF-HSS-Hero.webp`
  - Field: `/images/AWIHF-HSS-Field.webp`

No additional filler gallery was introduced.

## 14. Verification Results

The following commands were run manually by Hussein in:

`D:\Users\HUSSEIN\DevSpace\Projects\AWIHF\website`

### Lint

Command:

```powershell
npm run lint
```

Result:

Passed.

### Production Build

Command:

```powershell
npm run build
```

Result:

Passed.

Confirmed route output includes:

```text
/impact/report
```

### TypeScript

Command:

```powershell
.\node_modules\.bin\tsc.cmd --noEmit
```

Result:

Passed.

## 15. Dependency / Lockfile Status

After build, Next.js warned that SWC dependencies were missing from the lockfile.

Hussein ran:

```powershell
npm install
```

Result:

- Packages are up to date.
- Lockfile state should now be synchronized.
- npm reported 17 vulnerabilities: 1 low, 16 moderate.

Recommendation:

Do not run `npm audit fix --force` before deployment without reviewing the dependency impact. It may introduce breaking changes.

## 16. Browser Verification Checklist

Before final deployment, verify these paths in the browser:

- `/`
- `/impact`
- `/impact/report`
- `/donate`
- `/about`
- `/team`

Confirm:

- Homepage hero badge is clickable.
- Badge navigates to `/impact/report`.
- Homepage displays the Impact Report spotlight.
- Impact page displays the Impact Report spotlight.
- Impact Report page renders correctly.
- Impact Report download CTA opens the PDF.
- Donation page shows official MTN and Airtel payment details.
- About page shows official values and partnerships section.
- Team page uses rectangular leadership image presentation.
- Footer shows official motto and updated social links.

## 17. Known Limitations / Follow-Up

### CMS Population

Sanity schemas and content utilities are in place, but the actual Sanity dataset still needs to be populated with final CMS documents.

Until then, fallback content ensures the website remains functional.

### Full Content Migration

The Impact Report, donation content, partnerships, values, footer, and major visible sections have been improved. Some older hardcoded page content still exists and should be progressively migrated into Sanity as the CMS content model is populated.

### npm Audit

There are 17 audit findings. These should be reviewed separately before production hardening, but they are not currently blocking build or TypeScript verification.

## 18. Deployment Readiness Assessment

The project is ready for staging deployment from a code-health perspective.

Required before production launch:

- Browser verification of the public routes listed above.
- Confirm all production environment variables are present in Vercel.
- Populate Sanity with final content documents.
- Verify `/studio` access and publishing workflow.
- Re-run `npm run lint`, `npm run build`, and `tsc.cmd --noEmit` after any final CMS/schema edits.
- Review npm audit findings without applying breaking automated fixes blindly.

## 19. Final Summary

The requested browser-visible features have now been implemented in the actual running project directory:

- Hero impact badge is interactive.
- Dedicated Impact Report page exists.
- Homepage links to the Impact Report.
- Impact page links to the Impact Report.
- Donation production details are visible.
- Organizational credibility content has been expanded.
- Sanity schema support exists for Impact Reports.
- Build, lint, and TypeScript checks pass.

The project can now proceed to final browser QA and staging deployment.
