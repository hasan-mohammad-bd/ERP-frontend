import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { designationColumns } from "./components/columns";
import { Modal } from "@/components/common/modal";
import { AddDesignationForm } from "./components/add-designation-form";
import { useGetDesignationQuery } from "@/store/services/hrm/api/designation";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import RoleAccess from "@/lib/access-control/role-access";

const Designation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetDesignationQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );
  const designations = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Designation"
              description="Manage departments for you business"
            />
            <RoleAccess roles={["designations.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Designation
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {designations && (
            <div>
              <DataTable
                columns={designationColumns}
                data={designations}
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
          title="Add Designation"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
        >
          <AddDesignationForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Designation;
