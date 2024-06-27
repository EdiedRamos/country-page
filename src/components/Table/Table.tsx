import { CountryPreviewAndSearchingDTO } from "@/dtos";
import { Paginator } from "@/components";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { useAppSelector } from "@/store";
import { usePagination } from "@/hooks";

export const Table = () => {
  const preview = useAppSelector(
    (store) => store.countryReducer.previewFiltered
  );

  const { paginated, onPrevious, onNext, currentPage } =
    usePagination<CountryPreviewAndSearchingDTO>({
      data: preview ?? [],
      offset: 0,
      limit: 10,
    });

  return (
    <section>
      <table className="w-full border-separate border-spacing-y-6">
        <TableHeader />
        <TableBody countries={paginated} />
      </table>
      <Paginator
        currentPage={currentPage}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </section>
  );
};
