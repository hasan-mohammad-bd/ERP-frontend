import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { itemWiseSaleReportDataType } from "@/store/services/billing/api/reports/item-wise-sale-report/type";

// Define a new interface for sales data

interface Props {
  tableData?: itemWiseSaleReportDataType[]; // Update to use SalesDataRow[]
}

const ItemWiseSaleTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Item Barcode</TableHead>
            <TableHead>Slip No</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Sub Total</TableHead>
            <TableHead>Gross Profit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>
                <TableCell className="">{item.item}</TableCell>
                <TableCell className="">{item.item_barcode}</TableCell>
                <TableCell className="">
                  {item.sale_slip_no}
                </TableCell>
                <TableCell className="">{item.sold_to_customer}</TableCell>
                <TableCell className="">{item.sell_qty}</TableCell>
                <TableCell className="">{item.sell_price}</TableCell>
                <TableCell className="">{item.sub_total_amount}</TableCell>
                <TableCell className="">{item.gross_profit}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ItemWiseSaleTable;
