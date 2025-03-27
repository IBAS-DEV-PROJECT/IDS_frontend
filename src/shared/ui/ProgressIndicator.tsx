"use client";

import clsx from "clsx";
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
  const { isMobile, isTablet } = useBreakpoint();

  const wrapperClass = isMobile
    ? "text-base"
    : isTablet
      ? "text-lg"
      : "text-xl";

  // const buttonSize = isMobile
  //   ? "w-[1.5rem] h-[1.5rem]"
  //   : isTablet
  //     ? "w-[2rem] h-[2rem]"
  //     : "w-[2.5rem] h-[2.5rem]";

  // const displayBoxSize = isMobile
  //   ? "pt-1 rounded-custom10"
  //   : isTablet
  //     ? "rounded-custom10"
  //     : "rounded-custom10";

  return (
    <div
      className={clsx("flex items-center justify-center gap-4", wrapperClass)}
    >
      {/* Left Arrow */}
      <button
        onClick={onPrev}
        disabled={current === 1}
        className={clsx(
          "flex items-center justify-center",
          current === 1 && "opacity-40 cursor-not-allowed",
        )}
        aria-label="이전 단계"
      >
        <div
          className="w-0 h-0
                border-t-[16px] border-t-transparent
                border-b-[16px] border-b-transparent
                border-r-[28px] border-r-primary"
        />
      </button>

      {/* Progress Box */}
      <div
        className={clsx(
          "flex justify-center w-40 h-9 border border-gray text-black font-semibold pt-1 rounded-custom10",
        )}
      >
        {current} / {total}
      </div>

      {/* Right Arrow */}
      <button
        onClick={onNext}
        className={clsx("flex items-center justify-center")}
        aria-label="다음 단계"
      >
        <div
          className="w-0 h-0
                border-t-[16px] border-t-transparent
                border-b-[16px] border-b-transparent
                border-l-[28px] border-l-primary"
        />
      </button>
    </div>
  );
};

export default ProgressIndicator;
