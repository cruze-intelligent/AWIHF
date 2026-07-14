# Developer Onboarding

## First Orientation

AWIHF is a production-oriented Next.js platform with public website pages, an embedded Sanity Studio, and operational APIs for submissions.

Read these first:

1. `README.md`
2. `docs/architecture.md`
3. `docs/environment-variables.md`
4. `docs/operations-manual.md`
5. `docs/platforms/`

## Setup

1. Clone the repository.
2. Install dependencies using the agreed local workflow.
3. Copy `.env.example` to `.env.local`.
4. Add development credentials for Sanity, Neon, Cloudinary, Resend, and admin API access.
5. Run:

```powershell
npm run dev
```

## Daily Development Checks

```powershell
npm run lint
npm run typecheck
npm run build
```

Use `npm run typecheck` instead of raw `tsc` because Prisma Client must be generated first.

## Code Ownership Boundaries

- UI components belong in `components/`.
- Routes and route handlers belong in `app/`.
- Sanity schemas belong in `sanity/schemaTypes/`.
- Sanity data access belongs in `lib/content/`.
- Operational database access belongs in `lib/db/`.
- Upload logic belongs in `lib/storage/`.
- Email logic belongs in `lib/email/`.
- Validation belongs in `lib/validation/`.
- Security helpers belong in `lib/security/`.

## Safe Extension Rules

- Do not store operational submissions in Sanity.
- Do not store uploaded files in Neon.
- Do not send confirmation emails before persistence succeeds.
- Do not expose secrets to client components.
- Update docs when environment variables, APIs, database schema, or deployment behavior change.

## Common Tasks

### Add Editable Website Content

1. Create or extend a Sanity schema.
2. Register it in `sanity/schemaTypes/index.ts`.
3. Add it to `sanity/structure.ts` if editors need direct navigation.
4. Add a typed content utility in `lib/content/`.
5. Render through page or section components.

### Add an Operational Submission Workflow

1. Define validation.
2. Rate limit the route.
3. Upload files if required.
4. Persist to Neon.
5. Send Resend notifications.
6. Log failures without leaking secrets.

## Production Etiquette

Keep the root directory clean. Historical notes belong in `docs/internal/`; current operational documentation belongs in `docs/`.
