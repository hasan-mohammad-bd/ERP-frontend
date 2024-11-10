import React from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { approvalColumns } from "./components/columns";
import { useGet_HRM_ApprovalsQuery } from "@/store/services/hrm/api/approvals";

const HRM_RejectedApprovals = () => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGet_HRM_ApprovalsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}&status=3`
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
              title="HRM Rejected Approvals"
              description="Manage financial year for you business"
            />
          
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

export default HRM_RejectedApprovals;
