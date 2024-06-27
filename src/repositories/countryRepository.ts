import { CountryPreviewAndSearchingDTO } from "@/dtos";
import { countryAPI } from "@/services/api/countryAPI";
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
}

export const countryRepository = new CountryRepository();
