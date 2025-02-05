import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";



// import { JobApplyColumn } from "@/lib/validators";

import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { AttendancePolicyForm } from "./components/add-attendance-policy-form";
import { useGetAttendancePoliciesQuery } from "@/store/services/hrm/api/attendance-policy";
import { attendanceColumns } from "./components/columns";



const AttendancePolicy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });



  const { data, isLoading } = useGetAttendancePoliciesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const attendancePolicyList = data?.data || [];

  console.log(data, "hello")

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
              title="Attendance Policy"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Attendance Policy
            </Button>
          </div>
          <Separator />
          {jobApply && (
            <div>
              <DataTable
                columns={attendanceColumns}
                data={attendancePolicyList}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <Modal
          title="Add Attendance Policy"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-2/3 max-w-5xl"
        >
          <AttendancePolicyForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default AttendancePolicy;
