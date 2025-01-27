import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Modal } from "@/components/common/modal";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import ListSkeleton from "@/components/common/ListSkeleton";
import { PaginationInfo } from "@/types";
import RoleAccess from "@/lib/access-control/role-access";
import { AddAreaForm } from "./components/add-area-form";
import { AreaColumns } from "./components/column";
import { useGetRegionQuery } from "@/store/services/billing/api/regions";

const Area = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Correct API call to get category data
  const { data, isLoading } = useGetRegionQuery(
    `type=area&per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const regions = data?.data || []; // Fallback to empty array if no data

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Area"
              description="Manage job apply for you business"
            />
            <RoleAccess roles={["categories.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Area
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          {regions && !isLoading && (
            <div>
              <DataTable
                columns={AreaColumns}
                data={regions}
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
          title="Add Area"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[480px]"
        >
          <AddAreaForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Area;



