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

import { dailyAttendanceReport } from "@/store/services/hrm/api/daily-attendance-report/type";
import { getFormattedDateTime, getFormattedTime } from "@/utils/format-dates";

interface Props {
  tableData?: dailyAttendanceReport[];
}
const DailyAttendanceReportTable = ({ tableData }: Props) => {
  console.log("daily_attendance", tableData);

  return (
    <Card>
      {" "}
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Employee Id</TableHead>
            <TableHead>Employee Name</TableHead>
            <TableHead>Section</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Shift</TableHead>
            <TableHead>Check In Time</TableHead>
            <TableHead>Check Out Time</TableHead>
            <TableHead>Total Hour</TableHead>
            <TableHead>Late Time (Hours)</TableHead>
            <TableHead>Check In Status</TableHead>
            <TableHead>Note</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item) => (
              <TableRow key={item?.employee?.id} className="">
                <TableCell className="">{item?.employee?.id}</TableCell>
                <TableCell className="">{item?.employee?.name}</TableCell>
                <TableCell>{item?.employee?.section?.name}</TableCell>
                <TableCell>{item?.employee?.location?.name}</TableCell>
                <TableCell>
                  {getFormattedTime(item?.employee?.schedule?.start_time)} -{" "}
                  {getFormattedTime(item?.employee?.schedule?.end_time)}
                </TableCell>
                <TableCell className="">
                  {getFormattedDateTime(item.check_in || undefined)}
                </TableCell>
                <TableCell>
                  {getFormattedDateTime(item.check_out || undefined)}
                </TableCell>
                <TableCell>{item?.duration?.in_hours}</TableCell>
                <TableCell>{item?.late_time?.in_hours}</TableCell>
                <TableCell>{item?.check_in_status}</TableCell>
                <TableCell>{item?.note}</TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter></TableFooter>
      </Table>
    </Card>
  );
};

export default DailyAttendanceReportTable;
