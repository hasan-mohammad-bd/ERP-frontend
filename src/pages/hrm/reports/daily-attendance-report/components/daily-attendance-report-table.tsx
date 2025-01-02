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
import { getFormattedDateTime } from "@/utils/format-dates";

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
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead>Total Hour</TableHead>
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
                <TableCell className="">{getFormattedDateTime(item.check_in || undefined)}</TableCell>
                <TableCell>{getFormattedDateTime(item.check_out || undefined)}</TableCell>
                <TableCell>{item?.duration}</TableCell>
                <TableCell>{item?.check_in_status}</TableCell>
                <TableCell>{item?.note}</TableCell>
                {/* <TableCell>{item?.present_days}</TableCell>
                <TableCell>{item?.absent_days}</TableCell>
                <TableCell>{item?.leaves?.total_days}</TableCell>
                <TableCell>{item?.leaves?.total_hours}</TableCell> */}
              </TableRow>
            ))}
        </TableBody>

        <TableFooter></TableFooter>
      </Table>
    </Card>
  );
};

export default DailyAttendanceReportTable;
