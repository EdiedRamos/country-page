interface Flags {
  png: string;
  svg: string;
}

interface Languages {
  [key: string]: string;
}

interface Currencies {
  [key: string]: XPF;
}

interface XPF {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
}

export interface CountryResponse {
  name: Name;
  independent: boolean;
  unMember: boolean;
  currencies: Currencies;
  cca3: string;
  capital: string[];
  region: string;
  subregion: string;
  languages: Languages;
  area: number;
  population: number;
  continents: string[];
  flags: Flags;
  borders: string[];
}

export interface PreviewAndSearchingResponse {
  name: Name;
  independent: boolean;
  unMember: boolean;
  region: string;
  subregion: string;
  area: number;
  population: number;
  flags: Flags;
}
