import { Search } from "@/components";

export const Content = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 flex-wrap  items-center justify-center md:justify-between">
        <p className="text-cc-gray font-medium text-cs-200">
          Found 234 countries
        </p>
        <Search />
      </div>
    </div>
  );
};
