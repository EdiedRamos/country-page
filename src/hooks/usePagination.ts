import { useEffect, useState } from "react";

interface Props<T> {
  data: T[];
  offset: number;
  limit: number;
}

export const usePagination = <T>({ data, offset, limit }: Props<T>) => {
  const [paginated, setPaginated] = useState<T[]>([]);
  const [curOffset, setCurOffset] = useState<number>(offset);

  const handleNext = () =>
    setCurOffset((prev) => (prev + limit < data.length ? prev + limit : prev));
  const handlePrevious = () =>
    setCurOffset((prev) => Math.max(0, prev - limit));

  useEffect(() => {
    setPaginated(data.slice(curOffset, curOffset + limit));
  }, [data, curOffset, limit]);

  return {
    paginated,
    currentPage: Math.floor(curOffset / limit) + 1,
    onNext: handleNext,
    onPrevious: handlePrevious,
  };
};
