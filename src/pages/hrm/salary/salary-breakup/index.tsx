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
import { AttendancePolicyForm } from "./components/add-salary-breakup-form";
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
    salary_break_up_name: "Health",
    id: 1,
    short_code: "M",
    type: "monthly",
    note: "This is monthly salary",
  },
  {
    salary_break_up_name: "Rent",
    id: 2,
    short_code: "M",
    type: "monthly",
    note: "This is monthly salary",
  },
];

const SalaryBreakUp = () => {
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
              title="Salary Breakup"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Salary Breakup
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

      {isOpen && (
        <Modal
          title="Add Salary Breakup"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className=""
        >
          <AttendancePolicyForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default SalaryBreakUp;
