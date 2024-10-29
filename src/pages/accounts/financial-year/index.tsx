import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { Modal } from "@/components/common/modal";
import { AddFinancialYearForm } from "./components/add-ficancial-year-form";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { useGetFinancialYearsQuery } from "@/store/services/accounts/api/financial-year";
import { financialYearColumns } from "./components/columns";
import RoleAccess from "@/lib/access-control/role-access";

const FinancialYears = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetFinancialYearsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );
  const financialYear = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Financial Year"
              description="Manage financial year for you business"
            />
            <RoleAccess roles={["financial-years.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Financial Year
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {financialYear && (
            <div>
              <DataTable
                columns={financialYearColumns}
                data={financialYear}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Financial Year"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddFinancialYearForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default FinancialYears;
