import { useEffect, useReducer, useRef, useState } from "react";

import { ExpandDown } from "@/assets";

interface Option {
  id: string;
  name: string;
}

const options: Option[] = [
  { id: "1", name: "Area" },
  { id: "2", name: "Name" },
  { id: "3", name: "Population" },
];

export const Select = () => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);

    return () => document.removeEventListener("mousedown", handleOutside);
  });

  return (
    <div className="relative max-w-[200px] select-none" ref={selectRef}>
      <div
        className="flex justify-between items-center hover:cursor-pointer hover:opacity-80 text-cc-light border-[3px] p-2 rounded-lg border-cc-dark"
        onClick={handleShowOptions}
      >
        <p>{selectedOption.name} </p>
        <ExpandDown className={showOptions ? "rotate-180" : ""} />
      </div>
      {showOptions && (
        <div className="absolute bg-cc-black w-[200px] rounded-lg mt-1 text-cc-light border-[3px] border-cc-dark">
          {options.map(({ id, name }) => (
            <div
              className="p-2 border-t-[3px] border-t-cc-dark first:border-none hover:bg-cc-blue overflow-hidden hover:cursor-pointer first:rounded-t-lg last:rounded-b-lg"
              onClick={() => handleSelect({ id, name })}
              key={id}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
