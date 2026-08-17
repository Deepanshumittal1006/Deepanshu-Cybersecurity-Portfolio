import React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface SanitizedNoticeProps {
  customText?: string;
  className?: string;
}

export function SanitizedNotice({
  customText,
  className,
}: SanitizedNoticeProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-2.5 p-3 rounded-lg bg-sky-950/30 border border-sky-900/40 text-xs text-sky-200/90 leading-relaxed font-mono",
        className
      )}
    >
      <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
      <span>
        {customText ||
          "Sanitization Standard: All internal IP addresses, credentials, hostnames, cluster serials, and infrastructure specifics have been omitted in compliance with enterprise confidentiality policies."}
      </span>
    </div>
  );
}
