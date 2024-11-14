import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import ListSkeleton from "@/components/common/ListSkeleton";
import { Modal } from "@/components/common/modal";

import { categoryColumns } from "./components/columns";
import { AddCategoryForm } from "./components/add-category-form";
import { useGetExpensesCategoryQuery } from "@/store/services/billing/api/expenses-category";

const ExpensesCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Correct API call to get expenses  category data
  const { data, isLoading } = useGetExpensesCategoryQuery(
    `type=main&per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const categories = data?.data || []; // Fallback to empty array if no data

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Expenses Category"
              description="Manage all categories for your business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" />
              Add Expenses Category
            </Button>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          <div>
            <DataTable
              columns={categoryColumns} // Ensure the columns match your data structure
              data={categories} // Pass the correct data to the DataTable
              paginationInfo={paginationInfo}
              pagination={pagination}
              setPagination={setPagination}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal
          title="Add Expenses Category"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[600px]"
        >
          <AddCategoryForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default ExpensesCategory;
