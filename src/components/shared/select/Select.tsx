import { ExpandDown } from "@/assets";
import type { Options } from "@/types";
import { SelectOptions } from "@/components";
import { useSelect } from "@/hooks";

interface Select {
  options: Options;
  onSelect?: (selected: string) => void;
}

export const Select = ({ options, onSelect }: Select) => {
  const select = useSelect({ options, onSelect });
  const { selectRef, handleShowOptions, selectedOption, showOptions } = select;

  return (
    <div className="relative w-full select-none" ref={selectRef}>
      <div
        className="flex justify-between items-center hover:cursor-pointer hover:opacity-80 text-cc-light border-[3px] p-2 rounded-lg border-cc-dark"
        onClick={handleShowOptions}
      >
        <p className="text-cs-100">{selectedOption.name} </p>
        <ExpandDown className={showOptions ? "rotate-180" : ""} />
      </div>
      <SelectOptions {...select} />
    </div>
  );
};
