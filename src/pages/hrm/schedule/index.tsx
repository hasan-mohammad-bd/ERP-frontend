import { Heading } from "@/components/common/heading";
import { Loading } from "@/components/common/loading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Plus } from "lucide-react";
import React, { useState } from "react";

import { Modal } from "@/components/common/modal";

import { useGetSchedulesQuery } from "@/store/services/hrm/api/schedule";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { AddScheduleForm } from "./components/add-schedule-form";
import { scheduleColumns } from "./components/columns";

const initialPaginationState = {
  pageIndex: 0,
  pageSize: 10,
}

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>(initialPaginationState);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useGetSchedulesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}&text=${searchTerm}`
  );

  const schedules = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Shifts"
              description="Manage shifts for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Shift
            </Button>
          </div>
          <Separator />
          {schedules && (
            <div>
              <DataTable
                columns={scheduleColumns}
                data={schedules}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
                onChangeSearch={(value) => {
                  setPagination(initialPaginationState);
                  setSearchTerm(value);
                }}
              />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal
          title="Add Shift"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
        >
          <AddScheduleForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Schedule;
