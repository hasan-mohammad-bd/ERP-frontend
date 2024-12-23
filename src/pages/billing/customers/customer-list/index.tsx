// import React from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
// import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";

// import { PaginationState } from "@tanstack/react-table";

import { Separator } from "@/components/ui/separator";
// import ListSkeleton from "@/components/common/ListSkeleton";
import { useNavigate } from "react-router-dom";
import { customerColumn } from "./components/column";
import React from "react";
import { PaginationState } from "@tanstack/react-table";
import { useGetCustomersQuery } from "@/store/services/billing/api/customer";
import { PaginationInfo } from "@/types";
import ListSkeleton from "@/components/common/ListSkeleton";
import RoleAccess from "@/lib/access-control/role-access";
// import { SupplierColumns } from "./components/column";

const Customers = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetCustomersQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const customers = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Customer List"
              description="Manage all items for you business"
            />
            <RoleAccess roles={["customers.create"]}>
              <Button
                onClick={() => navigate("/billing/customers/add")}
                size={"sm"}
              >
                <Plus className="mr-2 h-4 w-4" /> Add customer
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          {customers && (
            <div>
              <DataTable
                columns={customerColumn}
                data={customers}
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

export default Customers;
