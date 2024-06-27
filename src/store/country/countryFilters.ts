import {
  Filters,
  Region,
  SortOptions,
  StatusFilter,
  filterRegions,
  isRegion,
} from "./countryUtils";

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
  byStatus: (status: StatusFilter) => {
    return countries.filter((country) => {
      if (status.isUNMember && country.isUNMember) return true;
      if (status.isIndependent && country.isIndependent) return true;
      return false;
    });
  },
});

function searchBy(
  countries: CountryPreviewAndSearchingDTO[],
  searchTarget: string
): CountryPreviewAndSearchingDTO[] {
  const target = searchTarget.toLowerCase();

  const isInvalidTarget = target.trim().length === 0;

  if (isInvalidTarget) {
    return countries;
  }

  const search = countrySearch(target);

  const filtered = countries.filter(
    (country) =>
      search.byName(country) ||
      search.byRegion(country) ||
      search.bySubregion(country)
  );

  return filtered;
}

function sortBy(
  countries: CountryPreviewAndSearchingDTO[],
  option: SortOptions
): CountryPreviewAndSearchingDTO[] {
  switch (option) {
    case "area": {
      const sorted = countrySort(countries).byArea();
      return sorted;
    }
    case "name": {
      const sorted = countrySort(countries).byName();
      return sorted;
    }
    case "population": {
      const sorted = countrySort(countries).byPopulation();
      return sorted;
    }
  }
}

function filterBy(
  countries: CountryPreviewAndSearchingDTO[],
  regions: Region[]
): CountryPreviewAndSearchingDTO[] {
  return countryFilter(countries).byRegions(regions);
}

function statusFilter(
  countries: CountryPreviewAndSearchingDTO[],
  status: StatusFilter
): CountryPreviewAndSearchingDTO[] {
  if (!status.isIndependent && !status.isUNMember) return countries;
  return countryFilter(countries).byStatus(status);
}

export function applyFilters(
  countries: CountryPreviewAndSearchingDTO[],
  filters: Filters
): CountryPreviewAndSearchingDTO[] {
  const searchedBy = searchBy(countries, filters.search);
  const sortedBy = sortBy(searchedBy, filters.sort);
  const filtered = filterBy(sortedBy, filters.region);
  const status = statusFilter(filtered, filters.status);
  return status;
}
