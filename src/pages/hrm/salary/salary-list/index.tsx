import React, { useState } from "react";
import { PaginationInfo } from "@/types";
import { Heading } from "@/components/common/heading";
import { DataTable } from "@/components/ui/data-table/data-table";
import { useGetSalariesQuery } from "@/store/services/hrm/api/salaries";
import { salaryListColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import ListSkeleton from "@/components/common/ListSkeleton";
import SalaryListFilters from "./components/salary-list-filters";
import { Separator } from "@/components/ui/separator";

const SalaryList = () => {
  const [filterParams, setFilterParams] = useState("");
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetSalariesQuery(`${filterParams}`);

  const salaryList = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Salary List"
              description="Manage salary for you organization"
            />
        
          </div>
          <Separator />
          <SalaryListFilters setFilterParams={setFilterParams} />
          {isLoading ? (
            <ListSkeleton />
          ) : (
            <div>
              <DataTable
                columns={salaryListColumns}
                data={salaryList}
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

export default SalaryList;
