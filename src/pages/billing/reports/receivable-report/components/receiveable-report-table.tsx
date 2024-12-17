import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReceivableDataType } from "@/store/services/billing/api/receiveable-report/type";
interface Props {
  tableData?: ReceivableDataType[]; // Update to use SalesDataRow[]
}

const ReceiveableReportTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Opening Balance</TableHead>
            <TableHead>Credit</TableHead>
            <TableHead>Debit</TableHead>
            <TableHead>Balance</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.name}</TableCell>
                <TableCell className="">{item.contact_number}</TableCell>
                <TableCell className="">{item.opening_balance}</TableCell>
                <TableCell className="">{item.credit}</TableCell>
                <TableCell className="">{item?.debit}</TableCell>
                <TableCell className="">{item?.balance}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ReceiveableReportTable;
