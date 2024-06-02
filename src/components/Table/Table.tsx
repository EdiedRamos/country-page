import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Table = () => {
  return (
    <table className="w-full">
      <TableHeader />
      <TableBody />
    </table>
  );
};
