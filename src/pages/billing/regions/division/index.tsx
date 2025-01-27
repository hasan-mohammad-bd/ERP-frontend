import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import ListSkeleton from "@/components/common/ListSkeleton";
import { Modal } from "@/components/common/modal";


import RoleAccess from "@/lib/access-control/role-access";
import { AddDivisionForm } from "./components/add-division-form";
import { divisionColumns } from "./components/columns";
import { useGetRegionQuery } from "@/store/services/billing/api/regions";

const Division = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Correct API call to get regions data
  const { data, isLoading } = useGetRegionQuery(
    `type=division&per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const divisions = data?.data || []; // Fallback to empty array if no data

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="All Division"
              description="Manage all division for your business"
            />
            <RoleAccess roles={["categories.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Divisions
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          <div>
            <DataTable
              columns={divisionColumns} // Ensure the columns match your data structure
              data={divisions} // Pass the correct data to the DataTable
              paginationInfo={paginationInfo}
              pagination={pagination}
              setPagination={setPagination}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal
          title="Add Division"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[600px]"
        >
          <AddDivisionForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Division;
