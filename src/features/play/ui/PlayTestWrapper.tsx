"use client";

// ui
import CharacterImage from "@/entities/character/ui/CharacterImage";
import OptionButton from "./OptionButton";
import { ProgressIndicator } from "@/shared/ui";
import { usePlayTest } from "../model/usePlayTest";

const PlayTestWrapper = () => {
  const {
    isLoading,
    error,
    currentQuestion,
    currentStep,
    total,
    handleSelect,
    prevStep,
    nextStep,
  } = usePlayTest();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div className="flex flex-col justify-between items-center gap-7 h-full pt-5">
      <div className="flex justify-center w-auto h-16 text-center">
        <h1 className="text-2xl font-semibold">{currentQuestion?.text}</h1>
      </div>

      <CharacterImage
        src="/images/landing_character.png"
        className="w-[12rem] h-[15.5rem]"
      />

      <OptionButton
        options={currentQuestion?.options.map((option) => option.label) || []}
        onSelect={(value) =>
          handleSelect(value === currentQuestion?.options[0]?.label ? 0 : 1)
        }
      />

      <ProgressIndicator
        current={currentStep + 1}
        total={total}
        onPrev={prevStep}
        onNext={nextStep}
      />
    </div>
  );
};

export default PlayTestWrapper;
