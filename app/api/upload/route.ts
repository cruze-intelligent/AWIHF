import { NextRequest, NextResponse } from 'next/server';
import {
  hashUploadOwner,
  uploadFileToCloudinary,
  validatePdfUpload,
} from '@/lib/storage/cloudinary';
import { getSubmissionContext } from '@/lib/http/submissionContext';
import { logger } from '@/lib/observability/logger';

function uploadFolderFor(type: string | null) {
  if (type === 'transcript') {
    return 'awihf/mentorship-applications/transcripts';
  }

  return 'awihf/mentorship-applications/cv';
}

export async function POST(request: NextRequest) {
  const context = await getSubmissionContext(request);
  if (!context.allowed) {
    return NextResponse.json({ message: 'Too many uploads. Please try again later.' }, { status: 429 });
  }

  const formData = await request.formData();
  const file = formData.get('file');
  const email = formData.get('email');
  const type = formData.get('type');

  if (!(file instanceof File) || typeof email !== 'string') {
    return NextResponse.json({ message: 'A PDF file and applicant email are required.' }, { status: 400 });
  }

  if (typeof type === 'string' && !['cv', 'transcript'].includes(type)) {
    return NextResponse.json({ message: 'Invalid upload type.' }, { status: 400 });
  }

  const validation = validatePdfUpload(file);
  if (!validation.ok) {
    return NextResponse.json({ message: validation.message }, { status: 400 });
  }

  try {
    const ownerHash = hashUploadOwner(email);
    const publicId = `${Date.now()}_${ownerHash}`;
    const upload = await uploadFileToCloudinary(file, {
      folder: uploadFolderFor(typeof type === 'string' ? type : null),
      resourceType: 'raw',
      publicId,
    });

    return NextResponse.json({
      success: true,
      url: upload.url,
      publicId: upload.publicId,
      fileName: upload.fileName,
      fileSize: upload.fileSize,
    });
  } catch (error) {
    logger.error('upload.failed', error, { type: typeof type === 'string' ? type : null });
    return NextResponse.json({ message: 'File upload failed.' }, { status: 500 });
  }
}
