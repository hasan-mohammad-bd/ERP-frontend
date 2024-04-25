import { useState } from "react";
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

const Organization = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetOrganizationsQuery();

  const organizations = data?.data || [];

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 md:p-8">
          <div className="flex items-center justify-between">
            <Heading
              title="Organization"
              description="Manage organization for you business"
            />
            <Button onClick={() => setIsOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Organization
            </Button>
          </div>
          <Separator />
          {organizations && (
            <div>
              <DataTable columns={organizationColumns} data={organizations} />
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
