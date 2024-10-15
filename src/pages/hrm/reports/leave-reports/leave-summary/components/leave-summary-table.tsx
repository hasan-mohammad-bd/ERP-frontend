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

import {
  LeaveSummaryRow,
  LeaveTypes,
  LeaveTypeSummaryRow,
} from "@/lib/validators/hrm/report/leave/leave-summary";
import React from "react";

interface Props {
  tableData?: LeaveSummaryRow[];
  leaveTypeSummary?: LeaveTypeSummaryRow[];

  reportFormate?: {
    company: string;
    reportType: string;
  };
}
const LeaveSummaryTable = ({
  tableData,
  reportFormate,
  leaveTypeSummary,
}: Props) => {


  return (
    <Card className="p-3 w-full mx-auto ">
      {reportFormate ? (
        <div className="flex-1 space-y-4 my-4">
          <div className="text-center  ">
            <h2>{reportFormate.company}</h2>
            <h3 className="text-xl">{reportFormate.reportType}</h3>
            {/* <p className="text-sm">
              {formateStartDate} - {formateEndDate}
            </p> */}
          </div>
        </div>
      ) : null}
      <Card>
        {" "}
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>Employee Id</TableHead>
              <TableHead>Employee Name</TableHead>
              {leaveTypeSummary?.map((leave: LeaveTypeSummaryRow) => (
                <TableHead key={leave?.id}>{leave.name} Taken</TableHead>
              ))}
              <TableHead>Total Leave Taken</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="">
            {tableData &&
              tableData.map((item) => (
                <TableRow key={item.id} className="">
                  <TableCell className="">{item?.employee_unique_id}</TableCell>
                  <TableCell className="">
                    {item?.first_name} {item?.last_name}
                  </TableCell>

                  {item?.leave_types?.map((type: LeaveTypes) => (
                    <React.Fragment key={type?.id}>
              

                    <TableCell className="" >
                      {type?.used?.total_days}{" "}
                      {type?.used?.total_days > 1 ? "days" : "day"}
                      {type?.used?.total_hours > 0 ? ` (${type?.used?.total_hours} hours)` : ""}
                    </TableCell>
                    </React.Fragment>
                  ))}
                  <TableCell className="">
                    {item?.leave_taken?.total_days}{" "}
                    {item?.leave_taken?.total_days > 1 ? "days" : "day"}
                    {item?.leave_taken?.total_hours > 0 ? ` (${item?.leave_taken?.total_hours} hours)` : ""}
                  </TableCell>
                </TableRow>
              ))}
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              {leaveTypeSummary &&
                leaveTypeSummary.map((item) => (
                  <TableCell className="" key={item.id}>
                    {item.total_days} {item.total_days > 1 ? "days" : "day"}
                    {item.total_hours > 0 ? ` (${item.total_hours} hours)` : ""}
                  </TableCell>
                ))}
            </TableRow>
          </TableBody>

          <TableFooter></TableFooter>
        </Table>
      </Card>
    </Card>
  );
};

export default LeaveSummaryTable;
