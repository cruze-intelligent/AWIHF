import Link from 'next/link';
import { ArrowDownToLine, CheckCircle2, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getImpactReportContent } from '@/lib/content/impactReport';

export default async function ImpactReportPage() {
  const report = await getImpactReportContent();

  return (
    <>
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[320px] px-4 md:px-8">
        <div className="text-center max-w-4xl">
          <span className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-4 block">
            Annual Impact Report
          </span>
          <h1 className="text-white text-3xl md:text-[42px] font-bold leading-[1.15] mb-5">{report.title}</h1>
          <p className="text-white/85 text-[18px] md:text-[20px] leading-[1.6] max-w-3xl mx-auto">
            {report.tagline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={report.downloadUrl} target="_blank" rel="noopener noreferrer">
              <Button size="large" className="w-full sm:w-auto bg-white text-brand-brown hover:bg-white hover:brightness-100 border-none">
                <ArrowDownToLine className="w-5 h-5 mr-2" />
                Download Full Report
              </Button>
            </a>
            <Link href="/impact">
              <Button size="large" variant="ghost" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white">
                Back to Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
            <Card className="p-6 md:p-8 bg-brown-tint/50 border border-brand-brown/15">
              <div className="w-12 h-12 rounded-xl bg-white text-brand-orange flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-[26px] font-bold text-brand-brown mb-4">Executive Summary</h2>
              <div className="space-y-4">
                {report.executiveSummary.map((paragraph) => (
                  <p key={paragraph} className="text-[#111111] text-[16px] leading-[1.7]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {report.stats.map((stat) => (
                <Card key={`${stat.value}-${stat.label}`} className="p-6 bg-white border border-gray-200 shadow-sm">
                  <div className="text-[34px] font-bold text-brand-orange leading-none mb-2">{stat.value}</div>
                  <h3 className="text-[17px] font-bold text-brand-brown mb-2">{stat.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{stat.detail}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">
              Programme Timeline
            </span>
            <h2 className="section-heading text-center mx-auto after:mx-auto after:left-auto after:right-auto">
              How Impact Was Built Across 2025
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {report.phases.map((phase) => (
              <Card key={phase.title} className="p-6 md:p-8 bg-white h-full">
                <span className="text-brand-green text-sm font-bold uppercase tracking-wider">{phase.period}</span>
                <h3 className="text-[22px] font-bold text-brand-brown mt-3 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{phase.summary}</p>
                <ul className="space-y-3">
                  {phase.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm text-[#111111] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 md:p-8 border border-gray-200">
              <h2 className="text-[26px] font-bold text-brand-brown mb-5">Gaps That Still Need Urgent Support</h2>
              <ul className="space-y-3">
                {report.gaps.map((gap) => (
                  <li key={gap} className="flex gap-3 text-[#111111] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 mt-2.5" />
                    <span>{gap}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 md:p-8 bg-green-tint border border-brand-green/20">
              <div className="w-12 h-12 rounded-xl bg-white text-brand-green flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-[26px] font-bold text-brand-brown mb-5">2026 Scale-Up Priorities</h2>
              <div className="space-y-4">
                {report.priorities.slice(0, 5).map((priority) => (
                  <div key={priority.title}>
                    <h3 className="text-[16px] font-bold text-brand-brown">{priority.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{priority.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-wrapper bg-brand-brown text-white">
        <div className="content-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-[38px] font-bold mb-5">Read the Full Report</h2>
          <p className="text-white/80 text-[17px] leading-[1.7] mb-8">
            Explore AWIHF&apos;s complete annual impact narrative, programme highlights, community reach, and priorities for scaling women&apos;s health work in Northern Uganda.
          </p>
          <a href={report.downloadUrl} target="_blank" rel="noopener noreferrer">
            <Button size="large" className="bg-white text-brand-brown hover:bg-white hover:brightness-100">
              <ArrowDownToLine className="w-5 h-5 mr-2" />
              Download Full PDF
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
