import type { CountryInformation } from "@/types";
import type { CountryInformationDTO } from "@/dtos";

export const countryInformationMapper = (
  data: CountryInformation
): CountryInformationDTO => {
  const currencies: string[] = Object.entries(data.currencies).map(
    (info) => info[1].name
  );
  const languages: string[] = Object.entries(data.languages).map(
    (info) => info[1]
  );

  return {
    name: data.name,
    subregion: data.subregion,
    continents: data.continents,
    area: data.area,
    borders: data.borders,
    capital: data.capital,
    currencies,
    population: data.population,
    flag: data.flags.svg,
    languages,
  };
};
