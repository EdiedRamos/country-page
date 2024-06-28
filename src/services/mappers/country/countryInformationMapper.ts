import type { CountryInformationDTO } from "@/dtos";
import type { CountryInformationResponse } from "@/types";

export const countryInformationMapper = (
  data: CountryInformationResponse
): CountryInformationDTO => {
  const currencies = Object.entries(data.currencies).map(
    (info) => info[1].name
  );
  const languages = Object.entries(data.languages).map((info) => info[1]);

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
