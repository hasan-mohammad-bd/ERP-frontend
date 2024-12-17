import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PurchaseRegisterDataType } from "@/store/services/billing/api/reports/purchase-register/type";

// Define a new interface for sales data

interface Props {
  tableData?: PurchaseRegisterDataType[]; // Update to use SalesDataRow[]
}

const PurchaseRegisterTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Invoice Number</TableHead>
            <TableHead>Supplier Name</TableHead>
            <TableHead>type</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Due</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>
                <TableCell className="">
                  {item.purchase_invoice_number}
                </TableCell>
                <TableCell className="">{item.supplier_name}</TableCell>
                <TableCell className="">{item.type}</TableCell>
                <TableCell className="">{item.tax}</TableCell>
                <TableCell className="">{item.amount}</TableCell>
                <TableCell className="">{item.due}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default PurchaseRegisterTable;
