import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { Heart, Users, BookOpen, Brain, Target, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { DonateCTA } from '@/components/sections/DonateCTA';
import { PartnershipsSection } from '@/components/sections/PartnershipsSection';
import { Linkedin } from '@/components/ui/SocialIcons';
import { leadershipTeam } from '@/lib/config/organization';

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
      title: "Community Action", 
      desc: "We mobilize women and community groups to actively participate in addressing local health needs." 
    },
    { 
      icon: <Heart className="w-8 h-8 text-brand-green" />, 
      title: "Capacity Building", 
      desc: "We empower health workers, village health teams, and youth with skills to lead healthcare transformation." 
    },
    { 
      icon: <BookOpen className="w-8 h-8 text-brand-green" />, 
      title: "Research & Evidence", 
      desc: "We generate localized data to inform high-impact interventions and support health policy changes." 
    },
    { 
      icon: <Brain className="w-8 h-8 text-brand-green" />, 
      title: "Advocacy", 
      desc: "We raise our voices both locally and nationally for policies that protect and advance the health rights of Acholi women." 
    }
  ];

  return (
    <>
      {/* Standardized Hero */}
      <PageHero
        title="About AWIHF"
        subtitle="Women-led. Community-rooted. Health-focused."
      />

      {/* Our Story */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <p className="text-[16px] leading-[1.6] text-[#111111] mb-4">
                Founded in 2023, Acholi Women in Health Foundation (AWIHF) was established in response to the persistent and disproportionate health challenges facing women and girls in the post-conflict Acholi sub-region of Northern Uganda.
              </p>
              <p className="text-[16px] leading-[1.6] text-[#111111]">
                Two decades of Lord&apos;s Resistance Army (LRA) insurgency left behind mass displacement, widespread gender-based violence, and a decimated public health infrastructure. With maternal mortality figures at 106.0 per 100,000 live births (compared to 69.1 nationally) and a 24% teenage pregnancy rate in rural areas, we exist to close the gaps that peace has not yet closed. We bring healthcare services directly to community hubs while strengthening systems for long-term health equity.
              </p>
            </div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-white shadow-md border border-gray-100">
              <Image 
                src="/images/AWIHF logo.webp" 
                alt="Acholi Women in Health Foundation logo" 
                fill 
                className="object-contain p-8 md:p-12"
                sizes="(max-width: 768px) 100vw, 500px" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-12">
            <div className="p-5 md:p-8 border-[1.5px] border-brand-brown rounded-xl bg-white shadow-sm">
              <h3 className="text-[21px] md:text-[24px] font-semibold text-brand-orange mb-3 md:mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-brand-orange" /> Our Mission
              </h3>
              <p className="text-[#111111] text-[16px] leading-[1.6] italic">
                &quot;To improve healthcare outcomes of women and girls in northern Uganda through delivery of accessible community-based health services, building a community of empowered women in healthcare through mentorship, education and research.&quot;
              </p>
            </div>
            <div className="p-5 md:p-8 border-[1.5px] border-brand-brown rounded-xl bg-white shadow-sm">
              <h3 className="text-[21px] md:text-[24px] font-semibold text-brand-orange mb-3 md:mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand-orange" /> Our Vision
              </h3>
              <p className="text-[#111111] text-[16px] leading-[1.6] italic">
                &quot;A community where women and girls are able to access equitable and holistic healthcare services, and where women in healthcare are valued, supported and empowered to lead, innovate and deliver high-quality care that addresses the unique needs of individuals and community.&quot;
              </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-[22px] md:text-[24px] font-semibold text-brand-brown mb-5 md:mb-6">Our Core Values</h3>
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
          <div className="text-center mb-7 md:mb-10">
            <h2 className="section-heading">Our Strategic Objectives</h2>
          </div>
          <div className="space-y-4">
            {objectives.map((obj, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl border border-gray-200 bg-white hover:border-brand-orange/30 hover:shadow-sm transition-all duration-200">
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
          <div className="text-center mb-4">
            <h2 className="section-heading">Leadership & Governance</h2>
          </div>
          <p className="text-gray-500 text-[15px] md:text-[16px] text-center max-w-2xl mx-auto mb-8 md:mb-12">
            Meet the community-rooted leaders guiding our operational excellence and strategic mission in Gulu City and across Northern Uganda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
            {leadershipTeam.map((member, i) => (
              <Card key={i} className="p-5 md:p-8 flex flex-col items-center text-center bg-white shadow-sm border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="relative w-full max-w-[220px] md:max-w-[240px] aspect-[4/5] rounded-xl overflow-hidden mb-5 md:mb-6 border border-orange-tint bg-gray-50 shadow-sm">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className={member.imageClassName}
                    sizes="(max-width: 768px) 100vw, 240px"
                  />
                </div>
                <h4 className="text-[20px] md:text-[22px] font-bold text-brand-brown mb-1">{member.name}</h4>
                <div className="text-brand-orange font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</div>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-5 md:mb-6 flex-1 md:px-4">
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
          <div className="text-center mb-7 md:mb-10">
            <h2 className="section-heading">Our Strategic Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((app, i) => (
              <Card key={i} className="bg-white border-transparent p-5 md:p-6 flex flex-col h-full hover:shadow-xl transition-all duration-200">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-green-tint flex items-center justify-center mb-4 md:mb-6 text-brand-green shrink-0">
                  {app.icon}
                </div>
                <h4 className="text-[18px] md:text-[20px] font-semibold text-brand-brown mb-2 md:mb-3">{app.title}</h4>
                <p className="text-gray-500 text-[14px] leading-[1.6] flex-1">{app.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PartnershipsSection />

      {/* Why Our Focus Matters */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="text-center mb-7 md:mb-10">
            <h2 className="section-heading">Why Our Focus Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {/* Card 1 */}
            <Card className="p-5 md:p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-2xl md:text-[26px] font-bold text-brand-orange tracking-tight">106.0</span>
                  <Badge variant="program" className="!bg-orange-tint !text-brand-orange text-[11px] font-semibold tracking-wide border border-brand-orange/20">
                    Maternal Health
                  </Badge>
                </div>
                <h4 className="text-[17px] md:text-[18px] font-bold text-brand-brown mb-2.5 leading-snug">
                  Maternal Health & Safe Motherhood
                </h4>
                <p className="text-gray-600 text-[13.5px] md:text-[14px] leading-relaxed">
                  Women and girls need timely, respectful, and accessible healthcare throughout pregnancy, childbirth, and the postnatal period. Barriers to information, referral, skilled care, and continued support can place mothers and newborns at greater risk. Our work strengthens access to maternal and reproductive-health information and community-level support so women can make informed decisions and reach appropriate care when they need it.
                </p>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="p-5 md:p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-2xl md:text-[26px] font-bold text-brand-orange tracking-tight">24%</span>
                  <Badge variant="program" className="!bg-orange-tint !text-brand-orange text-[11px] font-semibold tracking-wide border border-brand-orange/20">
                    Adolescent Care
                  </Badge>
                </div>
                <h4 className="text-[17px] md:text-[18px] font-bold text-brand-brown mb-2.5 leading-snug">
                  Adolescent Reproductive Health
                </h4>
                <p className="text-gray-600 text-[13.5px] md:text-[14px] leading-relaxed">
                  Adolescents need accurate, age-appropriate health information and supportive environments in which they can ask questions without fear or stigma. Early pregnancy and limited access to reproductive-health information can affect education, wellbeing, economic opportunity, and future health. Our work supports women and girls with practical health education and community-based approaches that encourage informed choices and earlier access to appropriate care.
                </p>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="p-5 md:p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-xl md:text-[22px] font-bold text-brand-orange tracking-tight">Safe Spaces</span>
                  <Badge variant="program" className="!bg-orange-tint !text-brand-orange text-[11px] font-semibold tracking-wide border border-brand-orange/20">
                    Psychosocial
                  </Badge>
                </div>
                <h4 className="text-[17px] md:text-[18px] font-bold text-brand-brown mb-2.5 leading-snug">
                  Mental Health & Psychosocial Wellbeing
                </h4>
                <p className="text-gray-600 text-[13.5px] md:text-[14px] leading-relaxed">
                  Mental health is inseparable from overall wellbeing. Women and girls may face stress, grief, trauma, anxiety, depression, social pressures, and other challenges while having limited access to safe and supportive services. Our mental-health work creates spaces for people to seek support, strengthen coping skills, reduce stigma, and connect with appropriate care when more specialized help is needed.
                </p>
              </div>
            </Card>

            {/* Card 4 */}
            <Card className="p-5 md:p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-xl md:text-[22px] font-bold text-brand-orange tracking-tight">Grassroots</span>
                  <Badge variant="program" className="!bg-orange-tint !text-brand-orange text-[11px] font-semibold tracking-wide border border-brand-orange/20">
                    Community Reach
                  </Badge>
                </div>
                <h4 className="text-[17px] md:text-[18px] font-bold text-brand-brown mb-2.5 leading-snug">
                  Community-Based Health Access
                </h4>
                <p className="text-gray-600 text-[13.5px] md:text-[14px] leading-relaxed">
                  Health services are most effective when people can understand them, reach them, trust them, and receive appropriate support at the right time. Community health workers, local health actors, and community networks play an important role in connecting people with health information, prevention services, referrals, and care. We work to strengthen these local connections and bring health support closer to the communities we serve.
                </p>
              </div>
            </Card>

            {/* Card 5 */}
            <Card className="p-5 md:p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-xl md:text-[22px] font-bold text-brand-orange tracking-tight">Local Capacity</span>
                  <Badge variant="program" className="!bg-orange-tint !text-brand-orange text-[11px] font-semibold tracking-wide border border-brand-orange/20">
                    Health Systems
                  </Badge>
                </div>
                <h4 className="text-[17px] md:text-[18px] font-bold text-brand-brown mb-2.5 leading-snug">
                  Stronger Local Health Systems
                </h4>
                <p className="text-gray-600 text-[13.5px] md:text-[14px] leading-relaxed">
                  Sustainable health improvement requires more than individual interventions. Communities also need capable health workers, stronger referral pathways, practical knowledge, and local systems that can continue responding to health needs. Our work invests in community-level capacity and healthcare education while strengthening connections between communities and existing health services.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}
