"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

type StyleType = "spotify" | "image" | "kakao" | "insta" | "twitter" | "link";
type ActionType = "save" | "share";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: StyleType;
  actionType: ActionType;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const baseStyles = "rounded-full transition-all";
const sharedGray = "bg-gray";

const styleVariants: Record<StyleType, string> = {
  spotify: "bg-primary",
  image: sharedGray,
  kakao: "bg-kakao",
  insta: "bg-gradient-action",
  twitter: "bg-black",
  link: sharedGray,
};

const ActionButton = ({
  styleType,
  actionType,
  isLoading = false,
  icon,
  className,
  children,
  ...props
}: ActionButtonProps) => {
  const { isMobile, isTablet } = useBreakpoint();

  const sizeClass = isMobile
  ? "w-[3.25rem] h-[3.25rem]"
  : isTablet
    ? "w-[3.75rem] h-[3.75rem]"
    : "w-[4.25rem] h-[4.25rem]";


  return (
    <button
      className={clsx(
        baseStyles,
        sizeClass,
        styleVariants[styleType],
        isLoading && "opacity-50 cursor-not-allowed",
        className,
      )}
      aria-label={`${actionType} playlist`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin">⏳</span>
      ) : icon ? (
        icon
      ) : (
        children
      )}
    </button>
  );
};

// icon 사용 시 코드 예시
{
  /* <ActionButton
  actionType="save"
  styleType="primary"
  icon={<SaveIcon />}
  onClick={handleSave}
/> */
}

export default ActionButton;
