import { NextRequest } from 'next/server';
import { getEnv } from '@/lib/config/env';

export function verifyAdminRequest(request: NextRequest) {
  const expectedToken = getEnv().ADMIN_API_TOKEN;
  if (!expectedToken) {
    return { ok: false as const, status: 503, message: 'Admin API is not configured.' };
  }

  const authorization = request.headers.get('authorization');
  const bearerToken = authorization?.match(/^Bearer\s+(.+)$/i)?.[1];
  const headerToken = request.headers.get('x-admin-token');
  const providedToken = bearerToken || headerToken;

  if (providedToken !== expectedToken) {
    return { ok: false as const, status: 401, message: 'Unauthorized.' };
  }

  return { ok: true as const };
}
