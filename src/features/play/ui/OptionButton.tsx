"use client";

// ui
import { Button } from "@/shared/ui";

type Props = {
  options: string[];
  onSelect: (value: string) => void;
};

const OptionButton = ({ options, onSelect }: Props) => {
  return (
    <div className="flex flex-col gap-4 px-4">
      {options.map((option, index) => (
        <Button
          key={index}
          variant="option"
          onClick={() => onSelect(option)}
          className="p-1"
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default OptionButton;
