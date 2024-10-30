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

const ContraVoucher = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetEntriesQuery(
    `per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }&type=contra voucher`
  );

  const contraVoucher = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Contra Voucher"
              description="Manage your sub accounts for you business"
            />
            <RoleAccess roles={["entries.create"]}>
              <Button onClick={() => navigate("/accounts/contra-voucher/add")}>
                <Plus className="mr-2 h-4 w-4" /> Add Contra Entry
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {contraVoucher && (
            <div>
              <DataTable
                columns={subAccountColumns}
                data={contraVoucher}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>
      {/*       <Modal
        title="Add Contra Entry"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
        className="max-w-5xl h-[87vh] "
      >
        <AddContraForm modalClose={() => setIsOpen(false)} />
      </Modal> */}
    </>
  );
};

export default ContraVoucher;
