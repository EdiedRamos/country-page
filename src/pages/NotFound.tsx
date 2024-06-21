import { URLS } from "@/utils";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-screen m-4">
      <p className="text-blue-400 text-5xl">Oops!</p>
      <p className="text-green-400 text-3xl p-2 bg-green-900 rounded-lg rotate-6">
        Page not found
      </p>
      <p className="text-blue-500 text-7xl">404</p>
      <button
        onClick={() => navigate(URLS.countries)}
        className="bg-blue-500 text-white p-3 rounded-md text-sm hover:bg-blue-600"
      >
        Go to Countries
      </button>
    </div>
  );
};
