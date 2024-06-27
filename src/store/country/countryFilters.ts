import { filterRegions, isRegion } from "./countryUtils";

import { CountryPreviewAndSearchingDTO } from "@/dtos";

export const countrySearch = (target: string) => ({
  byName: (country: CountryPreviewAndSearchingDTO) =>
    country.name.toLowerCase().includes(target.toLowerCase()),

  byRegion: (country: CountryPreviewAndSearchingDTO) =>
    country.region.toLowerCase().includes(target.toLowerCase()),

  bySubregion: (country: CountryPreviewAndSearchingDTO) =>
    country.subregion.toLowerCase().includes(target.toLowerCase()),
});

type Order = "asc" | "desc";

export const countrySort = (countries: CountryPreviewAndSearchingDTO[]) => ({
  byArea: (order: Order = "desc") =>
    countries.sort((countryA, countryB) =>
      order === "asc"
        ? countryA.area - countryB.area
        : countryB.area - countryA.area
    ),

  byName: (order: Order = "asc") =>
    countries.sort((countryA, countryB) =>
      order === "asc"
        ? countryA.name < countryB.name
          ? -1
          : 1
        : countryA.name < countryB.name
        ? 1
        : -1
    ),

  byPopulation: (order: Order = "desc") =>
    countries.sort((countryA, countryB) =>
      order === "asc"
        ? countryA.population - countryB.population
        : countryB.population - countryA.population
    ),
});

export const countryFilter = (countries: CountryPreviewAndSearchingDTO[]) => ({
  byRegions: (regions: string[]) => {
    const validRegions = filterRegions(regions);
    if (validRegions.length === 0) return countries;
    return countries.filter((country) => {
      if (!isRegion(country.region)) return false;
      return regions.includes(country.region.toLowerCase());
    });
  },
});
