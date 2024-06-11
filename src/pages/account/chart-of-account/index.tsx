import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";


import { Modal } from "@/components/common/modal";
import { AddFinancialYearForm } from "./components/add-ficancial-year-form";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { useGetFinancialYearsQuery } from "@/store/services/account/api/financial-year";
import {
  chartOfAccountColumns,
 
} from "./components/columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DataTableComponent from "./components/data-table-component";

const ChartOfAccount = () => {
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
      <div className="flex items-center justify-between md:p-8">
        <Heading
          title="Chart Of Account"
          description="Manage Chart of account for you business"
        />
        <Button onClick={() => setIsOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Chart of Account
        </Button>
      </div>
      <Separator />
      <Tabs defaultValue="assets" className="w-full mt-3 px-3">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="assets"> Assets</TabsTrigger>
          <TabsTrigger value="liabilities-and-owners-equity">
            Liabilities and Owners Equity
          </TabsTrigger>
          <TabsTrigger value="incomes">Incomes</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>
        <TabsContent value="assets">
          <DataTableComponent
            title="Assets"
            description="Make changes to your assets here."
            columns={chartOfAccountColumns}
            data={financialYear}
            paginationInfo={paginationInfo}
            pagination={pagination}
            setPagination={setPagination}
          />
          {/*           <CardHeader>
            <CardTitle>Assets</CardTitle>
            <CardDescription>Make changes to your assets here.</CardDescription>
            <CardDescription>
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
            </CardDescription>
          </CardHeader> */}
        </TabsContent>
      </Tabs>

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

export default ChartOfAccount;
