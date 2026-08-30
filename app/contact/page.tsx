"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Twitter, Instagram, Linkedin } from '@/components/ui/SocialIcons';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { PageHero } from '@/components/shared/PageHero';
import { organizationProfile } from '@/lib/config/organization';

function getInitialSubject(value: string | null) {
  if (!value) return '';

  const normalized = value.trim().toLowerCase();
  if (normalized === 'volunteer') return 'Volunteer application';
  if (normalized === 'mentor') return 'Mentor application';

  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const initialSubject = getInitialSubject(searchParams.get('subject'));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      }),
    });

    if (!response.ok) {
      setStatus('error');
      setErrorMessage('Your message could not be sent right now. Please contact us directly by email or phone.');
      return;
    }

    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-8 md:py-12 h-full justify-center">
        <div className="w-16 h-16 bg-green-tint rounded-full flex items-center justify-center mb-6 text-brand-green">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-[20px] font-bold text-brand-brown mb-2">Message Sent</h3>
        <p className="text-gray-600">Your message has been sent. We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input name="fullName" label="Full Name" required disabled={status === 'loading'} />
      <Input name="email" label="Email Address" type="email" required disabled={status === 'loading'} />
      <Input name="subject" label="Subject" required disabled={status === 'loading'} defaultValue={initialSubject} />
      <Textarea name="message" label="Message" required disabled={status === 'loading'} />
      {status === 'error' && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-[#C0392B]" role="alert">
          {errorMessage}
        </p>
      )}
      <Button type="submit" variant="primary" size="medium" className="w-full" isLoading={status === 'loading'}>
        Send Message
      </Button>
    </form>
  );
}

export default function ContactPage() {
  const [primaryPhone, secondaryPhone] = organizationProfile.phoneNumbers;

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our team."
      />

      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
            
            {/* Left Column: Details */}
            <div>
              <h2 className="section-heading mb-6">Get In Touch</h2>
              <Card className="p-5 md:p-8">
                <ul className="space-y-5 md:space-y-6 text-[#111111]">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-tint flex items-center justify-center shrink-0 mr-4 text-brand-orange">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-brown mb-1">Email</div>
                      <a href={`mailto:${organizationProfile.email}`} className="hover:text-brand-orange transition-colors">{organizationProfile.email}</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-tint flex items-center justify-center shrink-0 mr-4 text-brand-orange">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-brown mb-1">Phone</div>
                      <a href={`tel:${primaryPhone}`} className="hover:text-brand-orange transition-colors block">{primaryPhone}</a>
                      <a href={`tel:${secondaryPhone}`} className="hover:text-brand-orange transition-colors block mt-1">{secondaryPhone}</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-tint flex items-center justify-center shrink-0 mr-4 text-brand-orange">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-brown mb-1">Address</div>
                      <address className="not-italic text-gray-600">{organizationProfile.postalAddress.poBox}<br/>{organizationProfile.postalAddress.locality}</address>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                  <div className="font-semibold text-brand-brown mb-4">Follow Us</div>
                  <div className="flex space-x-4">
                    <a href={organizationProfile.social.x} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-brown hover:bg-brand-orange hover:text-white transition-colors" aria-label="AWIHF on X">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={organizationProfile.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-brown hover:bg-brand-orange hover:text-white transition-colors" aria-label="AWIHF on Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={organizationProfile.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-brown hover:bg-brand-orange hover:text-white transition-colors" aria-label="AWIHF on LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column: Form */}
            <div>
              <Card className="p-5 md:p-8 h-full">
                <Suspense fallback={<div className="py-12 text-center text-gray-400">Loading form...</div>}>
                  <ContactFormInner />
                </Suspense>
              </Card>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
