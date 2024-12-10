// import React from "react";
// import { Loading } from "@/components/common/loading";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
// import { PaginationInfo } from "@/type
// import { PaginationState } from "@tanstack/react-table";

import { salesReceiptColumns } from "./components/columns";

import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { useGetPaymentReceivedQuery } from "@/store/services/billing/api/payment-received";
import { PaginationInfo } from "@/types";
import { Loading } from "@/components/common/loading";
import { Modal } from "@/components/common/modal";
import { AddPaymentReceivedFrom } from "./components/add-payment-received-form";

const PaymentsReceived = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetPaymentReceivedQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const paymentReceivedData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Payments Received"
              description="Manage your sub accounts for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Payment Received
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                columns={salesReceiptColumns}
                data={paymentReceivedData}
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
          title="Add Payment Received Form"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="max-w-4xl w-full"
        >
          <AddPaymentReceivedFrom modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default PaymentsReceived;
