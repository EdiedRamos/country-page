import { CountryPreviewDTO } from "@/dtos/country/countryPreviewDTO";
import { URLS } from "@/utils";
import { useNavigate } from "react-router";

interface Props extends CountryPreviewDTO {}

export const CountryPreview = ({ name, flag }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(URLS.information.replace(":country", name));
    scrollTo(0, 0);
  };

  return (
    <div
      onClick={handleClick}
      className="w-20 flex flex-col items-center gap-2 hover:opacity-55 hover:cursor-pointer hover:transition-all"
    >
      <img className="w-20 rounded-md" src={flag} alt={`${name} falg`} />
      <p className="text-cs-50 text-cc-light">{name}</p>
    </div>
  );
};
