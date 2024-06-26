import { countryRepository } from "@/repositories/countryRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountryPreviewAndSearching = createAsyncThunk(
  "country/fetchCountryPreviewAndSearching",
  async () => {
    return await countryRepository.getPreviewAndSearcingData();
  }
);
