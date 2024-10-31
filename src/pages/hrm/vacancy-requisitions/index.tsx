import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Modal } from "@/components/common/modal";
import { AddVacancyRequisitionForm } from "./components/add-vacancy-requisition-form";
import { useGetVacancyRequisitionsQuery } from "@/store/services/hrm/api/vacancy-requisition";
import { vacancyRequisitionColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import RoleAccess from "@/lib/access-control/role-access";

const VacancyRequisition = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetVacancyRequisitionsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const vacancyRequisitions = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Vacancy Requisitions"
              description="Manage requisitions for you business"
            />
            <RoleAccess roles={["vacancy-requisitions.create"]}>
              <Button onClick={() => setIsOpen(true)} size={"sm"}>
                <Plus className="mr-2 h-4 w-4" /> Add vacancy
              </Button>
            </RoleAccess>
          </div>
          <Separator />
          {vacancyRequisitions && (
            <div>
              <DataTable
                columns={vacancyRequisitionColumns}
                data={vacancyRequisitions}
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
          title="Add Vacancy "
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
        >
          <AddVacancyRequisitionForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default VacancyRequisition;
