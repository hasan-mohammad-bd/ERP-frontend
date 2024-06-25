import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { organizationColumns } from "./components/columns";
import { Modal } from "@/components/common/modal";
import { AddOrganizationForm } from "./components/add-organization-form";
import { useGetOrganizationsQuery } from "@/store/services/erp-main/api/organization";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";

const Organization = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useGetOrganizationsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const organizations = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Organization"
              description="Manage organization for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Organization
            </Button>
          </div>
          <Separator />
          {organizations && (
            <div>
              <DataTable
                columns={organizationColumns}
                data={organizations}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Organization"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddOrganizationForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Organization;
