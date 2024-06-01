import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Table = () => {
  return (
    <div>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};
