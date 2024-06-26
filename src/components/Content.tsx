import { Search } from "@/components";
import { useAppSelector } from "@/store";

export const Content = () => {
  const numberOfCountries = useAppSelector(
    (store) => store.countryReducer.previewFiltered?.length ?? 0
  );
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 flex-wrap  items-center justify-center md:justify-between">
        <p className="text-cc-gray font-medium text-cs-200">
          Found {numberOfCountries} countries
        </p>
        <Search />
      </div>
    </div>
  );
};
