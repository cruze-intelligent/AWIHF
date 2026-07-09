# API Reference

## Contact

`POST /api/contact`

Stores a contact submission in Neon, then sends administrator and user emails through Resend.

Expected fields:

- `fullName`
- `email`
- `subject`
- `message`

Failure behavior:

- Validation failure returns `400`.
- Rate limit returns `429`.
- Database failure returns `500` and no email should be sent.
- Resend failure is logged after persistence.

## Mentorship Applications

`POST /api/mentorship/applications`

Accepts multipart form data. Uploads documents to Cloudinary, saves metadata and application fields to Neon, then sends emails.

Expected fields include applicant details, motivation, career interests, `cv`, and optional `transcript`.

Failure behavior:

- Validation failure returns `400`.
- Rate limit returns `429`.
- Upload failure returns `500` and no database record is created.
- Database failure returns `500` and uploaded Cloudinary assets are deleted.
- Email failure is logged after persistence.

## Direct Upload

`POST /api/upload`

Internal upload endpoint for validated operational documents. Accepts `file` and `type` where `type` is `cv` or `transcript`.

Failure behavior:

- Missing file returns `400`.
- Invalid upload type returns `400`.
- Rate limit returns `429`.
- Upload failure returns `500`.

## Admin Applications

`GET /api/admin/applications`

Requires `Authorization: Bearer <ADMIN_API_TOKEN>` or `x-admin-token`.

Optional query:

- `status`

Returns mentorship applications ordered by submission date.

`PATCH /api/admin/applications/[id]`

Requires admin token. Updates status and review metadata.

Failure behavior:

- Missing configuration returns `503`.
- Invalid token returns `401`.
- Invalid status returns validation error.

## Draft Mode

`GET /api/draft`

Enables draft mode using `SANITY_PREVIEW_SECRET`.

`GET /api/disable-draft`

Disables draft mode.

## Revalidation

`POST /api/revalidate`

Called by Sanity webhook using `SANITY_WEBHOOK_SECRET`. Revalidates affected content paths.
