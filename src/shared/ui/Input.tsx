"use client";

import clsx from "clsx";
import {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

type InputVariant = "nickname" | "title" | "textarea";

interface CommonProps {
  variant?: InputVariant;
  error?: string;
  className?: string;
}

type InputProps =
  | (CommonProps &
      InputHTMLAttributes<HTMLInputElement> & {
        variant?: "nickname" | "title";
      })
  | (CommonProps &
      TextareaHTMLAttributes<HTMLTextAreaElement> & { variant: "textarea" });

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ variant = "nickname", error, className, ...props }, ref) => {
    const { isMobile, isTablet } = useBreakpoint();

    const baseStyles =
      "rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400";

    const getResponsiveSize = () => {
      if (variant === "nickname") {
        return isMobile
          ? "w-[15.5rem] h-[3.25rem]"
          : isTablet
            ? "w-[15.5rem] h-[3.5rem]"
            : "w-[15.5rem] h-[3.75rem]";
      }
      if (variant === "title") {
        return isMobile
          ? "w-[15.5rem] h-[2rem]"
          : isTablet
            ? "w-[15.5rem] h-[2.125rem]"
            : "w-[15.5rem] h-[2.25rem]";
      }
      if (variant === "textarea") {
        return isMobile
          ? "w-[15.5rem] h-[9rem]"
          : isTablet
            ? "w-[15.5rem] h-[9.5rem]"
            : "w-[15.5rem] h-[10.25rem]";
      }
      return "";
    };

    if (variant === "textarea") {
      return (
        <div className="w-full">
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={clsx(
              baseStyles,
              getResponsiveSize(),
              "resize-none",
              className,
            )}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
      );
    }

    return (
      <div className="w-full">
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={clsx(baseStyles, getResponsiveSize(), className)}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
