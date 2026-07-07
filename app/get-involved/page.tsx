import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { Gift, MessageSquare, Award, FileText, CheckCircle2 } from 'lucide-react';

export default function GetInvolvedPage() {
  const engagementPathways = [
    {
      icon: <Gift className="w-8 h-8 text-brand-orange" />,
      title: "Support Financially (Donate)",
      description: "Directly fund safe births, mental health circles, cervical cancer screenings, and school dignity pad kits. Every contribution reaches the grassroots directly.",
      ctaText: "Make a Donation",
      ctaHref: "/donate",
      presetDetails: "UGX 10,000 - UGX 25,000 - UGX 50,000 - Custom"
    },
    {
      icon: <Award className="w-8 h-8 text-brand-orange" />,
      title: "Become a Mentor or Volunteer",
      description: "Are you a healthcare student, doctor, midwife, or volunteer? Serve as a mentor or educator to build Northern Uganda's health capacity.",
      ctaText: "Apply to Volunteer",
      ctaHref: "/contact?subject=volunteer",
      presetDetails: "Clinical Mentorship - Community Outreach"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-orange" />,
      title: "Spread the Word & Advocate",
      description: "Amplify Acholi women's health rights. Share our community success stories, latest news, and research outcomes with your networks.",
      ctaText: "Read Impact Stories",
      ctaHref: "/impact",
      presetDetails: "Newsletter updates - Social Advocacy"
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="text-center max-w-2xl">
          <h1 className="page-hero-title">Get Involved</h1>
          <p className="page-hero-subtitle">Your time, voice, and support can change lives in Northern Uganda.</p>
        </div>
      </section>

      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">Join Our Mission</span>
            <h2 className="section-heading mb-4 md:mb-6">Empowering Communities, One Voice at a Time</h2>
            <p className="text-[#111111] text-[15px] md:text-[18px] leading-[1.65] md:leading-[1.6]">
              At AWIHF, our work goes beyond isolated programs. We are building a movement of health advocates, local mentors, and supporters who refuse to let post-conflict scars stand in the way of a girl&apos;s education or a mother&apos;s safe delivery. Explore our active pathways below and find your role in our story.
            </p>
          </div>
        </div>
      </section>

      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
            {engagementPathways.map((path, i) => (
              <Card key={i} className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-tint rounded-xl flex items-center justify-center mb-4 md:mb-6 text-brand-orange shrink-0">
                  {path.icon}
                </div>
                <h3 className="text-[20px] font-bold text-brand-brown mb-2">{path.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 md:mb-6 flex-1">
                  {path.description}
                </p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider block mb-3">
                    Focus: {path.presetDetails}
                  </span>
                  <Link href={path.ctaHref}>
                    <Button variant="secondary" size="medium" className="w-full sm:w-auto">
                      {path.ctaText}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrapper bg-green-tint">
        <div className="content-container max-w-4xl mx-auto">
          <div className="bg-white border border-brand-green/20 rounded-xl p-5 md:p-8 shadow-sm flex flex-col md:flex-row gap-5 md:gap-6 items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-green-tint flex items-center justify-center shrink-0 text-brand-green">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-brown mb-2">Our Commitment to Accountability</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                We take our stewardship of donor funds and stakeholder trust extremely seriously. AWIHF is a registered non-profit organization operating in Gulu City, Northern Uganda. Every shilling, dollar, and volunteer hour directly serves Acholi women and children.
              </p>
              <div className="flex flex-wrap gap-4 items-center text-xs font-semibold text-brand-green uppercase tracking-wide">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Registered Non-Profit</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Audited Records</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Statements Available Upon Request</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
