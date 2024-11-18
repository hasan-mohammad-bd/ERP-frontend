// import React from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { supplierColumn } from "./components/column";
import React from "react";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import ListSkeleton from "@/components/common/ListSkeleton";
import { useGetSuppliersQuery } from "@/store/services/billing/api/supplier";

const SupplierList = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetSuppliersQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const suppliers = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Supplier List"
              description="Manage all items for you business"
            />
            <Button
              onClick={() => navigate("/billing/supplier/add")}
              size={"sm"}
            >
              <Plus className="mr-2 h-4 w-4" /> Add supplier
            </Button>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          {suppliers && (
            <div>
              <DataTable
                columns={supplierColumn}
                data={suppliers}
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

export default SupplierList;
