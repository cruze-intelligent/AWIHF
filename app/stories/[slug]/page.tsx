import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Calendar, User, Clock, Heart } from 'lucide-react';
import { DonateCTA } from '@/components/sections/DonateCTA';

type StoryData = {
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
};

const storiesData: Record<string, StoryData> = {
  'safe-motherhood-patiko': {
    title: "Hope & Safe Delivery in Patiko Sub-County",
    category: "Maternal Health",
    image: "/images/AWIHF-Patiko.webp",
    author: "AWIHF Outreach Team",
    date: "July 15, 2025",
    readTime: "3 min read",
    content: [
      "In July 2025, during our landmark four-day Patiko Medical Outreach in Gulu District, our team met Evelyn, a 17-year-old expectant mother from a remote sub-county. Evelyn had not accessed any previous antenatal checkups due to Northern Uganda's severe shortage of rural health centers, leaving her vulnerable to high-risk complications.",
      "Our clinical nurse, Grace Akello, immediately recognized signs of early, high-risk labor during registration. The team quickly stabilized her and activated our maternal referral pathway, securing transport to Gulu Regional Referral Hospital. Thanks to this swift integration, Evelyn safely delivered a healthy baby boy.",
      "Following her clinical care, our peer networks provided maternity dignity packages, basic infant supplies, and parental classes. Today, Evelyn is an active advocate in our peer-to-peer teen mother support group, educating other young women to access reproductive health clinics early. Her story is a testament to the life-saving impact of community-rooted maternal networks."
    ]
  },
  'healing-trauma-gulu': {
    title: "Rebuilding Mental Wellbeing & Safe Community Spaces",
    category: "Mental Health",
    image: "/images/AWIHF-MentalHealth1.webp",
    author: "Psychosocial Support Team",
    date: "October 10, 2025",
    readTime: "4 min read",
    content: [
      "Across Northern Uganda, many women and girls experience heavy emotional burdens, distress, and trauma while facing significant stigma and limited access to mental health services. In Pece, Gulu City, our team launched weekly psychosocial healing circles to break the silence surrounding mental distress.",
      "Amina, a young woman navigating overwhelming anxiety and isolation, attended one of our community healing circles. In this safe, non-judgmental space, she connected with peer facilitators and participants who shared lived experiences and practical coping mechanisms.",
      "Through sustained group support and trauma-informed psychosocial sessions, Amina developed resilient coping skills and rebuilt her self-worth. Today, she participates actively in a local artisan cooperative, demonstrating the restorative power of accessible, dignified community care."
    ]
  },
  'dignity-hygiene-education': {
    title: "Dignity in Education: Empowering Schoolgirls",
    category: "Health Education",
    image: "/images/AWIHF-SchoolOutreach4.webp",
    author: "Education Coordinator",
    date: "September 8, 2025",
    readTime: "3 min read",
    content: [
      "Adolescent girls in Northern Uganda's rural schools often miss vital classroom days each month due to a lack of proper sanitary supplies and persistent menstrual health stigma. We launched our Community Health Education initiatives to restore dignity and safeguard girls' educational continuity.",
      "Florence, a 14-year-old student, struggled to attend classes consistently during her menstrual cycles, affecting her academic progress. Our outreach team equipped her school with hygiene resources and provided durable, reusable sanitary pads designed to support school retention throughout the academic year.",
      "Along with hygiene supplies, Florence took part in our Sexual and Reproductive Health and Rights (SRHR) workshops. Trained as a student peer educator, Florence now leads her school's health club, guiding her peers with accurate information and fostering supportive environments."
    ]
  },
  'abwoch-medical-outreach-2026': {
    title: "Integrated Frontline Care at Abwoch Health Center III",
    category: "Community Outreach",
    image: "/images/AWIHF-Abwoch.webp",
    author: "AWIHF Clinical Team",
    date: "July 3, 2026",
    readTime: "3 min read",
    content: [
      "On 3 July 2026, our medical outreach at Abwoch Health Center III brought integrated primary healthcare and diagnostic screening directly to rural families in Gulu District who face steep travel barriers to clinical facilities.",
      "The outreach created a comprehensive frontline health touchpoint: offering general medical consultations, reproductive health services, HIV screening and counseling, breast cancer screening, sickle cell screening, and cervical cancer awareness.",
      "By combining preventive health education with direct screening and clinical referral pathways, the Abwoch outreach exemplified our commitment to meeting communities where they are and ensuring dignity across all stages of care."
    ]
  },
  'national-mentorship-launch': {
    title: "Building the Next Generation of Healthcare Leaders",
    category: "Mentorship & Systems",
    image: "/images/AWIHF-Mentorship1.webp",
    author: "Mentorship Operations Desk",
    date: "November 5, 2025",
    readTime: "4 min read",
    content: [
      "To build sustainable, resilient health systems in Northern Uganda, we launched a national mentorship pipeline connecting medical and nursing students nationwide with seasoned clinical and public health leaders.",
      "Through structured clinical mentorship, leadership development workshops, and peer learning cohorts, more than 50 healthcare student professionals have been equipped with practical skills and community-anchored principles.",
      "This program empowers emerging women healthcare professionals to innovate, lead clinical care delivery, and strengthen local public health infrastructure for years to come."
    ]
  },
  'cervical-cancer-regional-initiative': {
    title: "Extending Cervical Cancer Screening & Diagnosis Literacy",
    category: "Preventive Care",
    image: "/images/AWIHF-Maternal2.webp",
    author: "Health Committee",
    date: "September 25, 2025",
    readTime: "3 min read",
    content: [
      "Cervical cancer is one of the leading yet preventable health burdens among women in Northern Uganda, where limited diagnostic facilities and lack of awareness often delay life-saving care.",
      "In response, our regional initiative rolled out extensive public screening campaigns and diagnostic literacy workshops across rural sub-counties, educating women on early symptoms, risk factors, and the vital importance of routine screening.",
      "We collaborated closely with local health centers to establish accessible screening pathways, ensuring that informed community members can access timely screening, clinical evaluation, and follow-up care."
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(storiesData).map((slug) => ({ slug }));
}

export default async function StoryDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const story = storiesData[params.slug];

  if (!story) {
    notFound();
  }

  return (
    <>
      {/* Navigation breadcrumb */}
      <div className="w-full bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-gray-500">
          <Link href="/impact#stories" className="flex items-center gap-2 hover:text-brand-orange transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Success Stories
          </Link>
          <div className="flex items-center gap-1 text-brand-green font-semibold uppercase tracking-wider text-xs">
            <Heart className="w-4 h-4 shrink-0" /> Community Proof
          </div>
        </div>
      </div>

      {/* Main article */}
      <article className="section-wrapper bg-white py-8 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <Badge variant="program" className="!bg-brand-orange !text-white mb-4 text-[12px] shadow-sm ring-1 ring-brand-orange/20">{story.category}</Badge>
            <h1 className="text-[26px] md:text-4xl lg:text-[40px] font-bold text-brand-brown leading-tight mb-5 md:mb-6">
              {story.title}
            </h1>
            
            {/* Metadata */}
            <div className="flex flex-wrap gap-3 md:gap-6 text-sm text-gray-500 border-y border-gray-100 py-3 md:py-4">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-brand-orange" /> By {story.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-brand-orange" /> {story.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-orange" /> {story.readTime}</span>
            </div>
          </div>

          {/* Banner image — uncropped & proportioned */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-7 md:mb-10 shadow-sm border border-gray-200 bg-amber-50 flex items-center justify-center">
            <Image 
              src={story.image} 
              alt="" 
              fill 
              aria-hidden="true"
              className="object-cover blur-xl scale-110 opacity-30 pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
            <Image 
              src={story.image} 
              alt={story.title} 
              fill 
              className="object-contain relative z-10 p-1 sm:p-2"
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Body content */}
          <div className="text-[#111111] text-[16px] md:text-[18px] leading-[1.7] space-y-5 md:space-y-6">
            {story.content.map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Share / Back footer */}
          <div className="border-t border-gray-100 pt-6 md:pt-8 mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <Link href="/impact#stories" className="w-full sm:w-auto">
              <Button variant="secondary" size="medium" className="w-full sm:w-auto">
                All Stories
              </Button>
            </Link>
            <Link href="/donate" className="w-full sm:w-auto">
              <Button variant="primary" size="medium" className="w-full sm:w-auto">
                Support This Work
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <DonateCTA />
    </>
  );
}
