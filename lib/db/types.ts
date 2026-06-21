export type ApplicationStatus =
  | 'pending'
  | 'under_review'
  | 'shortlisted'
  | 'accepted'
  | 'rejected'
  | 'waitlisted';

export type FileReference = {
  url: string;
  fileName?: string;
  fileSize?: number;
  mimeType?: string;
};

export type ContactSubmissionRecord = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  source?: string;
  ipHash?: string;
  userAgent?: string;
};

export type MentorshipApplicationRecord = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  institution: string;
  programOfStudy: string;
  yearOfStudy: string;
  motivation: string;
  careerInterests: string;
  leadershipExperience?: string;
  additionalComments?: string;
  cvFile?: FileReference;
  transcriptFile?: FileReference;
  status?: ApplicationStatus;
  ipHash?: string;
  userAgent?: string;
};
