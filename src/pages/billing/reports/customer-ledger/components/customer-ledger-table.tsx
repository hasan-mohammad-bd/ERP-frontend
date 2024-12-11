import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CustomerColumn } from "@/lib/validators/billing/customer";

interface Props {
  tableData?: CustomerColumn[]; // Update to use SalesDataRow[]
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
            <TableHead>Address</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Total Invoice</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>

                <TableCell className="">{item.name}</TableCell>

                <TableCell className="">
                  {item.phone}
                  {item.phone ? "," : ""} {item.work_phone} (work phone)
                </TableCell>
                <TableCell className="">{item.type}</TableCell>
                <TableCell className="">{item.location?.name}</TableCell>
                <TableCell className="">{item.due}</TableCell>
                <TableCell className="">{item.total_invoice}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CustomerLedgerTable;
