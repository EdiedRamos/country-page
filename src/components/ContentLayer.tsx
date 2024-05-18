import { Content, Region, SortBy, Status } from "@/components";

export const ContentLayer = () => {
  return (
    <div className="bg-cc-black">
      <Content />
      <SortBy />
      <Region />
      <Status />
    </div>
  );
};
