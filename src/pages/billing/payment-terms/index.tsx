import { Heading } from "@/components/common/heading";
import ListSkeleton from "@/components/common/ListSkeleton";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Separator } from "@/components/ui/separator";
import { useGetPaymentTermsQuery } from "@/store/services/billing/api/payment-terms";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useState } from "react";
import { PaymentTermsColumns } from "./components/column";
import { AddPaymentTermForm } from "./components/add-payment-term-form";
import { Modal } from "@/components/common/modal";

const PaymentTerms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetPaymentTermsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const payemtTermsData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading title="Payment Terms" description="" />
            <Button size={"sm"} onClick={() => setIsOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> New Payment Term
            </Button>
          </div>
          <Separator />
          {isLoading && <ListSkeleton />}
          {payemtTermsData && !isLoading && (
            <div>
              <DataTable
                columns={PaymentTermsColumns}
                data={payemtTermsData}
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
          title="Add Payment Term"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="w-[420px]"
        >
          <AddPaymentTermForm modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default PaymentTerms;
