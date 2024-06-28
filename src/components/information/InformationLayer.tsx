import { InfoDetail } from "./InfoDetail";
import { NeighbouringCountries } from "./NeighbouringCountries";
import { SpecialInfo } from "./SpecialInfo";

export const InformationLayer = () => {
  return (
    <section className="relative max-w-[720px] top-0 md:-top-16 bg-cc-black border-0 md:border-2 border-cc-dark rounded-xl shadow-xl mx-auto">
      <div className="mx-auto max-w-[260px] h-[196px] -mt-[48px]">
        <img
          src="https://flagcdn.com/co.svg"
          className="w-full h-full object-cover rounded-md"
          alt="flag"
        />
      </div>
      <div className="mt-8 text-cc-light text-center">
        <p className="text-3xl font-medium">India</p>
        <p className="mt-2">Republic of India</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10 text-cc-light">
        <SpecialInfo title="Population" value="1,380,004,385" />
        <SpecialInfo title="Area (km²)" value="2,973,190" />
      </div>
      <InfoDetail className="mt-10" title="Capital" value="New Delhi" />
      <InfoDetail title="Subregion" value="Southern Asia" />
      <InfoDetail title="Language" value="English, Hindi, Tamil" />
      <InfoDetail title="Currencies" value="Indian rupee" />
      <InfoDetail className="border-b-2" title="Continents" value="Asia" />
      <NeighbouringCountries />
    </section>
  );
};
