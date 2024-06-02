import { CheckBox } from "@/components";

export const Status = () => {
  return (
    <div>
      <p className="text-cc-gray text-cs-50 font-medium mb-2">Status</p>
      <div className="flex flex-col gap-2">
        <CheckBox text="Member of the United Nations" />
        <CheckBox text="Independent" />
      </div>
    </div>
  );
};
