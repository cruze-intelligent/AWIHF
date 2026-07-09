# Testing Strategy

## Current Verification Baseline

Required local checks:

```powershell
npm run lint
npm run typecheck
npm run build
```

## Manual Regression Checklist

Pages:

- `/`
- `/about`
- `/programs`
- `/programs/maternal-reproductive-health`
- `/programs/mental-health-trauma-support`
- `/programs/community-health-education`
- `/programs/healthcare-systems-strengthening`
- `/impact`
- `/impact/report`
- `/news`
- `/stories`
- `/team`
- `/donate`
- `/get-involved`
- `/contact`
- `/mentorship`
- `/studio`

Workflows:

- Contact submission persists in Neon and sends Resend emails.
- Newsletter subscription prevents duplicates and sends confirmation.
- Mentorship application uploads documents, stores URLs and public IDs, persists record, and sends emails.
- Admin application list requires token.
- Admin application status update requires token.
- Sanity content edit publishes and appears on the site.

## Failure Tests

- Invalid email.
- Missing required fields.
- Missing mentorship CV.
- Unsupported upload type.
- Oversized upload.
- Invalid admin token.
- Missing environment variables.
- Resend unavailable after Neon success.
- Neon unavailable after Cloudinary upload.
- Sanity fetch failure.

## Future Automated Tests

Recommended additions:

- Unit tests for validation and rate limiting.
- Integration tests for API route success and failure behavior.
- Playwright tests for public navigation and forms.
- Smoke tests against Vercel preview deployments.
- Contract tests for Sanity content utility return shapes.

No new test dependency has been added in this hardening pass. If automated browser testing is introduced later, install Playwright manually and add CI coverage deliberately.
