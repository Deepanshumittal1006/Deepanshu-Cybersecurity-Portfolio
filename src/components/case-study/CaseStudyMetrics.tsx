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
          "grid gap-4",
          metrics.length === 1 && "grid-cols-1 max-w-xs",
          metrics.length === 2 && "grid-cols-1 sm:grid-cols-2",
          metrics.length >= 3 && "grid-cols-1 sm:grid-cols-3"
        )}
      >
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-1"
          >
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-sky-400">
              {metric.value}
            </span>
            <span className="text-xs font-semibold text-slate-200">
              {metric.label}
            </span>
            {metric.detail && (
              <span className="text-[11px] font-mono text-slate-500">
                {metric.detail}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
