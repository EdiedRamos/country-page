import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
});

export const actions = countrySlice.actions;
export default countrySlice.reducer;
