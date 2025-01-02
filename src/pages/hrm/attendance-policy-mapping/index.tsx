import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { attendanceColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { AttendancePolicyForm } from "./components/add-attendance-policy-mapping-form";

import { useGetEmployeeAttendancePoliciesQuery } from "@/store/services/hrm/api/attendance-policy-mapping";
import { useNavigate } from "react-router-dom";

const initialPaginationState = {
  pageIndex: 0,
  pageSize: 10,
};

const AttendancePolicyMapping = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>(
    initialPaginationState
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const { data, isLoading } = useGetEmployeeAttendancePoliciesQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }&text=${searchTerm}`
  );

  const pmData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Manage Employee Attendance Policy"
              description="Manage job apply for you business"
            />
            <Button onClick={() => navigate("/hrm/employees-list")} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Employee Attendance Policy
            </Button>
          </div>
          <Separator />
          {pmData && (
            <div>
              <DataTable
                columns={attendanceColumns}
                data={pmData}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
                onChangeSearch={(value) => {
                  setPagination(initialPaginationState);
                  setSearchTerm(value);
                }}
              />
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <Modal
          title="Add Leave Type"
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

export default AttendancePolicyMapping;
