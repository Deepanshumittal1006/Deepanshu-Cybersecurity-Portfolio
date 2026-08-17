import React from "react";
import { cn } from "@/lib/utils";
import { SkillEvidence } from "@/types/portfolio";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "evidence" | "subtle";
  evidenceType?: SkillEvidence;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  evidenceType,
  className,
  ...props
}: BadgeProps) {
  if (evidenceType) {
    const evidenceStyles: Record<SkillEvidence, string> = {
      "Hands-on Enterprise Experience":
        "bg-emerald-950/70 text-emerald-300 border-emerald-700/50 hover:border-emerald-600/70",
      "Technical Experience":
        "bg-sky-950/70 text-sky-300 border-sky-700/50 hover:border-sky-600/70",
      "Currently Learning":
        "bg-amber-950/60 text-amber-300 border-amber-700/40 hover:border-amber-600/60",
    };

    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border transition-colors",
          evidenceStyles[evidenceType],
          className
        )}
        {...props}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
        {evidenceType}
      </span>
    );
  }

  const baseVariantStyles = {
    default: "bg-slate-800/80 text-slate-200 border-slate-700/60",
    outline: "bg-transparent text-slate-300 border-slate-700",
    evidence: "bg-sky-950/60 text-sky-300 border-sky-800/40",
    subtle: "bg-slate-900/60 text-slate-400 border-slate-800/60",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium border",
        baseVariantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
