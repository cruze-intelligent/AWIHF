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
      "Our clinical nurse, Grace Akello, immediately recognized signs of early, high-risk labor during registration. The team quickly stabilized her and activated AWIHF's maternal referral pathway, securing transport to Gulu Regional Referral Hospital. Thanks to this swift integration, Evelyn safely delivered a healthy baby boy.",
      "Following her clinical care, our peer networks provided maternity dignity packages, basic infant supplies, and parental classes. Today, Evelyn is an active advocate in our peer-to-peer teen mother support group, educating other young women to access reproductive health clinics early. Her story is a testament to the life-saving impact of community-rooted maternal networks."
    ]
  },
  'healing-trauma-gulu': {
    title: "Rebuilding Mental Wellness After Conflict",
    category: "Mental Health",
    image: "/images/AWIHF-MH-Field.webp",
    author: "Psychosocial Support Team",
    date: "October 10, 2025",
    readTime: "4 min read",
    content: [
      "Northern Uganda carried the structural brunt of a two-decade civil conflict, leaving behind widespread PTSD and depression. In Pece, Gulu City, Stephen Odora and AWIHF's community counselors launched weekly psychosocial healing circles to break the heavy silence surrounding mental distress and trauma.",
      "Amina, a survivor of LRA-era gender-based violence, had lived with debilitating anxiety and extreme isolation for over a decade. When she first attended our healing circle, she joined a network of fellow survivors who shared their experiences in a safe, non-judgmental community space.",
      "Supported by clinical psychology sessions and cognitive behavioral healing circles, Amina slowly reclaimed her self-worth. Today, Amina has graduated to an active local sewing cooperative, achieving economic independence. 'I was invisible for twelve years,' Amina shares. 'AWIHF gave me my voice and my life back.'"
    ]
  },
  'dignity-hygiene-education': {
    title: "Dignity in Education: Empowering Schoolgirls",
    category: "Health Education",
    image: "/images/AWIHF-CHE-Field.webp",
    author: "Education Coordinator",
    date: "September 8, 2025",
    readTime: "3 min read",
    content: [
      "Adolescent girls in Northern Uganda's rural schools lose an average of four to five school days each month due to a lack of proper sanitary kits and severe reproductive health stigma. AWIHF launched its Community Health Education program to restore dignity and protect girls' school attendance.",
      "Florence, a 14-year-old student, struggled to attend classes consistently during her menstrual cycles, causing her academic performance to decline. AWIHF's outreach team equipped her school with hygiene resources and provided reusable sanitary pads that sustain school attendance for a full calendar year.",
      "Along with hygiene kits, Florence participated in our Sexual and Reproductive Health and Rights (SRHR) workshops. Recognizing her potential, she was trained as a peer educator. Florence now leads her school's health club, empowering her classmates and helping reduce local adolescent school dropouts to nearly zero."
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

          {/* Banner image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-7 md:mb-10 shadow-sm border border-gray-200">
            <Image 
              src={story.image} 
              alt={story.title} 
              fill 
              className="object-cover"
              priority
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
