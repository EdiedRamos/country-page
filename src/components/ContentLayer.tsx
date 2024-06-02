import { Content, Region, SortBy, Status, Table } from "@/components";

export const ContentLayer = () => {
  return (
    <section className="relative container top-0 md:-top-10 bg-cc-black border-0 md:border-2 border-cc-dark p-1 sm:p-5 md:p-8 rounded-xl">
      <Content />
      <div className="flex gap-[32px]">
        <div>
          <SortBy />
          <Region />
          <Status />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </section>
  );
};
