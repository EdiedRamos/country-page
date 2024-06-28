import { CountryPreviewDTO } from "@/dtos/country/countryPreviewDTO";

interface Props extends CountryPreviewDTO {}

export const CountryPreview = ({ name, flag }: Props) => {
  return (
    <div className="w-20 flex flex-col items-center gap-2">
      <img className="w-20 rounded-md" src={flag} alt={`${name} falg`} />
      <p className="text-cs-50 text-cc-light">{name}</p>
    </div>
  );
};
