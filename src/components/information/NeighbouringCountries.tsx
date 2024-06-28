import { useEffect, useState } from "react";

import { CountryPreview } from "./CountryPreview";
import { CountryPreviewDTO } from "@/dtos/country/countryPreviewDTO";
import { countryRepository } from "@/repositories/countryRepository";

interface Props {
  borders: string[];
}

export const NeighbouringCountries = ({ borders }: Props) => {
  const [borderCountries, setBorderCountries] = useState<CountryPreviewDTO[]>(
    []
  );

  useEffect(() => {
    countryRepository
      .getBorderCountries(borders.join(","))
      .then((data) => setBorderCountries(data ?? []));
  }, [borders]);

  if (borderCountries.length === 0) return <></>;

  return (
    <>
      <p className="px-5 text-cc-gray mt-5 text-cs-100">
        Neighbouring Countries
      </p>
      <div className="mt-4 mb-10 px-5 flex flex-wrap gap-4">
        {borderCountries.map((country) => (
          <CountryPreview key={country.name} {...country} />
        ))}
      </div>
    </>
  );
};
