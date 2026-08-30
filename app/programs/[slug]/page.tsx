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
      { value: '60', label: 'VHTs Trained Target' },
      { value: '3+', label: 'Health Center MoUs' },
      { value: 'Community', label: 'Referral Integration' },
    ],
    objective: "To strengthen frontline healthcare delivery across the Acholi sub-region by training Village Health Teams, equipping community workers, and building coordinated referral linkages with local health centers.",
    focusArea: "Village Health Teams (VHTs), Community Health Workers, local health center staff, and public health facilities across Gulu City and rural Acholi sub-counties.",
    activities: [
      "Training 60 Village Health Teams in three annual cohorts on maternal danger signs, GBV first response, and sickle cell psychosocial support.",
      "Developing and formalizing institutional Memoranda of Understanding (MoUs) with sub-county health centres III & IV and referral hospitals.",
      "Establishing community-to-facility emergency referral pathways for high-risk obstetric and mental health cases.",
      "Supporting routine health information management and linkage with district health offices.",
      "Conducting community-grounded operational research to inform district health planning and evidence-based policy advocacy."
    ],
    successIndicators: [
      "60 Village Health Teams fully trained and actively conducting community health surveillance and referral.",
      "Formalized referral linkages and MoUs established with sub-county health facilities and referral hospitals in Gulu.",
      "Measurable improvement in timely referral and skilled facility delivery rates for high-risk obstetric cases.",
      "Community-generated health evidence integrated into district health coordination dialogues and local planning."
    ],
    description: (
      <div className="space-y-6">
        <p>
          Sustainable community health outcomes require strong, coordinated primary healthcare systems. In post-conflict Northern Uganda, rural health infrastructure faces compounding constraints: under-equipped primary health centers, long travel distances for emergency care, and critical gaps in community-level health surveillance.
        </p>
        <p>
          Our Healthcare Systems Strengthening programme works at the vital intersection of communities and formal health facilities. By training Village Health Teams (VHTs) as skilled first responders, standardizing emergency maternal referral protocols, and establishing formal partnerships with local health centers, we reinforce the foundations of community health delivery.
        </p>
        <p>
          This programme operates in close synergy with our clinical initiatives and our national Mentorship Programme, ensuring that both frontline community workers and emerging healthcare professionals are equipped to deliver compassionate, high-quality care.
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
  },
  'mentorship': {
    title: 'Mentorship Programme',
    heroImage: '/images/AWIHF-Mentorship.webp',
    fieldImage: '/images/AWIHF-Mentorship.webp',
    stats: [
      { value: '150', label: 'Mentees Target (3-Yr Plan)' },
      { value: '50+', label: 'Students Equipped (Pilot)' },
      { value: 'National', label: 'University Network' },
    ],
    objective: "To bridge the clinical and leadership capacity gap in Uganda's health sector by connecting emerging medical, nursing, and health sciences students nationwide with seasoned clinical and public health mentors.",
    focusArea: "Medical students, nursing students, clinical officers, emerging healthcare professionals, and young women leaders across Ugandan universities and health training institutions.",
    activities: [
      "Pairing healthcare students 1-on-1 and in cohorts with experienced clinical practitioners and public health leaders.",
      "Conducting structured multi-phase workshops on clinical acumen, bioethics, community health systems, and leadership.",
      "Facilitating hands-on clinical and outreach exposure during community health camps and frontline service delivery.",
      "Providing research literacy, evidence synthesis guidance, and career pathway planning for healthcare trainees.",
      "Establishing peer learning networks and a structured mentee career tracking system to support long-term professional retention."
    ],
    successIndicators: [
      "150 health mentees graduated through structured multi-phase cohorts across the 3-year strategic cycle (Yr 1: 30, Yr 2: 80, Yr 3: 150).",
      "50+ healthcare student professionals equipped nationwide with practical clinical, leadership, and public health skills.",
      "Documented career tracking showing increased mentee transition into clinical practice, community health delivery, and public health leadership.",
      "Formalized mentorship linkages and academic partnerships with universities and health training institutions across Uganda."
    ],
    description: (
      <div className="space-y-6">
        <p>
          A resilient health system depends entirely on the competence, confidence, and compassion of its workforce. Decades of conflict and resource constraints in Northern Uganda have created deep workforce shortages, while across the country, medical and nursing students often complete rigorous academic training without structured clinical mentorship, leadership coaching, or community-anchored practice.
        </p>
        <p>
          The AWIHF Mentorship Programme addresses this critical transition by connecting emerging healthcare students and young professionals with seasoned clinical and public health leaders. Through multi-phase cohorts, practical field exposure, and structured peer learning, we build a supportive bridge from classroom learning to frontline leadership.
        </p>
        <p>
          Our mentorship model places particular emphasis on empowering young women in healthcare. By fostering clinical excellence, research literacy, ethical practice, and community commitment, the programme cultivates the next generation of healthcare leaders equipped to transform healthcare delivery in Acholi and across Uganda.
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
