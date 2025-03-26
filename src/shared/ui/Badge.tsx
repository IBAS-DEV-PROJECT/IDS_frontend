"use client";

import clsx from "clsx";
import { HTMLAttributes } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

type BadgeType = "resolved" | "unresolved" | "pending";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  type: BadgeType;
}

const badgeStyles: Record<BadgeType, string> = {
  resolved: "bg-primary text-white",
  unresolved: "bg-red text-white",
  pending: "bg-gray text-white",
};

const badgeText: Record<BadgeType, string> = {
  resolved: "해결",
  unresolved: "미해결",
  pending: "보류",
};

const Badge = ({ type, className, ...props }: BadgeProps) => {
  const { isMobile, isTablet } = useBreakpoint();

  const sizeClass = isMobile
    ? "w-[2.5rem] h-[1.5rem] text-[0.5rem] px-2"
    : isTablet
      ? "w-[3rem] h-[1.75rem] text-[0.625rem] px-2.5"
      : "w-[3.5rem] h-[2rem] text-[0.75rem] px-3";

  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center rounded-full h-[1.5rem] w-[2.5rem]",
        badgeStyles[type],
        sizeClass,
        className,
      )}
      {...props}
    >
      {badgeText[type]}
    </div>
  );
};

export default Badge;
