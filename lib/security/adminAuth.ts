import { NextRequest } from 'next/server';
import { timingSafeEqual } from 'crypto';
import { getEnv } from '@/lib/config/env';

function safeTokenCompare(providedToken: string, expectedToken: string) {
  const provided = Buffer.from(providedToken);
  const expected = Buffer.from(expectedToken);

  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export function verifyAdminRequest(request: NextRequest) {
  const expectedToken = getEnv().ADMIN_API_TOKEN;
  if (!expectedToken) {
    return { ok: false as const, status: 503, message: 'Admin API is not configured.' };
  }

  const authorization = request.headers.get('authorization');
  const bearerToken = authorization?.match(/^Bearer\s+(.+)$/i)?.[1];
  const headerToken = request.headers.get('x-admin-token');
  const providedToken = bearerToken || headerToken;

  if (!providedToken || !safeTokenCompare(providedToken, expectedToken)) {
    return { ok: false as const, status: 401, message: 'Unauthorized.' };
  }

  return { ok: true as const };
}
