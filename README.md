# AWIHF Website and Mentorship Platform

Official website and operational mentorship portal for Acholi Women in Health Foundation, a women and youth-led health organization serving communities in Northern Uganda.

The application combines public storytelling, CMS-managed organizational content, operational form submissions, document uploads, and email notifications in a production-oriented Next.js system.

## Purpose

The platform helps AWIHF:

- Communicate its mission, programmes, impact, and organizational credibility.
- Publish news, stories, leadership, donation information, and impact reports through Sanity CMS.
- Receive and persist contact submissions, newsletter subscriptions, and mentorship applications.
- Store mentorship documents securely in Cloudinary.
- Notify applicants and administrators through Resend.

## Technology Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Sanity CMS and embedded Studio
- Neon PostgreSQL
- Prisma Client with PostgreSQL adapter
- Cloudinary
- Resend
- Vercel

## Architecture

The system uses strict separation of responsibilities:

- Sanity manages editable public website content.
- Neon stores operational records.
- Cloudinary stores uploaded documents.
- Resend sends notifications.
- Next.js orchestrates rendering, validation, API workflows, and deployment.

See [System Architecture](./docs/architecture.md).

## Local Development

Run commands from the project root:

```powershell
D:\Users\HUSSEIN\DevSpace\Projects\AWIHF\website
```

Install dependencies using the project owner's local workflow, then create `.env.local` from `.env.example`.

Start development:

```powershell
npm run dev
```

Quality checks:

```powershell
npm run lint
npm run typecheck
npm run build
```

`npm run typecheck` runs `prisma generate` before TypeScript so Prisma Client stays aligned with `prisma/schema.prisma`.

## Environment Variables

`.env.example` is the canonical environment reference. Real secrets must never be committed.

See [Environment Variables](./docs/environment-variables.md).

## Project Structure

```text
app/          Next.js App Router pages and API routes
components/   Shared UI, layout, forms, and page sections
content/      Emergency local content fallbacks
db/           SQL schema for Neon
docs/         Engineering, operational, and platform documentation
hooks/        Shared React hooks
lib/          Config, CMS, database, email, storage, validation, security
prisma/       Prisma schema and client configuration
public/       Public assets and downloadable impact report
sanity/       Sanity schemas and Studio structure
scripts/      Operational backup and restore scripts
```

## Documentation

Start with [docs/README.md](./docs/README.md).

Key documents:

- [System Architecture](./docs/architecture.md)
- [Operations Manual](./docs/operations-manual.md)
- [Deployment Guide](./docs/deployment.md)
- [Developer Onboarding](./docs/developer-onboarding.md)
- [API Reference](./docs/api-reference.md)
- [Security Review](./docs/security-review.md)
- [Testing Strategy](./docs/testing-strategy.md)
- [Production Readiness Review](./docs/production-readiness-review.md)

Platform guides:

- [Sanity CMS](./docs/platforms/sanity-cms.md)
- [Neon PostgreSQL](./docs/platforms/neon.md)
- [Cloudinary](./docs/platforms/cloudinary.md)
- [Resend](./docs/platforms/resend.md)
- [Vercel](./docs/platforms/vercel.md)

## Deployment

The application is intended for Vercel deployment. Production and preview environments must be configured with the variables listed in `.env.example`.

Before production release:

1. Confirm Vercel environment variables are complete.
2. Apply the current Neon schema.
3. Confirm Sanity Studio works for editors.
4. Submit test contact, newsletter, and mentorship workflows.
5. Confirm Cloudinary uploads and Resend emails.
6. Run lint, typecheck, and build.

See [Deployment Guide](./docs/deployment.md).

## Contribution Guidelines

- Preserve existing routes, content ownership boundaries, and visual design unless a change is explicitly required.
- Keep Sanity as the content source, Neon as the operational database, Cloudinary as upload storage, and Resend as the communication layer.
- Add or update documentation when changing architecture, environment variables, API behavior, or external service configuration.
- Do not commit secrets, local build output, temporary logs, or generated caches.

## Operational Status

The platform is in production-hardening status. Core architecture and workflows are implemented; remaining work should focus on operational validation, monitoring, automated tests, and launch support.
