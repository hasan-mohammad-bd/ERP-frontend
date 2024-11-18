import { Heading } from "@/components/common/heading";
import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import AddContactPersonForm from "./components/AddContactPersonForm";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import { useGetContactPersonsQuery } from "@/store/services/billing/api/contact-person";
import { PaginationInfo } from "@/types";
import { contactPersonColumn } from "./components/column";
import ListSkeleton from "@/components/common/ListSkeleton";

interface AddressProps {
  customer_id: number;
}

const CustomerContactPerson = ({ customer_id }: AddressProps) => {
  const [contactPersonModalOpen, setContactPersonModalOpen] = useState(false);

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetContactPersonsQuery(
    `contact_id=${customer_id}&per_page=${pagination.pageSize}&page=${
      pagination.pageIndex + 1
    }`
  );

  const contactPersonsData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between pt-4">
        <Heading
          title="Contact person"
          description="Manage all items for you business"
        />
        <Button size={"sm"} onClick={() => setContactPersonModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Contact Person
        </Button>
      </div>

      <Separator />

      {isLoading && <ListSkeleton />}
      <div>
        <DataTable
          columns={contactPersonColumn}
          data={contactPersonsData}
          paginationInfo={paginationInfo}
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>

      {contactPersonModalOpen && (
        <Modal
          title={`Add Contact Person`}
          isOpen={contactPersonModalOpen}
          toggleModal={() => {
            setContactPersonModalOpen(false);
          }}
          className="!w-full max-w-lg"
        >
          <AddContactPersonForm
            modalClose={() => {
              setContactPersonModalOpen(false);
            }}
            customer_id={customer_id}
          />
        </Modal>
      )}
    </div>
  );
};

export default CustomerContactPerson;
