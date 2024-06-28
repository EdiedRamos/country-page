interface Props {
  title: string;
  value: string;
  className?: string;
}

export const InfoDetail = ({ title, value, className = "" }: Props) => {
  return (
    <div
      className={`flex justify-between px-5 text-cc-light border-t-2 border-cc-dark py-5 ${className}`}
    >
      <p className="text-cc-gray">{title}</p>
      <p>{value}</p>
    </div>
  );
};
