import React, { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { Modal } from "@/components/common/modal";

import { AddScheduleForm } from "./components/add-schedule-form";
import { useGetSchedulesQuery } from "@/store/services/hrm/api/schedule";
import { scheduleColumns } from "./components/columns";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetSchedulesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const schedules = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 md:p-8">
          <div className="flex items-center justify-between">
            <Heading
              title="Schedule"
              description="Manage schedule for you business"
            />
            <Button onClick={() => setIsOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Schedule
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
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Schedule"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddScheduleForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Schedule;
