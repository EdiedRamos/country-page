import { ChangeEvent, useEffect, useState } from "react";
import { countryActions, useAppDispatch } from "@/store";

import { SearchIcon } from "@/assets";

export const Search = () => {
  const [searchTarget, setSearchTarget] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSearchTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTarget(event.target.value);
  };

  useEffect(() => {
    const debounceId = setTimeout(() => {
      console.log("✔️", searchTarget);
      dispatch(countryActions.searchBy(searchTarget));
    }, 500);

    return () => clearTimeout(debounceId);
  }, [searchTarget, dispatch]);

  return (
    <div className="relative">
      <img
        className="absolute left-2 top-[50%] translate-y-[-50%]"
        src={SearchIcon}
      />
      <input
        className="w-full sm:w-[320px] text-cs-100 text-cc-gray placeholder:text-cc-gray p-3 pl-10 rounded-xl bg-cc-dark outline-none focus:ring focus:ring-cc-blue"
        type="text"
        placeholder="Search by Name, Region, Subregion"
        value={searchTarget}
        onChange={handleSearchTargetChange}
      />
    </div>
  );
};
