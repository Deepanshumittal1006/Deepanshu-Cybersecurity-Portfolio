import React from "react";
import { ArrowDown, Shield, Server, Cpu, Database, Network } from "lucide-react";
import { CaseStudyArchitectureNode } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface DiagramProps {
  title?: string;
  nodes: CaseStudyArchitectureNode[];
  className?: string;
}

export function CaseStudyArchitectureDiagram({
  title = "Sanitized Conceptual Architecture",
  nodes,
  className,
}: DiagramProps) {
  const getIcon = (type?: string) => {
    switch (type) {
      case "security":
        return <Shield className="w-4 h-4 text-sky-400" />;
      case "process":
        return <Network className="w-4 h-4 text-teal-400" />;
      case "destination":
        return <Database className="w-4 h-4 text-sky-300" />;
      case "source":
      default:
        return <Server className="w-4 h-4 text-slate-300" />;
    }
  };

  const getNodeStyles = (type?: string) => {
    switch (type) {
      case "security":
        return "bg-sky-950/80 border-sky-600/70 text-sky-200 shadow-sm shadow-sky-950/50";
      case "process":
        return "bg-teal-950/70 border-teal-700/60 text-teal-200";
      case "destination":
        return "bg-slate-900/90 border-slate-700/80 text-slate-200";
      case "source":
      default:
        return "bg-slate-900/90 border-slate-800 text-slate-200";
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-slate-800 bg-cyber-surface/70 p-6 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-6 border-b border-slate-800 pb-3">
        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
          {title}
        </h4>
        <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          Logical Flow
        </span>
      </div>

      <div className="flex flex-col items-center max-w-lg mx-auto py-2">
        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            <div
              className={cn(
                "w-full px-4 py-3 rounded-lg border flex items-center gap-3 transition-all",
                getNodeStyles(node.type)
              )}
            >
              <div className="p-1.5 rounded bg-slate-950/60 border border-white/5 shrink-0">
                {getIcon(node.type)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-100 truncate">
                  {node.label}
                </span>
                {node.sublabel && (
                  <span className="text-[11px] font-mono text-slate-400 truncate">
                    {node.sublabel}
                  </span>
                )}
              </div>
            </div>

            {index < nodes.length - 1 && (
              <div className="flex flex-col items-center my-1.5 text-sky-400/80">
                <div className="w-px h-2.5 bg-slate-700" />
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
