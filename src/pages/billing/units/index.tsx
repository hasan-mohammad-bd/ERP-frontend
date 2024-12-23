import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { unitColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import ListSkeleton from "@/components/common/ListSkeleton";
import { Modal } from "@/components/common/modal";
import { AddUnitForm } from "./components/add-unit-form";
import { useGetUnitsQuery } from "@/store/services/billing/api/unit";
import RoleAccess from "@/lib/access-control/role-access";

const Units = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetUnitsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const units = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="All Units"
              description="Manage all items for you business"
            />
            <RoleAccess roles={["units.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Unit
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {isLoading ? (
            <ListSkeleton />
          ) : (
            <div>
              <DataTable
                columns={unitColumns}
                data={units}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal
          title="Add Unit"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[420px]"
        >
          <AddUnitForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Units;
