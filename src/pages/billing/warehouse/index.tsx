import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { warehouseColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import ListSkeleton from "@/components/common/ListSkeleton";
import { Modal } from "@/components/common/modal";

import { AddWareHouseForm } from "./components/add-warehouse-form";
import { useGetWarehouseQuery } from "@/store/services/billing/api/warehouse";
import RoleAccess from "@/lib/access-control/role-access";

const WareHouse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetWarehouseQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const warehouses = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="All Warehouses"
              description="Manage all items for you business"
            />
            <RoleAccess roles={["warehouses.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Warehouse
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {isLoading ? (
            <ListSkeleton />
          ) : (
            <div>
              <DataTable
                columns={warehouseColumns}
                data={warehouses}
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
          title="Add Warehouse"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[420px]"
        >
          <AddWareHouseForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default WareHouse;
