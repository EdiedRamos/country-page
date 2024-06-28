import { useEffect, useState } from "react";

import { CountryInformationDTO } from "@/dtos";
import { EmptyItems } from "../shared";
import { InfoDetail } from "./InfoDetail";
import { NeighbouringCountries } from "./NeighbouringCountries";
import { SpecialInfo } from "./SpecialInfo";
import { countryRepository } from "@/repositories/countryRepository";
import { useParams } from "react-router";

export const InformationLayer = () => {
  const [country, setCountry] = useState<CountryInformationDTO | null>(null);

  const params = useParams();

  useEffect(() => {
    const countryName = params.country;
    if (!countryName) return;
    countryRepository
      .getCountryInformation(countryName)
      .then((data) => setCountry(data));
  }, [params]);

  if (!country) return <EmptyItems />;

  return (
    <section className="relative max-w-[720px] top-0 md:-top-16 bg-cc-black border-0 md:border-2 border-cc-dark rounded-xl shadow-xl mx-auto">
      <div className="mx-auto max-w-[260px] h-[196px] -mt-[48px]">
        <img
          src={country.flag}
          className="w-full h-full object-cover rounded-md"
          alt={`${country.name.common} flag`}
        />
      </div>
      <div className="mt-8 text-cc-light text-center">
        <p className="text-3xl font-medium">{country.name.common}</p>
        <p className="mt-2">{country.name.official}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10 text-cc-light">
        <SpecialInfo
          title="Population"
          value={country.population.toLocaleString("en")}
        />
        <SpecialInfo
          title="Area (km²)"
          value={country.area.toLocaleString("en")}
        />
      </div>
      <InfoDetail
        className="mt-10"
        title="Capital"
        value={country.capital.join(", ")}
      />
      <InfoDetail title="Subregion" value={country.subregion} />
      <InfoDetail title="Language" value={country.languages.join(", ")} />
      <InfoDetail title="Currencies" value={country.currencies.join(", ")} />
      <InfoDetail
        className="border-b-2"
        title="Continents"
        value={country.continents.join(", ")}
      />

      <NeighbouringCountries />
    </section>
  );
};
