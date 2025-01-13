import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
// import RoleAccess from "@/lib/access-control/role-access";
import { AddLoanTypeForm } from "./components/add-loan-type-form";
import { loanTypeColumns } from "./components/columns";
import { useGetLoanTypeQuery } from "@/store/services/hrm/api/laon-type";

const LoanType = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetLoanTypeQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const loanTypes = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;
  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Loan Type"
              description="Manage Loan Types for you business"
            />
            {/* <RoleAccess roles={["hrm.create"]}> */}
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Loan Type
              </Button>
            {/* </RoleAccess> */}
          </div>
          <Separator />
          {loanTypes && (
            <div>
              <DataTable
                columns={loanTypeColumns}
                data={loanTypes}
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
          title="Add Loan Type"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
        >
          <AddLoanTypeForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default LoanType;
