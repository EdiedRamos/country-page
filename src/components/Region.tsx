import { REGIONS } from "@/utils";
import { useState } from "react";

export const Region = () => {
  const [regions, setRegions] = useState<typeof REGIONS>(REGIONS);

  const handleSelect = (id: string): void => {
    setRegions((prev) =>
      prev.map((region) =>
        region.id === id
          ? { ...region, isSelected: !region.isSelected }
          : region
      )
    );
  };

  return (
    <div className="">
      <p className="text-cc-gray text-cs-50 font-medium mb-2">Region</p>
      <div className="flex flex-wrap gap-3">
        {regions.map((opt) => (
          <button
            onClick={() => handleSelect(opt.id)}
            className={`py-2 px-3 text-cc-gray hover:bg-cc-dark rounded-xl text-cs-100 ${
              opt.isSelected ? "bg-cc-dark text-cc-light" : ""
            }`}
            key={opt.id}
          >
            {opt.value}
          </button>
        ))}
      </div>
    </div>
  );
};
