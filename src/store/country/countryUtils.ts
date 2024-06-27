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

export function filterRegions(regions: string[]): Region[] | null {
  const validRegions = regions.filter(isRegion);
  if (validRegions.length === 0) return null;
  return validRegions;
}
