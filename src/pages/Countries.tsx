import { Banner, ContentLayer } from "@/components";
import { fetchCountryPreviewAndSearching, useAppDispatch } from "@/store";

import { useEffect } from "react";

export const Countries = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountryPreviewAndSearching());
  }, [dispatch]);

  return (
    <div className="bg-cc-black">
      <Banner />
      <ContentLayer />
    </div>
  );
};
