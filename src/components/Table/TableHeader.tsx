interface HeaderItem {
  value: string;
  classname?: string;
}

const Headers: HeaderItem[] = [
  { value: "Flag" },
  { value: "Name" },
  { value: "Population" },
  { value: "Area(km²)", classname: "hidden sm:table-cell" },
  { value: "Region", classname: "hidden xl:table-cell" },
];

export const TableHeader = () => {
  return (
    <thead className="text-cc-gray">
      <tr>
        {Headers.map(({ value, classname }, index) => (
          <th
            key={index}
            className={`border-b-2 border-cc-dark pb-3 text-cs-50 text-left ${
              classname ?? ""
            }`}
          >
            {value}
          </th>
        ))}
      </tr>
    </thead>
  );
};
