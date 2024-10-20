import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LeaveTypeSummary } from "@/store/services/hrm/api/leave-type-summary/type";

interface Props {
  tableData?: LeaveTypeSummary[];
}
const LeaveTypeSummaryTable = ({ tableData }: Props) => {
  return (
    <Card>
      {" "}
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Total Days</TableHead>
            <TableHead>Total Hours</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item) => (
              <TableRow className="">
                <TableCell>{item?.name}</TableCell>

                <TableCell>{item?.total_days}</TableCell>
                <TableCell>{item?.total_hours}</TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter></TableFooter>
      </Table>
    </Card>
  );
};

export default LeaveTypeSummaryTable;
