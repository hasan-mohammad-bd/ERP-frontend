import { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { designationColumns } from "./components/columns";
import { Modal } from "@/components/common/modal";


import { useGetSectionsQuery } from "@/store/services/hrm/api/section";
import { AddSectionForm } from "./components/add-section-form";

const Department = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetSectionsQuery();


  const sections = data?.data || [];

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 md:p-8">
          <div className="flex items-center justify-between">
            <Heading
              title="Sections"
              description="Manage sections for you business"
            />
            <Button onClick={() => setIsOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Section
            </Button>
          </div>
          <Separator />
          {sections && (
            <div>
              <DataTable columns={designationColumns} data={sections} />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Section"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddSectionForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Department;
