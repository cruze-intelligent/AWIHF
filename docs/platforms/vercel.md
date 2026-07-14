# Vercel

## Purpose

Vercel hosts the production and preview deployments for the Next.js application.

## Integration Points

- GitHub repository connection.
- Project environment variables.
- Production and preview deployments.
- Build command: `npm run build`.

## Environment Configuration

Vercel must define every required variable from `.env.example`. Keep production and preview values intentionally separated.

## Deployment Flow

1. Push to the connected branch.
2. Vercel installs dependencies.
3. Vercel runs `npm run build`.
4. Prisma Client is generated.
5. Next.js builds static and dynamic routes.
6. Deployment becomes available.

## Rollback

Use Vercel deployment rollback for application issues. Check database schema compatibility before rolling back application code.

## Operational Checks

After deploy:

- Confirm all public routes load.
- Confirm API routes respond.
- Confirm Studio loads.
- Confirm ISR revalidation works.
- Confirm forms operate against the intended environment.

## Common Issues

- Missing environment variable.
- Vercel connected to the wrong branch or root directory.
- Sanity CORS missing preview or production domain.
- Resend sender not verified.
- Neon URL points to the wrong branch.
