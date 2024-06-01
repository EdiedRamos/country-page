import { Content, Region, SortBy, Status, Table } from "@/components";

export const ContentLayer = () => {
  return (
    <div className="bg-cc-black">
      <div>
        <Content />
        <SortBy />
        <Region />
        <Status />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};
