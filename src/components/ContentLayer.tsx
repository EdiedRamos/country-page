import { Content, Select } from "@/components";

export const ContentLayer = () => {
  return (
    <div className="bg-cc-black">
      <Content />
      <div>
        <Select
          options={[
            { id: "1", name: "Area" },
            { id: "2", name: "Name", default: true },
            { id: "3", name: "Population" },
          ]}
        />
      </div>
    </div>
  );
};
