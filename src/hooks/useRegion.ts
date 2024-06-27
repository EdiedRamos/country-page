import { countryActions, useAppDispatch } from "@/store";
import { useEffect, useState } from "react";

import { REGIONS } from "@/utils";

export const useRegion = () => {
  const [regions, setRegions] = useState<typeof REGIONS>(REGIONS);

  const dispatch = useAppDispatch();

  const handleSelect = (id: string): void => {
    setRegions((prev) =>
      prev.map((region) =>
        region.id === id
          ? { ...region, isSelected: !region.isSelected }
          : region
      )
    );
  };

  useEffect(() => {
    const filterRegions = regions
      .filter((region) => region.isSelected)
      .map((region) => region.value);
    dispatch(countryActions.setRegionsFilter(filterRegions));
  }, [regions, dispatch]);

  return {
    regions,
    handleSelect,
  };
};
