import { useState } from "react";
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

const Roster = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetRostersQuery();

  const roster = data?.data || [];

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 md:p-8">
          <div className="flex items-center justify-between">
            <Heading
              title="Roster"
              description="Manage roster for you organization"
            />
            <Button onClick={() => setIsOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Roster
            </Button>
          </div>
          <Separator />
          {roster && (
            <div>
              <DataTable columns={rosterColumns} data={roster} />
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
