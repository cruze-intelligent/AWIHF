import { ApplicationStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getMentorshipApplications } from '@/lib/db/operations';
import { verifyAdminRequest } from '@/lib/security/adminAuth';

const statusMap: Record<string, ApplicationStatus> = {
  pending: ApplicationStatus.PENDING,
  under_review: ApplicationStatus.UNDER_REVIEW,
  shortlisted: ApplicationStatus.SHORTLISTED,
  accepted: ApplicationStatus.ACCEPTED,
  rejected: ApplicationStatus.REJECTED,
  waitlisted: ApplicationStatus.WAITLISTED,
  PENDING: ApplicationStatus.PENDING,
  UNDER_REVIEW: ApplicationStatus.UNDER_REVIEW,
  SHORTLISTED: ApplicationStatus.SHORTLISTED,
  ACCEPTED: ApplicationStatus.ACCEPTED,
  REJECTED: ApplicationStatus.REJECTED,
  WAITLISTED: ApplicationStatus.WAITLISTED,
};

export async function GET(request: NextRequest) {
  const admin = verifyAdminRequest(request);
  if (!admin.ok) {
    return NextResponse.json({ message: admin.message }, { status: admin.status });
  }

  const status = request.nextUrl.searchParams.get('status');
  const parsedStatus = status ? statusMap[status] : undefined;
  if (status && !parsedStatus) {
    return NextResponse.json({ message: 'Invalid application status.' }, { status: 400 });
  }

  const applications = await getMentorshipApplications(parsedStatus);
  if (!applications.ok) {
    return NextResponse.json({ message: applications.error }, { status: 500 });
  }

  return NextResponse.json({ applications: applications.data });
}
