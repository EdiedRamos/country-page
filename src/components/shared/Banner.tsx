import { HeroImage, Logo } from "@/assets";

import { URLS } from "@/utils";
import { useNavigate } from "react-router";

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-[300px] overflow-hidden bg-center flex justify-center items-center bg-no-repeat bg-black"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <button onClick={() => navigate(URLS.countries)}>
        <Logo />
      </button>
    </div>
  );
};
