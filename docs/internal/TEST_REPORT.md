# AWIHF Backend Integration Test Report

## Automated Checks

| Check | Result | Notes |
|---|---:|---|
| `npm run lint` | Pass | ESLint completed without errors. |
| `npx tsc --noEmit --pretty false` | Pass | TypeScript completed without errors. |
| `npm run build` | Pass with warnings | Build compiled successfully, generated 32 static pages, and produced API/Studio routes. Warnings are local lockfile/certificate related. |

## Credential-Dependent Tests

These tests require real Sanity, Neon, Resend, and Cloudinary credentials. They are prepared in code but cannot be fully executed until the service credentials are provided.

| Area | Status | Notes |
|---|---:|---|
| Contact form DB write | Blocked by credentials | Requires `DATABASE_URL`. |
| Contact notification email | Blocked by credentials | Requires `RESEND_API_KEY`, verified `RESEND_FROM_EMAIL`. |
| Contact confirmation email | Blocked by credentials | Requires Resend credentials. |
| Contact validation failure | Code-ready | Zod validation returns `400` with JSON `message`. |
| Contact rate limit | Code-ready | In-memory limiter returns `429`; limitation documented in handoff. |
| Mentorship DB write | Blocked by credentials | Requires `DATABASE_URL`. |
| Mentorship Cloudinary uploads | Blocked by credentials | Requires Cloudinary credentials. |
| Mentorship notification email | Blocked by credentials | Requires Resend credentials. |
| Mentorship applicant confirmation | Blocked by credentials | Requires Resend credentials. |
| Application closed state | Code-ready | Reads `applicationWindow` from Sanity with JSON fallback. |
| Non-PDF upload rejection | Code-ready | Server validates MIME type and extension. |
| File size rejection | Code-ready | Server enforces 5MB limit. |
| `/studio` route | Build-verified | Embedded Studio route compiles as dynamic route. Live login requires Sanity project credentials. |
| Sanity webhook revalidation | Code-ready | Requires deployed URL and `SANITY_WEBHOOK_SECRET`. |
| Draft preview | Code-ready | Requires `SANITY_PREVIEW_SECRET` and Sanity token. |
| News search | Code-ready | Client-side filtering is implemented for title, excerpt, and category. |

## Build Output Summary

Final build status:

```text
✓ Compiled successfully
✓ Finished TypeScript
✓ Generating static pages using 7 workers (32/32)
```

Generated dynamic integration routes:

```text
/api/contact
/api/disable-draft
/api/draft
/api/mentorship/applications
/api/revalidate
/api/upload
/studio/[[...index]]
```

## Remaining Verification After Credentials

Run these once credentials are available:

- Submit valid contact form and confirm Neon row plus two Resend emails.
- Submit invalid contact form and confirm `400`.
- Submit contact form 6 times in the configured window and confirm `429`.
- Submit mentorship application with PDF CV/transcript and confirm Cloudinary URLs, Neon row, and two Resend emails.
- Set `applicationWindow.isOpen = false` in Sanity and confirm mentorship API returns `409`.
- Create a Sanity news article and confirm it appears on `/news` after webhook revalidation.
- Open a draft preview URL and confirm preview banner plus draft content.
