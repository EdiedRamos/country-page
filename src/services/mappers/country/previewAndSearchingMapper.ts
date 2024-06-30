import { CountryPreviewAndSearchingDTO } from "@/dtos";
import { type PreviewAndSearchingResponse } from "@/types";

export const previewAndSearchingMapper = (
  data: PreviewAndSearchingResponse
): CountryPreviewAndSearchingDTO => {
  return {
    name: data.name.common,
    officialName: data.name.official,
    isIndependent: data.independent,
    isUNMember: data.unMember,
    region: data.region,
    subregion: data.subregion,
    area: data.area,
    population: data.population,
    flag: data.flags.png,
  };
};
