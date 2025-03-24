"use client";

import clsx from "clsx";
import { useBreakpoint } from "@/shared/hooks/useBreakpoint";

interface ConfirmModalProps {
  message: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal = ({
  message,
  onConfirm,
  onCancel,
  onClose,
  confirmText = "예",
  cancelText = "아니오",
}: ConfirmModalProps) => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const modalSizeClass = isMobile
    ? "w-[18rem] h-[12rem]"
    : isTablet
      ? "w-[20rem] h-[13.5rem]"
      : "w-[24rem] h-[14rem]";

  const messageTextClass = isMobile
    ? "text-sm"
    : isTablet
      ? "text-base"
      : "text-lg";

  const buttonSizeClass = isMobile
    ? "w-[6.5rem] h-[2rem] text-sm"
    : isTablet
      ? "w-[7.5rem] h-[2.25rem] text-base"
      : "w-[8rem] h-[2.5rem] text-base";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className={clsx(
          "relative bg-white rounded-lg shadow-lg",
          modalSizeClass,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="w-full h-[2.5rem] bg-primary flex justify-end items-center pr-4 rounded-t-lg">
          <button
            onClick={onClose}
            className="w-6 h-6 text-red text-xl"
            aria-label="닫기"
          >
            ●
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between px-4 py-4">
          {/* Message */}
          <div className="text-center">
            <p className={clsx("font-bold", messageTextClass)}>{message}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={onCancel}
              className={clsx(
                "rounded-custom10 bg-gray text-black font-semibold",
                buttonSizeClass,
              )}
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className={clsx(
                "rounded-custom10 bg-primary text-white font-semibold",
                buttonSizeClass,
              )}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

// const [open, setOpen] = useState(false);

//   const handleConfirm = () => {
//     // 상태 변경 처리
//     setOpen(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

// const status = "해결";
// message={`이 문의를 "${status}" 상태로 변경하시겠습니까?`}
