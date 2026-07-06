import { sanityFetch } from '@/lib/sanity/client';

export type ImpactReportStat = {
  value: string;
  label: string;
  detail: string;
};

export type ImpactReportPhase = {
  title: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ImpactReportPriority = {
  title: string;
  description: string;
};

export type ImpactReportContent = {
  title: string;
  year: string;
  tagline: string;
  downloadUrl: string;
  executiveSummary: string[];
  stats: ImpactReportStat[];
  phases: ImpactReportPhase[];
  gaps: string[];
  priorities: ImpactReportPriority[];
};

const fallbackImpactReport: ImpactReportContent = {
  title: '2025 Impact Report',
  year: '2025',
  tagline: 'Every donation saves lives. Every partnership creates lasting change.',
  downloadUrl: '/AWIHF Impact report.pdf',
  executiveSummary: [
    '2025 was a defining year for Acholi Women in Health Foundation. AWIHF launched community-based SRHR research, reached more than 1,000 households through the Patiko Medical Outreach, and equipped emerging healthcare professionals across Uganda.',
    'The report documents a year of foundation-building, high-volume outreach, advocacy, partnership development, and a clear 2026 scale-up agenda for women and girls in Northern Uganda.',
  ],
  stats: [
    { value: '1,000+', label: 'Households Reached', detail: 'Reached through the Patiko Medical Outreach alone.' },
    { value: '50+', label: 'Healthcare Students Equipped', detail: 'Supported through clinical, academic, and career development.' },
    { value: '3', label: 'Programme Phases', detail: 'Implemented from January to December 2025.' },
    { value: '4+', label: 'Strategic Partnerships', detail: 'Formed to deepen institutional and community reach.' },
    { value: 'SRHR', label: 'Research Launched', detail: 'Focused on barriers affecting women and girls in Acholi.' },
    { value: 'GBV', label: 'Campaigns Joined', detail: 'AWIHF contributed to national prevention and awareness campaigns.' },
  ],
  phases: [
    {
      title: 'Building Foundations',
      period: 'January - June 2025',
      summary:
        "The first half of 2025 focused on building the evidence base and positioning AWIHF as a leading voice on women's health rights in Northern Uganda.",
      highlights: [
        'Launched community-based research on SRHR barriers affecting women and girls.',
        'Participated in regional cervical cancer awareness programming.',
        'Developed evidence-based advocacy strategies informed by community research.',
      ],
    },
    {
      title: 'Our Biggest Impact',
      period: 'July - September 2025',
      summary:
        "This quarter was defined by the landmark Patiko Medical Outreach, community-level behavior change programming, and the launch of AWIHF's national mentorship programme.",
      highlights: [
        'Reached 1,000+ households across four days in Patiko.',
        'Delivered free consultations, vision screenings, SRHR education, and referral information.',
        'Launched a mentorship programme for healthcare professional students and Community Health Workers.',
      ],
    },
    {
      title: 'Global Advocacy',
      period: 'October - December 2025',
      summary:
        'The final quarter extended AWIHF beyond clinics and into advocacy spaces, partnerships, dignity programming, and student professional development.',
      highlights: [
        'Joined national AIDS awareness and GBV prevention campaigns.',
        'Formalised partnerships with Acholi Students Union and Her Worth Foundation.',
        'Distributed reusable sanitary pads to vulnerable girls and equipped 50 healthcare student professionals.',
      ],
    },
  ],
  gaps: [
    'Thousands of women still lack access to safe motherhood services.',
    'Girls miss school due to lack of menstrual products.',
    'Post-abortion care remains highly stigmatized.',
    'Remote communities such as Koro Sub-county continue to await AWIHF services.',
    'Maternal mortality, cervical cancer, and teenage pregnancy remain urgent concerns in the Acholi sub-region.',
  ],
  priorities: [
    { title: 'Expand community outreaches', description: 'Reach 5,000+ additional households with free health services.' },
    { title: 'Train SRHR peer educators', description: 'Equip 200+ peer educators to sustain community-level health education.' },
    { title: 'Establish maternal referral hubs', description: 'Create accessible referral pathways for maternal emergencies.' },
    { title: 'Provide reusable sanitary pads', description: 'Supply 1,000+ vulnerable girls to support school attendance.' },
    { title: 'Scale cervical cancer prevention', description: 'Support rural facilities with screening materials and prevention strategies.' },
    { title: 'Support teen mothers', description: 'Provide comprehensive rehabilitation support to 500+ teenage mothers.' },
    { title: 'Train Community Health Workers', description: 'Train 1,000 CHWs on maternal emergencies and referral pathways.' },
  ],
};

export async function getImpactReportContent(): Promise<ImpactReportContent> {
  const data = await sanityFetch<Partial<ImpactReportContent>>(`
    *[_type == "impactReport"][0] {
      title,
      year,
      tagline,
      downloadUrl,
      executiveSummary,
      stats,
      phases,
      gaps,
      priorities
    }
  `).catch((error) => {
    console.error('Sanity impact report fetch failed', error);
    return null;
  });

  if (!data) return fallbackImpactReport;

  return {
    title: data.title || fallbackImpactReport.title,
    year: data.year || fallbackImpactReport.year,
    tagline: data.tagline || fallbackImpactReport.tagline,
    downloadUrl: data.downloadUrl || fallbackImpactReport.downloadUrl,
    executiveSummary: data.executiveSummary?.length ? data.executiveSummary : fallbackImpactReport.executiveSummary,
    stats: data.stats?.length ? data.stats : fallbackImpactReport.stats,
    phases: data.phases?.length ? data.phases : fallbackImpactReport.phases,
    gaps: data.gaps?.length ? data.gaps : fallbackImpactReport.gaps,
    priorities: data.priorities?.length ? data.priorities : fallbackImpactReport.priorities,
  };
}
