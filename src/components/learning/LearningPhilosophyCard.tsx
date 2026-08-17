import React from "react";
import { Terminal, CheckCircle, ArrowRight, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface PhilosophyProps {
  cycle: string;
  measurement: string;
}

export function LearningPhilosophyCard({ cycle, measurement }: PhilosophyProps) {
  const steps = cycle.split(" → ");

  return (
    <Card variant="elevated" className="space-y-4 border-l-4 border-l-sky-500">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-amber-400" />
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
          Learning Philosophy & Verification Cycle
        </h3>
      </div>

      {/* Interactive Cycle Flow */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900 border border-slate-700/80 text-sky-300">
              {step}
            </span>
            {idx < steps.length - 1 && (
              <span className="text-slate-600 font-mono text-xs">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic border-t border-slate-800/80 pt-3">
        &ldquo;{measurement}&rdquo;
      </p>
    </Card>
  );
}
