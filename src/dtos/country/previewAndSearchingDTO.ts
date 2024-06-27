export interface CountryPreviewAndSearchingDTO {
  name: string;
  isIndependent: boolean;
  isUNMember: boolean;
  region: string;
  subregion: string;
  area: number;
  population: number;
  flag: string;
}

export function CountryPreviewAndSearchingDTO(
  name: string,
  isIndependent: boolean,
  isUNMember: boolean,
  region: string,
  subregion: string,
  area: number,
  population: number,
  flag: string
): CountryPreviewAndSearchingDTO {
  return {
    name,
    isIndependent,
    isUNMember,
    region,
    subregion,
    area,
    population,
    flag,
  };
}
