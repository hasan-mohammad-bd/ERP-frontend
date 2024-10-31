import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { Modal } from "@/components/common/modal";

import { useGetEmployeeGradesQuery } from "@/store/services/hrm/api/employee-grade";
import { AddEmployeeGradeForm } from "./components/add-employee-grade-form";
import { employeeGradeColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import RoleAccess from "@/lib/access-control/role-access";

const EmployeeGrade = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetEmployeeGradesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const employeeGrades = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Employee Grades"
              description="Manage employee grades for you business"
            />
            <RoleAccess roles={["employee-grades.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Employee Grade
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {employeeGrades && (
            <div>
              <DataTable
                columns={employeeGradeColumns}
                data={employeeGrades}
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
          title="Add Employee Grade"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
        >
          <AddEmployeeGradeForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default EmployeeGrade;
