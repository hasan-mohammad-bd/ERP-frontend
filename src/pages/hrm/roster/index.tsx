import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { Modal } from "@/components/common/modal";

import { AddRosterForm } from "./components/add-roster-form";
import { rosterColumns } from "./components/columns";
import { useGetRostersQuery } from "@/store/services/hrm/api/roster";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";

const Roster = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetRostersQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const roster = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Roster"
              description="Manage roster for you organization"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Roster
            </Button>
          </div>
          <Separator />
          {roster && (
            <div>
              <DataTable
                columns={rosterColumns}
                data={roster}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Roster"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddRosterForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Roster;
