interface Props {
  currentPage: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const Paginator = ({ currentPage, onPrevious, onNext }: Props) => {
  return (
    <div className="flex flex-wrap justify-center items-center text-white">
      <button
        className="bg-cc-dark hover:bg-slate-800 disabled:active:scale-100 disabled:opacity-50 active:scale-90 p-2 rounded-tl-md rounded-bl-md w-24 transition-all"
        onClick={onPrevious}
      >
        Previous
      </button>
      <p className="bg-cc-dark border-x-2  border-cc-black p-2">
        Page {currentPage}
      </p>
      <button
        className="bg-cc-dark hover:bg-slate-800 disabled:active:scale-100 disabled:opacity-50 active:scale-90 p-2 rounded-tr-md rounded-br-md w-24 transition-all"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};
