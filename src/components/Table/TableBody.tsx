import { useAppSelector } from "@/store";

export const TableBody = () => {
  const preview = useAppSelector(
    (store) => store.countryReducer.previewFiltered
  );

  return (
    <tbody>
      {preview?.map((info) => (
        <tr key={info.name} className="text-cc-light">
          <td className="w-[12%]">
            <img
              className="w-[50px] h-[38px] object-cover rounded-md"
              src={info.flag}
              alt={`${info.name} flag`}
            />
          </td>
          <td className="w-[22%]">{info.name}</td>
          <td className="w-[22%]">{info.population.toLocaleString("en")}</td>
          <td className="hidden sm:table-cell w-[22%]">
            {info.area.toLocaleString("en")}
          </td>
          <td className="hidden xl:table-cell w-[22%]">{info.region}</td>
        </tr>
      ))}
    </tbody>
  );
};
