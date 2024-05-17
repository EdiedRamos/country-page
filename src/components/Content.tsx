import { Search } from "@/components";

export const Content = () => {
  return (
    <section className="relative container top-0 md:-top-10 bg-cc-black border-2 border-cc-dark p-1 sm:p-5 md:p-8 rounded-xl">
      <div className="flex flex-col md:flex-row gap-3 flex-wrap  items-center justify-center md:justify-between">
        <p className="text-cc-gray font-medium text-cs-200">
          Found 234 countries
        </p>
        <Search />
      </div>
    </section>
  );
};
