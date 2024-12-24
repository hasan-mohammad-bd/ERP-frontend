import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { StockBatchDataType } from "@/store/services/billing/api/reports/stack-branch-report/type";

interface Props {
  tableData?: StockBatchDataType;
}

const SaleRegisterTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Stock In Date</TableHead>
            <TableHead>Batch Code</TableHead>
            <TableHead>Warehouse</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock Value</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.data?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.item_barcode}</TableCell>
              <TableCell>{item.supplier || "N/A"}</TableCell>
              <TableCell>{item.stock_in_date || "N/A"}</TableCell>
              <TableCell>{item.batch_code || "N/A"}</TableCell>
              <TableCell>{item.warehouse || "N/A"}</TableCell>
              <TableCell>{item.qty}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.stock_value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Totals Row */}
        {tableData?.total && (
          <TableFooter>
            <TableRow className="font-bold bg-gray-100">
              <TableCell className="text-right" colSpan={6}>
                Total
              </TableCell>

                <TableCell>{tableData.total.qty}</TableCell>
                <TableCell>{tableData.total.price}</TableCell>
                <TableCell>{tableData.total.stock_value}</TableCell>

            </TableRow>
          </TableFooter>
        )}
      </Table>
    </Card>
  );
};

export default SaleRegisterTable;
