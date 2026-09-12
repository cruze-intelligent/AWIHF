import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { ImpactReportSpotlight } from '@/components/sections/ImpactReportSpotlight';
import { StoryCard } from '@/components/shared/StoryCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { DonateCTA } from '@/components/sections/DonateCTA';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Impact',
  description: 'Explore AWIHF impact across Northern Uganda, including households reached, healthcare students equipped, outreach milestones, programme phases, and community stories.',
  alternates: {
    canonical: '/impact',
  },
};

export default function ImpactPage() {
  const impactHeroStats = [
    { value: "1,000+", label: "Households Reached" },
    { value: "50+", label: "Healthcare Students Equipped" },
    { value: "4", label: "Core Programme Areas" },
    { value: "3", label: "Programme Phases Completed" },
  ];

  const impactTimeline = [
    {
      period: "2023",
      title: "AWIHF Founded",
      summary:
        "Founded in response to the persistent health challenges facing women and girls in the post-conflict Acholi sub-region, establishing our women-led and community-rooted mission.",
      highlights: [
        "Defined a mission focused on equitable, community-based healthcare for women and girls.",
        "Positioned our organisation around maternal health, mental health, education, and systems strengthening.",
      ],
    },
    {
      period: "January - June 2025",
      title: "Research and Community Groundwork",
      summary:
        "The first half of 2025 focused on evidence gathering, early awareness work, and shaping our programmes around community realities in Gulu and the wider Acholi sub-region.",
      highlights: [
        "Launched community-based research on barriers to sexual and reproductive health access.",
        "Supported early cervical cancer awareness and preventive education efforts.",
        "Strengthened our advocacy and programme planning using direct community evidence.",
      ],
    },
    {
      period: "10 - 13 July 2025",
      title: "Patiko Medical Outreach",
      summary:
        "We delivered our landmark four-day Patiko Medical Outreach, reaching more than 1,000 households with high-volume, integrated frontline services.",
      highlights: [
        "Provided free medical consultations, diagnostic support, and vision screenings.",
        "Delivered SRHR education, maternal care support, and referral guidance in underserved rural communities.",
        "Demonstrated our operational capacity for trusted, large-scale outreach delivery.",
      ],
    },
    {
      period: "25 September 2025",
      title: "Regional Cervical Cancer Initiative",
      summary:
        "Building on field outreach work, we expanded preventive care education through a regional cervical cancer awareness and diagnosis literacy initiative.",
      highlights: [
        "Educated rural women on early detection, risk factors, and screening benefits.",
        "Worked with local health facilities to connect awareness with real screening pathways.",
      ],
    },
    {
      period: "5 November 2025",
      title: "National Mentorship Programme Launch",
      summary:
        "We extended our impact beyond direct service delivery by launching a mentorship pipeline for healthcare students, emerging professionals, and community health workers.",
      highlights: [
        "Connected student professionals with experienced clinical mentors across Uganda.",
        "Strengthened the long-term health workforce supporting resilient local systems.",
      ],
    },
    {
      period: "3 July 2026",
      title: "Abwoch Medical Outreach",
      summary:
        "We conducted a community medical outreach at Abwoch Health Center III, bringing essential screening, reproductive health services, and counselling closer to underserved families.",
      highlights: [
        "Offered general consultations and screening at a community health facility touchpoint.",
        "Delivered HIV screening and counselling alongside breast, cervical cancer, and sickle cell awareness.",
        "Reinforced our model of pairing preventive education with referral-oriented support.",
      ],
    },
    {
      period: "11 July 2026",
      title: "Official Public Launch",
      summary:
        "Acholi Women in Health Foundation officially launched at Gulu University Library Hall, publicly marking our next chapter after a growing track record of outreach, advocacy, and partnership-building.",
      highlights: [
        "Convened public leaders, health partners, and community stakeholders around our shared mission.",
        "Signaled our transition from formative programme delivery into a stronger institutional phase.",
      ],
    },
  ];
  const targets2026 = [
    { target: "Reach 5,000+ additional households with free services", category: "Outreach" },
    { target: "Distribute reusable sanitary pads to 1,000+ vulnerable girls", category: "Education & SRHR" },
    { target: "Support 500+ teenage mothers", category: "Maternal Health" },
    { target: "Train 200+ SRHR peer educators", category: "Capacity Building" },
    { target: "Equip 1,000 Community Health Workers", category: "Systems Strengthening" },
    { target: "Establish maternal health referral hubs", category: "Infrastructure" },
    { target: "Scale cervical cancer screening", category: "Preventive Care" },
    { target: "Establish mental health referral hubs", category: "Mental Health" },
  ];

  const programmeHighlights = [
    {
      title: "Maternal & Reproductive Health",
      description:
        "Expanding safe motherhood, antenatal support, family planning education, cervical cancer awareness, and referral pathways for women and girls in underserved communities.",
    },
    {
      title: "Mental Health & Trauma Support",
      description:
        "Creating community-based psychosocial support, healing spaces, peer networks, stigma reduction, and trusted referral pathways for women and girls.",
    },
    {
      title: "Community Health Education",
      description:
        "Delivering school health sessions, menstrual hygiene education, SRHR peer education, and public prevention campaigns that strengthen health literacy.",
    },
    {
      title: "Healthcare Systems Strengthening",
      description:
        "Equipping Village Health Teams, community health workers, and local health actors while improving emergency referral coordination between communities and facilities.",
    },
    {
      title: "School & Community Outreach",
      description:
        "Bringing integrated frontline medical camps, screenings, consultations, and diagnostic education directly to schools and rural community spaces.",
    },
    {
      title: "Mentorship Programme",
      description:
        "Connecting medical and nursing students with clinical mentors to build a stronger pipeline of women-led healthcare leadership across Uganda.",
    },
  ];

  const stories = [
    {
      slug: "safe-motherhood-patiko",
      title: "Hope & Safe Delivery in Patiko Sub-County",
      excerpt: "How a young mother accessed crucial prenatal support, clinical consultations, and emergency birth referrals during our Patiko Medical Outreach, ensuring a safe delivery.",
      category: "Maternal Health",
      image: "/images/AWIHF-Patiko.webp",
      author: "AWIHF Outreach Team",
      link: "/stories/safe-motherhood-patiko"
    },
    {
      slug: "healing-trauma-gulu",
      title: "Rebuilding Mental Wellbeing & Safe Community Spaces",
      excerpt: "How community-led healing circles and psychosocial counseling in Gulu helped women overcome severe isolation, build coping skills, and find pathways to dignity.",
      category: "Mental Health",
      image: "/images/AWIHF-MentalHealth1.webp",
      author: "Psychosocial Support Team",
      link: "/stories/healing-trauma-gulu"
    },
    {
      slug: "dignity-hygiene-education",
      title: "Dignity in Education: Empowering Schoolgirls",
      excerpt: "How a teenage schoolgirl in a rural sub-county was equipped with reusable sanitary pads and trained as an SRHR peer educator, eliminating absenteeism in her classroom.",
      category: "Health Education",
      image: "/images/AWIHF-SchoolOutreach4.webp",
      author: "Education Coordinator",
      link: "/stories/dignity-hygiene-education"
    },
    {
      slug: "national-mentorship-launch",
      title: "Building the Next Generation of Healthcare Leaders",
      excerpt: "Connecting over 50 nursing and medical students nationwide with experienced clinical mentors to bridge structural gaps in local healthcare capacity.",
      category: "Mentorship & Systems",
      image: "/images/AWIHF-Mentorship1.webp",
      author: "Mentorship Operations Desk",
      link: "/stories/national-mentorship-launch"
    },
    {
      slug: "cervical-cancer-regional-initiative",
      title: "Extending Cervical Cancer Screening & Diagnosis Literacy",
      excerpt: "Rolling out large-scale diagnostic literacy and screening awareness across rural sub-counties to promote early detection and timely healthcare access.",
      category: "Preventive Care",
      image: "/images/AWIHF-Maternal2.webp",
      author: "Health Committee",
      link: "/stories/cervical-cancer-regional-initiative"
    },
    {
      slug: "abwoch-medical-outreach-2026",
      title: "Integrated Frontline Care at Abwoch Health Center III",
      excerpt: "Bringing general medical screening, reproductive health services, HIV counseling, and cancer awareness directly to rural families in need of accessible frontline care.",
      category: "Community Outreach",
      image: "/images/AWIHF-Abwoch.webp",
      author: "AWIHF Clinical Team",
      link: "/stories/abwoch-medical-outreach-2026"
    }
  ];

  return (
    <>
      {/* Standardized Shared Hero Banner & Floating Statistics */}
      <PageHero
        title="Our Impact"
        subtitle="A growing record of community-centred health delivery across Gulu and the Acholi sub-region."
        stats={impactHeroStats}
      />

      <section className="section-wrapper bg-white">
        <div className="content-container max-w-4xl mx-auto">
          <div className="text-center md:text-left mb-5 md:mb-7">
            <h2 className="section-heading">Impact Summary</h2>
          </div>
          <div className="space-y-5 text-[#111111] text-[16px] md:text-[17px] leading-[1.75]">
            <p>
              Acholi Women in Health Foundation exists to address persistent health inequities affecting women and girls in the post-conflict Acholi sub-region of Northern Uganda. In Gulu and surrounding communities, families continue to face barriers to timely maternal care, reproductive-health information, mental-health support, preventive screening, and reliable referral pathways. AWIHF responds by bringing health services and education closer to the places where people already live, learn, gather, and seek support.
            </p>
            <p>
              The foundation's impact is created through connected programmes rather than isolated activities. Maternal and reproductive health outreach supports safer motherhood and informed choices; mental-health and trauma support creates trusted spaces for psychosocial care; community health education strengthens prevention and dignity for women and adolescent girls; healthcare systems strengthening equips local health actors; school and community outreach takes screening and health literacy into everyday community settings; and mentorship builds the next generation of health professionals.
            </p>
            <p>
              This approach has already produced measurable results, including more than 1,000 households reached through the Patiko Medical Outreach, more than 50 healthcare students equipped through the mentorship pipeline, and multiple structured programme phases completed across the Acholi sub-region. Together, these efforts show AWIHF's practical model of impact: community trust, women-led health leadership, stronger local systems, and more dignified access to care for women, girls, and families in Northern Uganda.
            </p>
          </div>
        </div>
      </section>

      <ImpactReportSpotlight />

      {/* Organisational Timeline */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-heading">Timeline of Growth and Impact</h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />
            
            {impactTimeline.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start mb-8 md:mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[16px] md:left-1/2 w-6 h-6 rounded-full bg-brand-orange border-4 border-white md:-translate-x-1/2 mt-1 z-10" />
                <div className={`ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                  <span className="text-brand-green font-bold text-sm uppercase tracking-wider">{item.period}</span>
                  <h3 className="text-xl font-bold text-brand-brown mb-2 mt-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.summary}</p>
                  <ul className={`mt-4 space-y-2 text-sm text-gray-600 ${i % 2 === 0 ? '' : 'md:ml-auto'}`}>
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className={`flex gap-2 ${i % 2 === 0 ? '' : 'md:justify-end'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                        <span className={i % 2 === 0 ? '' : 'md:text-right'}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patiko Outreach Spotlight */}
      <section className="relative w-full min-h-[320px] md:min-h-[400px] flex items-center justify-center px-4 md:px-8 py-10 md:py-16">
        <div className="absolute inset-0 z-0">
          <Image src="/images/AWIHF-Patiko.webp" alt="Patiko Medical Outreach" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-brand-brown/80" />
        </div>
        <div className="relative z-10 text-center max-w-4xl">
          <h3 className="text-white text-2xl md:text-[40px] font-bold leading-[1.2] mb-4 md:mb-6">Patiko Medical Outreach</h3>
          <p className="text-white/90 text-[16px] md:text-[18px] leading-[1.6] mb-3 md:mb-4 font-medium">July 10–13, 2025</p>
          <p className="text-white/80 text-[15px] md:text-[18px] leading-[1.6]">
            Reached 1,000+ households across four days with free medical consultations, vision screenings, SRHR education, and post-abortion care referrals in the most underserved rural Acholi communities.
          </p>
        </div>
      </section>

      {/* Programme Highlights */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-7 md:mb-10">
            <h2 className="section-heading">Programme Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {programmeHighlights.map((highlight) => (
              <Card key={highlight.title} className="border-t-4 border-t-brand-orange">
                <h4 className="text-[20px] font-semibold text-brand-brown mb-3">{highlight.title}</h4>
                <p className="text-gray-600 leading-[1.6]">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Stories of Impact — integrated from former Stories page */}
      <section id="stories" className="section-wrapper bg-white scroll-mt-20">
        <div className="content-container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-heading">Stories of Impact</h2>
            <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.6] max-w-xl mx-auto mt-2">
              Real narratives of resilience, health empowerment, and transformation from the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {stories.map((story) => (
              <StoryCard
                key={story.slug}
                title={story.title}
                category={story.category}
                author={story.author}
                excerpt={story.excerpt}
                image={story.image}
                href={story.link || `/stories/${story.slug}`}
                ctaText="Read Story"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead 2026 */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container max-w-4xl mx-auto">
          <div className="text-center mb-7 md:mb-10">
            <h2 className="section-heading">Looking Ahead: 2026 Targets</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-brown text-white">
                  <th className="px-4 md:px-6 py-3 md:py-4 font-semibold text-[15px] md:text-[16px]">Target Area</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 font-semibold text-[15px] md:text-[16px]">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {targets2026.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 md:py-4 font-medium text-brand-green whitespace-nowrap">{item.category}</td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-[#111111]">{item.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}
