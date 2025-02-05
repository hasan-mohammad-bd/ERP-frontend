import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { departmentColumns } from "./components/columns";
import { useGetDepartmentsQuery } from "@/store/services/hrm/api/department";
import { Modal } from "@/components/common/modal";
import { AddDepartmentForm } from "./components/add-department-form";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import RoleAccess from "@/lib/access-control/role-access";

const initialPaginationState = {
  pageIndex: 0,
  pageSize: 10,
};

const Department = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>(
    initialPaginationState
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useGetDepartmentsQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }&text=${searchTerm}`
  );
  const departments = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Departments"
              description="Manage department for you business"
            />
            <RoleAccess roles={["departments.delete"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Department
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {departments && (
            <div>
              <DataTable
                columns={departmentColumns}
                data={departments}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
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
          title="Add Department"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
        >
          <AddDepartmentForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Department;
