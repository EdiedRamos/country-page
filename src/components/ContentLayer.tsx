import { Content, Select } from "@/components";

import { SELECT_OPTIONS } from "@/utils";

export const ContentLayer = () => {
  return (
    <div className="bg-cc-black">
      <Content />
      <div>
        <p className="text-cc-gray text-cs-50 font-medium">Sort by</p>
        <Select options={SELECT_OPTIONS} />
      </div>
    </div>
  );
};
