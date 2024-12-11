import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { supplierPaymentColumns } from "./components/columns";

import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { PaginationInfo } from "@/types";
import { Loading } from "@/components/common/loading";
import { Modal } from "@/components/common/modal";
import { AddSupplierPaymentFrom } from "./components/add-supplier-payment-form";
import { useGetSupplierPaymentsQuery } from "@/store/services/billing/api/supplier-payments";

const SupplierPayments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetSupplierPaymentsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const supplierPaymentData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Supplier Payments"
              description="Manage your sub accounts for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Supplier Payment
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                columns={supplierPaymentColumns}
                data={supplierPaymentData}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
              />
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <Modal
          title="Add Supplier Payment"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="max-w-4xl w-full"
        >
          <AddSupplierPaymentFrom modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default SupplierPayments;
