import React from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import ListSkeleton from "@/components/common/ListSkeleton";
import { useNavigate } from "react-router-dom";
import { ExpensesColumns } from "./components/column";
import { useGetExpensesQuery } from "@/store/services/billing/api/expenses";

const ExpensesList = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetExpensesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const expensesData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="All Expenses"
              description="Manage all items for you business"
            />
            <Button
              onClick={() => navigate("/billing/expenses/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Expenses
            </Button>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          {expensesData && !isLoading && (
            <div>
              <DataTable
                columns={ExpensesColumns}
                data={expensesData}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExpensesList;
