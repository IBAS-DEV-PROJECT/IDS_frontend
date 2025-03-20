"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";
import { useBreakpoint } from "@/shared/hooks/useBreakpoint";

interface ProgressIndicatorProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const ProgressIndicator = ({
  current,
  total,
  onPrev,
  onNext,
}: ProgressIndicatorProps) => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const wrapperClass = mounted
    ? isMobile
      ? "text-sm"
      : isTablet
        ? "text-base"
        : "text-lg"
    : "";

  const buttonSize = mounted
    ? isMobile
      ? "w-[1.5rem] h-[1.5rem]"
      : isTablet
        ? "w-[2rem] h-[2rem]"
        : "w-[2.5rem] h-[2.5rem]"
    : "";

  const displayBoxSize = mounted
    ? isMobile
      ? "px-4 py-1 rounded-[1rem]"
      : isTablet
        ? "px-5 py-1.5 rounded-[1.25rem]"
        : "px-6 py-2 rounded-[1.5rem]"
    : "";

  return (
    <div
      className={clsx("flex items-center justify-center gap-4", wrapperClass)}
    >
      {/* Left Arrow */}
      <button
        onClick={onPrev}
        disabled={current === 1}
        className={clsx(
          buttonSize,
          "flex items-center justify-center",
          current === 1 && "opacity-40 cursor-not-allowed",
        )}
        aria-label="이전 단계"
      >
        <div className="w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-r-[0.75rem] border-t-transparent border-b-transparent border-r-green-500" />
      </button>

      {/* Progress Box */}
      <div
        className={clsx(
          "border border-gray-400 text-gray-700 font-semibold",
          displayBoxSize,
        )}
      >
        {current} / {total}
      </div>

      {/* Right Arrow */}
      <button
        onClick={onNext}
        className={clsx(buttonSize, "flex items-center justify-center")}
        aria-label="다음 단계"
      >
        <div className="w-0 h-0 border-t-[0.5rem] border-b-[0.5rem] border-l-[0.75rem] border-t-transparent border-b-transparent border-l-green-500" />
      </button>
    </div>
  );
};

export default ProgressIndicator;
