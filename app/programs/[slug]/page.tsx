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
          Our Maternal & Reproductive Health programme is a community-rooted response to the critical maternal healthcare deficit in Northern Uganda. The post-conflict status of the region has left healthcare infrastructure fragmented, resulting in an Acholi sub-region maternal mortality rate of 106.0 per 100,000 live births, far above the national average of 69.1.
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
      { value: 'Community-Based', label: 'Psychosocial Support' },
      { value: 'Trauma-Informed', label: 'Safe Healing Spaces' },
      { value: '3+', label: 'Referral Hubs Target' },
    ],
    objective: "To improve access to compassionate, community-based mental-health and psychosocial support for women and girls, while creating safe spaces for healing, strengthening coping skills, reducing stigma, and connecting people to appropriate care when additional support is needed.",
    focusArea: "Women, adolescent girls, young mothers, and community members across Northern Uganda experiencing emotional challenges, psychological distress, trauma, social pressures, or barriers to accessing appropriate mental-health care.",
    activities: [
      "Facilitating community-level peer support and trauma-healing discussion circles in Gulu and surrounding sub-counties.",
      "Providing accessible group-based and individual psychosocial support sessions guided by trained facilitators.",
      "Establishing safe, trusted community referral pathways to connect individuals with specialized care when needed.",
      "Conducting community anti-stigma workshops to normalize conversations around mental health and encourage early help-seeking.",
      "Integrating trauma-informed principles into local health centers, schools, and community support groups."
    ],
    successIndicators: [
      "Reduced mental-health stigma across target communities, enabling women and girls to speak openly and seek care with dignity.",
      "Structured, trusted referral pathways active for women and girls requiring specialized clinical or psychosocial support.",
      "Resilient networks of grassroots healing circles and peer support groups operating in local communities.",
      "Hundreds of women, young mothers, and girls equipped with practical coping strategies, psychosocial support, and community care."
    ],
    description: (
      <div className="space-y-6">
        <p>
          Mental health is an important part of overall health and wellbeing, yet many women and girls face emotional and psychological challenges without having access to the support they need. In communities across Northern Uganda, people may experience stress, grief, trauma, anxiety, depression, family and social pressures, or other challenges that affect their wellbeing and their ability to participate fully in everyday life.
        </p>
        <p>
          At AWIHF, we work to make mental-health and psychosocial support more accessible, compassionate, and community-rooted. Our Mental Health & Trauma Support programme creates safe spaces where women and girls can talk openly, receive practical support, build coping skills, and connect with appropriate care when additional support is needed.
        </p>
        <p>
          Our work includes community-based peer support, trauma-informed approaches, psychosocial support, healing and discussion spaces, and referral pathways for people who may require more specialized care. We also work to reduce the stigma that can prevent people from seeking help and to strengthen the ability of communities and local health actors to respond to mental-health needs.
        </p>
        <p>
          While our work recognizes the lasting effects of conflict and other traumatic experiences in Northern Uganda, our approach is broader. We support women and girls facing a range of mental-health and psychosocial challenges and work with communities to promote understanding, early support, dignity, and pathways to appropriate care.
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
          Our Community Health Education programme empowers individuals through accessible, localized health literacy campaigns. We focus heavily on peer-to-peer training, allowing young women to act as community advocates. By providing critical tools, including cervical cancer education and reusable sanitary pads, we ensure girls can stay in school and protect their health with dignity.
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
          Through our Healthcare Systems Strengthening programme, we address this structural gap. We focus on empowering Community Health Workers (CHWs) and establishing a national mentorship network for healthcare students. By supporting medical students and connecting them with experienced mentors, we build a pipeline of future women leaders in healthcare ready to innovate and deliver high-quality community care.
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
      "Linking outreach participants to our programmes in maternal health, mental health, and community health education where follow-up support is needed."
    ],
    successIndicators: [
      "Health information delivered in school and community spaces where women, girls, and families already gather.",
      "Improved awareness of referral options for reproductive health, cancer screening, and preventive care services.",
      "Stronger collaboration with teachers, community leaders, and outreach volunteers supporting sustained local engagement.",
      "A practical pathway for extending our services beyond single-event camps into ongoing school and community touchpoints."
    ],
    description: (
      <div className="space-y-6">
        <p>
          Our School & Community Outreach Programme extends our work into everyday spaces where health decisions are shaped. By working through schools and community gathering points, the programme makes trusted health information more accessible to girls, families, and local leaders.
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
