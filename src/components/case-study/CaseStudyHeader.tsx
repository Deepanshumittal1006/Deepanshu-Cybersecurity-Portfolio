import React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Layers, Building2 } from "lucide-react";
import { TechTag } from "@/components/ui/TechTag";
import { Badge } from "@/components/ui/Badge";

interface HeaderProps {
  title: string;
  category: string;
  technologies: string[];
  publicDescription: string;
}

export function CaseStudyHeader({
  title,
  category,
  technologies,
  publicDescription,
}: HeaderProps) {
  return (
    <div className="space-y-6 border-b border-slate-800 pb-10">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <Link
          href="/"
          className="hover:text-sky-300 transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-slate-600" />
        <Link href="/#case-studies" className="hover:text-sky-300 transition-colors">
          Case Studies
        </Link>
        <ChevronRight className="w-3 h-3 text-slate-600" />
        <span className="text-slate-200 truncate max-w-xs">{title}</span>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-sky-300 bg-sky-950/70 border border-sky-800/60 px-2.5 py-1 rounded">
            {category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-700/80">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            <span>ARPR Techsol Pvt. Ltd. · Professional Internship Experience</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-50 leading-[1.15]">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl pt-1">
          {publicDescription}
        </p>
      </div>

      {/* Technologies Used */}
      <div className="space-y-2 pt-2">
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
          Core Technologies & Concepts
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
