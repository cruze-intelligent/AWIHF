# Cloudinary

## Purpose

Cloudinary stores uploaded operational documents. It is not a database and does not own structured application records.

## Owned Assets

- Mentorship CV uploads
- Mentorship transcript uploads
- Future operational attachments

## Integration Points

- `lib/storage/cloudinary.ts`
- `app/api/upload/route.ts`
- `app/api/mentorship/applications/route.ts`
- `lib/db/operations.ts`

## Environment Variables

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `CLOUDINARY_UPLOAD_FOLDER`

## Upload Rules

- Server-side signed uploads.
- PDF validation for mentorship documents.
- 5MB maximum file size.
- Public IDs use timestamp plus hashed applicant email.
- Neon stores secure URL, public ID, file name, size, and MIME type.

## Failure Behavior

- Validation failure: no upload and no database write.
- Upload failure: no database write.
- Database failure after upload: uploaded Cloudinary assets are deleted.

## Operational Considerations

Keep operational uploads separate from CMS media. Review Cloudinary folders periodically for orphaned files and compare them with Neon public ID records.
