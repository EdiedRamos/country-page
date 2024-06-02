import { REGIONS } from "@/utils";

export const Region = () => {
  return (
    <div className="">
      <p className="text-cc-gray text-cs-50 font-medium mb-2">Region</p>
      <div className="flex flex-wrap gap-3">
        {REGIONS.map((opt) => (
          <button
            className={`p-3 text-cc-gray hover:bg-cc-dark rounded-xl ${
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
