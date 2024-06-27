import {
  Filters,
  Region,
  SortOptions,
  countryFilter,
  countrySearch,
  countrySort,
  fetchCountryPreviewAndSearching,
  filterRegions,
} from "@/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CountryPreviewAndSearchingDTO } from "@/dtos";

interface CountrySlice {
  previewAndSearching: CountryPreviewAndSearchingDTO[] | null;
  previewFiltered: CountryPreviewAndSearchingDTO[] | null;
  filters: Filters;
}

const initialState: CountrySlice = {
  previewAndSearching: null,
  previewFiltered: null,
  filters: {
    search: "",
    region: [],
    sort: "population",
    status: {
      isIndependent: false,
      isUNMember: false,
    },
  },
};

// * TEMPORARY HERE
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

function applyFilters(
  countries: CountryPreviewAndSearchingDTO[],
  filters: Filters
): CountryPreviewAndSearchingDTO[] {
  const searchedBy = searchBy(countries, filters.search);
  const sortedBy = sortBy(searchedBy, filters.sort);
  const filtered = filterBy(sortedBy, filters.region);
  return filtered;
}
// * END OF TEMPORARY HERE

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      if (!state.previewAndSearching) return;

      state.filters.search = action.payload;
      state.previewFiltered = applyFilters(
        state.previewAndSearching,
        state.filters
      );
    },

    setSortBy(state, action: PayloadAction<SortOptions>) {
      if (!state.previewAndSearching) return;

      state.filters.sort = action.payload;
      state.previewFiltered = applyFilters(
        state.previewAndSearching,
        state.filters
      );
    },

    setRegionsFilter(state, action: PayloadAction<string[]>) {
      if (!state.previewAndSearching) return;

      state.filters.region = filterRegions(action.payload);
      state.previewFiltered = applyFilters(
        state.previewAndSearching,
        state.filters
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCountryPreviewAndSearching.fulfilled,
      (state, action) => {
        state.previewAndSearching = action.payload;
        state.previewFiltered = action.payload
          ? countrySort(action.payload).byPopulation()
          : null;
      }
    );
  },
});

export const countryActions = countrySlice.actions;
export default countrySlice.reducer;
