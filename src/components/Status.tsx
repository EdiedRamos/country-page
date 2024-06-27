import { countryActions, useAppDispatch } from "@/store";

import { CheckBox } from "@/components";

export const Status = () => {
  const dispatch = useAppDispatch();

  const handleStatus = (context: "UN" | "IN", state: boolean) => {
    dispatch(
      countryActions.setStatusFilter({
        context,
        state,
      })
    );
  };

  return (
    <div>
      <p className="text-cc-gray text-cs-50 font-medium mb-2">Status</p>
      <div className="flex flex-col gap-2">
        <CheckBox
          text="Member of the United Nations"
          onChecked={() => handleStatus("UN", true)}
          onUnchecked={() => handleStatus("UN", false)}
        />
        <CheckBox
          text="Independent"
          onChecked={() => handleStatus("IN", true)}
          onUnchecked={() => handleStatus("IN", false)}
        />
      </div>
    </div>
  );
};
