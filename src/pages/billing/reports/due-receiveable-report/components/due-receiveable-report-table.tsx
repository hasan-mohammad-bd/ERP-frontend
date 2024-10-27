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
    total_amount: number,
    invoice:string

}



interface Props {
  tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
}

const DueReceiveableReportTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Invoice No</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Invoice</TableHead>
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
                <TableCell className="">{item.total_amount}</TableCell>
                <TableCell className="">
                  <button className="text-blue-500"> {item.invoice}</button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DueReceiveableReportTable;
