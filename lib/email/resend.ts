import { getEnv, requireEnv } from '@/lib/config/env';
import { logger } from '@/lib/observability/logger';
import type { EmailMessage } from './templates';

type SendEmailOptions = EmailMessage & {
  to: string;
};

export async function sendEmail(message: SendEmailOptions) {
  const apiKey = requireEnv('RESEND_API_KEY');
  const env = getEnv();

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: [message.to],
      subject: message.subject,
      html: message.html,
      text: message.text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email failed: ${response.status} ${errorText}`);
  }

  return response.json();
}

export async function sendEmailSafely(message: SendEmailOptions) {
  try {
    await sendEmail(message);
    return { ok: true as const };
  } catch (error) {
    logger.error('email.send.failed', error);
    return { ok: false as const, error: 'Email send failed.' };
  }
}

export async function notifyAdmin(message: EmailMessage) {
  const env = getEnv();
  return sendEmail({ ...message, to: env.AWIHF_ADMIN_EMAIL });
}

export async function notifyAdminSafely(message: EmailMessage) {
  const env = getEnv();
  return sendEmailSafely({ ...message, to: env.AWIHF_ADMIN_EMAIL });
}
