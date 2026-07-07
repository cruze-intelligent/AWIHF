"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { CheckCircle2 } from 'lucide-react';

export function MentorshipApplicationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/mentorship/applications', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => null);
      setStatus('error');
      setErrorMessage(payload?.message || 'Your application could not be submitted right now. Please try again later or contact AWIHF directly.');
      return;
    }

    event.currentTarget.reset();
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-green-tint border border-brand-green/20 p-5 md:p-6 text-brand-green flex items-start gap-3" role="status">
        <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold mb-1">Application received</h3>
          <p className="text-sm leading-relaxed">Thank you for applying to the AWIHF Mentorship Program. Your application has been received and will be reviewed by our team.</p>
        </div>
      </div>
    );
  }

  return (
    <form id="application-form" onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      <div>
        <h3 className="text-lg md:text-xl font-bold text-brand-brown mb-4 md:mb-5">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="fullName" label="Full Name" required disabled={status === 'loading'} />
          <Input name="gender" label="Gender" required disabled={status === 'loading'} />
          <Input name="dateOfBirth" label="Date of Birth" type="date" required disabled={status === 'loading'} />
          <Input name="phoneNumber" label="Phone Number" type="tel" required disabled={status === 'loading'} />
          <Input name="email" label="Email Address" type="email" required disabled={status === 'loading'} />
        </div>
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-bold text-brand-brown mb-4 md:mb-5">Academic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="institution" label="Institution" required disabled={status === 'loading'} />
          <Input name="programOfStudy" label="Program of Study" required disabled={status === 'loading'} />
          <Input name="yearOfStudy" label="Year of Study" required disabled={status === 'loading'} />
        </div>
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-bold text-brand-brown mb-4 md:mb-5">Application Information</h3>
        <div className="space-y-4">
          <Textarea name="motivation" label="Why do you want mentorship?" required disabled={status === 'loading'} />
          <Textarea name="careerInterests" label="Career Interests" required disabled={status === 'loading'} />
          <Textarea name="leadershipExperience" label="Previous Leadership Experience" disabled={status === 'loading'} />
          <Textarea name="additionalComments" label="Additional Comments" disabled={status === 'loading'} />
        </div>
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-bold text-brand-brown mb-4 md:mb-5">Uploads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="cv" label="CV/Resume" type="file" accept="application/pdf,.pdf" required disabled={status === 'loading'} />
          <Input name="transcript" label="Academic Transcript (optional)" type="file" accept="application/pdf,.pdf" disabled={status === 'loading'} />
        </div>
        <p className="text-sm text-gray-500 mt-3">Maximum file size: 5MB per upload.</p>
      </div>

      {status === 'error' && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-[#C0392B]" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" variant="primary" size="large" className="w-full md:w-auto" isLoading={status === 'loading'}>
        Submit Application
      </Button>
    </form>
  );
}
