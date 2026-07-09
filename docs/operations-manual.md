# Operations Manual

## Local Development

1. Copy `.env.example` to `.env.local`.
2. Fill local secrets using the staging or development credentials.
3. Ask the project owner to run dependency installation if dependencies are missing.
4. Start the local app with:

```powershell
npm run dev
```

Run commands from:

```text
D:\Users\HUSSEIN\DevSpace\Projects\AWIHF\website
```

## Verification Commands

```powershell
npm run lint
npm run typecheck
npm run build
```

## Deployment

The application is deployed through Vercel from the connected GitHub repository.

Before deployment:

1. Confirm the target branch is connected in Vercel.
2. Confirm Vercel environment variables match `.env.example`.
3. Confirm `DATABASE_URL` and `DIRECT_URL` point to the intended Neon branch.
4. Confirm Sanity CORS includes the Vercel production and preview domains.
5. Confirm Resend sender is valid for the deployment environment.
6. Confirm Cloudinary credentials are production-safe.

After deployment:

1. Open the production site.
2. Verify homepage, about, programmes, impact, impact report, news, stories, donate, get involved, contact, mentorship, team, and Studio.
3. Submit a contact form test.
4. Submit a newsletter test.
5. Submit a mentorship test with valid PDF uploads.
6. Confirm Neon records exist.
7. Confirm Cloudinary files exist.
8. Confirm Resend emails are delivered or failures are logged.

## Rollback

Use Vercel's deployment rollback to restore a previous known-good deployment. If a schema change was applied, verify whether database rollback or forward migration is required before rolling back application code.

## Neon Migrations

`db/schema.sql` is the schema reference for direct SQL setup. `prisma/schema.prisma` mirrors the operational tables used by Prisma Client.

Recommended migration discipline:

1. Apply schema changes first to a Neon development branch.
2. Run build and workflow checks against the branch.
3. Apply changes to production during a low-traffic window.
4. Keep a database backup before schema changes.

## Sanity Operations

Editors use `/studio` to manage content. Structure view should expose content collections and singleton documents. Presentation is for preview, not the only editing interface.

Operational checks:

1. Create or edit a document.
2. Publish.
3. Confirm the website updates after ISR revalidation or cache expiry.
4. If updates do not appear, trigger the configured revalidation webhook.

## Cloudinary Operations

Mentorship uploads are stored below the configured upload folder. Keep operational uploads separate from public CMS media.

If a database write fails after upload, the application attempts to delete uploaded assets using their Cloudinary public IDs.

## Resend Operations

Emails are sent only after persistence. A Resend failure should be logged but should not delete valid operational records.

Troubleshooting:

1. Check `RESEND_API_KEY`.
2. Check `RESEND_FROM_EMAIL`.
3. Check Resend domain or sender verification.
4. Check structured logs for `email.send.failed`.

## Monitoring Logs

Structured logs are JSON lines emitted by `lib/observability/logger.ts`. Important events include:

- `db.*`
- `email.send.failed`
- `cloudinary.upload.succeeded`
- `cloudinary.delete.failed`
- `mentorship.upload.failed`
- `mentorship.database_save.failed`
- `sanity.*.fetch_failed`

Avoid logging raw documents, credentials, uploaded file contents, or unnecessary personal data.
