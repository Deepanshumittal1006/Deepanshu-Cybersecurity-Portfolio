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
      "Professional Internship Experience":
        "bg-cyan-950/30 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50 shadow-[0_0_10px_rgba(0,245,212,0.1)]",
      "Technical Experience":
        "bg-blue-950/30 text-electric-blue border-electric-blue/30 hover:border-electric-blue/50 shadow-[0_0_10px_rgba(0,168,255,0.1)]",
      "Currently Learning":
        "bg-purple/10 text-purple-300 border-purple/30 hover:border-purple/50 shadow-[0_0_10px_rgba(124,58,237,0.1)]",
    };

    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border transition-all cursor-default",
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
    default: "bg-white/10 text-white border-white/20",
    outline: "bg-transparent text-slate-300 border-white/20",
    evidence: "bg-cyan/10 text-cyan-300 border-cyan-500/30",
    subtle: "bg-white/5 text-slate-400 border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border",
        baseVariantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
