export interface StatusFilter {
  isUNMember: boolean;
  isIndependent: boolean;
}

export interface Filters {
  search: string;
  sort: SortOptions;
  region: Region[];
  status: StatusFilter;
}

export type SortOptions = "area" | "name" | "population";
export type Region =
  | "americas"
  | "antarctic"
  | "africa"
  | "asia"
  | "europe"
  | "oceania";

export function isSortOption(option: string): option is SortOptions {
  const validOptions = ["area", "name", "population"];
  return validOptions.includes(option);
}

export function isRegion(value: string): value is Region {
  const validRegions = [
    "americas",
    "antarctic",
    "africa",
    "asia",
    "europe",
    "oceania",
  ];
  return validRegions.includes(value.toLowerCase());
}

export function filterRegions(regions: string[]): Region[] {
  const validRegions = regions
    .map((value) => value.toLowerCase())
    .filter(isRegion);
  return validRegions;
}
