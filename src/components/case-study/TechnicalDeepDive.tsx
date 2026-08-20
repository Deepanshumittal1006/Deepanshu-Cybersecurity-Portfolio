"use client";

import React, { useState } from "react";
import { ChevronDown, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechnicalDeepDiveProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function TechnicalDeepDive({
  children,
  defaultOpen = false,
}: TechnicalDeepDiveProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-6 pt-4 border-t border-slate-800/80">
      {/* Toggle Banner Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={cn(
          "w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 group cursor-pointer",
          isOpen
            ? "bg-slate-900/90 border-sky-600/60 shadow-lg shadow-sky-950/40"
            : "bg-slate-900/60 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-sm"
        )}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div
            className={cn(
              "p-2.5 rounded-lg border transition-colors shrink-0",
              isOpen
                ? "bg-sky-950 text-sky-400 border-sky-800/60"
                : "bg-slate-800/80 text-slate-300 border-slate-700/60 group-hover:border-slate-600 group-hover:text-sky-400"
            )}
          >
            <Layers className="w-5 h-5" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                Technical Deep Dive
              </span>
              <span className="text-[11px] font-mono text-sky-300 bg-sky-950/70 border border-sky-800/60 px-2 py-0.5 rounded">
                Full Implementation Details
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono truncate sm:whitespace-normal pt-0.5">
              {isOpen
                ? "Showing complete engineering responsibilities, configuration areas, validation checks, and operational learnings."
                : "Click to expand detailed engineering responsibilities, configuration areas, validation checklist, and operational learnings."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono font-medium text-sky-400 group-hover:text-sky-300 transition-colors">
            {isOpen ? "Hide Technical Details ↑" : "View Full Technical Implementation ↓"}
          </span>
          <div
            className={cn(
              "p-1.5 rounded-md border border-slate-700 bg-slate-800/80 text-slate-300 transition-transform duration-300",
              isOpen && "rotate-180 text-sky-400 border-sky-700 bg-sky-950/60"
            )}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div className="space-y-12 animate-in fade-in-50 duration-300 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}
