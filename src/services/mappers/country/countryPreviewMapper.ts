import { CountryPreviewDTO } from "@/dtos/country/countryPreviewDTO";
import { CountryPreviewResponse } from "@/types";

export function countryPreviewMapper(
  data: CountryPreviewResponse
): CountryPreviewDTO {
  return {
    name: data.name.common,
    officialName: data.name.official,
    flag: data.flags.svg,
  };
}
