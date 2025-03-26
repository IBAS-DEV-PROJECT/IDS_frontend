"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

const baseStyles =
  "inline-flex items-center justify-center font-normal rounded-custom10 transition";

const variantStyles = {
  primary:
    "bg-black text-white hover:bg-black-hover hover:shadow-md transition-all duration-200",
  secondary:
    "bg-white text-black border border-gray-300 hover:bg-gray-100 hover:shadow-sm transition-all duration-200",
  option:
    "bg-gray text-white hover:bg-gray-light hover:shadow-sm transition-all duration-200",
};

type ButtonVariant = keyof typeof variantStyles;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  isLoading = false,
  className,
  ...props
}: ButtonProps) => {
  const { isMobile, isTablet } = useBreakpoint();

  let sizeClass = "";
  if (variant === "primary") {
    sizeClass = isMobile
      ? "w-[15.5rem] h-[3rem] text-[0.875rem]"
      : isTablet
        ? "w-[18rem] h-[3.5rem] text-base"
        : "w-[20rem] h-[4rem] text-lg";
  } else if (variant === "secondary") {
    sizeClass = isMobile
      ? "w-[15.5rem] h-[3rem] text-base"
      : isTablet
        ? "w-[18rem] h-[3.5rem] text-lg"
        : "w-[20rem] h-[4rem] text-xl";
  } else if (variant === "option") {
    sizeClass = isMobile
      ? "w-[15.5rem] h-[3.75rem] text-xs"
      : isTablet
        ? "w-[18rem] h-[4rem] text-sm"
        : "w-[20rem] h-[4.25rem] text-base";
  }

  return (
    <button
      className={clsx(
        baseStyles,
        sizeClass,
        variantStyles[variant],
        isLoading && "opacity-50 cursor-not-allowed",
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <span className="animate-spin mr-2">⏳</span>}
      {children}
    </button>
  );
};

export default Button;
