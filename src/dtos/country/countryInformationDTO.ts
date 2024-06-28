interface Name {
  common: string;
  official: string;
}

export interface CountryInformationDTO {
  name: Name;
  capital: string[];
  flag: string;
  currencies: string[];
  subregion: string;
  languages: string[];
  borders: string[];
  area: number;
  population: number;
  continents: string[];
}
