import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "interactive";
  className?: string;
}

export function Card({
  children,
  variant = "default",
  className,
  ...props
}: CardProps) {
  const variantStyles = {
    default:
      "bg-[#0B132B]/80 border border-white/10 shadow-lg shadow-black/20",
    elevated:
      "bg-[#0B132B]/95 border border-white/20 shadow-xl shadow-black/40",
    interactive:
      "bg-[#0B132B]/80 border border-white/10 hover:border-cyan-500/30 hover:bg-[#0B132B] hover:shadow-[0_8px_30px_rgba(0,245,212,0.1)] transition-all duration-300 hover:-translate-y-1 group",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 backdrop-blur-md overflow-hidden relative",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {/* Subtle internal gradient glow for interactive cards */}
      {variant === 'interactive' && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple/0 group-hover:from-cyan-500/5 group-hover:to-purple/5 transition-all duration-500 pointer-events-none" />
      )}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
