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

import { LeaveUsagesRow } from "@/lib/validators/hrm/report/leave/leave-usages";
import { getFormattedDateTime } from "@/utils/format-dates";

interface Props {
  tableData?: LeaveUsagesRow[];
}
const LeaveUsagesTable = ({ tableData }: Props) => {
  return (


      <Card>
        {" "}
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>Employee Id</TableHead>
              <TableHead>Employee Name</TableHead>
              <TableHead>Leave Type</TableHead>
              <TableHead>Leave Date</TableHead>
              <TableHead>Total Days Taken</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="">
            {tableData &&
              tableData.map((item) => (
                <TableRow key={item?.id} className="">
                  <TableCell className="">{item?.employee?.employee_unique_id}</TableCell>
                  <TableCell className="">
                    {item?.employee?.first_name} {item?.employee?.last_name}
                  </TableCell>
                  <TableCell>{item?.leave_type?.name}</TableCell>
                  <TableCell>
                    {getFormattedDateTime(item?.start_date_time)} - {getFormattedDateTime(item?.end_date_time)}
                  </TableCell>
                  <TableCell>
                    {item?.duration_day}{" "}
                    {item?.duration_day > 1 ? "days" : "day"}
                    {item?.duration_hour > 0
                      ? ` (${item?.duration_hour} hours)`
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

export default LeaveUsagesTable;
