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
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60 transition-colors hover:border-slate-600 hover:text-slate-100",
        className
      )}
      {...props}
    >
      {name}
    </span>
  );
}
