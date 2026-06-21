import { z } from 'zod';

const optionalNonEmptyString = z.preprocess(
  (value) => (value === '' ? undefined : value),
  z.string().min(1).optional()
);

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://acholiwomeninhealth.org'),
  NEXT_PUBLIC_SANITY_PROJECT_ID: optionalNonEmptyString,
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1).default('production'),
  SANITY_API_VERSION: z.string().min(1).default('2024-01-01'),
  SANITY_READ_TOKEN: optionalNonEmptyString,
  SANITY_PREVIEW_SECRET: optionalNonEmptyString,
  SANITY_WEBHOOK_SECRET: optionalNonEmptyString,
  DATABASE_URL: optionalNonEmptyString,
  DIRECT_URL: optionalNonEmptyString,
  ADMIN_API_TOKEN: optionalNonEmptyString,
  RESEND_API_KEY: optionalNonEmptyString,
  RESEND_FROM_EMAIL: z.string().min(1).default('AWIHF <noreply@example.org>'),
  AWIHF_ADMIN_EMAIL: z.string().email().default('acholiwomeninhealth@gmail.com'),
  CLOUDINARY_CLOUD_NAME: optionalNonEmptyString,
  CLOUDINARY_API_KEY: optionalNonEmptyString,
  CLOUDINARY_API_SECRET: optionalNonEmptyString,
  CLOUDINARY_UPLOAD_FOLDER: z.string().min(1).default('awihf/mentorship-applications'),
  SUBMISSION_RATE_LIMIT_WINDOW_MS: z.coerce.number().positive().default(900000),
  SUBMISSION_RATE_LIMIT_MAX: z.coerce.number().int().positive().default(5),
});

export type AppEnv = z.infer<typeof envSchema>;

export function getEnv(): AppEnv {
  return envSchema.parse(process.env);
}

export function requireEnv<K extends keyof AppEnv>(key: K): NonNullable<AppEnv[K]> {
  const value = getEnv()[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${String(key)}`);
  }
  return value as NonNullable<AppEnv[K]>;
}
