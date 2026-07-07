import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { MentorshipApplicationForm } from '@/components/mentorship/MentorshipApplicationForm';
import { getApplicationWindow, getMentorshipPackages } from '@/lib/content/mentorship';
import { CheckCircle2, GraduationCap } from 'lucide-react';

export default async function MentorshipPage() {
  const [applicationWindow, mentorshipPackages] = await Promise.all([
    getApplicationWindow(),
    getMentorshipPackages(),
  ]);

  return (
    <>
      <section className="page-hero">
        <div className="text-center max-w-2xl">
          <h1 className="page-hero-title">Mentorship Programme</h1>
          <p className="page-hero-subtitle">
            Application-based mentorship for healthcare students and emerging community health leaders.
          </p>
        </div>
      </section>

      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <Card className="lg:col-span-5 bg-white p-5 md:p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-tint text-brand-orange flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <Badge
                variant={applicationWindow.isOpen ? 'news' : 'coming-soon'}
                className={applicationWindow.isOpen ? '!bg-brand-orange !text-white mb-4' : 'mb-4'}
              >
                {applicationWindow.isOpen ? 'Applications Open' : 'Applications Closed'}
              </Badge>
              <h2 className="text-[22px] md:text-[24px] font-bold text-brand-brown mb-3">{applicationWindow.cycleName}</h2>
              <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.7] mb-5 md:mb-6">
                {applicationWindow.isOpen ? applicationWindow.openMessage : applicationWindow.closedMessage}
              </p>
            </Card>

            <div className="lg:col-span-7">
              <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">Mentorship Packages</span>
              <h2 className="section-heading mb-5 md:mb-8">Available Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {mentorshipPackages.map((item) => (
                  <Card key={item.name} className="p-5 md:p-6 bg-white border border-gray-200">
                    <h3 className="text-[18px] md:text-xl font-bold text-brand-brown mb-2">{item.name}</h3>
                    <p className="text-brand-orange font-semibold mb-3">{item.price}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.description}</p>
                    <ul className="space-y-2 mb-5">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.eligibility}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {applicationWindow.isOpen && (
        <section className="section-wrapper bg-white">
          <div className="content-container max-w-4xl mx-auto">
            <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">Apply Now</span>
            <h2 className="section-heading mb-5 md:mb-8">Mentorship Application</h2>
            <Card className="p-5 md:p-8 bg-white border border-gray-200">
              <MentorshipApplicationForm />
            </Card>
          </div>
        </section>
      )}
    </>
  );
}
