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
import { attendanceSummary } from "@/store/services/hrm/api/attendance-summary/type";

interface Props {
  tableData?: attendanceSummary[];
}
const AttendanceSummaryTable = ({ tableData }: Props) => {


  return (
    <Card>
      {" "}
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Employee Id</TableHead>
            <TableHead>Employee Name</TableHead>
            <TableHead>Late</TableHead>
            <TableHead>Extreme Late</TableHead>
            <TableHead>On Time</TableHead>
            <TableHead>Working Days</TableHead>
            <TableHead>Present Days</TableHead>
            <TableHead>Absent Days</TableHead>
            <TableHead>Total Days</TableHead>
            <TableHead>Total Hours</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item) => (
              <TableRow key={item?.employee_id} className="">
                <TableCell className="">{item?.employee_id}</TableCell>
                <TableCell className="">{item?.employee_name}</TableCell>
                {/* <TableCell>{item?.employee?.section?.name}</TableCell>
                <TableCell>{item?.employee?.location?.name}</TableCell> */}
                <TableCell>{item.late}</TableCell>
                <TableCell>{item?.extreme_late}</TableCell>
                <TableCell>{item?.on_time}</TableCell>
                <TableCell>{item?.working_days}</TableCell>
                <TableCell>{item?.present_days}</TableCell>
                <TableCell>{item?.absent_days}</TableCell>
                <TableCell>{item?.leaves?.total_days}</TableCell>
                <TableCell>{item?.leaves?.total_hours}</TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter></TableFooter>
      </Table>
    </Card>
  );
};

export default AttendanceSummaryTable;
