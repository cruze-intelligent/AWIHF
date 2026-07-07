import { Building2, GraduationCap, Handshake, Landmark, UsersRound } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const partners = [
  {
    name: 'Health Facilities & Referral Networks',
    type: 'Clinical collaboration',
    description:
      'AWIHF works with local health facilities and referral actors to connect community outreach, maternal care, mental health support, and emergency pathways.',
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    name: 'District Health Offices & Government Bodies',
    type: 'Systems coordination',
    description:
      'Programme planning is aligned with public health priorities, district structures, and evidence-informed community health strengthening.',
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    name: 'Academic & Research Institutions',
    type: 'Evidence generation',
    description:
      'Research, student mentorship, and learning partnerships help AWIHF translate community realities into stronger programmes and advocacy.',
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    name: 'Civil Society & Women-Led Organizations',
    type: 'Community action',
    description:
      'Partnerships with aligned organizations strengthen campaigns on GBV prevention, SRHR, dignity, school retention, and post-conflict recovery.',
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    name: 'Cultural & Community Institutions',
    type: 'Local trust',
    description:
      'Community leaders, elders, youth networks, and women’s groups help ensure interventions are culturally grounded and locally owned.',
    icon: <UsersRound className="w-6 h-6" />,
  },
];

export function PartnershipsSection() {
  return (
    <section className="section-wrapper bg-gray-50">
      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">
            Institutional Ecosystem
          </span>
          <h2 className="section-heading text-center mx-auto after:mx-auto after:left-auto after:right-auto">
            Partnerships That Strengthen Community Health
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.7] mt-3 md:mt-4">
            AWIHF does not work in isolation. Its model depends on trusted relationships across health facilities,
            universities, government structures, civil society organizations, cultural institutions, and community
            leadership networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {partners.map((partner) => (
            <Card key={partner.name} className="bg-white border border-gray-200 p-5 h-full">
              <div className="w-11 h-11 rounded-xl bg-green-tint text-brand-green flex items-center justify-center mb-5">
                {partner.icon}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">{partner.type}</span>
              <h3 className="text-[17px] font-bold text-brand-brown leading-tight mt-2 mb-3">{partner.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
