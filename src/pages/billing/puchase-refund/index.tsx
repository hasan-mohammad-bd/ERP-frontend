import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { PaginationInfo } from "@/types";
import { Loading } from "@/components/common/loading";
import { Modal } from "@/components/common/modal";
import { purchaseRefundColumns } from "./components/columns";
import { AddPurchaseRefundFrom } from "./components/add-purchase-refund-form";
import { useGetPurchaseRefundsQuery } from "@/store/services/billing/api/purchase-refund";

const PurchaseRefund = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetPurchaseRefundsQuery(
    `per_page=${pagination.pageSize}&page=${pagination.pageIndex + 1}`
  );

  const purchaseRefundsData = data?.data || [];

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Heading
              title="Purchase Refunds"
              description="Manage your sub accounts for you business"
            />
            <Button onClick={() => setIsOpen(true)} size={"sm"}>
              <Plus className="mr-2 h-4 w-4" /> Add Purchase Refund
            </Button>
          </div>
          <Separator />
          {data && (
            <div>
              <DataTable
                columns={purchaseRefundColumns}
                data={purchaseRefundsData}
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
          title="Add Purchase Refund"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
          className="max-w-4xl w-full"
        >
          <AddPurchaseRefundFrom modalClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default PurchaseRefund;
