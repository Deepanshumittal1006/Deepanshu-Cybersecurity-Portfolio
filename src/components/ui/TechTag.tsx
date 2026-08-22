import React from "react";
import { cn } from "@/lib/utils";

interface TechTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  className?: string;
}

export function TechTag({ name, className, ...props }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono text-cyan-100 bg-white/5 border border-white/10 transition-colors hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,245,212,0.1)]",
        className
      )}
      {...props}
    >
      {name}
    </span>
  );
}
