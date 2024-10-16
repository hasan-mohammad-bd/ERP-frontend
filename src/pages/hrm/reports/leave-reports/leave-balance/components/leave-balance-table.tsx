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
import { LeaveBalanceColumn } from "@/lib/validators/hrm/leave-balance";

interface Props {
  tableData?: LeaveBalanceColumn[];
}
const LeaveBalanceTable = ({ tableData }: Props) => {
  return (
    <Card>
      {" "}
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Employee Id</TableHead>
            <TableHead>Employee Name</TableHead>
            <TableHead>Total Entitlement (Days)</TableHead>
            <TableHead>Leave Taken (Days)</TableHead>
            <TableHead>Remaining Balance (Days)</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item) => (
              <TableRow key={item?.id} className="">
                <TableCell className="">{item?.employee_unique_id}</TableCell>
                <TableCell className="">
                  {item?.first_name} {item?.last_name}
                </TableCell>
                <TableCell>{item?.allowed? item?.allowed : ""} {" "}
                  {item?.allowed > 1 ? "days" : item?.allowed < 1 ? "" : "day" }
                </TableCell>
                <TableCell>
                  {item?.taken?.total_days? item?.taken?.total_days : ""}{" "}
                  {item?.taken?.total_days > 1 ? "days" : item?.taken?.total_days < 1 ? "" : "day" }
                  {item?.taken?.total_hours > 0
                    ? ` (${item?.taken?.total_hours} hours)`
                    : ""}
                </TableCell>
                <TableCell>
                  {item?.available?.total_days? item?.available?.total_days : ""}{" "}
                  {item?.available?.total_days > 1 ? "days" : item?.available?.total_days < 1 ? "" : "day" }
                  {item?.available?.total_hours > 0
                    ? ` (${item?.available?.total_hours} hours)`
                    : ""}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter></TableFooter>
      </Table>
    </Card>
  );
};

export default LeaveBalanceTable;
