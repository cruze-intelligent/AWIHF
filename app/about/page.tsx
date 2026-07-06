import React from 'react';
import Image from 'next/image';
import { Heart, Users, BookOpen, Brain, Target, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { DonateCTA } from '@/components/sections/DonateCTA';
import { PartnershipsSection } from '@/components/sections/PartnershipsSection';
import { Linkedin } from '@/components/ui/SocialIcons';

export default function AboutPage() {
  const values = [
    'Community Centeredness',
    'Gender Equity & Inclusion',
    'Evidence & Innovation',
    'Integrity & Transparency',
    'Ubuntu in Practice',
    'Post-Conflict Sensitivity',
  ];
  
  const objectives = [
    "To increase access to community-based healthcare services in Acholi sub-region.",
    "To strengthen community health systems through trainings and mentorships in Acholi sub-region.",
    "To expand referral pathways for maternal and mental health in Acholi sub-region.",
    "To build health workers and peer educators through capacity building and leadership in Acholi sub-region.",
    "To generate evidence through research to inform programmes and advocacy in Acholi sub-region."
  ];

  const approaches = [
    { 
      icon: <Users className="w-8 h-8 text-brand-green" />, 
      title: "Community Ownership", 
      desc: "Our programs are co-designed with community members, elders, and women's groups to ensure cultural relevance and local trust." 
    },
    { 
      icon: <Heart className="w-8 h-8 text-brand-green" />, 
      title: "Integrated Care", 
      desc: "We address the physical, emotional, and social dimensions of health together because Acholi women's health challenges do not exist in isolation." 
    },
    { 
      icon: <BookOpen className="w-8 h-8 text-brand-green" />, 
      title: "Capacity Building", 
      desc: "We train and support community health workers, peer educators, and local volunteers to extend our reach and build lasting local capacity." 
    },
    { 
      icon: <Brain className="w-8 h-8 text-brand-green" />, 
      title: "Advocacy", 
      desc: "We raise our voices both locally and nationally for policies that protect and advance the health rights of Acholi women." 
    }
  ];

  const team = [
    {
      name: "Grace Akello",
      role: "Founder & Executive Director",
      bio: "Passionate about improving healthcare access, safe motherhood, and peer health education for women and girls in Northern Uganda.",
      image: "/images/lucky.webp",
      imageClassName: "object-contain",
      linkedin: "#"
    },
    {
      name: "Stephen Odora",
      role: "Co-Founder & Operations Director",
      bio: "Dedicated to building resilient local health networks, trauma-informed psychosocial services, and community-led strengthening programs.",
      image: "/images/stephen.webp",
      imageClassName: "object-cover object-top",
      linkedin: "#"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[280px] px-4 md:px-8">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2] mb-4">About AWIHF</h1>
          <p className="text-white/80 text-[18px]">Women-led. Community-rooted. Health-focused.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">Our Heritage</span>
              <h2 className="section-heading">Our Story</h2>
              <p className="text-[16px] leading-[1.6] text-[#111111] mb-4">
                Established in 2024, Acholi Women in Health Foundation (AWIHF) was founded in response to the persistent and disproportionate health challenges facing women and girls in the post-conflict Acholi sub-region of Northern Uganda.
              </p>
              <p className="text-[16px] leading-[1.6] text-[#111111]">
                Two decades of Lord&apos;s Resistance Army (LRA) insurgency left behind mass displacement, widespread gender-based violence, and a decimated public health infrastructure. With maternal mortality figures at 106.0 per 100,000 live births (compared to 69.1 nationally) and a 24% teenage pregnancy rate in rural areas, AWIHF exists to close the gaps that peace has not yet closed. We bring healthcare services directly to community hubs while strengthening systems for long-term health equity.
              </p>
            </div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-white shadow-md border border-gray-100">
              <Image 
                src="/images/AWIHF logo.webp" 
                alt="Acholi Women in Health Foundation logo" 
                fill 
                className="object-contain p-8 md:p-12" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 border-[1.5px] border-brand-brown rounded-xl bg-white shadow-sm">
              <h3 className="text-[24px] font-semibold text-brand-orange mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-brand-orange" /> Our Mission
              </h3>
              <p className="text-[#111111] text-[16px] leading-[1.6] italic">
                &quot;To improve healthcare outcomes of women and girls in northern Uganda through delivery of accessible community-based health services, building a community of empowered women in healthcare through mentorship, education and research.&quot;
              </p>
            </div>
            <div className="p-8 border-[1.5px] border-brand-brown rounded-xl bg-white shadow-sm">
              <h3 className="text-[24px] font-semibold text-brand-orange mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand-orange" /> Our Vision
              </h3>
              <p className="text-[#111111] text-[16px] leading-[1.6] italic">
                &quot;A community where women and girls are able to access equitable and holistic healthcare services, and where women in healthcare are valued, supported and empowered to lead, innovate and deliver high-quality care that addresses the unique needs of individuals and community.&quot;
              </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-[24px] font-semibold text-brand-brown mb-6">Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {values.map((v) => (
                <span key={v} className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-orange-tint text-brand-orange">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="section-wrapper bg-white">
        <div className="content-container max-w-4xl mx-auto">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block text-center">Strategic Roadmap</span>
          <h2 className="section-heading text-center mb-10">Our Strategic Objectives</h2>
          <div className="space-y-4">
            {objectives.map((obj, index) => (
              <div key={index} className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-brand-orange/30 hover:shadow-sm transition-all duration-200">
                <div className="w-8 h-8 rounded-full bg-orange-tint text-brand-orange font-bold text-sm flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <p className="text-[#111111] text-[16px] leading-relaxed pt-0.5">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Governance Section */}
      <section className="section-wrapper bg-gray-50" id="leadership">
        <div className="content-container">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block text-center">Our Stewards</span>
          <h2 className="section-heading text-center mb-4">Leadership & Governance</h2>
          <p className="text-gray-500 text-[16px] text-center max-w-2xl mx-auto mb-12">
            Meet the community-rooted leaders guiding our operational excellence and strategic mission in Gulu City and across Northern Uganda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <Card key={i} className="p-6 md:p-8 flex flex-col items-center text-center bg-white shadow-sm border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-orange-tint bg-gray-50 shadow-sm">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className={member.imageClassName}
                  />
                </div>
                <h4 className="text-[22px] font-bold text-brand-brown mb-1">{member.name}</h4>
                <div className="text-brand-orange font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</div>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-1 px-4">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-50 hover:bg-[#0A66C2] hover:text-white text-gray-400 flex items-center justify-center transition-all duration-200 border border-gray-200" 
                    aria-label={`LinkedIn profile for ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-wrapper bg-green-tint">
        <div className="content-container">
          <span className="text-brand-green font-semibold text-sm tracking-wider uppercase mb-3 block text-center">Our Methodology</span>
          <h2 className="section-heading text-center mb-10">Our Strategic Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((app, i) => (
              <Card key={i} className="bg-white border-transparent p-6 flex flex-col h-full hover:shadow-xl transition-all duration-200">
                <div className="w-16 h-16 rounded-xl bg-green-tint flex items-center justify-center mb-6 text-brand-green shrink-0">
                  {app.icon}
                </div>
                <h4 className="text-[20px] font-semibold text-brand-brown mb-3">{app.title}</h4>
                <p className="text-gray-500 text-[14px] leading-[1.6] flex-1">{app.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PartnershipsSection />

      {/* Why It Matters */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block text-center">Regional Context</span>
          <h2 className="section-heading text-center mb-10">Why Our Focus Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-brown-tint p-6 rounded-xl border border-brand-brown/20 flex gap-4 items-start shadow-sm">
              <div className="text-brand-orange text-4xl font-bold font-mono">106.0</div>
              <div>
                <h4 className="font-semibold text-brand-brown mb-1">Maternal Mortality Rate</h4>
                <p className="text-gray-600 text-sm">Maternal deaths per 100,000 live births in post-conflict Acholi, compared to 69.1 national average.</p>
              </div>
            </div>
            <div className="bg-brown-tint p-6 rounded-xl border border-brand-brown/20 flex gap-4 items-start shadow-sm">
              <div className="text-brand-orange text-4xl font-bold font-mono">24%</div>
              <div>
                <h4 className="font-semibold text-brand-brown mb-1">Teenage Pregnancy Rate</h4>
                <p className="text-gray-600 text-sm">Of adolescent girls in rural Northern Uganda experience early, high-risk pregnancy due to systemic health gaps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}
