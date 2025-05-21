import DefaultTable from "./child/DefaultTable";
import BorderedTables from "./child/BorderedTables";
import StripedRows from "./child/StripedRows";
import StripedRowsTwo from "./child/StripedRowsTwo";
import TablesBorderColors from "./child/TablesBorderColors";
import TablesBorderColorsTwo from "./child/TablesBorderColorsTwo";
import TablesBorderColorsThree from "./child/TablesBorderColorsThree";

const TableBasicLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultTable */}
      <DefaultTable />

      {/* BorderedTables */}
      <BorderedTables />

      {/* StripedRows */}
      <StripedRows />

      {/* StripedRowsTwo */}
      <StripedRowsTwo />

      {/* TablesBorderColors */}
      <TablesBorderColors />

      {/* TablesBorderColorsTwo */}
      <TablesBorderColorsTwo />

      {/* TablesBorderColorsThree */}
      <TablesBorderColorsThree />
    </div>
  );
};

export default TableBasicLayer;
