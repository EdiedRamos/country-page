import { CountryPreview } from "./CountryPreview";

export const NeighbouringCountries = () => {
  return (
    <>
      <p className="px-5 text-cc-gray mt-5 text-cs-100">
        Neighbouring Countries
      </p>
      <div className="mt-4 mb-10 px-5 flex flex-wrap gap-4">
        <CountryPreview />
        <CountryPreview />
        <CountryPreview />
        <CountryPreview />
      </div>
    </>
  );
};
