import { SELECT_OPTIONS } from "@/utils";
import { Select } from "./Select/Select";

export const SortBy = () => {
  return (
    <div>
      <p className="text-cc-gray text-cs-50 font-medium mb-2">Sort by</p>
      <Select options={SELECT_OPTIONS} />
    </div>
  );
};
