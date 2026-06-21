import { ApplicationStatus as PrismaApplicationStatus } from '@prisma/client';
import { getEnv } from '@/lib/config/env';
import { prisma } from '@/lib/prisma';
import type { ContactSubmissionRecord, MentorshipApplicationRecord, ApplicationStatus } from './types';

export type DbResult<T> = { ok: true; data: T } | { ok: false; error: string };

const statusToPrisma: Record<ApplicationStatus, PrismaApplicationStatus> = {
  pending: PrismaApplicationStatus.PENDING,
  under_review: PrismaApplicationStatus.UNDER_REVIEW,
  shortlisted: PrismaApplicationStatus.SHORTLISTED,
  accepted: PrismaApplicationStatus.ACCEPTED,
  rejected: PrismaApplicationStatus.REJECTED,
  waitlisted: PrismaApplicationStatus.WAITLISTED,
};

function isDatabaseConfigured() {
  return Boolean(getEnv().DATABASE_URL);
}

function databaseNotConfigured<T>(): DbResult<T> {
  return { ok: false, error: 'DATABASE_URL is not configured.' };
}

function dateOnly(value: string) {
  return new Date(`${value}T00:00:00.000Z`);
}

export async function assertDatabaseConfigured(): Promise<DbResult<true>> {
  return isDatabaseConfigured() ? { ok: true, data: true } : databaseNotConfigured();
}

export async function insertContactSubmission(record: ContactSubmissionRecord): Promise<DbResult<{ id: string }>> {
  if (!isDatabaseConfigured()) {
    return databaseNotConfigured();
  }

  try {
    const submission = await prisma.contactSubmission.create({
      data: {
        fullName: record.fullName,
        email: record.email,
        subject: record.subject || null,
        message: record.message,
        source: record.source ?? 'website',
        ipHash: record.ipHash ?? null,
        userAgent: record.userAgent ?? null,
      },
      select: { id: true },
    });

    return { ok: true, data: submission };
  } catch (error) {
    console.error('Contact submission database insert failed', error);
    return { ok: false, error: 'Database operation failed.' };
  }
}

export async function insertMentorshipApplication(
  record: MentorshipApplicationRecord
): Promise<DbResult<{ id: string }>> {
  if (!isDatabaseConfigured()) {
    return databaseNotConfigured();
  }

  try {
    const application = await prisma.mentorshipApplication.create({
      data: {
        fullName: record.fullName,
        gender: record.gender,
        dateOfBirth: dateOnly(record.dateOfBirth),
        phoneNumber: record.phoneNumber,
        email: record.email,
        institution: record.institution,
        programOfStudy: record.programOfStudy,
        yearOfStudy: record.yearOfStudy,
        motivation: record.motivation,
        careerInterests: record.careerInterests,
        leadershipExperience: record.leadershipExperience ?? null,
        additionalComments: record.additionalComments ?? null,
        cvFileUrl: record.cvFile?.url ?? null,
        cvFileName: record.cvFile?.fileName ?? null,
        cvFileSize: record.cvFile?.fileSize ?? null,
        cvFileMimeType: record.cvFile?.mimeType ?? null,
        transcriptFileUrl: record.transcriptFile?.url ?? null,
        transcriptFileName: record.transcriptFile?.fileName ?? null,
        transcriptFileSize: record.transcriptFile?.fileSize ?? null,
        transcriptFileMimeType: record.transcriptFile?.mimeType ?? null,
        status: statusToPrisma[record.status ?? 'pending'],
        ipHash: record.ipHash ?? null,
        userAgent: record.userAgent ?? null,
      },
      select: { id: true },
    });

    return { ok: true, data: application };
  } catch (error) {
    console.error('Mentorship application database insert failed', error);
    return { ok: false, error: 'Database operation failed.' };
  }
}

export async function getContactSubmissions() {
  if (!isDatabaseConfigured()) {
    return databaseNotConfigured<unknown[]>();
  }

  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return { ok: true as const, data: submissions };
  } catch (error) {
    console.error('Contact submissions query failed', error);
    return { ok: false as const, error: 'Database operation failed.' };
  }
}

export async function getMentorshipApplications(status?: PrismaApplicationStatus) {
  if (!isDatabaseConfigured()) {
    return databaseNotConfigured<unknown[]>();
  }

  try {
    const applications = await prisma.mentorshipApplication.findMany({
      where: status ? { status } : undefined,
      orderBy: { submittedAt: 'desc' },
    });
    return { ok: true as const, data: applications };
  } catch (error) {
    console.error('Mentorship applications query failed', error);
    return { ok: false as const, error: 'Database operation failed.' };
  }
}

export async function updateMentorshipApplicationReview(input: {
  id: string;
  status: PrismaApplicationStatus;
  adminNotes?: string | null;
  reviewedBy?: string | null;
}) {
  if (!isDatabaseConfigured()) {
    return databaseNotConfigured();
  }

  try {
    const application = await prisma.mentorshipApplication.update({
      where: { id: input.id },
      data: {
        status: input.status,
        adminNotes: input.adminNotes ?? null,
        reviewedBy: input.reviewedBy ?? null,
        reviewedAt: new Date(),
      },
    });
    return { ok: true as const, data: application };
  } catch (error) {
    console.error('Mentorship application update failed', error);
    return { ok: false as const, error: 'Database operation failed.' };
  }
}

export async function subscribeNewsletter(email: string): Promise<DbResult<{ id: string }>> {
  if (!isDatabaseConfigured()) {
    return databaseNotConfigured();
  }

  try {
    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: {
        isActive: true,
        subscribedAt: new Date(),
      },
      create: {
        email,
        isActive: true,
      },
      select: { id: true },
    });

    return { ok: true, data: subscriber };
  } catch (error) {
    console.error('Newsletter subscription database upsert failed', error);
    return { ok: false, error: 'Database operation failed.' };
  }
}

export const saveContactSubmission = insertContactSubmission;
export const saveMentorshipApplication = insertMentorshipApplication;
