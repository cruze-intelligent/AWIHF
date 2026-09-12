export const organizationProfile = {
  name: 'Acholi Women in Health Foundation',
  shortName: 'AWIHF',
  url: 'https://acholiwomeninhealth.org',
  description:
    'Acholi Women in Health Foundation (AWIHF) is a women-led, community-rooted non-profit improving healthcare outcomes for women and girls in Gulu and the Acholi sub-region of Northern Uganda.',
  slogan: 'Empowering Women. Improving Health. Healing Lives, Transforming Communities.',
  foundingDate: '2023',
  email: 'acholiwomeninhealth@gmail.com',
  phoneNumbers: ['0762401363', '0772388143'],
  postalAddress: {
    poBox: 'P.O. Box 361606',
    locality: 'Pece, Gulu City',
    region: 'Northern Uganda',
    country: 'UG',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/acholi-women-in-health-foundation?utm_source=chatgpt.com',
    instagram: 'https://www.instagram.com/acholiwomeninhealth/',
    x: 'https://x.com/acholiwomeninhealth',
  },
  areaServed: ['Gulu City', 'Acholi sub-region', 'Northern Uganda', 'Uganda'],
  knowsAbout: [
    'Maternal and reproductive health',
    'Mental health and trauma support',
    'Community health education',
    'Healthcare systems strengthening',
    'School and community outreach',
    'Healthcare mentorship',
  ],
} as const;

export const leadershipTeam = [
  {
    name: 'Lucky Ajok',
    role: 'Founder & Executive Director',
    bio: 'Passionate about improving healthcare access, safe motherhood, and peer health education for women and girls in Northern Uganda.',
    image: '/images/lucky.webp',
    imageClassName: 'object-contain',
    linkedin: 'https://www.linkedin.com/in/lucky-ajok-9b322a23a?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
  {
    name: 'Stephen Odora',
    role: 'Co-Founder & Operations Director',
    bio: 'Dedicated to building resilient local health networks, trauma-informed psychosocial services, and community-led strengthening programs.',
    image: '/images/stephen.webp',
    imageClassName: 'object-cover object-top',
    linkedin: 'https://www.linkedin.com/in/stephen-odora2025?utm_content=profile&utm_medium=member_ios&utm_source=chatgpt.com',
  },
] as const;
