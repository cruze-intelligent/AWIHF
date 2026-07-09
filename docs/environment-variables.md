# Environment Variables

`.env.example` is the canonical reference. Do not commit real secrets.

## Public Site

| Variable | Required | Used By | Notes |
|---|---:|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | metadata, sitemap, previews | Production URL, for example `https://acholiwomeninhealth.org`. |

## Sanity

| Variable | Required | Used By | Notes |
|---|---:|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Sanity client, Studio | Public project identifier. Not secret. |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | Sanity client, Studio | Usually `production`. Not secret. |
| `SANITY_API_VERSION` | Yes | Sanity client | Date string used by API queries. |
| `SANITY_READ_TOKEN` | Conditional | server-side draft/private reads | Leave empty for public datasets unless authenticated private reads are required. Never expose to client code. |
| `SANITY_PREVIEW_SECRET` | Yes for preview | `/api/draft` | Secret for enabling draft mode. |
| `SANITY_WEBHOOK_SECRET` | Yes for webhooks | `/api/revalidate` | Shared secret for Sanity revalidation webhook. |

## Neon PostgreSQL

| Variable | Required | Used By | Notes |
|---|---:|---|---|
| `DATABASE_URL` | Yes | Prisma runtime queries | Use Neon pooled runtime URL with SSL. |
| `DIRECT_URL` | Yes | migrations, backups, operational scripts | Use direct Neon URL with SSL. |
| `ADMIN_API_TOKEN` | Yes for admin APIs | `/api/admin/*` | Long random secret. Passed as `Authorization: Bearer <token>` or `x-admin-token`. |

## Resend

| Variable | Required | Used By | Notes |
|---|---:|---|---|
| `RESEND_API_KEY` | Yes for email sending | `lib/email/resend.ts` | Secret. Never expose to client code. |
| `RESEND_FROM_EMAIL` | Yes | email sender | Can use a temporary Resend sender in staging. Replace with verified domain sender for production. |
| `AWIHF_ADMIN_EMAIL` | Yes | admin notifications | Organization inbox for contact and mentorship notifications. |

## Cloudinary

| Variable | Required | Used By | Notes |
|---|---:|---|---|
| `CLOUDINARY_CLOUD_NAME` | Yes | upload and deletion service | Not secret by itself. |
| `CLOUDINARY_API_KEY` | Yes | upload and deletion service | Treat as sensitive. |
| `CLOUDINARY_API_SECRET` | Yes | signed uploads and deletes | Secret. Never expose to client code. |
| `CLOUDINARY_UPLOAD_FOLDER` | Yes | upload organization | Root folder for operational uploads. |

## Submission Protection

| Variable | Required | Used By | Notes |
|---|---:|---|---|
| `SUBMISSION_RATE_LIMIT_WINDOW_MS` | Yes | rate limiter | Defaults should be conservative for public forms. |
| `SUBMISSION_RATE_LIMIT_MAX` | Yes | rate limiter | Maximum submissions per IP hash/window. |

## Security Rules

- Real values belong only in `.env.local`, Vercel, or another secret manager.
- Never add secrets to screenshots, issue comments, commits, or documentation.
- Rotate `ADMIN_API_TOKEN`, `RESEND_API_KEY`, Cloudinary credentials, and database credentials after accidental exposure.
