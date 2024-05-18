const MOCK = [
  { id: "1", value: "Americas", isSelected: true },
  { id: "2", value: "Antarctic", isSelected: false },
  { id: "3", value: "Africa", isSelected: true },
  { id: "4", value: "Asia", isSelected: true },
  { id: "5", value: "Europe", isSelected: true },
  { id: "6", value: "Oceania", isSelected: false },
];

export const Region = () => {
  return (
    <div className="w-[300px]">
      <p className="text-cc-gray text-cs-50 font-medium">Region</p>
      <div className="flex flex-wrap gap-3">
        {MOCK.map((opt) => (
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
