import { NextRequest, NextResponse } from 'next/server';
import { saveContactSubmission } from '@/lib/db/operations';
import { notifyAdminSafely, sendEmailSafely } from '@/lib/email/resend';
import { contactConfirmationEmail, contactNotificationEmail } from '@/lib/email/templates';
import { getSubmissionContext } from '@/lib/http/submissionContext';
import { logger } from '@/lib/observability/logger';
import { sanitizeObject } from '@/lib/security/sanitize';
import { contactSubmissionSchema } from '@/lib/validation/submissions';

export async function POST(request: NextRequest) {
  const context = await getSubmissionContext(request);
  if (!context.allowed) {
    return NextResponse.json({ message: 'Too many submissions. Please try again later.' }, { status: 429 });
  }

  const rawPayload = await request.json();
  const payload = sanitizeObject({
    ...rawPayload,
    fullName: rawPayload.fullName ?? rawPayload.name,
  });
  const result = contactSubmissionSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json({ message: 'Invalid submission.', issues: result.error.flatten() }, { status: 400 });
  }

  try {
    const saved = await saveContactSubmission({
      ...result.data,
      source: 'website',
      ipHash: context.ipHash,
      userAgent: context.userAgent,
    });

    if (!saved.ok) {
      return NextResponse.json({ message: 'Your message could not be saved right now.' }, { status: 500 });
    }

    const submittedAt = new Date().toISOString();
    void notifyAdminSafely(contactNotificationEmail(result.data, submittedAt));
    void sendEmailSafely({ ...contactConfirmationEmail(result.data), to: result.data.email });

    return NextResponse.json({ success: true, message: 'Your message has been received.' });
  } catch (error) {
    logger.error('contact.submission.failed', error);
    return NextResponse.json({ message: 'Your message could not be received right now.' }, { status: 500 });
  }
}
