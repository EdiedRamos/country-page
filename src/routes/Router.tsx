import { Countries, Information } from "@/pages";
import { Navigate, createBrowserRouter } from "react-router-dom";

import { URLS } from "@/utils";

export const Router = createBrowserRouter([
  {
    path: URLS.root,
    element: <Navigate to={URLS.countries} />,
  },
  {
    path: URLS.countries,
    element: <Countries />,
  },
  {
    path: URLS.information,
    element: <Information />,
  },
]);
