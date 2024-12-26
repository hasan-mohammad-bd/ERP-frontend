import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StockItemSummaryReportType } from "@/store/services/billing/api/reports/stock-item-summary-report/type";

interface Props {
  tableData: StockItemSummaryReportType;
}

const StockItemSummaryTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Ware House</TableHead>
            <TableHead>Opening Quantity</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>In Quantity</TableHead>
            <TableHead>Out Quantity</TableHead>
            <TableHead>Closing Quantity</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData.data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.barcode}</TableCell>
              <TableCell>{item.warehouse_name}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>{item.opening_qty}</TableCell>
              <TableCell>{item.in_qty}</TableCell>
              <TableCell>{item.out_qty}</TableCell>
              <TableCell>{item.closing_qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Totals Row */}
        {tableData?.totals && (
          <TableFooter>
            <TableRow className="font-bold bg-gray-100">
              <TableCell className="text-right" colSpan={4}>
                Total
              </TableCell>

              <TableCell>{tableData.totals.total_opening_qty}</TableCell>
              <TableCell>{tableData.totals.total_in_qty}</TableCell>
              <TableCell>{tableData.totals.total_out_qty}</TableCell>
              <TableCell>{tableData.totals.total_closing_qty}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </Card>
  );
};

export default StockItemSummaryTable;
