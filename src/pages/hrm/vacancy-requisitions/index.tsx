import { useState } from "react";
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

const VacancyRequisition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetVacancyRequisitionsQuery();

  const vacancyRequisitions = data?.data || [];

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 md:p-8">
          <div className="flex items-center justify-between">
            <Heading
              title="Vacancy Requisitions"
              description="Manage requisitions for you business"
            />
            <Button onClick={() => setIsOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add vacancy 
            </Button>
          </div>
          <Separator />
          {vacancyRequisitions && (
            <div>
              <DataTable
                columns={vacancyRequisitionColumns}
                data={vacancyRequisitions}
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Vacancy "
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddVacancyRequisitionForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default VacancyRequisition;
