import { useState } from "react";
import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { locationColumns } from "./components/columns";
import { Modal } from "@/components/common/modal";
import { AddLocationForm } from "./components/add-location-form";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";

const Location = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetLocationsQuery();

  const locations = data?.data || [];

  // console.log(departments);
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 md:p-8">
          <div className="flex items-center justify-between">
            <Heading
              title="Location"
              description="Manage organization for you business"
            />
            <Button onClick={() => setIsOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Location
            </Button>
          </div>
          <Separator />
          {locations && (
            <div>
              <DataTable columns={locationColumns} data={locations} />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Add Location"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <AddLocationForm modalClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Location;
