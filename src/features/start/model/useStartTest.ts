import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNickname } from "./useNickname";

export const useStartTest = () => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { setNickname } = useNickname();
  const router = useRouter();

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setShowModal(true);
      return;
    }

    setNickname(inputValue.trim());
    router.push("/test/play");
  };

  return {
    inputValue,
    setInputValue,
    showModal,
    setShowModal,
    handleSubmit,
  };
};
