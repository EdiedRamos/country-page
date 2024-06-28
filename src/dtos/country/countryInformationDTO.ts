export interface CountryInformationDTO {
  name: string;
  capital: string;
  flag: string;
  currencies: string[];
  subregion: string;
  languages: string[];
  borders: string[];
  area: number;
  population: number;
  continents: string[];
}

export function createCountryInformationDTO(
  name: string,
  capital: string,
  flag: string,
  currencies: string[],
  subregion: string,
  languages: string[],
  borders: string[],
  area: number,
  population: number,
  continents: string[]
): CountryInformationDTO {
  return {
    name,
    capital,
    flag,
    currencies,
    subregion,
    languages,
    borders,
    area,
    population,
    continents,
  };
}
