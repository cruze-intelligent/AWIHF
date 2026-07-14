# Deployment Guide

## Target Platform

The project is designed for Vercel deployments connected to GitHub.

## Required Vercel Configuration

Add all variables from `.env.example` to Vercel for the relevant environments:

- Production
- Preview
- Development, if used

Never paste secrets into source files.

## Build Command

```powershell
npm run build
```

The build command runs `prisma generate` before `next build`.

## Pre-Deployment Checklist

- `npm run lint` passes.
- `npm run typecheck` passes.
- `npm run build` passes.
- Neon schema is current.
- Sanity project ID and dataset match the intended environment.
- Sanity CORS includes production and preview domains.
- Cloudinary credentials point to the intended account.
- Resend sender is valid for the environment.
- Admin API token is configured.

## Post-Deployment Smoke Test

Open these routes:

- `/`
- `/about`
- `/programs`
- `/impact`
- `/impact/report`
- `/news`
- `/stories`
- `/donate`
- `/get-involved`
- `/contact`
- `/mentorship`
- `/studio`

Then verify:

- Contact form persists and sends emails.
- Newsletter subscription persists and sends confirmation.
- Mentorship application uploads documents, persists metadata, and sends emails.
- Sanity Studio shows editable structure.
- Impact report PDF opens from the public site.

## Rollback

Use Vercel's deployment rollback for application rollback.

If a database schema change was deployed with the application:

1. Determine whether rollback requires database rollback.
2. Prefer forward fixes for additive schema changes.
3. Restore from a Neon backup only when data integrity requires it.

## Preview Deployments

Use preview deployments for:

- Sanity schema changes.
- API workflow changes.
- Database schema changes against a Neon development branch.
- Responsive layout review.

Preview deployments should never point at production operational data unless intentionally approved.
