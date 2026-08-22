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
    <div className="space-y-6 pt-12 border-t border-white/10">
      {/* Toggle Banner Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={cn(
          "w-full text-left py-4 sm:py-6 border-b border-white/10 transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer",
          isOpen
            ? "border-cyan"
            : "hover:border-cyan/50"
        )}
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan transition-colors font-display">
                Technical Deep Dive
              </span>
              <span className="text-[10px] font-mono text-cyan bg-cyan/10 border border-cyan/20 px-2 py-0.5 rounded uppercase tracking-widest hidden sm:inline-block">
                Implementation Details
              </span>
            </div>
            <p className="text-sm text-slate-400 font-light truncate sm:whitespace-normal">
              {isOpen
                ? "Showing complete engineering responsibilities, configuration areas, validation checks, and operational learnings."
                : "Click to expand detailed engineering responsibilities, configuration areas, validation checklist, and operational learnings."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-mono font-medium text-cyan group-hover:text-cyan/80 transition-colors hidden sm:block uppercase tracking-widest">
            {isOpen ? "Hide Details" : "View Details"}
          </span>
          <div
            className={cn(
              "transition-transform duration-500 text-slate-400 group-hover:text-cyan",
              isOpen && "rotate-180 text-cyan"
            )}
          >
            <ChevronDown className="w-5 h-5" />
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
