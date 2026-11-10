import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface PillButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "whatsapp";
  isExternal?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const PillButton: React.FC<PillButtonProps> = ({
  href,
  children,
  variant = "primary",
  isExternal = false,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-5 py-2.5 text-sm gap-3",
    lg: "px-7 py-3.5 text-base gap-3.5",
  }[size];

  const badgeSizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  }[size];

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  }[size];

  const variantClasses = {
    primary:
      "bg-brand-900 text-white hover:bg-brand-950 shadow-pill transition-all duration-300 group",
    secondary:
      "bg-transparent border border-neutral-300 text-neutral-800 hover:border-brand-900 hover:text-brand-900 transition-all duration-300 group",
    white:
      "bg-white text-brand-900 hover:bg-neutral-100 shadow-md transition-all duration-300 group",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1EBE5B] shadow-pill transition-all duration-300 group",
  }[variant];

  const badgeVariantClasses = {
    primary:
      "bg-white text-brand-900 group-hover:translate-x-0.5 transition-transform duration-300",
    secondary:
      "bg-neutral-100 text-neutral-800 group-hover:bg-brand-900 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300",
    white:
      "bg-brand-900 text-white group-hover:translate-x-0.5 transition-transform duration-300",
    whatsapp:
      "bg-white text-[#25D366] group-hover:translate-x-0.5 transition-transform duration-300",
  }[variant];

  const content = (
    <span
      className={`inline-flex items-center justify-center font-medium rounded-full cursor-pointer select-none ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`flex items-center justify-center rounded-full flex-shrink-0 ${badgeSizeClasses} ${badgeVariantClasses}`}
      >
        {isExternal ? (
          <ArrowUpRight size={iconSizes} strokeWidth={2.5} />
        ) : (
          <ArrowRight size={iconSizes} strokeWidth={2.5} />
        )}
      </span>
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
};

