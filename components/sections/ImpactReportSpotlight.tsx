import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { getImpactReportContent } from '@/lib/content/impactReport';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export async function ImpactReportSpotlight() {
  const report = await getImpactReportContent();

  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <div className="rounded-2xl border border-brand-orange/20 bg-orange-tint/30 p-5 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-8 items-center">
          <div>
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white text-brand-orange flex items-center justify-center mb-4 md:mb-5 shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">
              Annual Impact Report
            </span>
            <h2 className="text-[24px] md:text-[36px] font-bold text-brand-brown leading-tight mb-3 md:mb-4">
              {report.title}
            </h2>
            <p className="text-[#111111] text-[15px] md:text-[17px] leading-[1.7] mb-5 md:mb-6">{report.executiveSummary[0]}</p>
            <Link href="/impact/report">
              <Button size="medium" className="w-full sm:w-auto">
                Explore the Impact Report
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {report.stats.slice(0, 3).map((stat) => (
              <Card key={stat.label} className="bg-white p-5 border border-gray-200 shadow-sm">
                <div className="text-[28px] md:text-[30px] font-bold text-brand-orange mb-2">{stat.value}</div>
                <h3 className="text-[15px] font-bold text-brand-brown mb-2">{stat.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{stat.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
