"use client";

interface ConfirmModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose?: () => void;
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
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="relative w-[19.5rem] h-[13.25rem] bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="w-full h-[2.5rem] bg-primary flex justify-end items-center pr-4 rounded-t-lg">
          <button
            onClick={onClose}
            className="w-8 h-8 text-red text-2xl"
            aria-label="닫기"
          >
            ●
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between px-4 py-5">
          {/* Message */}
          <div className="px-4 py-6 text-center">
            <p className="text-base font-bold">{message}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 px-4">
            <button
              onClick={onClose}
              className="w-[7.75rem] h-[2.25rem] rounded-custom10 bg-gray text-black font-semibold"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className="w-[7.75rem] h-[2.25rem] rounded-custom10 bg-primary text-white font-semibold"
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
