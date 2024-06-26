export type SortOptions = "area" | "name" | "population";

export function isSortOption(option: string): option is SortOptions {
  const validOptions = ["area", "name", "population"];
  return validOptions.includes(option);
}
