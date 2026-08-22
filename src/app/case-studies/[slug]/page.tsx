import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { caseStudiesData, getCaseStudyBySlug } from "@/data/caseStudies";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudyMetrics } from "@/components/case-study/CaseStudyMetrics";
import { CaseStudyArchitectureDiagram } from "@/components/case-study/CaseStudyArchitectureDiagram";
import { TechnicalDeepDive } from "@/components/case-study/TechnicalDeepDive";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { SectionHeader } from "@/components/common/SectionHeader";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | Deepanshu`,
    description: study.publicDescription,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="space-y-12">
      {/* 1, 2, 4. Header, Title, Professional Summary & Technologies */}
      <CaseStudyHeader
        title={study.title}
        category={study.category}
        technologies={study.technologies}
        publicDescription={study.publicDescription}
      />

      {/* 3. Verified Scale / Metrics (When Applicable) */}
      {study.metrics && study.metrics.length > 0 && (
        <CaseStudyMetrics metrics={study.metrics} />
      )}

      {/* 5. My Role */}
      {study.myRole && study.myRole.length > 0 && (
        <section className="space-y-6">
          <SectionHeader title="My Role" />
          <div className="pl-4 sm:pl-8 border-l border-white/10 ml-2">
            <ul className="space-y-4 text-base text-slate-300 font-light">
              {study.myRole.map((roleItem, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-2 shadow-[0_0_8px_rgba(0,245,212,0.8)]" />
                  <span className="leading-relaxed">{roleItem}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 6 & 7. Engagement Objective & Target Environment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-sm font-mono text-cyan uppercase tracking-widest">
            Engagement Objective
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            {study.objective}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-mono text-cyan uppercase tracking-widest">
            Target Environment (Sanitized)
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            {study.environment}
          </p>
        </div>
      </div>

      {/* 8. Sanitized Conceptual Architecture */}
      {study.architectureFlow && (
        <CaseStudyArchitectureDiagram
          title="Sanitized Conceptual Architecture Flow"
          slug={study.slug}
          nodes={study.architectureFlow}
        />
      )}

      {/* Layer 2: Expandable Technical Deep Dive Area */}
      <TechnicalDeepDive>
        {/* 9. Engineering Responsibilities */}
        <section className="space-y-6">
          <SectionHeader title="Engineering Responsibilities" />
          <div className="pl-4 sm:pl-8 border-l border-white/10 ml-2">
            <ul className="space-y-4 text-base text-slate-300 font-light">
              {study.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-2 shadow-[0_0_8px_rgba(0,245,212,0.8)]" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10. Technical Implementation */}
        <section className="space-y-6 pt-8">
          <SectionHeader title="Technical Implementation" />
          <div className="pl-4 sm:pl-8 border-l border-white/10 ml-2">
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              {study.implementation}
            </p>
          </div>
        </section>

        {/* 11. Key Configuration Areas */}
        <section className="space-y-8 pt-8">
          <SectionHeader title="Key Configuration Areas" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-2 sm:pl-4">
            {study.configurationAreas.map((area, idx) => (
              <div key={idx} className="py-6 px-6 sm:px-8 border border-white/10 bg-white/5 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-100">
                    {area.title}
                  </h3>
                  <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
                    Area
                  </span>
                </div>

                <p className="text-base text-slate-300 leading-relaxed font-light">
                  {area.description}
                </p>

                {area.points && (
                  <ul className="space-y-2 pt-4 border-t border-white/10 text-sm text-slate-400 font-mono">
                    {area.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-cyan font-bold">›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 12. Validation & Verification */}
        <section className="space-y-6 pt-8">
          <SectionHeader title="Validation & Verification" />

          <div className="pl-4 sm:pl-8 border-l border-white/10 ml-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {study.validationChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 py-2 text-base text-slate-300 font-light"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Technical Learnings */}
        <section className="space-y-6 pt-8">
          <SectionHeader title="Technical Learnings" />

          <div className="pl-4 sm:pl-8 border-l border-white/10 ml-2">
            <ul className="space-y-6 text-base text-slate-300 font-light">
              {study.keyTechnicalLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-2 shadow-[0_0_8px_rgba(0,245,212,0.8)]" />
                  <span className="leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 14. Current Operational Relevance */}
        {study.operationalRelevance && (
          <section className="space-y-6 pt-8">
            <SectionHeader title="Current Operational Relevance" />
            <div className="pl-4 sm:pl-8 border-l border-white/10 ml-2">
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                {study.operationalRelevance}
              </p>
            </div>
          </section>
        )}
      </TechnicalDeepDive>

      {/* 15. Footer Sanitization Disclaimer & Navigation */}
      {study.sanitizationDisclaimer && (
        <div className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-500 leading-relaxed">
          <span className="text-slate-400 font-semibold">Note: </span>
          {study.sanitizationDisclaimer}
        </div>
      )}

      {/* Navigation to Other Case Studies */}
      <CaseStudyNav currentSlug={study.slug} />
    </article>
  );
}
