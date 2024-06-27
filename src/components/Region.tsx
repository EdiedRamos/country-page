import { useRegion } from "@/hooks";

export const Region = () => {
  const { regions, handleSelect } = useRegion();

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
