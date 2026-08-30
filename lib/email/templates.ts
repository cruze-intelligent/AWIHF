import type { ContactSubmissionInput, MentorshipApplicationInput } from '@/lib/validation/submissions';
import { organizationProfile } from '@/lib/config/organization';

export type EmailMessage = {
  subject: string;
  html: string;
  text: string;
};

type MentorshipEmailContext = {
  applicationId?: string;
  submittedAt?: string;
  cvUrl?: string;
  transcriptUrl?: string;
  uploadNote?: string;
};

function escapeHtml(value: string | undefined) {
  return (value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function layout(title: string, body: string) {
  return `
    <div style="margin:0;padding:0;background:#f7f4f1;font-family:Inter,Arial,sans-serif;color:#111111;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
        <tr>
          <td align="center" style="padding:24px 12px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;border-collapse:collapse;background:#FFFFFF;border:1px solid #eadfd7;border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:24px 28px;background:#4B2C11;">
                  <div style="font-weight:800;font-size:22px;letter-spacing:0;color:#F76B1C;">AWIHF</div>
                  <div style="font-size:13px;color:#FFFFFF;margin-top:4px;">Acholi Women in Health Foundation</div>
                </td>
              </tr>
              <tr>
                <td style="padding:28px;">
                  <h1 style="margin:0 0 18px;color:#4B2C11;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
                  ${body}
                </td>
              </tr>
              <tr>
                <td style="padding:18px 28px;background:#fbf6f2;border-top:1px solid #eadfd7;color:#5f5f5f;font-size:13px;line-height:1.6;">
                  <strong style="color:#4B2C11;">${organizationProfile.name}</strong><br />
                  ${organizationProfile.postalAddress.locality}, Uganda<br />
                  ${organizationProfile.email}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function paragraph(value: string) {
  return `<p style="margin:0 0 14px;color:#111111;font-size:15px;line-height:1.65;">${escapeHtml(value)}</p>`;
}

function row(label: string, value: string | undefined) {
  return `
    <tr>
      <td style="padding:8px 0;color:#4B2C11;font-weight:700;width:150px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 0;color:#111111;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>
  `;
}

export function contactNotificationEmail(input: ContactSubmissionInput, submittedAt = new Date().toISOString()): EmailMessage {
  return {
    subject: `New AWIHF contact message: ${input.subject}`,
    text: `New contact message from ${input.fullName} (${input.email}) at ${submittedAt}.\n\nSubject: ${input.subject}\n\n${input.message}`,
    html: layout(
      'New Contact Message',
      `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:18px;">
          ${row('Name', input.fullName)}
          ${row('Email', input.email)}
          ${row('Subject', input.subject)}
          ${row('Submitted', submittedAt)}
        </table>
        <div style="padding:16px;border-left:4px solid #F76B1C;background:#fff8f4;color:#111111;font-size:15px;line-height:1.65;">${escapeHtml(input.message)}</div>
      `
    ),
  };
}

export function contactConfirmationEmail(input: ContactSubmissionInput): EmailMessage {
  return {
    subject: 'AWIHF has received your message',
    text: `Dear ${input.fullName},\n\nThank you for contacting AWIHF. Your message has been received. We aim to respond within 3-5 working days.\n\nYour message:\n${input.message}`,
    html: layout(
      'Message Received',
      `
        ${paragraph(`Dear ${input.fullName},`)}
        ${paragraph('Thank you for contacting AWIHF. Your message has been received. We aim to respond within 3-5 working days.')}
        <div style="margin-top:18px;padding:16px;border-left:4px solid #F76B1C;background:#fff8f4;color:#111111;font-size:15px;line-height:1.65;">${escapeHtml(input.message)}</div>
      `
    ),
  };
}

export function mentorshipNotificationEmail(
  input: MentorshipApplicationInput,
  context: MentorshipEmailContext = {}
): EmailMessage {
  const submittedAt = context.submittedAt ?? new Date().toISOString();
  const fileRows = `
    ${row('CV', context.cvUrl || context.uploadNote || 'CV upload failed - follow up with applicant')}
    ${row('Transcript', context.transcriptUrl || 'Not provided or upload failed')}
  `;

  return {
    subject: `New mentorship application: ${input.fullName}`,
    text: `New mentorship application submitted by ${input.fullName} (${input.email}, ${input.phoneNumber}) at ${submittedAt}.\nReference: ${context.applicationId ?? 'Pending'}\nCV: ${context.cvUrl ?? 'Upload failed'}\nTranscript: ${context.transcriptUrl ?? 'Not provided or upload failed'}`,
    html: layout(
      'New Mentorship Application',
      `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:18px;">
          ${row('Reference', context.applicationId)}
          ${row('Name', input.fullName)}
          ${row('Email', input.email)}
          ${row('Phone', input.phoneNumber)}
          ${row('Institution', input.institution)}
          ${row('Programme', input.programOfStudy)}
          ${row('Year', input.yearOfStudy)}
          ${row('Submitted', submittedAt)}
          ${fileRows}
        </table>
        <h2 style="margin:18px 0 8px;color:#4B2C11;font-size:18px;">Motivation</h2>
        <div style="padding:16px;border-left:4px solid #F76B1C;background:#fff8f4;color:#111111;font-size:15px;line-height:1.65;">${escapeHtml(input.motivation)}</div>
      `
    ),
  };
}

export function mentorshipConfirmationEmail(
  input: MentorshipApplicationInput,
  context: MentorshipEmailContext = {}
): EmailMessage {
  const reference = context.applicationId ? `AWIHF-2026-${context.applicationId.slice(0, 8).toUpperCase()}` : 'AWIHF-2026-PENDING';

  return {
    subject: 'AWIHF Mentorship Program application received',
    text: `Dear ${input.fullName},\n\nThank you for applying to the AWIHF Mentorship Program. Your reference number is ${reference}. Our team will review your application and contact you within 10 working days.`,
    html: layout(
      'Application Received',
      `
        ${paragraph(`Dear ${input.fullName},`)}
        ${paragraph(`Thank you for applying to the AWIHF Mentorship Program. Your reference number is ${reference}.`)}
        ${paragraph(`Our team will review your application and contact you within 10 working days. For questions, contact ${organizationProfile.email}.`)}
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-top:14px;">
          ${row('Institution', input.institution)}
          ${row('Programme', input.programOfStudy)}
          ${row('Career interests', input.careerInterests)}
        </table>
      `
    ),
  };
}
