import { Content, Region, SortBy, Status, Table } from "@/components";

export const ContentLayer = () => {
  return (
    <section className="relative container top-0 md:-top-10 bg-cc-black border-0 md:border-2 border-cc-dark p-1 sm:p-5 md:p-8 rounded-xl">
      <div className="mb-9">
        <Content />
      </div>
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="flex flex-col gap-8 w-full md:w-[350px]">
          <SortBy />
          <Region />
          <Status />
        </div>
        <div className="w-full">
          <Table />
        </div>
      </div>
    </section>
  );
};
