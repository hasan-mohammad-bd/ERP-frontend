import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Modal } from "@/components/common/modal";
import { SubCategoryColumn } from "@/lib/validators/billing/category";
import { AddSubCategoryForm } from "./components/add-sub-category-form";
import { SubCategoryColumns } from "./components/column";
import { DataTable } from "@/components/ui/data-table/data-table";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { PaginationState } from "@tanstack/react-table";
import ListSkeleton from "@/components/common/ListSkeleton";
import { PaginationInfo } from "@/types";

const SubCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [pagination, setPagination] = React.useState<PaginationState>({
  //     pageIndex: 0,
  //     pageSize: 10,
  //   });

  //   const { data, isLoading } = useGetLeaveTypesQuery(
  //     `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  //   );

  //   const leaveType = data?.data || [];
  //   console.log(leaveType)
  //   const paginationInfo: PaginationInfo | undefined = data?.meta;

  //   if (isLoading) return <Loading />;

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetEmployeesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const employees = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  const [selectedSubCategory, setSelectedSubCategory] = useState<
    SubCategoryColumn | undefined
  >(undefined);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Sub Category"
              description="Manage job apply for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Subcategory
            </Button>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          {employees && !isLoading && (
            <div>
              <DataTable
                columns={SubCategoryColumns}
                data={employees}
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
          title="Add Subcategory"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[480px]"
        >
          <AddSubCategoryForm
            modalClose={() => setIsOpen(false)}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
        </Modal>
      )}
    </>
  );
};

export default SubCategory;
