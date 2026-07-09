# Disaster Recovery Plan

## Recovery Objectives

- Restore public website availability quickly through Vercel rollback.
- Preserve operational records in Neon.
- Preserve uploaded documents in Cloudinary.
- Preserve editable content in Sanity.
- Restore email delivery without using email as the system of record.

## Neon Backup

Use the backup script from the project root:

```powershell
.\scripts\backup-neon.ps1
```

It uses `DIRECT_URL` by default and writes custom-format dumps to `.backups/`, which is ignored by Git.

Requirements:

- PostgreSQL client tools installed locally.
- `DIRECT_URL` set to the database being backed up.

Recommended schedule:

- Before every schema change.
- Weekly during normal operation.
- Immediately before major deployment changes.

## Neon Restore

Restore from a dump:

```powershell
.\scripts\restore-neon.ps1 -BackupFile .\.backups\awihf-neon-YYYYMMDD-HHMMSS.dump
```

Restore first into a Neon branch whenever possible. Verify tables, counts, and workflow behavior before restoring production.

## Restore Verification

After restore:

1. Confirm tables exist.
2. Confirm indexes exist.
3. Confirm contact submissions are readable.
4. Confirm newsletter subscribers are readable.
5. Confirm mentorship records and file URLs are readable.
6. Confirm admin update endpoints work.

## Cloudinary Recovery

Cloudinary is the source of uploaded documents. Neon stores file URLs and public IDs. If records are restored from backup, verify that referenced Cloudinary assets still exist.

Recommended checks:

1. Export a list of mentorship application file URLs from Neon.
2. Spot-check that the documents open.
3. Investigate missing files using Cloudinary public IDs.

## Sanity Recovery

Sanity stores website content. Use Sanity project backups, dataset export, and dataset import for recovery.

Recommended process:

1. Export dataset before large content migrations.
2. Keep exports outside Git if they contain unpublished or sensitive material.
3. Restore into a staging dataset first.
4. Verify Studio and public rendering.

## Resend Recovery

Resend is not a storage system. If Resend is unavailable:

1. Keep accepting operational submissions if Neon and Cloudinary are healthy.
2. Monitor logs for email failures.
3. Re-send notifications manually from Neon records if needed.

## Credential Loss or Exposure

If secrets are exposed:

1. Rotate the exposed credential immediately.
2. Update Vercel environment variables.
3. Update `.env.local` on trusted machines.
4. Redeploy.
5. Review logs for suspicious usage.

Rotate these as high priority:

- `DATABASE_URL`
- `DIRECT_URL`
- `ADMIN_API_TOKEN`
- `CLOUDINARY_API_SECRET`
- `RESEND_API_KEY`
- `SANITY_READ_TOKEN`
- `SANITY_PREVIEW_SECRET`
- `SANITY_WEBHOOK_SECRET`
