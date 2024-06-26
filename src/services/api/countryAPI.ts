import type { PreviewAndSearchingResponse } from "@/types";
import axios from "axios";

class CountryAPI {
  public async fetchPreviewAndSearcingData(): Promise<
    PreviewAndSearchingResponse[] | null
  > {
    try {
      // TODO: Create a base axios
      const response = await axios.get<PreviewAndSearchingResponse[]>(
        "https://restcountries.com/v3.1/all?fields=name,flags,independent,unMember,region,subregion,area,population"
      );
      return response.data;
    } catch {
      return null;
    }
  }
}

export const countryAPI = new CountryAPI();
