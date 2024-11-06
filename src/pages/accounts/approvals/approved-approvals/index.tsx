import React from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { approvalColumns } from "./components/columns";
import { useGetAccountsApprovalsQuery } from "@/store/services/accounts/api/approvals";

const ApprovedApprovals = () => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetAccountsApprovalsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}&status=1`
  );
  const accountsApprovals = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Approved Approvals"
              description="Manage financial year for you business"
            />
            {/* <RoleAccess roles={["financial-years.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Financial Year
              </Button>
            </RoleAccess> */}
          </div>
          <Separator />
          {accountsApprovals && (
            <div>
              <DataTable
                columns={approvalColumns}
                data={accountsApprovals}
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

export default ApprovedApprovals;
