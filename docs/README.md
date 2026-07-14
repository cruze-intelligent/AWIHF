# AWIHF Engineering Documentation

This folder is the operational documentation hub for the AWIHF website and mentorship platform.

## Documents

- [System Architecture](./architecture.md): how Next.js, Sanity, Neon, Cloudinary, Resend, and Vercel fit together.
- [Developer Onboarding](./developer-onboarding.md): setup, conventions, and first-week orientation for new engineers.
- [Deployment Guide](./deployment.md): deployment, preview, rollback, and production verification.
- [Environment Variables](./environment-variables.md): every required variable, where it is used, and security notes.
- [Operations Manual](./operations-manual.md): local development, deployment, migrations, CMS operations, and support workflows.
- [Maintenance Guide](./maintenance.md): recurring maintenance, dependency updates, content model changes, and incident response.
- [Disaster Recovery](./disaster-recovery.md): backup, restore, incident response, and recovery checks.
- [Security Review](./security-review.md): current controls, risks, and recommended follow-up work.
- [Testing Strategy](./testing-strategy.md): regression, integration, workflow, and deployment verification approach.
- [API Reference](./api-reference.md): operational API routes, authentication, request formats, and failure behavior.
- [Production Readiness Review](./production-readiness-review.md): final hardening summary, maturity scores, risks, and recommendations.
- [Repository Engineering Report](./repository-engineering-report.md): repository audit findings, root cleanup, and documentation improvements.
- [Internal Notes](./internal/README.md): archived development notes and historical handoff material.

## Platform Guides

- [Sanity CMS](./platforms/sanity-cms.md)
- [Neon PostgreSQL](./platforms/neon.md)
- [Cloudinary](./platforms/cloudinary.md)
- [Resend](./platforms/resend.md)
- [Vercel](./platforms/vercel.md)

## System Ownership

The application intentionally separates responsibilities:

- Sanity manages editable public website content.
- Neon stores operational records.
- Cloudinary stores uploaded documents.
- Resend sends notifications.
- Next.js validates requests, orchestrates workflows, and renders the public site.

Do not merge these responsibilities without a clear architectural decision.
