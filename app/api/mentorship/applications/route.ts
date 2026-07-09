import { NextRequest, NextResponse } from 'next/server';
import { saveMentorshipApplication } from '@/lib/db/operations';
import { getApplicationWindow } from '@/lib/content/mentorship';
import { notifyAdminSafely, sendEmailSafely } from '@/lib/email/resend';
import { mentorshipConfirmationEmail, mentorshipNotificationEmail } from '@/lib/email/templates';
import { getSubmissionContext } from '@/lib/http/submissionContext';
import { logger } from '@/lib/observability/logger';
import { sanitizeObject } from '@/lib/security/sanitize';
import {
  deleteCloudinaryAsset,
  hashUploadOwner,
  uploadFileToCloudinary,
  validatePdfUpload,
} from '@/lib/storage/cloudinary';
import { mentorshipApplicationSchema } from '@/lib/validation/submissions';

function getOptionalString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function getRequiredFile(formData: FormData, key: string) {
  const value = formData.get(key);
  return value instanceof File && value.size > 0 ? value : null;
}

export async function POST(request: NextRequest) {
  const context = await getSubmissionContext(request);
  if (!context.allowed) {
    return NextResponse.json({ message: 'Too many submissions. Please try again later.' }, { status: 429 });
  }

  try {
    const applicationWindow = await getApplicationWindow();
    if (!applicationWindow.isOpen) {
      return NextResponse.json(
        { message: applicationWindow.closedMessage || 'Applications for the current mentorship cycle are currently closed. Please check back later.' },
        { status: 409 }
      );
    }

    const formData = await request.formData();
    const payload = sanitizeObject({
      fullName: getOptionalString(formData, 'fullName'),
      gender: getOptionalString(formData, 'gender'),
      dateOfBirth: getOptionalString(formData, 'dateOfBirth'),
      phoneNumber: getOptionalString(formData, 'phoneNumber'),
      email: getOptionalString(formData, 'email'),
      institution: getOptionalString(formData, 'institution'),
      programOfStudy: getOptionalString(formData, 'programOfStudy'),
      yearOfStudy: getOptionalString(formData, 'yearOfStudy'),
      motivation: getOptionalString(formData, 'motivation'),
      careerInterests: getOptionalString(formData, 'careerInterests'),
      leadershipExperience: getOptionalString(formData, 'leadershipExperience'),
      additionalComments: getOptionalString(formData, 'additionalComments'),
    });

    const result = mentorshipApplicationSchema.safeParse(payload);
    if (!result.success) {
      return NextResponse.json({ message: 'Invalid application.', issues: result.error.flatten() }, { status: 400 });
    }

    const cvFile = getRequiredFile(formData, 'cv');
    if (!cvFile) {
      return NextResponse.json({ message: 'CV or resume is required.' }, { status: 400 });
    }

    const cvValidation = validatePdfUpload(cvFile);
    if (!cvValidation.ok) {
      return NextResponse.json({ message: cvValidation.message }, { status: 400 });
    }

    const transcriptFile = getRequiredFile(formData, 'transcript');
    if (transcriptFile) {
      const transcriptValidation = validatePdfUpload(transcriptFile);
      if (!transcriptValidation.ok) {
        return NextResponse.json({ message: transcriptValidation.message }, { status: 400 });
      }
    }

    const ownerHash = hashUploadOwner(result.data.email);
    const uploadPrefix = `${Date.now()}_${ownerHash}`;
    let cvUpload: Awaited<ReturnType<typeof uploadFileToCloudinary>> | undefined;
    let transcriptUpload: Awaited<ReturnType<typeof uploadFileToCloudinary>> | undefined;

    try {
      cvUpload = await uploadFileToCloudinary(cvFile, {
        folder: 'awihf/mentorship-applications/cv',
        resourceType: 'raw',
        publicId: uploadPrefix,
      });

      transcriptUpload = transcriptFile
        ? await uploadFileToCloudinary(transcriptFile, {
            folder: 'awihf/mentorship-applications/transcripts',
            resourceType: 'raw',
            publicId: `${uploadPrefix}_transcript`,
          })
        : undefined;
    } catch (error) {
      logger.error('mentorship.upload.failed', error);
      if (cvUpload?.publicId) {
        void deleteCloudinaryAsset(cvUpload.publicId, { resourceType: 'raw' });
      }
      return NextResponse.json({ message: 'Document upload failed. Please try again.' }, { status: 500 });
    }

    const saved = await saveMentorshipApplication({
      ...result.data,
      cvFile: cvUpload,
      transcriptFile: transcriptUpload,
      status: 'pending',
      ipHash: context.ipHash,
      userAgent: context.userAgent,
    });

    if (!saved.ok) {
      logger.error('mentorship.database_save.failed', new Error(saved.error));
      await Promise.all([
        cvUpload?.publicId ? deleteCloudinaryAsset(cvUpload.publicId, { resourceType: 'raw' }) : Promise.resolve(),
        transcriptUpload?.publicId ? deleteCloudinaryAsset(transcriptUpload.publicId, { resourceType: 'raw' }) : Promise.resolve(),
      ]);
      return NextResponse.json({ message: 'Your application could not be saved right now.' }, { status: 500 });
    }

    const submittedAt = new Date().toISOString();
    void notifyAdminSafely(
      mentorshipNotificationEmail(result.data, {
        applicationId: saved.data.id,
        submittedAt,
        cvUrl: cvUpload?.url,
        transcriptUrl: transcriptUpload?.url,
      })
    );
    void sendEmailSafely({
      ...mentorshipConfirmationEmail(result.data, { applicationId: saved.data.id }),
      to: result.data.email,
    });

    return NextResponse.json({ success: true, applicationId: saved.data.id, message: 'Application received.' });
  } catch (error) {
    logger.error('mentorship.application.failed', error);
    return NextResponse.json({ message: 'Application service is not available right now.' }, { status: 500 });
  }
}
