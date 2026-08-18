import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Shield,
  CheckCircle2,
  ListChecks,
  Lightbulb,
  Terminal,
  Server,
  Layers,
  Wrench,
  UserCheck,
  Target,
} from "lucide-react";
import { caseStudiesData, getCaseStudyBySlug } from "@/data/caseStudies";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudyMetrics } from "@/components/case-study/CaseStudyMetrics";
import { CaseStudyArchitectureDiagram } from "@/components/case-study/CaseStudyArchitectureDiagram";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { Card } from "@/components/ui/Card";

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
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
            <UserCheck className="w-4 h-4 text-sky-400" />
            <h2 className="text-lg font-bold text-slate-100">My Role</h2>
          </div>
          <Card variant="elevated">
            <ul className="space-y-2.5 text-sm text-slate-300">
              {study.myRole.map((roleItem, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                  <span className="leading-relaxed">{roleItem}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      {/* 6 & 7. Engagement Objective & Target Environment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="default" className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            <Target className="w-4 h-4 text-sky-400" />
            <span>Engagement Objective</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.objective}
          </p>
        </Card>

        <Card variant="default" className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-teal-400">
            <Server className="w-4 h-4 text-teal-400" />
            <span>Target Environment (Sanitized)</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.environment}
          </p>
        </Card>
      </div>

      {/* 8. Sanitized Conceptual Architecture */}
      {study.architectureFlow && (
        <CaseStudyArchitectureDiagram
          title="Sanitized Conceptual Architecture Flow"
          nodes={study.architectureFlow}
        />
      )}

      {/* 9. Engineering Responsibilities */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Wrench className="w-4 h-4 text-sky-400" />
          <h2 className="text-lg font-bold text-slate-100">
            Engineering Responsibilities
          </h2>
        </div>
        <Card variant="default">
          <ul className="space-y-2.5 text-sm text-slate-300">
            {study.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* 10. Technical Implementation */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Layers className="w-4 h-4 text-sky-400" />
          <h2 className="text-lg font-bold text-slate-100">
            Technical Implementation
          </h2>
        </div>
        <Card variant="default">
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.implementation}
          </p>
        </Card>
      </section>

      {/* 11. Key Configuration Areas */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Terminal className="w-4 h-4 text-sky-400" />
          <h2 className="text-lg font-bold text-slate-100">
            Key Configuration Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {study.configurationAreas.map((area, idx) => (
            <Card key={idx} variant="elevated" className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-100">
                  {area.title}
                </h3>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                  Area 0{idx + 1}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {area.description}
              </p>

              {area.points && (
                <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
                  {area.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <span className="text-sky-400 font-bold">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* 12. Validation & Verification */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <ListChecks className="w-4 h-4 text-teal-400" />
          <h2 className="text-lg font-bold text-slate-100">
            Validation & Verification
          </h2>
        </div>

        <Card variant="default">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {study.validationChecklist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* 13. Technical Learnings */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <h2 className="text-lg font-bold text-slate-100">
            Technical Learnings
          </h2>
        </div>

        <Card variant="default">
          <ul className="space-y-2.5 text-sm text-slate-300">
            {study.keyTechnicalLearnings.map((learning, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold text-xs mt-0.5 font-mono">
                  [0{idx + 1}]
                </span>
                <span className="leading-relaxed">{learning}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* 14. How this experience applies today (bridge to current role) */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <h2 className="text-lg font-bold text-slate-100">How this experience applies today</h2>
        </div>
        <Card variant="default">
          <p className="text-sm text-slate-300 leading-relaxed">
            This internship project experience provides a foundation for network troubleshooting, fault isolation, and operational visibility in my current NOC role. The hands-on configuration and monitoring practices applied during the internship directly support ticket handling, escalation workflows, and infrastructure observability required for effective NOC/L1 support.
          </p>
        </Card>
      </section>

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
