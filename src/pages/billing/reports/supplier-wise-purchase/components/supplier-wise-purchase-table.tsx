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
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>
                <TableCell className="">
                  {item.slip_no}
                </TableCell>
                <TableCell className="">{item.supplier}</TableCell>
                <TableCell className="">{item.qty}</TableCell>
                <TableCell className="">{item.price}</TableCell>
                <TableCell className="">{item.total_amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default SupplierWisePurchaseTable;
