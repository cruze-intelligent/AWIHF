"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Twitter, Instagram, Linkedin } from '@/components/ui/SocialIcons';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
      setErrorMessage('Your message could not be sent right now. Please contact AWIHF directly by email or phone.');
      return;
    }

    setStatus('success');
  };

  return (
    <>
      <section className="page-hero">
        <div className="text-center">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-subtitle">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

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
                      <a href="mailto:acholiwomeninhealth@gmail.com" className="hover:text-brand-orange transition-colors">acholiwomeninhealth@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-tint flex items-center justify-center shrink-0 mr-4 text-brand-orange">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-brown mb-1">Phone</div>
                      <a href="tel:0762401363" className="hover:text-brand-orange transition-colors block">0762401363</a>
                      <a href="tel:0772388143" className="hover:text-brand-orange transition-colors block mt-1">0772388143</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-tint flex items-center justify-center shrink-0 mr-4 text-brand-orange">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-brown mb-1">Address</div>
                      <address className="not-italic text-gray-600">P.O. Box 361606<br/>Pece, Gulu City</address>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                  <div className="font-semibold text-brand-brown mb-4">Follow Us</div>
                  <div className="flex space-x-4">
                    <a href="https://x.com/acholiwomen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-brown hover:bg-brand-orange hover:text-white transition-colors" aria-label="X">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/acholiwomeninhealth?igsh=MTltOW1oMWE3dHFleA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-brown hover:bg-brand-orange hover:text-white transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/acholi-women-in-health-foundation-57686235a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-brown hover:bg-brand-orange hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column: Form */}
            <div>
              <Card className="p-5 md:p-8 h-full">
                {status === 'success' ? (
                  <div className="flex flex-col items-center text-center py-8 md:py-12 h-full justify-center">
                    <div className="w-16 h-16 bg-green-tint rounded-full flex items-center justify-center mb-6 text-brand-green">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-[20px] font-bold text-brand-brown mb-2">Message Sent</h3>
                    <p className="text-gray-600">Your message has been sent. We&apos;ll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <Input name="fullName" label="Full Name" required disabled={status === 'loading'} />
                    <Input name="email" label="Email Address" type="email" required disabled={status === 'loading'} />
                    <Input name="subject" label="Subject" required disabled={status === 'loading'} />
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
                )}
              </Card>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
