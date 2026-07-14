# AWIHF Backend Integration Handoff

## Status

The backend integration foundation is now wired for Sanity CMS, Neon PostgreSQL-compatible database writes, Resend email workflows, Cloudinary PDF uploads, draft preview, and Sanity webhook revalidation.

The implementation remains credential-ready: real Sanity, Neon, Resend, and Cloudinary credentials can be added through environment variables without changing source code.

## Installed Packages

- `@sanity/client`: Sanity SDK queries.
- `next-sanity`: embedded Sanity Studio at `/studio`.
- `sanity`: Studio schema and structure tooling.
- `@sanity/image-url`: Sanity image transformation URLs.
- `@portabletext/react`: Portable Text rendering for CMS-authored articles.
- `pg` and `@types/pg`: PostgreSQL driver and TypeScript types.
- `resend`: available Resend SDK dependency; current service uses the Resend HTTP API for a small server-only adapter.
- `cloudinary`: available Cloudinary SDK dependency; current upload adapter uses signed Cloudinary upload requests.
- `styled-components`: required peer dependency for Sanity Studio UI.
- `@next/swc-win32-x64-msvc`: local Windows optional SWC metadata to support this workstation build.

## Neon Driver Decision

The code uses `pg` instead of `@neondatabase/serverless` for operational database writes.

Reason: npm install attempts for the Neon serverless driver were blocked by certificate and Windows filesystem issues in this local environment. The approved fallback in the brief was the standard `pg` package, which works with Neon through the pooled PostgreSQL connection string. The unused Neon serverless driver dependency is not part of the final package metadata.

Use Neon pooled connection strings in production, preferably the pooler URL or a URL configured for pooling and SSL:

```env
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
```

Run `db/schema.sql` once against a fresh Neon database before enabling live submissions.

## Sanity Studio

Studio route:

```text
/studio
```

Required variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_READ_TOKEN=
SANITY_PREVIEW_SECRET=
SANITY_WEBHOOK_SECRET=
```

Schemas wired:

- News Articles
- Impact Stories
- Programmes
- Team Members
- Site Settings
- Donation Info
- Mentorship Packages
- Application Window
- Hero Sections
- Impact Statistics
- SEO Settings

Singletons:

- `siteSettings`
- `donationInfo`
- `applicationWindow`

## Sanity Webhook

Create a Sanity webhook that calls:

```text
POST https://[production-domain]/api/revalidate
```

Header:

```text
x-sanity-webhook-secret: [SANITY_WEBHOOK_SECRET]
```

The route revalidates the `sanity` tag and core public paths.

## Draft Preview

Enable preview with:

```text
https://[production-domain]/api/draft?secret=[SANITY_PREVIEW_SECRET]&slug=/news/example-slug
```

Disable preview:

```text
/api/disable-draft
```

When preview is active, a banner appears with an exit link.

## Resend

Required variables:

```env
RESEND_API_KEY=
RESEND_FROM_EMAIL=
AWIHF_ADMIN_EMAIL=acholiwomeninhealth@gmail.com
```

Implemented workflows:

- Contact form organization notification.
- Contact form sender confirmation.
- Mentorship application organization notification.
- Mentorship application applicant confirmation.

Email failures are logged server-side and do not block successful database writes.

DNS, verified sender domain, SPF, and DKIM setup remain external Resend dashboard tasks.

## Cloudinary

Required variables:

```env
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_UPLOAD_FOLDER=awihf/mentorship-applications
```

Implemented:

- `/api/upload`
- PDF-only validation.
- 5MB maximum file size.
- Server-side signed uploads.
- Privacy-preserving filenames using timestamp plus email hash.

Mentorship route uploads files before storing application records. If Cloudinary upload fails, the application can still be stored and the admin notification indicates upload follow-up is required.

## API Routes

- `/api/contact`
- `/api/mentorship/applications`
- `/api/upload`
- `/api/revalidate`
- `/api/draft`
- `/api/disable-draft`

All error responses use JSON with a `message` field and appropriate HTTP status codes.

## Known Local Environment Notes

- npm registry access on this workstation required temporary development-only TLS bypass because of `UNABLE_TO_VERIFY_LEAF_SIGNATURE`.
- `npm install` reported existing audit warnings. Broad `npm audit fix` was not run because it may introduce unrelated breaking changes.
- `npm run build` exits successfully, but Next still prints lockfile patch warnings for missing non-Windows SWC package metadata because the same certificate issue prevents Next from fetching registry data during lockfile patching. This did not stop the production build.
- Sanity packages report Node engine warnings on Node `20.19.3`; deployment should use a newer Node 20 patch level or Node 22 where supported.

## Handoff Checklist

1. Add real `.env.local` values.
2. Run `db/schema.sql` against Neon.
3. Configure Sanity project ID, dataset, users, and initial content.
4. Configure Sanity webhook with `x-sanity-webhook-secret`.
5. Verify Resend sender domain and set `RESEND_FROM_EMAIL`.
6. Configure Cloudinary credentials.
7. Run credential-backed form, email, upload, and CMS tests.
