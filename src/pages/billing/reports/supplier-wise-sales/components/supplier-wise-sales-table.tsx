import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  SupplierWiseSaleItemType,
  SupplierWiseSaleSummaryType,
} from "@/store/services/billing/api/supplier-wise-sales/type";
import { getFormattedDate } from "@/utils/format-dates";

interface Props {
  reportData: SupplierWiseSaleItemType[];
  totalData: SupplierWiseSaleSummaryType | undefined;
}

const SupplierWiseSalesTable = ({ reportData, totalData }: Props) => {
  return (
    <Card className="p-6">
      {/* Transaction Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Slip No</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Item Barcode</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Item Price</TableHead>
            <TableHead className="text-right">Total Amount</TableHead>
            <TableHead className="text-right">Cost</TableHead>
            <TableHead className="text-right">Profit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reportData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                {getFormattedDate(item.sale_date)}
              </TableCell>
              <TableCell>{item.invoice_number}</TableCell>
              <TableCell>{item.customer_name}</TableCell>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.item_barcode}</TableCell>
              <TableCell className="text-right">{item.quantity}</TableCell>
              <TableCell className="text-right">{item.item_price}</TableCell>
              <TableCell className="text-right">{item.total_amount}</TableCell>
              <TableCell className="text-right">{item.total_cost}</TableCell>
              <TableCell className="text-right">{item.profit}</TableCell>
            </TableRow>
          ))}
          {totalData && (
            <TableRow className="font-semibold">
              <TableCell colSpan={5} className="text-right">
                Total
              </TableCell>
              <TableCell className="text-right">{totalData.quantity}</TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">
                {totalData.total_amount}
              </TableCell>
              <TableCell className="text-right">
              </TableCell>
              <TableCell className="text-right">{totalData.profit}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default SupplierWiseSalesTable;
