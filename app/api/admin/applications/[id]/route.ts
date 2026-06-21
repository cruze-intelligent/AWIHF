import { ApplicationStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { updateMentorshipApplicationReview } from '@/lib/db/operations';
import { verifyAdminRequest } from '@/lib/security/adminAuth';

const updateSchema = z.object({
  status: z.enum(['PENDING', 'UNDER_REVIEW', 'SHORTLISTED', 'ACCEPTED', 'REJECTED', 'WAITLISTED']),
  adminNotes: z.string().max(5000).optional().nullable(),
  reviewedBy: z.string().max(180).optional().nullable(),
});

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const admin = verifyAdminRequest(request);
  if (!admin.ok) {
    return NextResponse.json({ message: admin.message }, { status: admin.status });
  }

  const params = await context.params;
  const body = await request.json();
  const result = updateSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ message: 'Invalid review update.', issues: result.error.flatten() }, { status: 400 });
  }

  const updated = await updateMentorshipApplicationReview({
    id: params.id,
    status: ApplicationStatus[result.data.status],
    adminNotes: result.data.adminNotes,
    reviewedBy: result.data.reviewedBy,
  });

  if (!updated.ok) {
    return NextResponse.json({ message: updated.error }, { status: 500 });
  }

  return NextResponse.json({ application: updated.data });
}
