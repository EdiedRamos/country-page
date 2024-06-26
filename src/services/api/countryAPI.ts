import type { PreviewAndSearchingResponse } from "@/types";
import { axiosInstance } from "@/utils";

class CountryAPI {
  public async fetchPreviewAndSearcingData(): Promise<
    PreviewAndSearchingResponse[] | null
  > {
    try {
      const response = await axiosInstance.get<PreviewAndSearchingResponse[]>(
        "https://restcountries.com/v3.1/all?fields=name,flags,independent,unMember,region,subregion,area,population"
      );
      return response.data;
    } catch {
      return null;
    }
  }
}

export const countryAPI = new CountryAPI();
