import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SaleRegisterDataType } from "@/store/services/billing/api/reports/sale-register/type";

// Define a new interface for sales data

interface Props {
  tableData?: SaleRegisterDataType[]; // Update to use SalesDataRow[]
}

const SaleRegisterTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Invoice Number</TableHead>
            <TableHead>Customer Name</TableHead>
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
                  {item.sale_invoice_number}
                </TableCell>
                <TableCell className="">{item.customer_name}</TableCell>
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

export default SaleRegisterTable;
