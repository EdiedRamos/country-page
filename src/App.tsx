import { Router } from "@/routes";
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "@/store";

const App = () => {
  return (
    <StoreProvider>
      <RouterProvider router={Router} />
    </StoreProvider>
  );
};

export default App;
