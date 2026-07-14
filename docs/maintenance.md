# Maintenance Guide

## Routine Maintenance

Weekly:

- Review Vercel deployments and failed builds.
- Review operational logs for API failures.
- Confirm contact and mentorship workflows are healthy.
- Confirm Sanity publishing updates appear on the website.

Monthly:

- Run `npm run lint`, `npm run typecheck`, and `npm run build`.
- Review `npm audit` output and patch safely.
- Create a Neon backup.
- Review Cloudinary operational folders for orphaned files.
- Confirm Resend sender reputation and delivery status.

Before major releases:

- Back up Neon.
- Test against a preview deployment.
- Verify Sanity Studio.
- Verify contact, newsletter, and mentorship workflows.
- Document schema or environment changes.

## Updating Dependencies

Do not update all packages blindly. Update in small groups:

1. Framework and build tooling.
2. Sanity packages.
3. Prisma and database packages.
4. Cloudinary and Resend packages.
5. UI and utility packages.

After each group:

```powershell
npm run lint
npm run typecheck
npm run build
```

## Updating Content Models

When changing Sanity schemas:

1. Preserve existing field names when possible.
2. Add new optional fields before requiring them.
3. Update Studio structure if editors need direct access.
4. Update `lib/content/` utilities.
5. Verify published content renders correctly.

## Updating Database Schema

When changing Neon schema:

1. Back up Neon.
2. Update `db/schema.sql`.
3. Update `prisma/schema.prisma`.
4. Regenerate Prisma Client through `npm run typecheck` or `npm run build`.
5. Apply changes to a Neon branch first.
6. Verify operational workflows.

## Incident Response

If a public workflow fails:

1. Identify which service is failing.
2. Check structured logs for the relevant event.
3. Confirm environment variables.
4. Confirm provider dashboard status.
5. Preserve operational records before attempting cleanup.

Never delete production data without a backup and explicit approval.
