import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SortOptions,
  countrySearch,
  countrySort,
  fetchCountryPreviewAndSearching,
} from "@/store";

import { CountryPreviewAndSearchingDTO } from "@/dtos";

interface CountrySlice {
  previewAndSearching: CountryPreviewAndSearchingDTO[] | null;
  previewFiltered: CountryPreviewAndSearchingDTO[] | null;
}

const initialState: CountrySlice = {
  previewAndSearching: null,
  previewFiltered: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    searchBy(state, action: PayloadAction<string>) {
      if (!state.previewAndSearching) {
        return;
      }

      const target = action.payload.toLowerCase();

      const isInvalidTarget = target.length > 0 && target.trim().length === 0;

      if (isInvalidTarget) {
        return;
      }

      const search = countrySearch(target);

      const filtered = state.previewAndSearching.filter(
        (country) =>
          search.byName(country) ||
          search.byRegion(country) ||
          search.bySubregion(country)
      );

      state.previewFiltered = filtered.length > 0 ? filtered : null;
    },
    orderBy(state, action: PayloadAction<SortOptions>) {
      if (!state.previewFiltered) return;

      switch (action.payload) {
        case "area": {
          const sorted = countrySort(state.previewFiltered).byArea();
          state.previewFiltered = sorted;
          break;
        }
        case "name": {
          const sorted = countrySort(state.previewFiltered).byName();
          state.previewFiltered = sorted;
          break;
        }
        case "population": {
          const sorted = countrySort(state.previewFiltered).byPopulation();
          state.previewFiltered = sorted;
          break;
        }
      }
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
