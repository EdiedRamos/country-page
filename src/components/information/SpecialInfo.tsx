interface Props {
  title: string;
  value: string;
}

export const SpecialInfo = ({ title, value }: Props) => {
  return (
    <div className="flex flex-wrap bg-cc-dark p-3 rounded-lg">
      <p className="pr-4">{title}</p>
      <p>{value}</p>
    </div>
  );
};
