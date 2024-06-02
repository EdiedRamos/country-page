interface HeaderItem {
  value: string;
  classname?: string;
}

const Headers: HeaderItem[] = [
  { value: "Flag" },
  { value: "Name" },
  { value: "Population" },
  { value: "Area(km²)" },
  { value: "Region", classname: "invisible xl:visible" },
];

export const TableHeader = () => {
  return (
    <thead className="text-cc-gray">
      {Headers.map(({ value, classname }, index) => (
        <td
          key={index}
          className={`border-b-2 border-cc-dark pb-3 text-cs-50 ${
            classname ?? ""
          }`}
        >
          {value}
        </td>
      ))}
    </thead>
  );
};
