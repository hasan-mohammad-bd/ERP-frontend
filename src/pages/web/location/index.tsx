import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { locationColumns } from "./components/columns";
import { Modal } from "@/components/common/modal";
import { AddLocationForm } from "./components/add-location-form";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import RoleAccess from "@/lib/access-control/role-access";

const Location = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetLocationsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const locations = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Location"
              description="Manage organization for you business"
            />
            <RoleAccess roles={["locations.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add Location
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {locations && (
            <div>
              <DataTable
                columns={locationColumns}
                data={locations}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Location"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddLocationForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Location;
