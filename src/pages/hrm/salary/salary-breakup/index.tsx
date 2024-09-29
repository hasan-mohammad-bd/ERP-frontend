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
import { useGetSalaryCategoriesQuery } from "@/store/services/hrm/api/salary-categories";
import { AddSalaryBreakupForm } from "./components/add-salary-breakup-form";





const SalaryBreakUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetSalaryCategoriesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const salaryCategoryData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;


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
          {salaryCategoryData && (
            <div>
              <DataTable
                columns={attendanceColumns}
                data={salaryCategoryData}
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
          <AddSalaryBreakupForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default SalaryBreakUp;
