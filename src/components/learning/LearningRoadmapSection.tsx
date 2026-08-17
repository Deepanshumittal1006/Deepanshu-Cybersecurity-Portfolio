"use client";

import React, { useState } from "react";
import {
  Compass,
  CheckCircle2,
  Clock,
  Calendar,
  Layers,
  BookOpen,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { learningRoadmapData } from "@/data/learningRoadmap";
import { LearningPhilosophyCard } from "@/components/learning/LearningPhilosophyCard";
import { ResourceStrategyCards } from "@/components/learning/ResourceStrategyCards";
import { ResourceDecisionMatrix } from "@/components/learning/ResourceDecisionMatrix";
import { RoadmapStage, RoadmapStatus } from "@/types/portfolio";

export function LearningRoadmapSection() {
  const [filter, setFilter] = useState<"ALL" | "IN PROGRESS" | "PLANNED">("ALL");

  const { philosophy, resourceStrategy, stages, resourceMatrix } =
    learningRoadmapData;

  const filteredStages = stages.filter((stage) => {
    if (filter === "ALL") return true;
    return stage.status === filter;
  });

  const getStatusBadge = (status: RoadmapStatus) => {
    switch (status) {
      case "COMPLETED":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-700/60">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            COMPLETED
          </span>
        );
      case "IN PROGRESS":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-sky-950/90 text-sky-300 border border-sky-600/70 shadow-sm shadow-sky-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            IN PROGRESS
          </span>
        );
      case "PLANNED":
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-900 text-slate-400 border border-slate-800">
            <Clock className="w-3 h-3 text-slate-500" />
            PLANNED
          </span>
        );
    }
  };

  return (
    <div className="space-y-12">
      {/* 1. Philosophy & Verification Cycle */}
      <LearningPhilosophyCard
        cycle={philosophy.cycle}
        measurement={philosophy.measurement}
      />

      {/* 2. Resource Strategy Distinction */}
      <ResourceStrategyCards strategy={resourceStrategy} />

      {/* 3. 12-Stage Visual Roadmap */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-sky-400" />
            <h3 className="text-base font-bold text-slate-100">
              12-Stage Technical Roadmap
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <div className="inline-flex rounded-lg bg-slate-900/80 p-1 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setFilter("ALL")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filter === "ALL"
                    ? "bg-sky-950 text-sky-300 border border-sky-800"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                All (12)
              </button>
              <button
                onClick={() => setFilter("IN PROGRESS")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filter === "IN PROGRESS"
                    ? "bg-sky-950 text-sky-300 border border-sky-800"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                In Progress (2)
              </button>
              <button
                onClick={() => setFilter("PLANNED")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filter === "PLANNED"
                    ? "bg-sky-950 text-sky-300 border border-sky-800"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Planned (10)
              </button>
            </div>
          </div>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStages.map((stage) => {
            const isInProgress = stage.status === "IN PROGRESS";

            return (
              <Card
                key={stage.stageCode}
                variant={isInProgress ? "elevated" : "default"}
                className={`flex flex-col justify-between space-y-4 relative ${
                  isInProgress ? "border-l-4 border-l-sky-500" : ""
                }`}
              >
                <div className="space-y-3">
                  {/* Top Bar: Code & Status */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold text-sky-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {stage.stageCode}
                    </span>
                    {getStatusBadge(stage.status)}
                  </div>

                  {/* Stage Title & Subtitle */}
                  <div>
                    <h4 className="text-base font-bold text-slate-100">
                      {stage.title}
                    </h4>
                    {stage.subtitle && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {stage.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Primary Resources */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Primary Resources:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.primaryResources.map((res) => (
                        <span
                          key={res}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 text-sky-300 border border-slate-800"
                        >
                          {res}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Focus Topics */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {stage.focusTopics.slice(0, 6).map((topic) => (
                        <span
                          key={topic}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900/60 text-slate-300 border border-slate-800/60"
                        >
                          {topic}
                        </span>
                      ))}
                      {stage.focusTopics.length > 6 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 self-center">
                          +{stage.focusTopics.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expected Output Note (if any) */}
                  {stage.expectedOutput && (
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 font-mono leading-relaxed">
                      <span className="text-sky-400 font-semibold">Note: </span>
                      {stage.expectedOutput}
                    </div>
                  )}
                </div>

                {/* Footer Note / Timeline Status */}
                {stage.statusNote && (
                  <div className="pt-2 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span>{stage.statusNote}</span>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {/* 4. Compact Interactive Resource Decision Matrix */}
      <ResourceDecisionMatrix matrix={resourceMatrix} />
    </div>
  );
}
