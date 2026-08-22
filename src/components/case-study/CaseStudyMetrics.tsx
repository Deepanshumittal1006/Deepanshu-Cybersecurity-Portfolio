import React from "react";
import { CaseStudyMetric } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface CaseStudyMetricsProps {
  metrics: CaseStudyMetric[];
  className?: string;
}

export function CaseStudyMetrics({
  metrics,
  className,
}: CaseStudyMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
          Verified Scale & Deployment Metrics
        </span>
      </div>

      <div
        className={cn(
          "grid gap-6 border-y border-white/10 py-8",
          metrics.length === 1 && "grid-cols-1 max-w-xs",
          metrics.length === 2 && "grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10",
          metrics.length >= 3 && "grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        )}
      >
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center px-4 sm:px-6 first:pl-0 last:pr-0 space-y-1"
          >
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan">
              {metric.value}
            </span>
            <span className="text-sm font-semibold text-slate-200 mt-2">
              {metric.label}
            </span>
            {metric.detail && (
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-1 block">
                {metric.detail}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
