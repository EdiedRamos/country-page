import { SELECT_OPTIONS } from "@/utils";
import { Select } from "./Select";

export const SortBy = () => {
  return (
    <div>
      <p className="text-cc-gray text-cs-50 font-medium">Sort by</p>
      <Select options={SELECT_OPTIONS} />
    </div>
  );
};