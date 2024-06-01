const Countries = [
  {
    flag: "https://flagcdn.com/w80/cn.png",
    name: "China",
    population: "1,402,112,000",
    area: "9,706,961",
    region: "Asia",
  },
  {
    flag: "https://flagcdn.com/w80/in.png",
    name: "India",
    population: "1,439,323,776",
    area: "3,287,590",
    region: "Asia",
  },
  {
    flag: "https://flagcdn.com/w80/us.png",
    name: "United States",
    population: "329,484,123",
    area: "9,372,610",
    region: "Americas",
  },
];

export const TableBody = () => {
  return (
    <tbody>
      {Countries.map((info, index) => (
        <tr key={index} className="text-cc-light">
          <td>
            <img
              className="w-[50px] h-[38px] object-cover rounded-md"
              src={info.flag}
              alt={`${info.name} flag`}
            />
          </td>
          <td>{info.name}</td>
          <td>{info.population}</td>
          <td>{info.area}</td>
          <td className="invisible md:visible">{info.region}</td>
        </tr>
      ))}
    </tbody>
  );
};
