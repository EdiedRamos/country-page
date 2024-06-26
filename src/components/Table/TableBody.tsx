import { useAppSelector } from "@/store";

export const TableBody = () => {
  const preview = useAppSelector(
    (store) => store.countryReducer.previewFiltered
  );

  return (
    <tbody>
      {preview?.map((info, index) => (
        <tr key={index} className="text-cc-light text-center">
          <td>
            <img
              className="w-[50px] h-[38px] object-cover rounded-md mx-auto"
              src={info.flag}
              alt={`${info.name} flag`}
            />
          </td>
          <td>{info.name}</td>
          <td>{info.population}</td>
          <td className="hidden sm:table-cell">{info.area}</td>
          <td className="hidden xl:table-cell">{info.region}</td>
        </tr>
      ))}
    </tbody>
  );
};
