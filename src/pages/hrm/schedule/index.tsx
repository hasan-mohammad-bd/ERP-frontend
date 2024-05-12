import { useState } from "react";
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

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetSchedulesQuery();

  const schedules = data?.data || [];
  console.log(schedules);
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
              <DataTable columns={scheduleColumns} data={schedules} />
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
