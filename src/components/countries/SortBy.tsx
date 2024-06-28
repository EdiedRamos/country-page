import { countryActions, isSortOption, useAppDispatch } from "@/store";

import { SELECT_OPTIONS } from "@/utils";
import { Select } from "@/components";

export const SortBy = () => {
  const dispatch = useAppDispatch();

  const onSelect = (value: string): void => {
    value = value.toLowerCase();
    if (isSortOption(value)) {
      dispatch(countryActions.setSortBy(value));
    }
  };

  return (
    <div>
      <p className="text-cc-gray text-cs-50 font-medium mb-2">Sort by</p>
      <Select options={SELECT_OPTIONS} onSelect={onSelect} />
    </div>
  );
};
