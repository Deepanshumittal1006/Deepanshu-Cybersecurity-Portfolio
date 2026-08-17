import React from "react";
import { ShieldAlert, Cloud, BookOpen, Layers } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { LearningRoadmapData } from "@/types/portfolio";

interface StrategyProps {
  strategy: LearningRoadmapData["resourceStrategy"];
}

export function ResourceStrategyCards({ strategy }: StrategyProps) {
  const { cybersecurityTrack, automationTrack } = strategy;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Cybersecurity / SOC Track */}
      <Card variant="default" className="space-y-4 border-t-2 border-t-sky-500">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-sky-400" />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-sky-400">
              Cybersecurity / SOC Resource Strategy
            </span>
          </div>
          <h4 className="text-base font-bold text-slate-100">
            {cybersecurityTrack.primaryResource}
          </h4>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          {cybersecurityTrack.scopeGuideline}
        </p>

        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <span className="text-[11px] font-mono text-slate-400 font-semibold block">
            Primary Application Areas:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
            {cybersecurityTrack.usage.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* Automation / Cloud Track */}
      <Card variant="default" className="space-y-4 border-t-2 border-t-teal-500">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-teal-400" />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-teal-400">
              Automation / Cloud Resource Strategy
            </span>
          </div>
          <h4 className="text-base font-bold text-slate-100">
            {automationTrack.primaryResource}
          </h4>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          {automationTrack.scopeGuideline}
        </p>

        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <span className="text-[11px] font-mono text-slate-400 font-semibold block">
            Primary Application Areas:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
            {automationTrack.usage.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}
