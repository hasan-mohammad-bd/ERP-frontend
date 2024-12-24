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
import { SaleWiseProfitLossDataType } from "@/store/services/billing/api/reports/sale-profit-lass/type";

interface Props {
  tableData?: SaleWiseProfitLossDataType;
}

const SaleRegisterTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Invoice Number</TableHead>
            <TableHead>Barcode</TableHead>

            <TableHead>Customer</TableHead>
            <TableHead>Item Price</TableHead>
            <TableHead>Cost Per Unit</TableHead>
            <TableHead>Net Profit</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Sub Total</TableHead>
            <TableHead>Total Cost</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.sales?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.invoice_number}</TableCell>
              <TableCell>{item.item_barcode}</TableCell>

              <TableCell>{item.customer}</TableCell>
              <TableCell>{item.item_price}</TableCell>
              <TableCell>{item.cost_per_unit}</TableCell>
              <TableCell>{item.net_profit}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.sub_total}</TableCell>
              <TableCell>{item.total_cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Totals Row */}
        {tableData?.total && (
          <TableFooter>
            <TableRow className="font-bold bg-gray-100">
              <TableCell className="text-right" colSpan={7}>
                Total
              </TableCell>

              <TableCell>{tableData.total.net_profit}</TableCell>
              <TableCell>{tableData.total.quantity}</TableCell>
              <TableCell>{tableData.total.sub_total}</TableCell>
              <TableCell>{tableData.total.total_cost}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </Card>
  );
};

export default SaleRegisterTable;
