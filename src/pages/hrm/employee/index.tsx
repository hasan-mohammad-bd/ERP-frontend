import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { EmployeeForm } from "./components/employee-form";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { employeeColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";

const Employee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetEmployeesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const employee = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Employees"
              description="Manage employees for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Employee
            </Button>
          </div>
          <Separator />
          {employee && (
            <div>
              <DataTable
                columns={employeeColumns}
                data={employee}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Employee"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
        className="w-[90%] max-w-6xl"
      >
        <EmployeeForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Employee;
