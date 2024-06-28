import { CountryInformationDTO, CountryPreviewAndSearchingDTO } from "@/dtos";

import { countryAPI } from "@/services/api/countryAPI";
import { countryInformationMapper } from "@/services/mappers/country/countryInformationMapper";
import { previewAndSearchingMapper } from "@/services/mappers";

class CountryRepository {
  public async getPreviewAndSearcingData(): Promise<
    CountryPreviewAndSearchingDTO[] | null
  > {
    const previewAndSearchingResponse =
      await countryAPI.fetchPreviewAndSearcingData();
    if (!previewAndSearchingResponse) return null;
    return previewAndSearchingResponse.map((previewAndSearching) =>
      previewAndSearchingMapper(previewAndSearching)
    );
  }

  public async getCountryInformation(
    countryName: string
  ): Promise<CountryInformationDTO | null> {
    const countryInformation = await countryAPI.fetchCountryByName(countryName);
    if (!countryInformation) return null;
    return countryInformationMapper(countryInformation);
  }
}

export const countryRepository = new CountryRepository();
