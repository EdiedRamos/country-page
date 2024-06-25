export interface Country {
  name: string;
  independent: boolean;
  unMember: boolean;
  currencies: string[];
  capital: string[];
  region: string;
  subregion: string;
  languages: string[];
  area: number;
  population: number;
  continents: string[];
  borders: string[];
}

// preview and searching

export interface CountryPreviewAndSearching {
  name: string;
  independent: boolean;
  unMember: boolean;
  region: string;
  subregion: string;
  area: number;
  population: number;
  flag: string;
}

// all info

// export interface Country {
//   name: string;
//   officialName: string;
//   currencies: string[];
//   capital: string[];
//   region: string;
//   subregion: string;
//   languages: string[];
//   area: number;
//   population: number;
//   continents: string[];
//   borders: string[];
// }
