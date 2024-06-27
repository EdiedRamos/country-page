import {
  CountryPreviewAndSearchingDTO,
  createCountryPreviewAndSearchingDTO,
} from "@/dtos";
import { type PreviewAndSearchingResponse } from "@/types";

export const previewAndSearchingMapper = (
  data: PreviewAndSearchingResponse
): CountryPreviewAndSearchingDTO => {
  return createCountryPreviewAndSearchingDTO(
    data.name.common,
    data.independent,
    data.unMember,
    data.region,
    data.subregion,
    data.area,
    data.population,
    data.flags.png
  );
};
