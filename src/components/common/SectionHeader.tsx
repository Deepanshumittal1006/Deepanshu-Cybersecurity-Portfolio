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
  index,
  categoryBadge,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 sm:mb-12", className)}>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {index && (
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyber-blue-light bg-sky-950/60 border border-sky-800/40 px-2 py-0.5 rounded">
            {index}
          </span>
        )}
        {categoryBadge && (
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyber-teal-light bg-teal-950/60 border border-teal-800/40 px-2 py-0.5 rounded">
            {categoryBadge}
          </span>
        )}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
