import { CountryPreviewAndSearchingDTO } from "@/dtos";
import { createSlice } from "@reduxjs/toolkit";
import { fetchCountryPreviewAndSearching } from "./countryThunks";

interface CountrySlice {
  previewAndSearching: CountryPreviewAndSearchingDTO[] | null;
}

const initialState: CountrySlice = {
  previewAndSearching: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCountryPreviewAndSearching.fulfilled,
      (state, action) => {
        state.previewAndSearching = action.payload;
        console.log("async reducer", action.type);
      }
    );
  },
});

export const actions = countrySlice.actions;
export default countrySlice.reducer;
