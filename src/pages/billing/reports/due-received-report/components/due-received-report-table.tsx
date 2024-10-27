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
    date: string,
    invoice_no: string,
    customer_name: string,
    amount: number,
    paid_by:string,
    received_by:string

}


interface Props {
  tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
}

const DueReceivedReportTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Invoice No</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Paid By</TableHead>
            <TableHead>Received By</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>
                <TableCell className="">{item.invoice_no}
                </TableCell>
                <TableCell className="">{item.customer_name}</TableCell>
                <TableCell className="">{item.amount}</TableCell>
                <TableCell className="">{item.paid_by}</TableCell>
                <TableCell className="">{item.received_by}</TableCell>
              </TableRow>
            ))}

        </TableBody>
      </Table>
    </Card>
  );
};

export default DueReceivedReportTable;
