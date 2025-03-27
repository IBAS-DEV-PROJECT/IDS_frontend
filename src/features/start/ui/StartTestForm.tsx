"use client";

// ui
import CharacterImage from "@/entities/character/ui/CharacterImage";
import { Input } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { Modal } from "@/shared/ui";

// model
import { useStartTest } from "../model/useStartTest";

const StartTestForm = () => {
  const { inputValue, setInputValue, showModal, setShowModal, handleSubmit } =
    useStartTest();

  return (
    <>
      {showModal && (
        <Modal
          type="alert"
          message="이름 혹은 닉네임을 입력해 주세요."
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="flex flex-col justify-between items-center gap-6 h-full">
        <CharacterImage src="/images/landing_character.png" />

        <div className="flex flex-col justify-between items-start h-[25vh] pt-5">
          <div>
            <Input
              placeholder="이름 혹은 닉네임을 입력해 주세요."
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <p className="text-[8px] text-gray-400 text-left mt-3 pl-2">
              이름과 닉네임은 결과 제공을 위해서만 사용됩니다. <br />
              입력된 정보는 저장되지 않으니 안심하고 입력해 주세요!
            </p>
          </div>

          <Button onClick={handleSubmit}>시작하기</Button>
        </div>
      </div>
    </>
  );
};

export default StartTestForm;
