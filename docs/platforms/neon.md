# Neon PostgreSQL

## Purpose

Neon is the operational database. It stores user-generated business records, not website content.

## Owned Data

- Contact submissions
- Newsletter subscribers
- Mentorship applications
- Application review status and metadata
- Uploaded document metadata and Cloudinary references

## Integration Points

- `prisma/schema.prisma`
- `prisma.config.ts`
- `lib/prisma.ts`
- `lib/db/operations.ts`
- `lib/db/types.ts`
- `db/schema.sql`

## Environment Variables

- `DATABASE_URL`: pooled runtime connection string.
- `DIRECT_URL`: direct connection string for schema operations and backups.

## Schema Management

`db/schema.sql` is the SQL reference. `prisma/schema.prisma` mirrors application-facing models.

Before production schema changes:

1. Back up Neon.
2. Apply to a development branch.
3. Run workflow checks.
4. Apply to production during a low-risk window.

## Backup

From the project root:

```powershell
.\scripts\backup-neon.ps1
```

## Restore

```powershell
.\scripts\restore-neon.ps1 -BackupFile .\.backups\awihf-neon-YYYYMMDD-HHMMSS.dump
```

Restore to a Neon branch first whenever possible.

## Failure Behavior

If Neon persistence fails:

- Contact and newsletter workflows return an error.
- Mentorship workflow deletes uploaded Cloudinary assets before returning an error.
- Resend emails are not sent before persistence.
