import {
  Content,
  EmptyItems,
  Region,
  SortBy,
  Status,
  Table,
} from "@/components";

import { useAppSelector } from "@/store";

export const ContentLayer = () => {
  const hasResults = useAppSelector(
    (store) => !!store.countryReducer.previewFiltered
  );

  return (
    <section className="relative container top-0 md:-top-10 bg-cc-black border-0 md:border-2 border-cc-dark p-1 sm:p-5 md:p-8 rounded-xl shadow-xl">
      <div className="mb-9">
        <Content />
      </div>
      <div className="flex gap-8 flex-col lg:flex-row">
        <div className="flex flex-col gap-8 w-full md:w-[350px]">
          <SortBy />
          <Region />
          <Status />
        </div>
        <div className="w-full">{hasResults ? <Table /> : <EmptyItems />}</div>
      </div>
    </section>
  );
};
