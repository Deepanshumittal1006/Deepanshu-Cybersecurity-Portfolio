import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index?: string;
  categoryBadge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  categoryBadge,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 sm:mb-16 relative", className)}>
      {categoryBadge && (
        <span className="font-mono text-[11px] uppercase tracking-widest text-electric-blue block mb-4">
          {categoryBadge}
        </span>
      )}
      
      <div className="relative inline-block mb-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display relative z-10">
          {title}
        </h2>
        {/* Subtle cyan accent/underline/glow */}
        <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-1/3 h-1 bg-cyan shadow-[0_0_12px_rgba(0,245,212,0.8)] rounded-full" />
      </div>

      {subtitle && (
        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
