import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { useGetJobAppliesQuery } from "@/store/services/hrm/api/job-apply";
import { attendanceColumns } from "./components/columns";

// import { JobApplyColumn } from "@/lib/validators";

import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { AttendancePolicyForm } from "./components/add-leave-request-form";
// import { AttendancePolicyRow } from "@/lib/validators/hrm/attendance.vatidator";

// const BULK_ACTIONS = [
//   {
//     label: "Update Status",
//     value: "update-status",
//   },
//   {
//     label: "Delete Selected",
//     value: "delete-selected",
//   },
// ];

const demoData = [
  {
    date: "2022-01-01",
    id: 1,
    employee_id: 1,
    name: "Employee 1",
    leave_type: "CL",
    start_date: "2022-01-01",
    end_date: "2022-01-01",
    status: "Pending",
    // in_time: "10:00 AM",
    // delay_buffer: "00:10",
    // ex_delay_buffer: "00:10",
    // last_in_time: "10:00 AM",
    // ignore_from_att_report: true,
    // discard_attendance_on_weekend: true,
  },
  {
    date: "2022-01-01",
    id: 2,
    employee_id: 1,
    name: "Employee 1",
    leave_type: "CL",
    start_date: "2022-01-01",
    end_date: "2022-01-01",
    status: "Pending",
    // in_time: "10:00 AM",
    // delay_buffer: "00:10",
    // ex_delay_buffer: "00:10",
    // last_in_time: "10:00 AM",
    // ignore_from_att_report: true,
    // discard_attendance_on_weekend: true,
  },
];

const LeaveRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetJobAppliesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  // Set appropriate bulk action type here
  // const [selectedBulkAction, setSelectedBulkAction] = useState<
  //   BulkAction<JobApplyColumn>
  // >({ action: "", payload: [] });

  const jobApply = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  // console.log(selectedBulkAction); // you can see selected bulk action here

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Leave Request"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Leave Request
            </Button>
          </div>
          <Separator />
          {jobApply && (
            <div>
              <DataTable
                columns={attendanceColumns}
                data={demoData as any}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>

      <Modal
        title="Add Leave Request"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
        className=""
      >
        <AttendancePolicyForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default LeaveRequest;
