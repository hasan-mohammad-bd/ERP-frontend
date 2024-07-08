import React from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { subAccountColumns } from "./components/columns";
import { useGetEntriesQuery } from "@/store/services/accounts/api/entries";
import {  useNavigate, useParams } from "react-router-dom";

const LedgerView = () => {
  const { id } = useParams();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetEntriesQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }&ledger_account_id=${id}`
  );

  const navigate = useNavigate();

  const paymentVoucher = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Ledger View"
              description="Manage your sub accounts for you business"
            />
            <Button onClick={() => navigate("/accounts/chart-of-accounts")} size={"sm"}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </div>
          <Separator />
          {paymentVoucher && (
            <div>
              <DataTable
                columns={subAccountColumns}
                data={paymentVoucher}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default LedgerView;
