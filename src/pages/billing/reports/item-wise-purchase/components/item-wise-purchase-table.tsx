import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supplierWisePurchaseReportDataType } from "@/store/services/billing/api/reports/supplier-wise-purchase-report/type";

// Define a new interface for sales data

interface Props {
  tableData?: supplierWisePurchaseReportDataType[]; // Update to use SalesDataRow[]
}

const SupplierWisePurchaseTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Slip No</TableHead>
            <TableHead>Supplier Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total Amount</TableHead>
            {/* <TableHead>Due</TableHead> */}
            {/* <TableHead>Invoice Qty</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Paid</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Payment Status</TableHead> */}
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                {/* <TableCell className="">
                    <button className="text-blue-500"> {item.invoice}</button>
                </TableCell> */}
                <TableCell className="">{item.date}</TableCell>
                <TableCell className="">
                  {item.slip_no}
                </TableCell>
                <TableCell className="">{item.supplier}</TableCell>
                <TableCell className="">{item.qty}</TableCell>
                <TableCell className="">{item.price}</TableCell>
                <TableCell className="">{item.total_amount}</TableCell>
                {/* <TableCell className="">{item.due}</TableCell> */}
                {/* <TableCell className="">{item.total}</TableCell>
                <TableCell className="">{item.paid}</TableCell>
                <TableCell className="">{item.due}</TableCell>
                <TableCell className="">{item.payment_status}</TableCell> */}
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

export default SupplierWisePurchaseTable;
