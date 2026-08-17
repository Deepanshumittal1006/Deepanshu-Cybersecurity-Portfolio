import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none rounded-lg";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-2.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-cyber-blue hover:bg-sky-500 text-white shadow-sm shadow-sky-950/50",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/80",
    outline:
      "bg-transparent hover:bg-slate-800/60 text-slate-200 border border-slate-700 hover:border-slate-600",
    ghost:
      "bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white",
  };

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
}
