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
  customer_name: string;
  mobile: string;
  type: string;
  invoice_no: string;
  note: string;
  amount: number;
}


interface Props {
  tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
}

const CustomerLedgerTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Invoice No</TableHead>
            <TableHead>Note</TableHead>
            <TableHead>Amount</TableHead>
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
                <TableCell className="">{item.customer_name}</TableCell>

                <TableCell className="">{item.mobile}</TableCell>
                <TableCell className="">{item.type}</TableCell>
                <TableCell className="">
                  <button className="text-blue-500">
                     {item.invoice_no}
                  </button>
                  </TableCell>
                <TableCell className="">{item.note}</TableCell>
                <TableCell className="">{item.amount}</TableCell>

              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CustomerLedgerTable;
