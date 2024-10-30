import React from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { subAccountColumns } from "./components/columns";
import { useGetEntriesQuery } from "@/store/services/accounts/api/entries";
import { useNavigate } from "react-router-dom";
import RoleAccess from "@/lib/access-control/role-access";

const ReceiptVoucher = () => {
  const navigation = useNavigate();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetEntriesQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }&type=receipt voucher`
  );

  const receiptVoucher = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Receipt Voucher"
              description="Manage your sub accounts for you business"
            />
            <RoleAccess roles={["entries.create"]}>
              <Button
                onClick={() => navigation("/accounts/receipt-voucher/add")}
                size={"sm"}
              >
                <Plus className="mr-2 h-4 w-4" /> Add Receipt Entry
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {receiptVoucher && (
            <div>
              <DataTable
                columns={subAccountColumns}
                data={receiptVoucher}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>
      {/*       <Modal
        title="Add Receipt Entry"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
        className="max-w-5xl h-[87vh] "
      >
        <AddReceiptForm modalClose={() => setIsOpen(false)} />
      </Modal> */}
    </>
  );
};

export default ReceiptVoucher;
