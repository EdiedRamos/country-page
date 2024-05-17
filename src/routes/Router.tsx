import { Navigate, createBrowserRouter } from "react-router-dom";

import { URLS } from "@/utils";

export const Router = createBrowserRouter([
  {
    path: URLS.root,
    element: <Navigate to={URLS.countries} />,
  },
  {
    path: URLS.countries,
    element: <div>countries</div>,
  },
  {
    path: URLS.information,
    element: <div>information</div>,
  },
]);
