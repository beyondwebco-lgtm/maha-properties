import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "horizontal" | "compact" | "icon-only";
  theme?: "dark" | "light"; // 'dark' = for dark backgrounds; 'light' = for light backgrounds
  className?: string;
  showLink?: boolean;
  size?: "sm" | "md" | "lg";
}

export function MahaLogo({
  variant = "horizontal",
  theme = "light",
  className = "",
  showLink = true,
  size = "md",
}: LogoProps) {
  const isDark = theme === "dark";
  const logoSrc = isDark
    ? "/images/maha-logo-dark.png"
    : "/images/maha-logo-light.png";

  const heightClasses = {
    sm: "h-9 w-auto",
    md: "h-11 sm:h-12 w-auto",
    lg: "h-16 sm:h-20 w-auto",
  }[size];

  const content = (
    <div
      className={`group inline-flex items-center transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <Image
        src={logoSrc}
        alt="MAHA PROPERTIES"
        width={180}
        height={116}
        priority
        className={`${heightClasses} object-contain transition-opacity duration-200 group-hover:opacity-95`}
      />
    </div>
  );

  if (showLink) {
    return (
      <Link href="/" aria-label="MAHA Properties Homepage" className="inline-block shrink-0">
        {content}
      </Link>
    );
  }

  return content;
}
