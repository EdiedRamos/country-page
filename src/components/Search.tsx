import { SearchIcon } from "@/assets";

export const Search = () => {
  return (
    <div className="relative">
      <img
        className="absolute left-2 top-[50%] translate-y-[-50%]"
        src={SearchIcon}
      />
      <input
        className="w-full sm:w-[320px] text-cs-100 text-cc-gray placeholder:text-cc-gray p-3 pl-10 rounded-xl bg-cc-dark outline-none focus:ring focus:ring-cc-blue"
        type="text"
        placeholder="Search by Name, Region, Subregion"
      />
    </div>
  );
};
