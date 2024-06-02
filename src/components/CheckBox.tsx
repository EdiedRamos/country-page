import { DoneRound } from "@/assets";
import { useState } from "react";

interface CheckBox {
  text: string;
  onChecked?: () => void;
  onUnchecked?: () => void;
}

export const CheckBox = ({ text, onChecked, onUnchecked }: CheckBox) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleActive = () => {
    setIsChecked((prev) => {
      if (prev) {
        onUnchecked && onUnchecked();
      } else {
        onChecked && onChecked();
      }
      return !prev;
    });
  };

  return (
    <div className="flex items-center flex-wrap gap-2 select-none">
      <div
        className={`flex justify-center items-center w-[30px] h-[30px] border-2 rounded-md hover:cursor-pointer ${
          isChecked ? "bg-cc-blue border-cc-blue" : "border-cc-gray"
        }`}
        onClick={handleActive}
      >
        {isChecked && <DoneRound />}
      </div>
      <p className="text-cc-light text-cs-100">{text}</p>
    </div>
  );
};
