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

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-widest text-electric-blue">
            {category}
          </span>
          <span className="text-white/20">—</span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-cyan" />
            <span>ARPR Techsol Pvt. Ltd. · Professional Experience</span>
          </span>
        </div>

        <div className="relative inline-block mb-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display relative z-10 leading-[1.1]">
            {title}
          </h1>
          <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-1/3 h-1 bg-cyan shadow-[0_0_12px_rgba(0,245,212,0.8)] rounded-full" />
        </div>

        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-4xl pt-4 font-light">
          {publicDescription}
        </p>
      </div>

      {/* Technologies Used */}
      <div className="space-y-3 pt-6">
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
