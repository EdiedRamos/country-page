import type { CountryInformation, PreviewAndSearchingResponse } from "@/types";

import { axiosInstance } from "@/utils";

class CountryAPI {
  public async fetchPreviewAndSearcingData(): Promise<
    PreviewAndSearchingResponse[] | null
  > {
    try {
      const response = await axiosInstance.get<PreviewAndSearchingResponse[]>(
        "all?fields=name,flags,independent,unMember,region,subregion,area,population"
      );
      return response.data;
    } catch {
      return null;
    }
  }

  public async fetchCountryByName(
    name: string
  ): Promise<CountryInformation | null> {
    try {
      const response = await axiosInstance.get<CountryInformation>(
        `name/${name}?fields=name,flags,subregion,area,population,languages,currencies,continents,borders,capital`
      );
      return response.data;
    } catch {
      return null;
    }
  }
}

export const countryAPI = new CountryAPI();
