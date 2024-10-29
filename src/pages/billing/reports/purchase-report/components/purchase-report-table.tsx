import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define a new interface for sales data
interface SalesDataRow {
  date: string;
  business_branch: string;
  invoice: string;
  supplier: string;
  purchased_by: string;
  product_qty: string;
  invoice_qty: number;
  total: number;
  paid: number;
  due: number;
  payment_status: string
}


interface Props {
  tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
}

const PurchaseReportTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Business Branch</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Purchased by</TableHead>
            <TableHead>Product (Qty)</TableHead>
            <TableHead>Invoice Qty</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Paid</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Payment Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>
                {/* <TableCell className="">
                    <button className="text-blue-500"> {item.invoice}</button>
                </TableCell> */}
                <TableCell className="">{item.date}</TableCell>
                <TableCell className="">{item.business_branch}</TableCell>
                <TableCell className="">{item.supplier}</TableCell>
                <TableCell className="">{item.purchased_by}</TableCell>
                <TableCell className="">{item.product_qty}</TableCell>
                <TableCell className="">{item.invoice_qty}</TableCell>
                <TableCell className="">{item.total}</TableCell>
                <TableCell className="">{item.paid}</TableCell>
                <TableCell className="">{item.due}</TableCell>
                <TableCell className="">{item.payment_status}</TableCell>
                {/* <TableCell className="">
                  <button className="text-blue-500">Invoice</button>
                </TableCell> */}

              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default PurchaseReportTable;
