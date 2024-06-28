import { CountryInformationDTO, CountryPreviewAndSearchingDTO } from "@/dtos";

import { CountryPreviewDTO } from "@/dtos/country/countryPreviewDTO";
import { countryAPI } from "@/services/api/countryAPI";
import { countryInformationMapper } from "@/services/mappers/country/countryInformationMapper";
import { countryPreviewMapper } from "@/services/mappers/country/countryPreviewMapper";
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
    return countryInformationMapper(countryInformation[0]);
  }

  public async getBorderCountries(
    borders: string
  ): Promise<CountryPreviewDTO[] | null> {
    const borderCountries = await countryAPI.fetchCountriesByBorders(borders);
    if (!borderCountries) return null;
    return borderCountries.map(countryPreviewMapper);
  }
}

export const countryRepository = new CountryRepository();
