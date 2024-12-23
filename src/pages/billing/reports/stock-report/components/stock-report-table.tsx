import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StockReportItemDataType } from "@/store/services/billing/api/reports/stock-report/type";

interface Props {
  tableData?: StockReportItemDataType[]; // Update to use SalesDataRow[]
}

const StockReportTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Warehouse</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>W. Avg Cost</TableHead>
            <TableHead>Stock Value</TableHead>
            <TableHead>Sale Price</TableHead>
            <TableHead>Selling Stock Value</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.item_name}</TableCell>
                <TableCell className="">{item.barcode}</TableCell>
                <TableCell className="">{item.warehouse_name}</TableCell>
                <TableCell className="">{item.quantity}</TableCell>
                <TableCell className="">{item.unit}</TableCell>
                <TableCell className="">{item.avg_cost}</TableCell>
                <TableCell className="">{item.stock_value}</TableCell>
                <TableCell className="">{item.sale_price}</TableCell>
                <TableCell className="">{item.selling_stock_value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default StockReportTable;
