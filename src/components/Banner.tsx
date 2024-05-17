import { HeroImage } from "@/assets";

export const Banner = () => {
  return (
    <div className="h-[300px] overflow-hidden">
      <img className="object-cover w-full h-full" src={HeroImage} />
    </div>
  );
};
