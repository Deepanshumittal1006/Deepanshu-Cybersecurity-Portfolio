import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { CaseStudySlug } from "@/types/portfolio";
import { caseStudiesData } from "@/data/caseStudies";

interface CaseStudyNavProps {
  currentSlug: CaseStudySlug;
}

export function CaseStudyNav({ currentSlug }: CaseStudyNavProps) {
  const currentIndex = caseStudiesData.findIndex((s) => s.slug === currentSlug);
  const prevStudy = currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudiesData.length - 1
      ? caseStudiesData[currentIndex + 1]
      : null;

  return (
    <div className="pt-12 border-t border-slate-800 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevStudy ? (
          <Link
            href={`/case-studies/${prevStudy.slug}`}
            className="p-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-cyber-surface/60 hover:bg-slate-900/80 transition-all flex flex-col group"
          >
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-sky-300 mb-1">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Case Study</span>
            </div>
            <span className="text-sm font-bold text-slate-200 group-hover:text-white truncate">
              {prevStudy.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextStudy && (
          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="p-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-cyber-surface/60 hover:bg-slate-900/80 transition-all flex flex-col items-end text-right group"
          >
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-sky-300 mb-1">
              <span>Next Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="text-sm font-bold text-slate-200 group-hover:text-white truncate max-w-xs">
              {nextStudy.title}
            </span>
          </Link>
        )}
      </div>

      <div className="flex justify-center pt-2">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors px-4 py-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>
    </div>
  );
}
