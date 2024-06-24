interface Flags {
  png: string;
  svg: string;
}

interface Languages {
  fra: string;
}

interface Currencies {
  XPF: XPF;
}

interface XPF {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
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
  borders?: string[];
}
