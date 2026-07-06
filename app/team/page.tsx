import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from '@/components/ui/SocialIcons';
import { Button } from '@/components/ui/Button';

const team = [
  {
    name: "Grace Akello",
    role: "Founder",
    bio: "Passionate about improving healthcare access for women in Northern Uganda.",
    image: "/images/lucky.webp",
    linkedin: "#"
  },
  {
    name: "Stephen Odora",
    role: "Co-Founder",
    bio: "Dedicated to building resilient health systems and community empowerment.",
    image: "/images/stephen.webp",
    linkedin: "#"
  }
];

export default function TeamPage() {
  return (
    <>
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[280px] px-4 md:px-8">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2] mb-4">Our Team</h1>
          <p className="text-white/80 text-[18px]">
            Meet the dedicated individuals driving our mission forward.
          </p>
        </div>
      </section>

      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-xl overflow-hidden mb-4 border border-gray-200 bg-gray-50 shadow-sm">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <h4 className="text-[20px] font-bold text-brand-brown mb-1">{member.name}</h4>
                <div className="text-brand-orange font-medium text-sm mb-3">{member.role}</div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2 px-2">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" aria-label={`LinkedIn of ${member.name}`}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrapper bg-brown-tint">
        <div className="content-container text-center max-w-2xl mx-auto">
          <h2 className="text-[30px] font-semibold text-brand-brown mb-4">Join Our Team</h2>
          <p className="text-[#111111] text-[18px] leading-[1.6] mb-8">
            We are always looking for passionate volunteers and medical professionals who share our vision for a healthier Northern Uganda.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="medium">Get In Touch</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
