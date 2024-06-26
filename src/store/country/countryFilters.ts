import { CountryPreviewAndSearchingDTO } from "@/dtos";

export const countrySearch = (target: string) => ({
  byName: (country: CountryPreviewAndSearchingDTO) =>
    country.name.toLowerCase().includes(target.toLowerCase()),

  byRegion: (country: CountryPreviewAndSearchingDTO) =>
    country.region.toLowerCase().includes(target.toLowerCase()),

  bySubregion: (country: CountryPreviewAndSearchingDTO) =>
    country.subregion.toLowerCase().includes(target.toLowerCase()),
});
