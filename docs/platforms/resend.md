# Resend

## Purpose

Resend is the communication layer. It sends notifications and confirmations after successful persistence.

## Email Workflows

- Contact notification to AWIHF.
- Contact confirmation to sender.
- Mentorship notification to AWIHF.
- Mentorship confirmation to applicant.
- Newsletter confirmation.

## Integration Points

- `lib/email/resend.ts`
- `lib/email/templates.ts`
- `app/api/contact/route.ts`
- `app/api/mentorship/applications/route.ts`
- Newsletter form workflow

## Environment Variables

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `AWIHF_ADMIN_EMAIL`

## Workflow Rule

Emails are sent only after operational data is persisted. If Resend fails, the Neon record remains intact and the failure is logged.

## Production Setup

Before launch:

1. Verify sender domain in Resend.
2. Configure SPF, DKIM, and recommended DNS records.
3. Update `RESEND_FROM_EMAIL` to the verified sender.
4. Test all email workflows from production.

## Failure Behavior

Email failures are logged as `email.send.failed` and do not invalidate successful database writes.
