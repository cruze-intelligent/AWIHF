import React from 'react';
import Link from 'next/link';
import { Heart, Brain, Users, BookOpen } from 'lucide-react';
import { Card } from '../ui/Card';

const programs = [
  {
    icon: <Heart className="w-8 h-8 text-brand-green" />,
    title: "Maternal & Reproductive Health",
    description: "Safe motherhood, antenatal care, family planning and SRHR services for women of all ages.",
    href: "/programs/maternal-reproductive-health"
  },
  {
    icon: <Brain className="w-8 h-8 text-brand-green" />,
    title: "Mental Health & Trauma Support",
    description: "Psychosocial support and trauma-informed care for women living with the aftermath of conflict.",
    href: "/programs/mental-health-trauma-support"
  },
  {
    icon: <Users className="w-8 h-8 text-brand-green" />,
    title: "Community Health Education",
    description: "Outreach, peer education, and health literacy programs that empower women to protect their health.",
    href: "/programs/community-health-education"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-brand-green" />,
    title: "Healthcare Systems Strengthening",
    description: "Trainings and mentorships building the local health workforce.",
    href: "/programs/healthcare-systems-strengthening"
  }
];

export function ProgramsGrid() {
  return (
    <section className="section-wrapper bg-gray-50">
      <div className="content-container">
        <h2 className="section-heading">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 md:mt-8">
          {programs.map((prog, index) => (
            <Card key={index} className="group relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 hover:shadow-xl transition-all duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-brand-orange transition-all duration-300" />
              <div className="w-12 h-12 rounded-xl bg-green-tint flex items-center justify-center shrink-0">
                {prog.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-[18px] md:text-[20px] font-bold text-brand-brown mb-2 leading-[1.4]">{prog.title}</h4>
                <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.6] mb-4">{prog.description}</p>
                <Link href={prog.href} className="text-brand-orange font-medium hover:text-brand-gold transition-colors inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
