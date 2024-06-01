const Headers = ["Flag", "Name", "Population", "Area(km²)", "Region"];

export const TableHeader = () => {
  return (
    <thead className="text-cc-gray">
      {Headers.map((content, index) => (
        <td key={index}>{content}</td>
      ))}
    </thead>
  );
};
