import { createHash } from 'crypto';
import { getEnv, requireEnv } from '@/lib/config/env';
import { logger } from '@/lib/observability/logger';

export type UploadedFileMetadata = {
  url: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  provider: 'cloudinary';
  publicId?: string;
};

type UploadOptions = {
  folder?: string;
  resourceType?: 'auto' | 'image' | 'raw';
  publicId?: string;
};

const PDF_MIME_TYPE = 'application/pdf';
const PDF_EXTENSION = '.pdf';
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;

export function hashUploadOwner(email: string) {
  return createHash('sha256').update(email.trim().toLowerCase()).digest('hex').slice(0, 8);
}

export function validatePdfUpload(file: File) {
  const hasPdfExtension = file.name.toLowerCase().endsWith(PDF_EXTENSION);
  if (file.type !== PDF_MIME_TYPE || !hasPdfExtension || file.size > MAX_UPLOAD_SIZE) {
    return { ok: false as const, message: 'Please upload a PDF file under 5MB' };
  }

  return { ok: true as const };
}

function createSignature(params: Record<string, string | number>, apiSecret: string) {
  const signatureBase = Object.entries(params)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return createHash('sha1').update(`${signatureBase}${apiSecret}`).digest('hex');
}

export async function uploadFileToCloudinary(file: File, options: UploadOptions = {}): Promise<UploadedFileMetadata> {
  const cloudName = requireEnv('CLOUDINARY_CLOUD_NAME');
  const apiKey = requireEnv('CLOUDINARY_API_KEY');
  const apiSecret = requireEnv('CLOUDINARY_API_SECRET');
  const env = getEnv();
  const folder = options.folder ?? env.CLOUDINARY_UPLOAD_FOLDER;
  const resourceType = options.resourceType ?? 'auto';
  const timestamp = Math.round(Date.now() / 1000);
  const signatureParams: Record<string, string | number> = { folder, timestamp };
  if (options.publicId) {
    signatureParams.public_id = options.publicId;
  }
  const signature = createSignature(signatureParams, apiSecret);

  const formData = new FormData();
  formData.set('file', file);
  formData.set('api_key', apiKey);
  formData.set('timestamp', String(timestamp));
  formData.set('folder', folder);
  formData.set('signature', signature);
  if (options.publicId) {
    formData.set('public_id', options.publicId);
  }

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Cloudinary upload failed: ${response.status} ${errorText}`);
  }

  const payload = await response.json() as { secure_url: string; public_id: string };
  logger.info('cloudinary.upload.succeeded', {
    folder,
    publicId: payload.public_id,
    fileSize: file.size,
    mimeType: file.type,
  });

  return {
    url: payload.secure_url,
    publicId: payload.public_id,
    fileName: file.name,
    fileSize: file.size,
    mimeType: file.type,
    provider: 'cloudinary',
  };
}

export async function deleteCloudinaryAsset(
  publicId: string,
  options: Pick<UploadOptions, 'resourceType'> = {}
): Promise<{ ok: true } | { ok: false; error: string }> {
  const cloudName = requireEnv('CLOUDINARY_CLOUD_NAME');
  const apiKey = requireEnv('CLOUDINARY_API_KEY');
  const apiSecret = requireEnv('CLOUDINARY_API_SECRET');
  const resourceType = options.resourceType ?? 'raw';
  const timestamp = Math.round(Date.now() / 1000);
  const signature = createSignature({ public_id: publicId, timestamp }, apiSecret);

  const formData = new FormData();
  formData.set('api_key', apiKey);
  formData.set('timestamp', String(timestamp));
  formData.set('public_id', publicId);
  formData.set('signature', signature);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/destroy`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      logger.error('cloudinary.delete.failed', new Error(errorText), { publicId, status: response.status });
      return { ok: false, error: 'Cloudinary delete failed.' };
    }

    logger.info('cloudinary.delete.succeeded', { publicId });
    return { ok: true };
  } catch (error) {
    logger.error('cloudinary.delete.failed', error, { publicId });
    return { ok: false, error: 'Cloudinary delete failed.' };
  }
}
