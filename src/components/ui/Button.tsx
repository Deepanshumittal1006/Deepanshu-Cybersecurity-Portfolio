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
    "inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14] disabled:opacity-50 disabled:pointer-events-none rounded-xl";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2 font-semibold",
    md: "px-6 py-3 text-sm gap-2 font-bold",
    lg: "px-8 py-4 text-base gap-3 font-bold",
  };

  const variantStyles = {
    primary:
      "bg-cyan/10 hover:bg-cyan/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,245,212,0.15)] hover:shadow-[0_0_25px_rgba(0,245,212,0.3)]",
    secondary:
      "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20",
    outline:
      "bg-transparent hover:bg-electric-blue/10 text-slate-200 border border-white/10 hover:border-electric-blue/50 hover:text-electric-blue hover:shadow-[0_0_20px_rgba(0,168,255,0.15)]",
    ghost:
      "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
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
