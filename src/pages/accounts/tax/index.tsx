import React, { useState } from "react";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import ListSkeleton from "@/components/common/ListSkeleton";
import { Modal } from "@/components/common/modal";
import { AddTaxForm } from "./components/add-tax-form";
import { TaxColumns } from "./components/columns";
import { useGetTaxesQuery } from "@/store/services/accounts/api/tax";

const Tax = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetTaxesQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const taxes = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="All Taxes"
              description="Manage all items for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Tax
            </Button>
          </div>
          <Separator />
          {isLoading ? (
            <ListSkeleton />
          ) : (
            <div>
              <DataTable
                columns={TaxColumns}
                data={taxes}
                paginationInfo={paginationInfo}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal
          title="Add Tax"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[520px]"
        >
          <AddTaxForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Tax;
