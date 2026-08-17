import React from "react";
import { Table, Layers } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ResourceMatrixItem } from "@/types/portfolio";

interface MatrixProps {
  matrix: ResourceMatrixItem[];
}

export function ResourceDecisionMatrix({ matrix }: MatrixProps) {
  return (
    <Card variant="default" className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-sky-400" />
          <h3 className="text-sm font-bold text-slate-100">
            Resource Decision Matrix
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          Curated Learning Mapping
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-[11px] font-mono text-slate-400">
              <th className="py-2.5 px-3 font-semibold">Learning Area</th>
              <th className="py-2.5 px-3 font-semibold">Focus Domain</th>
              <th className="py-2.5 px-3 font-semibold">Primary Resource</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {matrix.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-900/60 transition-colors group"
              >
                <td className="py-2.5 px-3 font-medium text-slate-200">
                  {item.learningArea}
                </td>
                <td className="py-2.5 px-3 text-slate-400 font-mono text-[11px]">
                  {item.focusDomain}
                </td>
                <td className="py-2.5 px-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-sky-300 group-hover:border-sky-800/60 transition-colors">
                    {item.primaryResource}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
