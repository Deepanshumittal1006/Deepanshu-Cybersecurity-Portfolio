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
      "bg-cyber-surface/90 border border-slate-800/80 shadow-sm",
    elevated:
      "bg-cyber-card border border-slate-700/80 shadow-md shadow-black/20",
    interactive:
      "bg-cyber-surface/90 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200 hover:-translate-y-0.5",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-5 sm:p-6 backdrop-blur-sm",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
