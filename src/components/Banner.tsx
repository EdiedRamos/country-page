import { HeroImage, Logo } from "@/assets";

export const Banner = () => {
  return (
    <div
      className="h-[300px] overflow-hidden bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <Logo />
    </div>
  );
};
