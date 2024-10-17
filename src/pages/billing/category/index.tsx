import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { unitColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import ListSkeleton from "@/components/common/ListSkeleton";
import { Modal } from "@/components/common/modal";
import { AddCategoryForm } from "./components/add-category-form";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetEmployeesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const employees = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="All Category"
              description="Manage all items for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Category
            </Button>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          {employees && !isLoading && (
            <div>
              <DataTable
                columns={unitColumns}
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
          title="Add Category"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[420px]"
        >
          <AddCategoryForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Category;
