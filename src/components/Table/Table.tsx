import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Table = () => {
  return (
    <table className="w-full border-separate border-spacing-y-6">
      <TableHeader />
      <TableBody />
    </table>
  );
};
