import { CountryPreviewAndSearchingDTO } from "@/dtos";
import { URLS } from "@/utils";
import { useNavigate } from "react-router";

interface Props {
  countries: CountryPreviewAndSearchingDTO[];
}

export const TableBody = ({ countries }: Props) => {
  const navigate = useNavigate();

  return (
    <tbody>
      {countries.map((country) => (
        <tr
          key={country.name}
          onClick={() =>
            navigate(URLS.information.replace(":country", country.officialName))
          }
          className="text-cc-light border-2 hover:bg-cc-dark hover:cursor-pointer"
        >
          <td className="w-[12%]">
            <img
              className="w-[50px] h-[38px] object-cover rounded-md"
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </td>
          <td className="w-[22%]">{country.name}</td>
          <td className="w-[22%]">{country.population.toLocaleString("en")}</td>
          <td className="hidden sm:table-cell w-[22%]">
            {country.area.toLocaleString("en")}
          </td>
          <td className="hidden xl:table-cell w-[22%]">{country.region}</td>
        </tr>
      ))}
    </tbody>
  );
};
