import {
  Filters,
  SortOptions,
  applyFilters,
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
