import type { Option, Options } from "@/types";

interface SelectOptions {
  options: Options;
  showOptions: boolean;
  handleSelect: (option: Option) => void;
  selectedOption: Option;
}

export const SelectOptions = ({
  options,
  showOptions,
  handleSelect,
  selectedOption,
}: SelectOptions) => {
  return (
    <>
      {showOptions && (
        <div className="absolute bg-cc-black w-[200px] rounded-lg mt-[1px] text-cc-light border-[3px] border-cc-dark">
          {options.map(({ id, name }) => (
            <div
              className={`p-2 border-t-[3px] border-t-cc-dark first:border-none hover:bg-cc-blue overflow-hidden hover:cursor-pointer first:rounded-t-lg last:rounded-b-lg ${
                selectedOption.id === id ? "bg-cc-blue" : "bg-inherit"
              }`}
              onClick={() => handleSelect({ id, name })}
              key={id}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
