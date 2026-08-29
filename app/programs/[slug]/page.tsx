import React from 'react';
import { notFound } from 'next/navigation';
import { ProgramLayout } from '@/components/shared/ProgramLayout';

type ProgramData = {
  title: string;
  heroImage: string;
  fieldImage: string;
  stats: { value: string; label: string }[];
  objective: string;
  focusArea: string;
  activities: string[];
  successIndicators: string[];
  description: React.ReactNode;
};

const programsData: Record<string, ProgramData> = {
  'maternal-reproductive-health': {
    title: 'Maternal & Reproductive Health',
    heroImage: '/images/AWIHF-maternal-Hero.webp',
    fieldImage: '/images/AWIHF-maternal-Field.webp',
    stats: [
      { value: '1,000+', label: 'Households Reached' },
      { value: '500+', label: 'Teenage Mothers Supported' },
      { value: '106.0', label: 'Acholi Maternal Mortality' },
    ],
    objective: "To increase access to safe motherhood, antenatal support, and family planning services, closing critical gaps in reproductive healthcare across Gulu and rural Acholi sub-counties.",
    focusArea: "Teenage mothers, young girls, and mothers of reproductive age in underserved communities throughout Gulu District, experiencing disproportionate rates of maternal mortality.",
    activities: [
      "Conducting community-based antenatal care checkups and promoting skilled birth attendance.",
      "Providing comprehensive educational workshops on Sexual and Reproductive Health and Rights (SRHR).",
      "Distributing dignity kits and reusable sanitary pads to vulnerable girls to prevent school dropouts.",
      "Establishing maternal emergency referral pathways and health center integrations in Gulu.",
      "Running regional cervical cancer awareness and preventive care campaign outreaches."
    ],
    successIndicators: [
      "1,000+ households successfully supported during regional maternal health, Patiko, and Abwoch outreach events.",
      "Referral pathways successfully established with Gulu City referral hospitals for high-risk obstetric cases.",
      "Significant reduction in school absenteeism among adolescent girls in our target rural schools.",
      "500+ teenage mothers supported with comprehensive clinical care, peer counseling, and parent integration classes."
    ],
    description: (
      <div className="space-y-6">
        <p>
          Acholi Women in Health Foundation (AWIHF)&apos;s Maternal & Reproductive Health program is a community-rooted response to the critical maternal healthcare deficit in Northern Uganda. The post-conflict status of the region has left healthcare infrastructure fragmented, resulting in an Acholi sub-region maternal mortality rate of 106.0 per 100,000 live births, far above the national average of 69.1.
        </p>
        <p>
          We operate direct grassroots interventions, bringing skilled birth attendance counseling, family planning education, and pregnancy care packages directly to community health hubs in rural sub-counties. Through peer support networks and local health-center referral relationships, we advocate for safe motherhood and dignity at every birth.
        </p>
      </div>
    ),
  },
  'mental-health-trauma-support': {
    title: 'Mental Health & Trauma Support',
    heroImage: '/images/AWIHF-MH-Hero.webp',
    fieldImage: '/images/AWIHF-MH-Field.webp',
    stats: [
      { value: '500+', label: 'Teen Mothers Supported' },
      { value: '3+', label: 'Referral Hubs Target' },
      { value: 'AOR 7.2', label: 'Post-Conflict PTSD Burden' },
    ],
    objective: "To provide psychosocial support, trauma-informed counseling, and community-led healing to women and girls carrying the psychological burdens of the two-decade LRA conflict.",
    focusArea: "Conflict-affected women, survivors of gender-based violence (GBV), and youth suffering from chronic PTSD or clinical depression in Northern Uganda.",
    activities: [
      "Facilitating weekly community-level peer trauma-healing circles in Gulu sub-counties.",
      "Conducting group-based and individual psychosocial counseling sessions led by professionals.",
      "Establishing secure and accessible community-level mental health referral hubs.",
      "Running community anti-stigma workshops to dismantle barriers to seeking mental health support.",
      "Integrating trauma-informed principles into local public health clinics and community support groups."
    ],
    successIndicators: [
      "Stigma reduction among Gulu sub-counties, allowing more women to speak openly about mental distress.",
      "Structured referral pathways successfully established for immediate professional clinical support.",
      "Resilient networks of community-based healing circles successfully operating at the grassroots level.",
      "Hundreds of GBV survivors and teenage mothers rehabilitated through psychological and peer-care groups."
    ],
    description: (
      <div className="space-y-6">
        <p>
          The psychological aftermath of two decades of LRA conflict in Northern Uganda represents a silent, ongoing crisis. Exposure to severe trauma, loss, and displacement has left rates of PTSD and depression alarmingly high in Gulu and neighboring areas (AOR 2.8 to 7.19 according to Cango Lyec research studies).
        </p>
        <p>
          AWIHF exists to break this cycle. Our Mental Health & Trauma Support program addresses the deep, invisible scars of war. By creating safe spaces, running healing circles, and integrating clinical referral channels, we ensure that women can access compassionate, trauma-informed mental healthcare without fear or stigma.
        </p>
      </div>
    ),
  },
  'community-health-education': {
    title: 'Community Health Education',
    heroImage: '/images/AWIHF-CHE-Hero.webp',
    fieldImage: '/images/AWIHF-CHE-Field.webp',
    stats: [
      { value: '1,000+', label: 'Households Reached' },
      { value: '200+', label: 'Peer Educators Trained' },
      { value: '1,000+', label: 'Girls Supplied Reusable Pads' },
    ],
    objective: "To advance health literacy, self-determination, and preventive health practices through peer-to-peer training, public campaigns, and school-based hygiene initiatives.",
    focusArea: "Rural communities, school-going adolescent girls, peer leaders, and general public stakeholders across the Acholi sub-region.",
    activities: [
      "Conducting large-scale public health education campaigns focusing on cervical cancer and reproductive safety.",
      "Training SRHR peer educators to sustain educational programs at the sub-county level.",
      "Distributing reusable sanitary pads to vulnerable girls to support their school attendance.",
      "Running community health outreach events providing free health screenings and consultations, including the Abwoch Health Center III medical outreach.",
      "Organizing public campaigns against Gender-Based Violence (GBV) and supporting AIDS awareness."
    ],
    successIndicators: [
      "1,000+ vulnerable girls supplied with school-retaining hygiene kits and reusable sanitary pad supplies.",
      "200+ active SRHR peer educators trained and facilitating community-level peer health conversations.",
      "5,000+ households targeted for critical preventive care literacy campaigns in the Gulu sub-region.",
      "Widely increased public screening and clinical attendance for cervical cancer, HIV, sickle cell, and SRHR consultations through outreach events such as Abwoch."
    ],
    description: (
      <div className="space-y-6">
        <p>
          Knowledge is the first and strongest line of defense in community healthcare. In rural Gulu City and its surrounding areas, limited health literacy and cultural taboos leave women and young girls highly vulnerable to preventable conditions.
        </p>
        <p>
          AWIHF&apos;s Community Health Education program empowers individuals through accessible, localized health literacy campaigns. We focus heavily on peer-to-peer training, allowing young women to act as community advocates. By providing critical tools, including cervical cancer education and reusable sanitary pads, we ensure girls can stay in school and protect their health with dignity.
        </p>
      </div>
    ),
  },
  'healthcare-systems-strengthening': {
    title: 'Healthcare Systems Strengthening',
    heroImage: '/images/AWIHF-HSS-Hero.webp',
    fieldImage: '/images/AWIHF-HSS-Field.webp',
    stats: [
      { value: '1,000+', label: 'CHWs Equipped Target' },
      { value: '50+', label: 'Healthcare Students Mentored' },
      { value: '2+', label: 'Referral Pathways Advanced' },
    ],
    objective: "To build a capable pipeline of local healthcare professionals and equip community networks to ensure long-term, resilient healthcare infrastructure.",
    focusArea: "Community Health Workers (CHWs), medical and nursing students nationwide, and local public health facilities in Gulu District.",
    activities: [
      "Conducting skill-strengthening and leadership workshops for frontline healthcare workers.",
      "Establishing a national mentorship program connecting healthcare student professionals with mentors.",
      "Equipping Community Health Workers with tools and clinical guidelines for maternal health.",
      "Coordinating with municipal health authorities and Gulu referral hospitals.",
      "Conducting operational research to generate evidence informing local healthcare advocacy."
    ],
    successIndicators: [
      "50+ healthcare student professionals equipped nationwide with practical clinical and leadership skills.",
      "1,000 Community Health Workers mapped for 2026 maternal care and referral pathway trainings.",
      "2+ referral and coordination pathways advanced to align public health interventions.",
      "Robust baseline data generated to support evidence-based regional healthcare advocacy."
    ],
    description: (
      <div className="space-y-6">
        <p>
          A sustainable health system depends entirely on the capacity of its workforce. Decades of conflict severely decimated Northern Uganda&apos;s health facilities, leaving a significant shortage of skilled personnel and inadequate capacity at the frontline.
        </p>
        <p>
          Through our Healthcare Systems Strengthening program, AWIHF addresses this structural gap. We focus on empowering Community Health Workers (CHWs) and establishing a national mentorship network for healthcare students. By supporting medical students and connecting them with experienced mentors, we build a pipeline of future women leaders in healthcare ready to innovate and deliver high-quality community care.
        </p>
      </div>
    ),
  },
  'school-community-outreach-programme': {
    title: 'School & Community Outreach Programme',
    heroImage: '/images/AWIHF-School Outreach.webp',
    fieldImage: '/images/AWIHF-School Outreach.webp',
    stats: [
      { value: 'School-based', label: 'Delivery Model' },
      { value: 'Community-led', label: 'Approach' },
      { value: 'Prevention-focused', label: 'Health Priority' },
    ],
    objective: "To take health information, early screening awareness, and referral guidance directly into schools and communities so that women, girls, and families can act early and seek care with confidence.",
    focusArea: "School-going girls, teachers, parents, and underserved communities in Gulu and the wider Acholi sub-region that benefit from preventive education and direct outreach engagement.",
    activities: [
      "Conducting school visits that deliver menstrual health education, SRHR awareness, and practical guidance for adolescent girls.",
      "Running community outreach sessions that connect families with health information, screening opportunities, and referral pathways.",
      "Supporting awareness on cervical cancer, HIV, sickle cell disease, and other priority public health concerns through local engagement.",
      "Working with school and community leaders to improve health-seeking behaviour and build trust in community-based care.",
      "Linking outreach participants to AWIHF programmes in maternal health, mental health, and community health education where follow-up support is needed."
    ],
    successIndicators: [
      "Health information delivered in school and community spaces where women, girls, and families already gather.",
      "Improved awareness of referral options for reproductive health, cancer screening, and preventive care services.",
      "Stronger collaboration with teachers, community leaders, and outreach volunteers supporting sustained local engagement.",
      "A practical pathway for extending AWIHF services beyond single-event camps into ongoing school and community touchpoints."
    ],
    description: (
      <div className="space-y-6">
        <p>
          The School & Community Outreach Programme extends AWIHF&apos;s work into everyday spaces where health decisions are shaped. By working through schools and community gathering points, the programme makes trusted health information more accessible to girls, families, and local leaders.
        </p>
        <p>
          This programme strengthens prevention by combining education, awareness, and referral support. It helps bridge the gap between community knowledge and formal health services, while reinforcing dignity, early action, and locally rooted engagement across Gulu and the Acholi sub-region.
        </p>
      </div>
    ),
  }
};

export function generateStaticParams() {
  return Object.keys(programsData).map((slug) => ({ slug }));
}

export default async function ProgramPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const program = programsData[params.slug];

  if (!program) {
    notFound();
  }

  return <ProgramLayout {...program} />;
}
